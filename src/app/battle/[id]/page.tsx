"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getBattle, acceptBattle, updateBattleProgress, finishBattle, type Battle } from "@/lib/battle";
import { completeLesson } from "@/lib/progress";

const PER_QUESTION_SECONDS = 15;

export default function BattleRoomPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const router = useRouter();
  const [meId, setMeId] = useState<string | null>(null);
  const [battle, setBattle] = useState<Battle | null>(null);
  const [names, setNames] = useState<Record<string, string>>({});
  const [qIdx, setQIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(PER_QUESTION_SECONDS);
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const stateRef = useRef({ qIdx: 0, score: 0, done: false });
  stateRef.current = { qIdx, score, done };

  async function load() {
    try {
      const { me, battle } = await getBattle(id);
      setMeId(me.id);
      setBattle(battle);
      // nama pemain
      try {
        const supabase = createClient();
        if (supabase) {
          const { data } = await supabase.from("profiles").select("id,username").in("id", [battle.creator_id, battle.opponent_id]);
          const map: Record<string, string> = {};
          (data ?? []).forEach((p: { id: string; username: string | null }) => {
            map[p.id] = p.username ?? "Player";
          });
          setNames(map);
        }
      } catch {}
      // kalau saya sudah finished di DB (misal refresh), tandai done lokal
      if (battle.finished?.[me.id]) setDone(true);
    } catch (e) {
      setMsg(e instanceof Error ? `❌ ${e.message}` : "❌ Gagal load battle");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // realtime battle row
  useEffect(() => {
    if (!id) return;
    const supabase = createClient();
    if (!supabase) return;
    const ch = supabase
      .channel(`battle:${id}`)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "battles", filter: `id=eq.${id}` }, (payload: any) => {
        const row = payload.new as unknown as Battle;
        setBattle(row);
        if (row.status === "finished") {
          const s = stateRef.current;
          if (!s.done) {
            // lawan selesai duluan, saya belum — tetap lanjut main
            setMsg("🏁 Lawan udah finish! Selesaikan soal lu biar skor masuk.");
          }
        }
      })
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, [id]);

  // timer per soal
  useEffect(() => {
    if (!battle || battle.status !== "active" || done) return;
    setTimeLeft(PER_QUESTION_SECONDS);
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          // timeout = salah, lanjut
          setTimeout(() => answer(-1), 0);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qIdx, battle?.status, done]);

  if (loading) return <div className="p-8 text-center text-sm text-zinc-500">Loading battle room...</div>;
  if (!battle || !meId) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10 text-center">
        <p className="text-sm">{msg ?? "Battle nggak ketemu."}</p>
        <Link href="/friends" className="mt-4 inline-block rounded-full bg-zinc-900 px-5 py-2 text-sm font-bold text-white">← Ke Friends</Link>
      </div>
    );
  }

  const total = battle.questions.length;
  const cur = battle.questions[qIdx];
  const isOpponent = battle.opponent_id === meId;
  const otherId = battle.creator_id === meId ? battle.opponent_id : battle.creator_id;
  const myScoreLive = battle.scores?.[meId] ?? score;
  const opScoreLive = battle.scores?.[otherId] ?? 0;
  const opAnswered = battle.progress?.[otherId] ?? 0;
  const bothFinished = battle.finished?.[battle.creator_id] && battle.finished?.[battle.opponent_id];

  async function handleAccept() {
    setBusy(true);
    try {
      await acceptBattle(id);
      await load();
    } catch (e) {
      setMsg(e instanceof Error ? `❌ ${e.message}` : "❌ Gagal accept");
    } finally {
      setBusy(false);
    }
  }

  function answer(pick: number) {
    const s = stateRef.current;
    if (s.done || !battle || battle.status !== "active") return;
    if (picked !== null && pick !== -1) return; // sudah jawab soal ini
    const correct = pick === cur.answer;
    const newScore = correct ? s.score + 1 : s.score;
    const answered = s.qIdx + 1;
    setScore(newScore);
    updateBattleProgress(id, answered, newScore);
    if (answered >= total) {
      setDone(true);
      finishBattle(id, newScore, total);
      if (newScore >= 3) {
        try {
          completeLesson(battle.lesson_id, newScore);
        } catch {}
      }
      load();
    } else {
      setPicked(null);
      setQIdx(s.qIdx + 1);
    }
  }

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    setTimeout(() => answer(i), 350);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
        <Link href="/friends" className="hover:underline">← Friends</Link>
        <span>›</span>
        <span className="text-zinc-900">Battle {battle.lesson_id}</span>
        <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-bold text-white ${battle.status === "finished" ? "bg-zinc-500" : battle.status === "active" ? "bg-emerald-500" : "bg-amber-500"}`}>
          {battle.status.toUpperCase()} ● LIVE
        </span>
      </div>

      <h1 className="mt-3 text-2xl font-black">⚔️ Battle: {battle.lesson_id}</h1>
      <p className="text-sm text-zinc-600">{names[battle.creator_id] ?? "Player 1"} vs {names[battle.opponent_id] ?? "Player 2"} • {total} soal • {PER_QUESTION_SECONDS} detik/soal</p>

      {/* skor live */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-900 p-4 text-white">
          <div className="text-xs font-bold opacity-70">LU • {names[meId] ?? ""}</div>
          <div className="text-3xl font-black">{myScoreLive}<span className="text-base opacity-60">/{total}</span></div>
          <div className="text-xs opacity-70">Soal {Math.min(qIdx + 1, total)}/{total}</div>
        </div>
        <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
          <div className="text-xs font-bold text-pink-800">LAWAN • {names[otherId] ?? ""} {bothFinished ? "" : "🔴 live"}</div>
          <div className="text-3xl font-black text-pink-900">{opScoreLive}<span className="text-base opacity-60">/{total}</span></div>
          <div className="text-xs text-pink-700">Udah jawab {opAnswered}/{total}</div>
        </div>
      </div>

      {msg && <div className="mt-3 rounded-xl border bg-white p-3 text-sm font-semibold">{msg}</div>}

      {battle.status === "waiting" && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
          {isOpponent ? (
            <>
              <p className="font-bold">⚔️ Lu ditantang battle lesson {battle.lesson_id}!</p>
              <p className="mt-1 text-sm text-zinc-600">5 soal, siapa skor tertinggi menang. Gas?</p>
              <button disabled={busy} onClick={handleAccept} className="mt-4 rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-white disabled:opacity-40">
                {busy ? "..." : "Terima & Mulai! 🔥"}
              </button>
            </>
          ) : (
            <>
              <p className="font-bold">⏳ Menunggu lawan accept...</p>
              <p className="mt-1 text-sm text-zinc-600">Halaman ini live — begitu dia accept, soal langsung muncul. Suruh dia buka /friends.</p>
            </>
          )}
        </div>
      )}

      {battle.status === "active" && !done && cur && (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black tracking-widest text-zinc-500">SOAL {qIdx + 1}/{total}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-black text-white ${timeLeft <= 5 ? "bg-red-500" : "bg-zinc-900"}`}>⏱ {timeLeft}s</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full bg-gradient-to-r from-pink-500 to-amber-500 transition-all" style={{ width: `${(timeLeft / PER_QUESTION_SECONDS) * 100}%` }} />
          </div>
          <h3 className="mt-4 text-lg font-black">{cur.question}</h3>
          <div className="mt-4 grid gap-2">
            {cur.options.map((o, i) => {
              let cls = "border-zinc-200 bg-white hover:bg-zinc-50";
              if (picked !== null) {
                if (i === cur.answer) cls = "border-emerald-500 bg-emerald-50 text-emerald-900";
                else if (i === picked) cls = "border-red-400 bg-red-50 text-red-900";
                else cls = "border-zinc-200 bg-zinc-50 opacity-60";
              }
              return (
                <button key={i} disabled={picked !== null} onClick={() => pick(i)} className={`rounded-xl border px-4 py-3 text-left text-sm font-bold ${cls}`}>
                  {String.fromCharCode(65 + i)}. {o}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <div className="mt-3 rounded-xl bg-zinc-50 p-3 text-xs leading-relaxed"><b>{picked === cur.answer ? "✅ Benar!" : "❌ Kurang tepat."}</b> {cur.explanation}</div>
          )}
        </div>
      )}

      {battle.status === "active" && done && !bothFinished && (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <div className="text-3xl">✅</div>
          <p className="mt-2 font-black">Skor lu: {score}/{total} — kesimpen!</p>
          <p className="text-sm text-zinc-600">Lawan masih main ({opAnswered}/{total}). Halaman ini live, pemenang muncul otomatis.</p>
        </div>
      )}

      {(battle.status === "finished" || (done && bothFinished)) && (
        <div className="mt-6 rounded-2xl border-2 border-zinc-900 bg-zinc-900 p-6 text-center text-white">
          <div className="text-3xl">{battle.winner_id ? (battle.winner_id === meId ? "🏆" : "😅") : "🤝"}</div>
          <p className="mt-2 text-xl font-black">
            {battle.winner_id ? (battle.winner_id === meId ? "LU MENANG! 🏆" : `${names[battle.winner_id] ?? "Lawan"} menang!`) : "SERI! 🤝 Sama kuat!"}
          </p>
          <p className="mt-1 text-sm text-zinc-300">
            {names[battle.creator_id] ?? ""}: {battle.scores[battle.creator_id] ?? 0} • {names[battle.opponent_id] ?? ""}: {battle.scores[battle.opponent_id] ?? 0}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <button onClick={() => router.push("/friends")} className="rounded-full bg-pink-500 px-6 py-2.5 text-sm font-bold text-white">Rematch di Friends ⚔️</button>
            <Link href={`/learn/${battle.lesson_id}`} className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-zinc-900">Review Lesson →</Link>
          </div>
        </div>
      )}
    </div>
  );
}
