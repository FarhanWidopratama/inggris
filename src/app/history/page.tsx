"use client";

import ErrorReview from "@/components/ErrorReview";
import { loadProgress } from "@/lib/progress";
import { loadAttempts } from "@/lib/attempts";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HistoryPage() {
  const [progress, setProgress] = useState<ReturnType<typeof loadProgress> | null>(null);
  const [attempts, setAttempts] = useState<ReturnType<typeof loadAttempts>>([]);
  useEffect(() => {
    setProgress(loadProgress());
    setAttempts(loadAttempts());
  }, []);
  const pct = progress ? Math.round((progress.completedLessons.length / 60) * 100) : 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <h1 className="text-2xl font-black tracking-tight">Riwayat Belajar — Record Lu</h1>
      <p className="text-sm text-zinc-600">Semua yang lu kerjain ke-record. Mana yang salah, gua bongkar di sini kayak guru privat.</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-zinc-900 p-4 text-white text-center"><div className="text-xs opacity-70">COMPLETED</div><div className="text-2xl font-black">{progress?.completedLessons.length ?? 0}/60</div><div className="text-xs">{pct}%</div></div>
        <div className="rounded-2xl bg-emerald-500 p-4 text-white text-center"><div className="text-xs opacity-80">STREAK</div><div className="text-2xl font-black">🔥 {progress?.streak ?? 0}</div><div className="text-xs">{progress?.lastStudyDate ?? "-"}</div></div>
        <div className="rounded-2xl bg-sky-500 p-4 text-white text-center"><div className="text-xs opacity-80">TES</div><div className="text-2xl font-black">{attempts.length}</div><div className="text-xs">{attempts.filter((a) => !a.isCorrect).length} salah</div></div>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
        <div className="font-black">📅 Timeline</div>
        <div className="mt-2 space-y-1 text-sm">
          {(progress?.completedLessons ?? []).slice(-8).reverse().map((id) => (
            <div key={id} className="flex items-center gap-2 rounded-lg bg-[#fcfbf8] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> <Link href={`/learn/${id}`} className="font-bold hover:underline">{id}</Link> <span className="text-zinc-500">— selesai</span> <span className="ml-auto text-xs text-zinc-400">{progress?.scores[id] ?? "-"} /5</span>
            </div>
          ))}
          {(progress?.completedLessons.length ?? 0) === 0 && <div className="text-xs text-zinc-500">Belum ada — mulai di <Link href="/learn/1-1" className="font-bold underline">Lesson 1-1</Link></div>}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-black">Koreksi Per-Soal — Salahnya Dimana</h2>
        <p className="text-xs text-zinc-500">Ini yang lu minta: tiap tes salah, gua kasih tau kenapa. Scroll.</p>
        <div className="mt-3"><ErrorReview /></div>
      </div>

      <div className="mt-6 flex gap-2">
        <Link href="/hafalan" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-black text-white hover:bg-black">Ke Hafalan →</Link>
        <Link href="/grammar" className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-bold hover:bg-zinc-50">Ke Grammar →</Link>
      </div>
    </div>
  );
}
