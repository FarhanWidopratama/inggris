"use client";

import Speaking3D from "@/components/Speaking3D";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { lessons } from "@/lib/curriculum";

const presets = [
  { target: "Hello, my name is Farha.", targetId: "Halo, nama saya Farha.", hint: "Pelan: He-LOU mai neim iz FAR-ha" },
  { target: "I work as a marketing staff.", targetId: "Saya kerja sebagai staff marketing.", hint: "Tekan di 'work as a'" },
  { target: "Good morning, I am ready for the meeting.", targetId: "Selamat pagi, saya siap untuk meeting.", hint: "TOEFL & kerja phrase" },
  { target: "Nice to meet you! How are you today?", targetId: "Senang bertemu! Apa kabar hari ini?", hint: "Intonasi naik di akhir" },
];

export default function SpeakingPage() {
  const [idx, setIdx] = useState(0);
  const cur = presets[idx];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <div className="flex items-center gap-2 text-xs font-bold text-zinc-500">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <span>›</span>
        <span className="text-zinc-900">Speaking 3D Lab</span>
        <span className="ml-2 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-black text-white">NEW</span>
      </div>

      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Speaking 3D Lab — Rekam + Waveform</motion.h1>
      <p className="text-sm text-zinc-600">Latihan ngomong biar pede kerja & TOEFL Speaking. Waveform 3D live dari mic lu (AnalyserNode), bukan animasi palsu.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {presets.map((p, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`rounded-full px-4 py-2 text-xs font-black ${i === idx ? "bg-zinc-900 text-white shadow" : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"}`}>
            #{i + 1} • {p.target.slice(0, 18)}...
          </button>
        ))}
        <Link href="/learn/1-1" className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-bold hover:bg-zinc-50">← Ke Lesson 1-1</Link>
      </div>

      <div className="mt-6">
        <Speaking3D target={cur.target} targetId={cur.targetId} hint={cur.hint} />
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
        <h3 className="font-black">Semua phrase dari kurikulum?</h3>
        <p className="mt-1 text-sm text-zinc-600">Pilih lesson di bawah — tiap vocab punya tombol Speaking 3D sendiri.</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {lessons.slice(0, 3).map((ls) => (
            <Link key={ls.id} href={`/learn/${ls.id}`} className="rounded-xl border border-zinc-200 bg-[#fcfbf8] p-3 hover:bg-white">
              <div className="text-xs font-black tracking-widest text-zinc-500">LESSON {ls.id}</div>
              <div className="font-bold">{ls.title}</div>
              <div className="text-xs text-zinc-500">{ls.titleEn} • {ls.vocab.length} vocab → Speaking 3D</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
