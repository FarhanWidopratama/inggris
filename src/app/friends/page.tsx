"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  loadFriendships,
  loadFriendLeaderboard,
  searchProfileByEmail,
  searchProfiles,
  sendFriendRequestSmart,
  respondRequest,
  removeFriend,
  type Friendship,
  type FriendProfile,
  type ProfileHit,
} from "@/lib/friends";
import { battleLessons, createBattle, listBattles, acceptBattle, type Battle } from "@/lib/battle";

export default function FriendsPage() {
  const router = useRouter();
  const [meEmail, setMeEmail] = useState<string | null>(null);
  const [meId, setMeId] = useState<string | null>(null);
  const [rows, setRows] = useState<Friendship[]>([]);
  const [board, setBoard] = useState<FriendProfile[]>([]);
  const [battles, setBattles] = useState<Battle[]>([]);
  const [email, setEmail] = useState("");
  const [hits, setHits] = useState<ProfileHit[]>([]);
  const [searching, setSearching] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [live, setLive] = useState<"off" | "connecting" | "live">("off");
  const [onlineIds, setOnlineIds] = useState<string[]>([]);
  const [challengeFriend, setChallengeFriend] = useState("");
  const [challengeLesson, setChallengeLesson] = useState("1-1");
  const prevCounts = useRef<Record<string, number>>({});
  const configured = isSupabaseConfigured();

  async function refresh() {
    try {
      const { me, rows } = await loadFriendships();
      setMeEmail(me.email ?? null);
      setMeId(me.id);
      setRows(rows);
      const accepted = rows.filter((r) => r.status === "accepted");
      const friendIds = accepted.map((r) => (r.requester_id === me.id ? r.addressee_id : r.requester_id));
      const lb = await loadFriendLeaderboard(friendIds, me.id);
      // toast kalau ada temen yang nambah lesson
      lb.forEach((f) => {
        const prev = prevCounts.current[f.id];
        if (!f.isSelf && prev !== undefined && f.completedCount > prev) {
          setMsg(`🔥 ${f.username ?? "Temen lu"} baru selesai ${f.completedCount}/60 lesson! Kejar!`);
        }
        prevCounts.current[f.id] = f.completedCount;
      });
      setBoard(lb);
      try {
        const { battles } = await listBattles();
        setBattles(battles);
      } catch {}
    } catch (e) {
      setMsg(e instanceof Error ? `❌ ${e.message}` : "❌ Gagal load");
    } finally {
      setLoading(false);
    }
  }

  // initial load + prefill invite
  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }
    refresh();
    try {
      const add = new URLSearchParams(window.location.search).get("add");
      if (add) setEmail(add);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // realtime: friendships + progress + battles + presence
  useEffect(() => {
    if (!configured || !meId) return;
    const supabase = createClient();
    if (!supabase) return;
    setLive("connecting");

    const friendsCh = supabase
      .channel(`friends:${meId}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "friendships" }, (payload: any) => {
        const row = payload.new as { addressee_id: string; requester_id: string };
        if (row.addressee_id === meId) setMsg("💌 Request pertemanan baru masuk! Cek Request Masuk 👇");
        refresh();
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "friendships" }, (payload: any) => {
        const row = payload.new as { status: string; addressee_id: string };
        if (row.status === "accepted") setMsg("✅ Request di-accept! Gas belajar bareng 🔥");
        refresh();
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "user_progress" }, () => {
        refresh();
      })
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "battles" }, (payload: any) => {
        const row = payload.new as { opponent_id: string };
        if (row.opponent_id === meId) setMsg("⚔️ Tantangan battle baru! Cek Quiz Battle 👇");
        refresh();
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "battles" }, () => {
        refresh();
      })
      .subscribe((status: any) => {
        if (status === "SUBSCRIBED") setLive("live");
      });

    const presenceCh = supabase.channel("online:friends", { config: { presence: { key: meId } } });
    presenceCh
      .on("presence", { event: "sync" }, () => {
        const state = presenceCh.presenceState() as Record<string, { user_id: string }[]>;
        const ids = new Set<string>();
        Object.values(state).forEach((arr) => arr.forEach((p) => p.user_id && ids.add(p.user_id)));
        setOnlineIds([...ids]);
      })
      .subscribe(async (status: any) => {
        if (status === "SUBSCRIBED") {
          await presenceCh.track({ user_id: meId, email: meEmail, page: "friends", at: new Date().toISOString() });
        }
      });

    return () => {
      supabase.removeChannel(friendsCh);
      supabase.removeChannel(presenceCh);
      setLive("off");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meId]);

  // live search temen (debounce)
  useEffect(() => {
    if (!configured || !meId || email.trim().length < 2) {
      setHits([]);
      return;
    }
    setSearching(true);
    const t = setTimeout(async () => {
      try {
        const list = await searchProfiles(email, meId);
        setHits(list);
      } catch {
        setHits([]);
      } finally {
        setSearching(false);
      }
    }, 400);
    return () => clearTimeout(t);
  }, [email, meId, configured]);

  async function handleAdd(e?: React.FormEvent) {
    e?.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const found = await searchProfileByEmail(email);
      if (!found) {
        setMsg(`❌ ${email} belum ketemu. Pastikan dia udah login + selesaikan 1 lesson dulu, atau kirim Invite Link di bawah.`);
        return;
      }
      await addById(found.id, found.username ?? email);
    } catch (err) {
      setMsg(err instanceof Error ? `❌ ${err.message}` : "❌ Gagal kirim");
    } finally {
      setBusy(false);
    }
  }

  async function addById(id: string, label: string) {
    setBusy(true);
    setMsg(null);
    try {
      await sendFriendRequestSmart(id);
      setMsg(`✅ Request terkirim ke ${label}! Suruh dia buka /friends buat accept.`);
      setEmail("");
      setHits([]);
      await refresh();
    } catch (err) {
      const m = err instanceof Error ? err.message : "Gagal kirim";
      if (m === "REVERSE_EXISTS") {
        setMsg("👀 Dia udah kirim request duluan ke lu! Cek Request Masuk di bawah terus tekan Accept ✅");
      } else {
        setMsg(`❌ ${m}`);
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleRespond(id: string, accept: boolean) {
    setBusy(true);
    try {
      await respondRequest(id, accept);
      setMsg(accept ? "✅ Temenan! Gas belajar bareng 🔥" : "Request ditolak");
      await refresh();
    } catch (err) {
      setMsg(err instanceof Error ? `❌ ${err.message}` : "❌ Gagal");
    } finally {
      setBusy(false);
    }
  }

  async function handleRemove(id: string) {
    if (!confirm("Hapus pertemanan ini?")) return;
    setBusy(true);
    try {
      await removeFriend(id);
      await refresh();
    } catch (err) {
      setMsg(err instanceof Error ? `❌ ${err.message}` : "❌ Gagal hapus");
    } finally {
      setBusy(false);
    }
  }

  async function handleChallenge(e?: React.FormEvent) {
    e?.preventDefault();
    if (!challengeFriend) {
      setMsg("❌ Pilih temen dulu buat ditantang");
      return;
    }
    setBusy(true);
    try {
      const id = await createBattle(challengeFriend, challengeLesson);
      setMsg("⚔️ Tantangan terkirim! Masuk room...");
      router.push(`/battle/${id}`);
    } catch (err) {
      setMsg(err instanceof Error ? `❌ ${err.message}` : "❌ Gagal bikin battle");
    } finally {
      setBusy(false);
    }
  }

  async function handleEnterBattle(b: Battle) {
    setBusy(true);
    try {
      if (b.status === "waiting" && b.opponent_id === meId) {
        await acceptBattle(b.id);
      }
      router.push(`/battle/${b.id}`);
    } catch (err) {
      setMsg(err instanceof Error ? `❌ ${err.message}` : "❌ Gagal masuk room");
    } finally {
      setBusy(false);
    }
  }

  function copyInvite() {
    if (!meEmail) return;
    const url = `${window.location.origin}/friends?add=${encodeURIComponent(meEmail)}`;
    navigator.clipboard.writeText(url).then(
      () => setMsg("✅ Link invite ke-copy! Kirim ke cewe lu via WA 💌"),
      () => setMsg(`📋 Copy manual link ini: ${url}`)
    );
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10 text-center">
        <h1 className="text-xl font-black">Fitur Berteman butuh Supabase</h1>
        <p className="mt-2 text-sm text-zinc-600">Supabase belum connect di environment ini. Isi NEXT_PUBLIC_SUPABASE_URL + KEY dulu, baru fitur temenan bisa jalan.</p>
        <Link href="/auth" className="mt-4 inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm font-bold text-white">Ke Auth →</Link>
      </div>
    );
  }

  const incoming = rows.filter((r) => r.status === "pending" && r.addressee_id === meId);
  const outgoing = rows.filter((r) => r.status === "pending" && r.requester_id === meId);
  const accepted = rows.filter((r) => r.status === "accepted");
  const onlineFriends = accepted.filter((r) => onlineIds.includes(r.requester_id === meId ? r.addressee_id : r.requester_id));
  const incomingBattles = battles.filter((b) => b.status === "waiting" && b.opponent_id === meId);
  const activeBattles = battles.filter((b) => b.status === "active");
  const doneBattles = battles.filter((b) => b.status === "finished").slice(0, 3);
  const lessons = battleLessons();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <span>›</span>
        <span className="text-zinc-900">Teman Belajar</span>
        <span className="ml-2 rounded-full bg-pink-500 px-2 py-0.5 text-xs font-bold text-white">BUAT BERDUA 💑</span>
        <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-bold ${live === "live" ? "bg-emerald-100 text-emerald-700" : "bg-zinc-100 text-zinc-500"}`}>
          {live === "live" ? "● LIVE" : live === "connecting" ? "● connecting..." : "○ offline"}
        </span>
      </div>

      <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Belajar Bareng Cewe Lu</h1>
      <p className="text-sm text-zinc-600">
        Add temen → accept → leaderboard update <b>otomatis live</b>, bisa lihat siapa yang online, plus quiz battle real-time. Yang kalah traktir kopi ☕
      </p>

      {msg && <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold shadow-sm">{msg}</div>}

      {loading ? (
        <div className="p-8 text-center text-sm text-zinc-500">Loading pertemanan...</div>
      ) : !meId ? (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 text-center">
          <p className="text-sm text-zinc-600">Login dulu biar bisa add temen.</p>
          <Link href="/auth" className="mt-3 inline-block rounded-full bg-zinc-900 px-6 py-2 text-sm font-bold text-white">Login / Daftar →</Link>
        </div>
      ) : (
        <>
          {/* Add + invite */}
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-sm font-black tracking-widest text-zinc-500">TAMBAH TEMEN</h3>
            <form onSubmit={handleAdd} className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email cewe lu... (misal: dia@gmail.com)"
                className="flex-1 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm"
              />
              <button disabled={busy || !email} className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white disabled:opacity-40">
                {busy ? "..." : "Kirim Request 💌"}
              </button>
            </form>
            {searching && <p className="mt-2 text-xs text-zinc-500">Nyari...</p>}
            {hits.length > 0 && (
              <div className="mt-2 space-y-1.5">
                {hits.map((h) => (
                  <div key={h.id} className="flex items-center gap-2 rounded-xl border border-zinc-100 bg-[#fcfbf8] p-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">
                      {(h.username ?? "?").slice(0, 1).toUpperCase()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-bold">{h.username}</div>
                      <div className="text-xs text-zinc-500">🔥 {h.streak} streak</div>
                    </div>
                    <button disabled={busy} onClick={() => addById(h.id, h.username ?? "temen")} className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-bold text-white disabled:opacity-40">
                      Add +
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl bg-pink-50 p-3 text-xs">
              <span className="font-bold text-pink-900">Cara gampang:</span>
              <span className="text-pink-800">Klik tombol ini, kirim linknya ke cewe lu — dia tinggal klik + accept.</span>
              <button onClick={copyInvite} className="rounded-full bg-pink-500 px-4 py-1.5 text-xs font-bold text-white hover:bg-pink-600">
                📋 Copy Invite Link Gue
              </button>
            </div>
            <p className="mt-2 text-xs text-zinc-500">Login sebagai: <b>{meEmail}</b> • Syarat ketemu: dia udah pernah login + selesaikan minimal 1 lesson.</p>
          </div>

          {/* Online */}
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-sm font-black tracking-widest text-emerald-800">ONLINE SEKARANG ({onlineFriends.length}) 🟢</h3>
            {onlineFriends.length === 0 ? (
              <p className="mt-2 text-xs text-emerald-800">Belum ada temen yang online. Ajak cewe lu buka halaman ini bareng!</p>
            ) : (
              <div className="mt-2 flex flex-wrap gap-2">
                {onlineFriends.map((r) => {
                  const fid = r.requester_id === meId ? r.addressee_id : r.requester_id;
                  const prof = board.find((b) => b.id === fid);
                  return (
                    <span key={r.id} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-900 shadow-sm">
                      🟢 {prof?.username ?? "Temen"} lagi online
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Battle */}
          <div className="mt-6 rounded-2xl border border-zinc-900 bg-zinc-900 p-5 text-white">
            <h3 className="text-sm font-black tracking-widest text-zinc-300">⚔️ QUIZ BATTLE BERDUA</h3>
            <form onSubmit={handleChallenge} className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
              <select value={challengeFriend} onChange={(e) => setChallengeFriend(e.target.value)} className="rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm font-bold text-white">
                <option value="">Pilih lawan...</option>
                {accepted.map((r) => {
                  const fid = r.requester_id === meId ? r.addressee_id : r.requester_id;
                  const prof = board.find((b) => b.id === fid);
                  return <option key={r.id} value={fid} className="text-zinc-900">{prof?.username ?? "Temen"}</option>;
                })}
              </select>
              <select value={challengeLesson} onChange={(e) => setChallengeLesson(e.target.value)} className="rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm font-bold text-white">
                {lessons.map((l) => (
                  <option key={l.id} value={l.id} className="text-zinc-900">{l.id} • {l.title}</option>
                ))}
              </select>
              <button disabled={busy || !challengeFriend} className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-40">
                Tantang! ⚔️
              </button>
            </form>
            {incomingBattles.length > 0 && (
              <div className="mt-3 space-y-2">
                {incomingBattles.map((b) => (
                  <div key={b.id} className="flex items-center gap-2 rounded-xl bg-white/10 p-3">
                    <span className="text-sm font-bold">⚔️ Ditantang lesson {b.lesson_id}! Gas?</span>
                    <button disabled={busy} onClick={() => handleEnterBattle(b)} className="ml-auto rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold text-white">Masuk Room →</button>
                  </div>
                ))}
              </div>
            )}
            {activeBattles.length > 0 && (
              <div className="mt-3 space-y-2">
                {activeBattles.map((b) => (
                  <div key={b.id} className="flex items-center gap-2 rounded-xl bg-white/10 p-3">
                    <span className="text-sm font-bold">🔥 Battle {b.lesson_id} jalan! Skor lu {b.scores[meId ?? ""] ?? 0}</span>
                    <button onClick={() => router.push(`/battle/${b.id}`)} className="ml-auto rounded-full bg-white px-4 py-1.5 text-xs font-bold text-zinc-900">Lanjut →</button>
                  </div>
                ))}
              </div>
            )}
            {doneBattles.length > 0 && (
              <div className="mt-3 space-y-2">
                {doneBattles.map((b) => (
                  <div key={b.id} className="flex items-center gap-2 rounded-xl bg-white/5 p-3 text-sm">
                    <span>🏁 {b.lesson_id} • {b.scores[b.creator_id] ?? 0} vs {b.scores[b.opponent_id] ?? 0}</span>
                    <button onClick={() => router.push(`/battle/${b.id}`)} className="ml-auto rounded-full border border-white/20 px-3 py-1 text-xs font-bold">Hasil</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Leaderboard */}
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black tracking-widest text-zinc-500">LEADERBOARD BERDUA 🏆 {live === "live" ? "(LIVE)" : ""}</h3>
              <button onClick={refresh} className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-bold hover:bg-zinc-50">↻ Refresh</button>
            </div>
            {board.length === 0 ? (
              <p className="mt-3 text-sm text-zinc-500">Belum ada data. Selesaikan 1 lesson dulu biar muncul di sini.</p>
            ) : (
              <div className="mt-3 space-y-2">
                {board.map((f, i) => (
                  <div key={f.id} className={`flex items-center gap-3 rounded-xl border p-3 ${f.isSelf ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-100 bg-[#fcfbf8]"}`}>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-sm font-black">{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-bold">{f.username ?? "(tanpa nama)"} {f.isSelf && "• (Lu)"}</div>
                      <div className={`text-xs ${f.isSelf ? "text-zinc-300" : "text-zinc-500"}`}>🔥 {f.streak} streak • ✓ {f.completedCount}/60 lesson</div>
                    </div>
                    {onlineIds.includes(f.id) && !f.isSelf && <span className="text-xs font-bold text-emerald-600">🟢</span>}
                    {!f.isSelf && f.completedCount < (board.find((b) => b.isSelf)?.completedCount ?? 0) && (
                      <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">Lu mimpin! 😎</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Incoming */}
          {incoming.length > 0 && (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-sm font-black tracking-widest text-amber-800">REQUEST MASUK ({incoming.length})</h3>
              <div className="mt-3 space-y-2">
                {incoming.map((r) => (
                  <div key={r.id} className="flex items-center gap-2 rounded-xl bg-white p-3">
                    <span className="text-sm font-bold">Ada yang mau temenan 👀</span>
                    <span className="ml-auto flex gap-2">
                      <button disabled={busy} onClick={() => handleRespond(r.id, true)} className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold text-white">Accept ✅</button>
                      <button disabled={busy} onClick={() => handleRespond(r.id, false)} className="rounded-full border px-4 py-1.5 text-xs font-bold">Tolak</button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outgoing */}
          {outgoing.length > 0 && (
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="text-sm font-black tracking-widest text-zinc-500">MENUNGGU ACCEPT ({outgoing.length})</h3>
              <p className="mt-2 text-xs text-zinc-500">Udah terkirim, tinggal tunggu dia accept di halaman ini.</p>
            </div>
          )}

          {/* Friends */}
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-sm font-black tracking-widest text-zinc-500">TEMEN GUE ({accepted.length})</h3>
            {accepted.length === 0 ? (
              <p className="mt-2 text-sm text-zinc-500">Belum ada temen. Add cewe lu di atas 👆</p>
            ) : (
              <div className="mt-3 space-y-2">
                {accepted.map((r) => {
                  const fid = r.requester_id === meId ? r.addressee_id : r.requester_id;
                  const prof = board.find((b) => b.id === fid);
                  return (
                    <div key={r.id} className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-[#fcfbf8] p-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-sm">💑</span>
                      <div className="flex-1">
                        <div className="text-sm font-bold">{prof?.username ?? "Temen"} {onlineIds.includes(fid) && <span className="text-xs text-emerald-600">🟢 online</span>}</div>
                        <div className="text-xs text-zinc-500">🔥 {prof?.streak ?? 0} • ✓ {prof?.completedCount ?? 0}/60</div>
                      </div>
                      <button onClick={() => { setChallengeFriend(fid); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="rounded-full bg-pink-500 px-3 py-1 text-xs font-bold text-white">⚔️</button>
                      <button onClick={() => handleRemove(r.id)} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold text-red-600 hover:bg-red-50">Hapus</button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
