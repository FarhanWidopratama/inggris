"use client";

import { lessons } from "@/lib/curriculum";
import { dueItems, review, stats, loadSRS } from "@/lib/srs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ReviewPage() {
  const [due, setDue] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"recall" | "dictation">("recall");

  const allKeys = lessons.flatMap((ls) => ls.vocab.map((v) => `${ls.id}::${v.en}`));

  function refresh() {
    setDue(dueItems(allKeys));
    setIdx(0);
    setShow(false);
    setInput("");
  }
  useEffect(() => { refresh(); }, []);

  const s = stats();
  const curKey = due[idx];
  const cur = curKey ? (() => {
    const [lid, en] = curKey.split("::");
    const ls = lessons.find((l) => l.id === lid);
    const v = ls?.vocab.find((x) => x.en === en);
    return v ? { ...v, lessonId: lid, lessonTitle: ls?.title } : null;
  })() : null;

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.92;
    window.speechSynthesis.speak(u);
  }

  function grade(g: 0 | 1 | 2 | 3) {
    if (!curKey) return;
    review(curKey, g);
    if (idx + 1 >= due.length) {
      // done
      refresh();
    } else {
      setIdx((i) => i + 1);
      setShow(false);
      setInput("");
    }
  }

  function submitRecall() {
    if (!cur) return;
    const ok = input.trim().toLowerCase() === cur.en.toLowerCase();
    grade(ok ? 2 : 0);
  }

  if (due.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl">✅</div>
        <h1 className="mt-4 text-xl font-black">Review Queue Kosong — Otak Lu Aman Hari Ini!</h1>
        <p className="mt-1 text-sm text-zinc-600">SRS: {s.learned} kata dipelajari, {s.due} due hari ini. Besok bakal muncul lagi yang mau lupa — sistem lawan lupa 70%.</p>
        <div className="mt-4 flex justify-center gap-2">
          <Link href="/hafalan" className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-black text-white">Ke Hafalan</Link>
          <button onClick={refresh} className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-bold">Refresh</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="flex items-center gap-2 text-xs font-black tracking-widest text-zinc-500">
        <span className="rounded-full bg-zinc-900 px-2 py-1 text-white">SRS REVIEW QUEUE</span>
        <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-800">{due.length} due hari ini</span>
        <span className="ml-auto rounded-full bg-white px-3 py-1 text-zinc-600 border">{idx + 1}/{due.length}</span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-100">
        <motion.div animate={{ width: `${((idx) / due.length) * 100}%` }} className="h-full bg-gradient-to-r from-emerald-500 to-sky-500" />
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={() => setMode("recall")} className={`rounded-full px-4 py-2 text-xs font-black ${mode === "recall" ? "bg-zinc-900 text-white" : "border bg-white"}`}>⌨️ Ketik (Active Recall)</button>
        <button onClick={() => setMode("dictation")} className={`rounded-full px-4 py-2 text-xs font-black ${mode === "dictation" ? "bg-zinc-900 text-white" : "border bg-white"}`}>🎧 Dictation (Dengar→Tulis)</button>
        <button onClick={() => cur && speak(cur.en)} className="ml-auto rounded-full border bg-white px-3 py-2 text-xs font-bold">🔊 Native</button>
      </div>

      {cur && (
        <motion.div key={curKey} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-bold tracking-widest text-zinc-400">{cur.lessonId} • {cur.lessonTitle}</div>
          <div className="mt-1 text-sm font-bold text-emerald-700">{cur.id} <span className="font-normal text-zinc-500">/{cur.pronounce}/</span></div>

          {!show ? (
            <>
              {mode === "recall" ? (
                <>
                  <div className="mt-4 rounded-2xl bg-[#fcfbf8] p-6 text-center">
                    <div className="text-sm text-zinc-500">Arti (ID) → Ketik EN + EI em</div>
                    <div className="mt-1 text-2xl font-black text-emerald-700">{cur.id}</div>
                    <div className="mt-2 text-xs text-zinc-500">{cur.exampleId}</div>
                  </div>
                  <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && submitRecall()} placeholder="Ketik bahasa Inggrisnya... (contoh: Thank you)" className="mt-4 w-full rounded-xl border-2 border-zinc-900 bg-white px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                  <div className="mt-3 flex gap-2">
                    <button onClick={submitRecall} className="flex-1 rounded-full bg-zinc-900 py-3 text-sm font-black text-white">Cek Jawaban →</button>
                    <button onClick={() => setShow(true)} className="rounded-full border bg-white px-4 py-3 text-xs font-bold">Lihat Jawaban</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-4 rounded-2xl bg-zinc-900 p-6 text-center text-white">
                    <div className="text-xs tracking-widest opacity-70">DICTATION — DENGERIN LALU TULIS</div>
                    <button onClick={() => speak(cur.en)} className="mt-3 rounded-full bg-white px-5 py-2.5 text-sm font-black text-zinc-900">🔊 Putar: {cur.en} →</button>
                    <div className="mt-2 text-xs opacity-60">Tutup mata, denger, tulis tanpa liat</div>
                  </div>
                  <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && submitRecall()} placeholder="Tulis yang kamu dengar..." className="mt-4 w-full rounded-xl border-2 border-zinc-900 bg-white px-4 py-3 text-sm font-bold" />
                  <div className="mt-3 flex gap-2">
                    <button onClick={submitRecall} className="flex-1 rounded-full bg-zinc-900 py-3 text-sm font-black text-white">Cek →</button>
                    <button onClick={() => setShow(true)} className="rounded-full border bg-white px-4 py-3 text-xs font-bold">Lihat</button>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="mt-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 text-center">
              <div className="text-2xl font-black">{cur.en} <span className="text-sm font-normal">/{cur.pronounce}/</span></div>
              <div className="mt-2 text-sm font-bold text-emerald-800">{cur.example} — {cur.exampleId}</div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                <button onClick={() => grade(0)} className="rounded-xl bg-red-500 py-3 text-xs font-black text-white">❌ Lupa<br/><span className="opacity-80">besok lagi</span></button>
                <button onClick={() => grade(1)} className="rounded-xl bg-amber-500 py-3 text-xs font-black text-white">😬 Susah<br/><span className="opacity-80">2 hari</span></button>
                <button onClick={() => grade(2)} className="rounded-xl bg-emerald-500 py-3 text-xs font-black text-white">✓ Ingat<br/><span className="opacity-80">3-7 hari</span></button>
                <button onClick={() => grade(3)} className="rounded-xl bg-sky-500 py-3 text-xs font-black text-white">🚀 Gampang<br/><span className="opacity-80">~10 hari</span></button>
              </div>
              <div className="mt-2 text-xs text-zinc-600">Guru: pilih jujur — kalau ngintip, pilih Lupa biar muncul lagi besok (lawan lupa 70%).</div>
            </div>
          )}
        </motion.div>
      )}

      <div className="mt-4 text-center text-xs text-zinc-500">SRS lawan lupa manusia — 7 kata/hari, bukan 60. Habit lebih penting dari motivasi.</div>
    </div>
  );
}
