"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { fetchProfileFull, type ProfileFull } from "@/lib/profile";
import { computeAchievements, displayNameOf } from "@/lib/achievements";
import { checkExisting } from "@/lib/friends";
import type { Battle } from "@/lib/battle";

export default function FriendProfilePage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const router = useRouter();
  const [meId, setMeId] = useState<string | null>(null);
  const [full, setFull] = useState<ProfileFull | null>(null);
  const [isFriend, setIsFriend] = useState(false);
  const [h2h, setH2h] = useState<Battle[]>([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<string | null>(null);

  async function load() {
    const supabase = createClient();
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data } = await supabase.auth.getUser();
    const me = data.user?.id ?? null;
    setMeId(me);
    if (me && me === id) {
      router.replace("/profile");
      return;
    }
    const f = await fetchProfileFull(id);
    if (!f) {
      setMsg("Profil nggak ketemu. Mungkin dia belum pernah login, atau kalian belum temenan (progres cuma bisa dilihat teman).");
      setLoading(false);
      return;
    }
    setFull(f);
    if (me) {
      try {
        const rel = await checkExisting(me, id);
        setIsFriend(!!rel && rel.status === "accepted");
      } catch {}
      try {
        const { data: rows } = await supabase
          .from("battles")
          .select("*")
          .or(`and(creator_id.eq.${me},opponent_id.eq.${id}),and(creator_id.eq.${id},opponent_id.eq.${me})`)
          .order("created_at", { ascending: false })
          .limit(5);
        setH2h((rows ?? []) as unknown as Battle[]);
      } catch {}
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Realtime: kalau dia lagi belajar, halaman ini ikut update 🔴
  const [liveTick, setLiveTick] = useState(0);
  useEffect(() => {
    const supabase = createClient();
    if (!supabase || !id) return;
    const ch = supabase
      .channel(`profile-view:${id}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "profiles", filter: `id=eq.${id}` }, () => load())
      .on("postgres_changes", { event: "*", schema: "public", table: "user_progress", filter: `user_id=eq.${id}` }, () => {
        setLiveTick((t) => t + 1);
        load();
      })
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) return <div className="p-8 text-center text-sm text-zinc-500">Buka profil temen...</div>;

  if (!full) {
    return (
      <div className="mx-auto max-w-md px-4 py-10 text-center">
        <div className="text-5xl">🕵️</div>
        <h1 className="mt-3 text-xl font-black">Profil nggak bisa dibuka</h1>
        <p className="mt-1 text-sm text-zinc-600">{msg ?? "Add dia jadi teman dulu biar bisa saling lihat progres."}</p>
        <Link href="/friends" className="mt-4 inline-block rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white">← Ke Friends</Link>
      </div>
    );
  }

  const name = displayNameOf(full.profile);
  const ach = computeAchievements({
    completedCount: full.completedCount,
    streak: full.profile.streak,
    avgScore: full.avgScore,
    attempts: 0,
    accuracy: null,
    battlesPlayed: full.battlesPlayed,
    battlesWon: full.battlesWon,
    friendsCount: isFriend ? 1 : 0,
  });
  const unlocked = ach.filter((a) => a.unlocked);
  const wins = h2h.filter((b) => b.status === "finished" && b.winner_id === meId).length;
  const losses = h2h.filter((b) => b.status === "finished" && b.winner_id && b.winner_id !== meId).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6" key={liveTick}>
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
        <Link href="/friends" className="hover:underline">← Friends</Link>
        <span>›</span>
        <span className="text-zinc-900">Profil {name}</span>
        <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">● LIVE</span>
      </div>

      <div className="mt-4 rounded-[24px] border border-zinc-200 bg-white p-6 text-center sm:p-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-amber-100 text-5xl">
          {full.profile.avatar ?? "🦊"}
        </div>
        <h1 className="mt-3 text-2xl font-black tracking-tight">{name}</h1>
        {full.profile.bio ? <p className="mx-auto mt-1 max-w-md text-sm text-zinc-600">“{full.profile.bio}”</p> : null}
        {!isFriend && meId && (
          <p className="mx-auto mt-2 max-w-md rounded-xl bg-amber-50 p-2 text-xs text-amber-800">
            Kalian belum temenan — yang kelihatan cuma info dasar. Add dia di halaman Friends biar bisa adu progres.
          </p>
        )}
        <div className="mx-auto mt-4 grid max-w-lg grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["✓", `${full.completedCount}/60`, "lesson"],
            ["🔥", `${full.profile.streak}`, "streak"],
            ["⭐", full.avgScore != null ? full.avgScore.toFixed(1) : "—", "rata nilai"],
            ["🏆", `${full.battlesWon}/${full.battlesPlayed}`, "battle menang"],
          ].map(([icon, val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-100 bg-[#fcfbf8] p-3">
              <div className="text-xs">{icon}</div>
              <div className="text-lg font-black">{val}</div>
              <div className="text-[11px] font-bold text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
        {meId && (
          <Link href="/friends" className="mt-4 inline-block rounded-full bg-pink-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-pink-600">
            ⚔️ Tantang {name} battle →
          </Link>
        )}
      </div>

      {/* Head to head */}
      {meId && (
        <div className="mt-6 rounded-2xl border border-zinc-900 bg-zinc-900 p-5 text-white">
          <h2 className="text-sm font-black tracking-widest text-zinc-300">HEAD-TO-HEAD ⚔️</h2>
          {h2h.length === 0 ? (
            <p className="mt-2 text-sm text-zinc-400">Belum pernah battle. Jadi yang pertama nantang!</p>
          ) : (
            <>
              <div className="mt-2 text-2xl font-black">
                {wins} — {losses} <span className="text-sm font-bold text-zinc-400">(lu — {name})</span>
              </div>
              <div className="mt-2 space-y-1.5">
                {h2h.map((b) => (
                  <Link key={b.id} href={`/battle/${b.id}`} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15">
                    <span>🏁 {b.lesson_id}</span>
                    <span className="text-zinc-400">{b.scores[b.creator_id] ?? 0} vs {b.scores[b.opponent_id] ?? 0}</span>
                    <span className="ml-auto text-xs font-bold text-zinc-300">
                      {b.status !== "finished" ? "jalan..." : !b.winner_id ? "seri" : b.winner_id === meId ? "lu menang 🎉" : `${name} menang`}
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Achievement dia */}
      <div className="mt-6">
        <h2 className="text-lg font-black tracking-tight">Achievement {name} ({unlocked.length}/{ach.length}) 🏅</h2>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {ach.map((a) => (
            <div key={a.id} className={`rounded-2xl border p-3.5 ${a.unlocked ? "border-emerald-200 bg-emerald-50" : "border-zinc-200 bg-white opacity-60"}`}>
              <div className={`text-3xl ${a.unlocked ? "" : "grayscale"}`}>{a.unlocked ? a.icon : "🔒"}</div>
              <div className="mt-1 text-sm font-black">{a.title}</div>
              <div className="text-xs text-zinc-600">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Aktivitas terakhir */}
      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-sm font-black tracking-widest text-zinc-500">TERAKHIR DIKERJAIN {name.toUpperCase()}</h2>
        {full.recent.length === 0 ? (
          <p className="mt-2 text-sm text-zinc-500">Belum ada lesson selesai yang kelihatan.</p>
        ) : (
          <div className="mt-3 space-y-1.5">
            {full.recent.map((r) => (
              <div key={r.lesson_id} className="flex items-center gap-2 rounded-xl bg-[#fcfbf8] px-3 py-2 text-sm">
                <span>✓</span>
                <b>Lesson {r.lesson_id}</b>
                <span className="ml-auto text-xs text-zinc-500">{r.score != null ? `nilai ${r.score}` : ""} {r.completed_at ? `• ${r.completed_at.slice(0, 10)}` : ""}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
