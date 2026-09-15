"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import {
  loadFriendships,
  loadFriendLeaderboard,
  searchProfileByEmail,
  sendFriendRequest,
  respondRequest,
  removeFriend,
  type Friendship,
  type FriendProfile,
} from "@/lib/friends";

export default function FriendsPage() {
  const [meEmail, setMeEmail] = useState<string | null>(null);
  const [meId, setMeId] = useState<string | null>(null);
  const [rows, setRows] = useState<Friendship[]>([]);
  const [board, setBoard] = useState<FriendProfile[]>([]);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const configured = isSupabaseConfigured();

  async function refresh() {
    setLoading(true);
    setMsg(null);
    try {
      const { me, rows } = await loadFriendships();
      setMeEmail(me.email ?? null);
      setMeId(me.id);
      setRows(rows);
      const accepted = rows.filter((r) => r.status === "accepted");
      const friendIds = accepted.map((r) => (r.requester_id === me.id ? r.addressee_id : r.requester_id));
      const lb = await loadFriendLeaderboard(friendIds, me.id);
      setBoard(lb);
    } catch (e) {
      setMsg(e instanceof Error ? `❌ ${e.message}` : "❌ Gagal load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }
    refresh();
    // prefill dari invite link ?add=email
    try {
      const add = new URLSearchParams(window.location.search).get("add");
      if (add) setEmail(add);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAdd(e?: React.FormEvent) {
    e?.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const found = await searchProfileByEmail(email);
      if (!found) {
        setMsg(`❌ Email ${email} belum ketemu. Pastikan cewe lu udah login + selesaikan 1 lesson dulu (biar profilnya kebentuk), terus coba lagi.`);
        return;
      }
      await sendFriendRequest(found.id);
      setMsg(`✅ Request terkirim ke ${found.username ?? email}! Suruh dia buka /friends buat accept.`);
      setEmail("");
      await refresh();
    } catch (err) {
      setMsg(err instanceof Error ? `❌ ${err.message}` : "❌ Gagal kirim");
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

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <span>›</span>
        <span className="text-zinc-900">Teman Belajar</span>
        <span className="ml-2 rounded-full bg-pink-500 px-2 py-0.5 text-xs font-bold text-white">BUAT BERDUA 💑</span>
      </div>

      <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Belajar Bareng Cewe Lu</h1>
      <p className="text-sm text-zinc-600">
        Add temen by email → dia accept → progress + streak kalian muncul di leaderboard yang sama. Saling kejar, yang kalah traktir kopi ☕
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
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl bg-pink-50 p-3 text-xs">
              <span className="font-bold text-pink-900">Cara gampang:</span>
              <span className="text-pink-800">Klik tombol ini, kirim linknya ke cewe lu — dia tinggal klik + accept.</span>
              <button onClick={copyInvite} className="rounded-full bg-pink-500 px-4 py-1.5 text-xs font-bold text-white hover:bg-pink-600">
                📋 Copy Invite Link Gue
              </button>
            </div>
            <p className="mt-2 text-xs text-zinc-500">Login sebagai: <b>{meEmail}</b> • Syarat ketemu: dia udah pernah login + selesaikan minimal 1 lesson.</p>
          </div>

          {/* Leaderboard */}
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black tracking-widest text-zinc-500">LEADERBOARD BERDUA 🏆</h3>
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
                        <div className="text-sm font-bold">{prof?.username ?? "Temen"}</div>
                        <div className="text-xs text-zinc-500">🔥 {prof?.streak ?? 0} • ✓ {prof?.completedCount ?? 0}/60</div>
                      </div>
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
