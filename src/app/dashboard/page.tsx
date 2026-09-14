"use client";

import { useEffect, useState } from "react";
import { levels, lessons } from "@/lib/curriculum";
import LessonCard from "@/components/LessonCard";
import { loadProgress } from "@/lib/progress";
import type { UserProgress } from "@/lib/types";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsMobile(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);

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

  if (!progress) return <div className="p-8 text-center text-sm text-zinc-500">Loading 3D Dashboard...</div>;

  const completedCount = progress.completedLessons.length;
  const total = lessons.length;
  const pct = Math.round((completedCount / total) * 100);
  const level1Done = ["1-1", "1-2", "1-3"].every((id) => progress.completedLessons.includes(id));

  const nextLessonLabel =
    !progress.completedLessons.includes("1-1")
      ? "1-1 Sapa & Perkenalan"
      : !progress.completedLessons.includes("1-2")
        ? "1-2 Angka, Hari & Waktu"
        : !progress.completedLessons.includes("1-3")
          ? "1-3 To Be: I am..."
          : "2-1 This/That (kebuka!)";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header 3D */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 sm:p-8"
        style={{ perspective: 1200 }}
      >
        {/* bg orbs */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-200/30 blur-[50px]" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-sky-200/20 blur-[45px]" />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-black tracking-widest text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> DASHBOARD 3D
            </motion.div>
            <h1 className="mt-3 text-2xl font-black tracking-tight">Dashboard Belajar</h1>
            <p className="mt-1 text-sm text-zinc-600">Lanjutin dari mana lu berhenti. Jangan loncat level ya.</p>
          </div>
          <motion.div whileHover={{ scale: 1.04, rotate: 0.6 }} whileTap={{ scale: 0.97 }}>
            <Link href="/learn/1-1" className="inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] hover:bg-black">
              Lanjut Belajar 3D →
            </Link>
          </motion.div>
        </div>

        <div className="relative mt-6 grid gap-4 sm:grid-cols-3" style={{ perspective: 1000 }}>
          {/* PROGRESS 3D */}
          <motion.div
            whileHover={isMobile ? undefined : { y: -6, rotateX: 4, rotateY: -3, scale: 1.02 }}
            whileTap={isMobile ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-[#fcfbf8] p-5 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-50" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-widest text-zinc-500">PROGRESS</span>
                <motion.span animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }} className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-black text-white">{pct}%</motion.span>
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <motion.span key={completedCount} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-3xl font-black tracking-tight">{completedCount}</motion.span>
                <span className="text-lg font-bold text-zinc-400">/{total}</span>
                <span className="ml-1 text-xs font-bold text-zinc-500">lesson</span>
              </div>
              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-zinc-200">
                <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
              </div>
              <div className="mt-2 text-xs font-semibold text-zinc-500">{pct}% selesai • {total - completedCount} lagi ke Level 2</div>
            </div>
          </motion.div>

          {/* STREAK 3D */}
          <motion.div
            whileHover={isMobile ? undefined : { y: -6, rotateX: 4, rotateY: 3, scale: 1.02 }}
            whileTap={isMobile ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm"
          >
            <motion.div animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.12, 1] }} transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5 }} className="absolute -right-2 -top-2 text-5xl opacity-20">🔥</motion.div>
            <div className="relative">
              <div className="text-xs font-black tracking-widest text-emerald-700">STREAK 3D</div>
              <div className="mt-1 flex items-baseline gap-2">
                <motion.span key={progress.streak} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-black text-emerald-900">🔥 {progress.streak}</motion.span>
                <span className="text-sm font-bold text-emerald-700">hari</span>
              </div>
              <div className="mt-2 flex gap-1.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + i * 0.06 }} className={`h-2 flex-1 rounded-full ${i < progress.streak ? "bg-emerald-500" : "bg-emerald-100"}`} />
                ))}
              </div>
              <div className="mt-2 text-xs font-semibold text-emerald-700">{progress.lastStudyDate ? `Terakhir: ${progress.lastStudyDate}` : "Mulai hari ini biar nyala!"}</div>
            </div>
          </motion.div>

          {/* NEXT UP 3D */}
          <motion.div
            whileHover={isMobile ? undefined : { y: -6, rotateX: -4, rotateY: 3, scale: 1.02 }}
            whileTap={isMobile ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-400/20 blur-[18px]" />
            <div className="relative">
              <div className="text-xs font-black tracking-widest text-amber-700">NEXT UP</div>
              <AnimatePresence mode="wait">
                <motion.div key={nextLessonLabel} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} className="mt-2 rounded-xl bg-white p-3 text-sm font-black text-amber-900 shadow-sm">
                  {nextLessonLabel}
                </motion.div>
              </AnimatePresence>
              <div className="mt-2 text-xs font-bold text-amber-700">15 menit aja, gas! ✨</div>
              <motion.div whileHover={{ x: 4 }} className="mt-3 inline-flex items-center gap-1 text-xs font-black text-amber-800">3D Tilt Hover →</motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Levels 3D Tilt */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8">
        <h2 className="text-lg font-black tracking-tight">Level & Lesson — 3D</h2>
        <p className="text-sm text-zinc-500">Hover kartu buat 3D tilt. Selesaikan berurutan.</p>
      </motion.div>

      {levels.map((lvl, lvlIdx) => {
        const lvlLessons = lessons.filter((l) => l.levelId === lvl.id);
        if (lvlLessons.length === 0) {
          return (
            <motion.div
              key={lvl.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: lvlIdx * 0.04 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${lvl.color}`}>{lvl.icon}</span>
                <div>
                  <div className="text-xs font-bold tracking-widest text-zinc-400">LEVEL {lvl.id}</div>
                  <div className="font-bold">{lvl.title} • {lvl.titleEn}</div>
                </div>
                <span className="ml-auto rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-500">SOON • 3D Locked</span>
              </div>
              <p className="mt-2 text-sm text-zinc-500">{lvl.description} — Akan hadir setelah Level {lvl.id - 1} selesai.</p>
            </motion.div>
          );
        }
        return (
          <div key={lvl.id} className="mt-8">
            <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3">
              <motion.span whileHover={{ rotate: 10, scale: 1.1 }} className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${lvl.color}`}>{lvl.icon}</motion.span>
              <h3 className="font-black">Level {lvl.id}: {lvl.title}</h3>
              <span className="text-sm text-zinc-500">— {lvl.description}</span>
            </motion.div>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1100 }}>
              {lvlLessons.map((ls, i) => {
                const isCompleted = progress.completedLessons.includes(ls.id);
                const locked = lvl.id === 2 && !level1Done && ls.id === "2-1";
                return (
                  <motion.div
                    key={ls.id}
                    initial={{ opacity: 0, y: 24, rotateX: -6 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={!locked ? { y: -10, rotateY: -5, rotateX: 5, scale: 1.03 } : undefined}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <LessonCard lesson={ls} completed={isCompleted} locked={locked} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="font-black">Mau connect Supabase (Opsi B)?</h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
          Progress sekarang di <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">localStorage</code> + <code className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs">Supabase Connected ✓</code> — buka di HP lain tetap sync setelah login. Schema ada di <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs">supabase-schema.sql</code>.
        </p>
      </motion.div>
    </div>
  );
}
