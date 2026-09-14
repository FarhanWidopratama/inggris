"use client";

import { useEffect, useState } from "react";
import { levels, lessons } from "@/lib/curriculum";
import LessonCard from "@/components/LessonCard";
import { loadProgress } from "@/lib/progress";
import type { UserProgress } from "@/lib/types";
import Link from "next/link";

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
    const onStorage = () => setProgress(loadProgress());
    window.addEventListener("storage", onStorage);
    const id = setInterval(() => setProgress(loadProgress()), 1000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(id);
    };
  }, []);

  if (!progress) return <div className="p-8 text-center text-sm text-zinc-500">Loading...</div>;

  const completedCount = progress.completedLessons.length;
  const total = lessons.length;
  const pct = Math.round((completedCount / total) * 100);

  // Lock logic: Level 2+ locked until previous level done
  // For MVP: only Level 1 lessons unlocked, Level 2 locked unless 1-1,1-2,1-3 done
  const level1Done = ["1-1", "1-2", "1-3"].every((id) => progress.completedLessons.includes(id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="rounded-[24px] border border-zinc-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Dashboard Belajar</h1>
            <p className="mt-1 text-sm text-zinc-600">Lanjutin dari mana lu berhenti. Jangan loncat level ya.</p>
          </div>
          <Link href="/learn/1-1" className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-black">
            Lanjut Belajar →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#fcfbf8] p-4">
            <div className="text-xs font-bold tracking-widest text-zinc-500">PROGRESS</div>
            <div className="mt-1 text-2xl font-extrabold">{completedCount}/{total} lesson</div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200">
              <div className="h-full bg-zinc-900 transition-all" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-1 text-xs text-zinc-500">{pct}% selesai</div>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-4">
            <div className="text-xs font-bold tracking-widest text-emerald-700">STREAK</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-900">🔥 {progress.streak}</span>
              <span className="text-sm text-emerald-700">hari</span>
            </div>
            <div className="text-xs text-emerald-700">{progress.lastStudyDate ? `Terakhir: ${progress.lastStudyDate}` : "Mulai hari ini!"}</div>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4">
            <div className="text-xs font-bold tracking-widest text-amber-700">NEXT UP</div>
            <div className="mt-1 text-sm font-bold text-amber-900">
              {!progress.completedLessons.includes("1-1") && "1-1 Sapa & Perkenalan"}
              {progress.completedLessons.includes("1-1") && !progress.completedLessons.includes("1-2") && "1-2 Angka, Hari & Waktu"}
              {progress.completedLessons.includes("1-2") && !progress.completedLessons.includes("1-3") && "1-3 To Be: I am..."}
              {level1Done && "2-1 This/That (kebuka!)"}
            </div>
            <div className="text-xs text-amber-700">15 menit aja, gas!</div>
          </div>
        </div>
      </div>

      {/* Levels */}
      <div id="levels" className="mt-8">
        <h2 className="text-lg font-extrabold tracking-tight">Level & Lesson</h2>
        <p className="text-sm text-zinc-500">Selesaikan berurutan. Gak bisa skip.</p>
      </div>

      {levels.map((lvl) => {
        const lvlLessons = lessons.filter((l) => l.levelId === lvl.id);
        if (lvlLessons.length === 0) {
          return (
            <div key={lvl.id} className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-6">
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${lvl.color}`}>{lvl.icon}</span>
                <div>
                  <div className="text-xs font-bold tracking-widest text-zinc-400">LEVEL {lvl.id}</div>
                  <div className="font-bold">{lvl.title} • {lvl.titleEn}</div>
                </div>
                <span className="ml-auto rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-500">SOON</span>
              </div>
              <p className="mt-2 text-sm text-zinc-500">{lvl.description} — Akan hadir setelah Level {lvl.id - 1} selesai.</p>
            </div>
          );
        }
        return (
          <div key={lvl.id} className="mt-6">
            <div className="flex items-center gap-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${lvl.color}`}>{lvl.icon}</span>
              <h3 className="font-bold">Level {lvl.id}: {lvl.title}</h3>
              <span className="text-sm text-zinc-500">— {lvl.description}</span>
            </div>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lvlLessons.map((ls) => {
                const isCompleted = progress.completedLessons.includes(ls.id);
                const locked = lvl.id === 2 && !level1Done && ls.id === "2-1";
                return <LessonCard key={ls.id} lesson={ls} completed={isCompleted} locked={locked} />;
              })}
            </div>
          </div>
        );
      })}

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="font-bold">Mau connect Supabase (Opsi B)?</h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
          Sekarang progress kesimpen di browser (localStorage) jadi langsung bisa belajar tanpa setup. Kalau mau progress kesimpen permanen & bisa dibuka di HP lain, buat project di{" "}
          <a href="https://supabase.com" target="_blank" className="font-semibold underline">
            supabase.com
          </a>{" "}
          terus isi <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_SUPABASE_URL</code> &{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> di <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">.env.local</code>. Schema SQL udah ada di{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">supabase-schema.sql</code>.
        </p>
      </div>
    </div>
  );
}
