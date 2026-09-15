"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { levels } from "@/lib/curriculum";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsMobile(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

const Hero3D = dynamic(() => import("@/components/3d/Hero3D"), { ssr: false });

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div className="overflow-x-hidden">
      {/* HERO 3D WOW */}
      <section className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        {/* gradient orbs behind */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[-80px] top-[40px] h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-[70px]"
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute right-[-60px] top-[80px] h-[380px] w-[380px] rounded-full bg-sky-300/20 blur-[70px]"
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-3.5 py-1.5 text-xs font-bold tracking-widest text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> FULL 3D • MOTION • DARI 0 SAMPAI TOEFL
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-4 text-[34px] font-black leading-[0.92] tracking-[-0.03em] sm:text-[52px]">
              Belajar Inggris
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">gak hilang arah.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-1 left-0 h-2 w-full origin-left bg-emerald-200/50"
                  style={{ zIndex: -1 }}
                />
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-600">
              Kurikulum <b className="text-zinc-900">10 Level 3D</b> yang gua tuangin di web ini. Tiap Level punya buku 3D ngambang, ada <b>vocab + quiz + streak</b>. Gak bisa loncat level — lu tau persis hari ini belajar apa. <span className="rounded bg-amber-100 px-1 py-0.5 font-semibold text-amber-800">15 menit/hari</span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Link href="/dashboard" className="inline-flex rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black">
                  Mulai Level 1 — gratis →
                </Link>
              </motion.div>
              <motion.a whileHover={{ y: -2 }} href="#levels" className="rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-sm font-bold shadow-sm hover:bg-zinc-50">
                Lihat 10 Level ↓
              </motion.a>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-3 text-xs leading-relaxed text-zinc-500">
              ✅ Tanpa daftar langsung bisa coba • Daftar (1 menit) cuma kalau mau simpan progres + ajak temen battle
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">✨ Framer Motion</span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">📦 Three.js 60fps</span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">🎯 Anti loncat</span>
              <span className="rounded-full bg-emerald-500 px-3 py-1.5 text-white shadow-sm">Opsi B Connected</span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white/70 p-3 backdrop-blur">
              <div className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white ring-2 ring-white">A</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-black text-white ring-2 ring-white">B</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white ring-2 ring-white">C</span>
              </div>
              <div className="text-xs leading-tight">
                <div className="font-bold">1.200+ vocab kerja & TOEFL</div>
                <div className="text-zinc-500">Dipakai 0 → 500+ skor</div>
              </div>
              <div className="ml-auto hidden items-center gap-1 text-xs font-bold text-emerald-700 sm:flex">★ ★ ★ ★ ★ 4.9/5</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, rotateY: -8 }} animate={{ opacity: 1, y: 0, rotateY: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="relative">
            <Hero3D />
            {/* floating preview card over 3D */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, rotate: -1.2 }}
              transition={{ delay: 0.85, duration: 0.65 }}
              whileHover={{ rotate: 0, y: -5, scale: 1.015 }}
              className="absolute bottom-[12px] left-3 right-3 rounded-[18px] border border-white/20 bg-white/92 p-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.16)] backdrop-blur sm:bottom-[14px] sm:left-6 sm:right-6 sm:p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-zinc-500">HARI INI • LEVEL 1</span>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-black text-white">Wajib Mulai Sini</span>
              </div>
              <div className="mt-2 font-extrabold">Sapa & Perkenalan — Greeting</div>
              <div className="text-xs text-zinc-500">15 menit • 10 vocab • 5 quiz</div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-[#fcfbf8] p-2.5 font-semibold">Hello, my name is Farha.</div>
                <div className="rounded-xl bg-emerald-50 p-2.5 font-semibold text-emerald-800">Nice to meet you! → Lulus 60%</div>
              </div>
              <Link href="/learn/1-1" className="mt-3 flex w-full items-center justify-center rounded-full bg-zinc-900 py-2.5 text-sm font-black text-white hover:bg-black">
                Buka Lesson 1-1 →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* marquee */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-8 overflow-hidden rounded-full border border-zinc-200 bg-white py-2">
          <motion.div animate={{ x: [0, -600] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="flex gap-8 whitespace-nowrap text-xs font-bold tracking-widest text-zinc-500">
            <span>✦ GREETING</span> <span>✦ TO BE</span> <span>✦ SIMPLE PRESENT</span> <span>✦ PAST TENSE</span> <span>✦ EMAIL KERJA</span> <span>✦ MEETING</span> <span>✦ TOEFL STRUCTURE</span> <span>✦ LISTENING</span> <span>✦ READING</span>
            <span>✦ GREETING</span> <span>✦ TO BE</span> <span>✦ SIMPLE PRESENT</span> <span>✦ PAST TENSE</span>
          </motion.div>
        </motion.div>
      </section>

      {/* LEVELS 3D */}
      <section id="levels" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between">
          <h2 className="text-[22px] font-black tracking-tight">
            10 Level — <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">Peta Jalan 3D Lu</span>
          </h2>
          <span className="hidden rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold text-white sm:inline">Hover buat 3D tilt ✨</span>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {levels.map((lvl, i) => (
            <motion.div
              key={lvl.id}
              initial={{ opacity: 0, y: 30, rotateX: isMobile ? 0 : -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={isMobile ? undefined : { y: -10, rotateY: -6, rotateX: 4, scale: 1.02 }}
              whileTap={isMobile ? { scale: 0.98 } : undefined}
              style={{ transformStyle: "preserve-3d", perspective: isMobile ? 600 : 1000 }}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100" style={{ background: `radial-gradient(500px 180px at 50% 0%, ${lvl.color.includes("emerald") ? "rgba(16,185,129,0.18)" : lvl.color.includes("blue") ? "rgba(14,165,233,0.18)" : "rgba(245,158,11,0.16)"}, transparent)` }} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <motion.span whileHover={{ rotate: 12, scale: 1.08 }} className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white shadow-sm ${lvl.color}`}>
                    {lvl.icon}
                  </motion.span>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-zinc-400">LEVEL {lvl.id}</div>
                    <div className="text-sm font-black">{lvl.title} • {lvl.titleEn}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-zinc-600">{lvl.description}</p>
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-black ${lvl.id <= 1 ? "bg-emerald-100 text-emerald-700" : lvl.id <= 3 ? "bg-sky-100 text-sky-700" : "bg-zinc-100 text-zinc-500"}`}
                >
                  {lvl.id <= 1 ? "✅ Ready — 3 Lesson" : lvl.id <= 3 ? "🔜 Next" : "🔒 Terkunci"}
                </motion.div>
                {lvl.id > 1 && <div className="mt-1 text-xs font-semibold text-zinc-400">{lvl.id <= 3 ? "Kebuka abis Level 1" : "Terkunci sampai Level sebelumnya selesai"}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cara pakai 3D */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[28px] bg-zinc-900 p-6 text-white sm:p-8">
          <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-sky-500/15 blur-[60px]" />
          <h3 className="relative text-lg font-black">Baru pertama kali? Ikutin 3 ini aja 👇</h3>
          <div className="relative mt-4 grid gap-3 text-sm leading-relaxed text-zinc-300 sm:grid-cols-3">
            {[
              ["1. Klik Mulai Level 1", "Langsung belajar, tanpa daftar. 15 menit aja, jangan buka Level 10 dulu."],
              ["2. Kerjain tiap hari", "Baca dikit → hafalin kartu kata → quiz 5 soal. Salah itu wajar, diulangin otomatis."],
              ["3. Ajak temen biar nagih", "Daftar 1 menit → add temen → adu streak + battle. Yang kalah traktir kopi ☕"],
            ].map(([title, desc], i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <b className="text-white">{title}</b> → {desc}
              </motion.div>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="relative mt-6 inline-flex">
            <Link href="/dashboard" className="rounded-full bg-white px-6 py-2.5 text-sm font-black text-zinc-900 hover:bg-zinc-100">
              Ke Dashboard 3D →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
