"use client";

import { loadAttempts, clearAttempts, type Attempt } from "@/lib/attempts";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ErrorReview() {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  useEffect(() => setAttempts(loadAttempts()), []);
  if (attempts.length === 0) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <div className="text-2xl">✅</div>
        <div className="font-black">Belum ada kesalahan — keren!</div>
        <div className="text-sm text-zinc-600">Kerjain quiz dulu, nanti yang salah bakal gua bongkar di sini.</div>
      </div>
    );
  }
  const wrong = attempts.filter((a) => !a.isCorrect);
  const correct = attempts.filter((a) => a.isCorrect);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-zinc-900 p-3 text-center text-white"><div className="text-xs opacity-70">TOTAL TES</div><div className="text-xl font-black">{attempts.length}</div></div>
        <div className="rounded-xl bg-emerald-500 p-3 text-center text-white"><div className="text-xs opacity-80">BENAR</div><div className="text-xl font-black">{correct.length}</div></div>
        <div className="rounded-xl bg-red-500 p-3 text-center text-white"><div className="text-xs opacity-80">SALAH</div><div className="text-xl font-black">{wrong.length}</div></div>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-black">🔍 Koreksi Detail — Gua Bongkar Salahnya</h3>
        <button onClick={() => { clearAttempts(); setAttempts([]); }} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold hover:bg-zinc-50">Hapus Riwayat</button>
      </div>

      <div className="space-y-3">
        {attempts.slice(0, 30).map((a, i) => (
          <div key={i} className={`rounded-xl border p-4 ${a.isCorrect ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"}`}>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest">
              <span className={`rounded-full px-2 py-0.5 text-white ${a.isCorrect ? "bg-emerald-500" : "bg-red-500"}`}>{a.isCorrect ? "✓ BENAR" : "✗ SALAH"}</span>
              <span className="text-zinc-500">{a.lessonId} • {new Date(a.at).toLocaleString()}</span>
              <Link href={`/learn/${a.lessonId}`} className="ml-auto rounded-full bg-white px-2 py-1 text-xs font-bold text-zinc-700 hover:bg-zinc-100">Buka Lesson →</Link>
            </div>
            <div className="mt-2 text-sm font-bold">{a.questionId}</div>
            <div className="mt-1 text-xs">Jawaban lu: <b>{String.fromCharCode(65 + a.picked)}</b> • Kunci: <b className="text-emerald-700">{String.fromCharCode(65 + a.correct)}</b></div>
            <div className="mt-2 rounded-lg bg-white p-2 text-xs leading-relaxed"><b>Kenapa:</b> {a.explanation}</div>
            {!a.isCorrect && <div className="mt-2 text-xs font-bold text-red-700">💡 Next: Ulangi lesson {a.lessonId} — fokus EI em & pola.</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
