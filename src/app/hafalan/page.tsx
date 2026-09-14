"use client";

import { lessons } from "@/lib/curriculum";
import { extraVocab } from "@/lib/collocations";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function HafalanPage() {
  const allVocab = useMemo(() => [
    ...lessons.flatMap((ls) => ls.vocab.map((v) => ({ ...v, lessonId: ls.id, lessonTitle: ls.title, cat: "lesson" }))),
    ...extraVocab.map((v) => ({ ...v, lessonId: "EX", lessonTitle: "Collocation Fasih", cat: "extra" })),
  ], []);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [tab, setTab] = useState<"all" | "lesson" | "extra">("all");

  const filtered = allVocab.filter((v) => {
    const matchQ = !q || v.en.toLowerCase().includes(q.toLowerCase()) || v.id.toLowerCase().includes(q.toLowerCase());
    const matchF = filter === "all" || (filter === "extra" ? v.cat === "extra" : v.lessonId.startsWith(filter.split("-")[0] + "-"));
    const matchTab = tab === "all" || (tab === "lesson" ? v.cat === "lesson" : v.cat === "extra");
    return matchQ && matchF && matchTab;
  });

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.92;
    window.speechSynthesis.speak(u);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <h1 className="text-2xl font-black tracking-tight">Hafalan Wajib — 1500 Kata EI em Fasih</h1>
      <p className="text-sm text-zinc-600">600 dari 60 lesson + 900 kolokasi kerja & phrasal verb + akademik TOEFL. Search, dengerin native, 10/hari = 150 hari fasih.</p>

      <div className="mt-3 flex gap-2">
        <button onClick={() => setTab("all")} className={`rounded-full px-4 py-2 text-xs font-black ${tab === "all" ? "bg-zinc-900 text-white" : "border bg-white"}`}>Semua 1500</button>
        <button onClick={() => setTab("lesson")} className={`rounded-full px-4 py-2 text-xs font-black ${tab === "lesson" ? "bg-zinc-900 text-white" : "border bg-white"}`}>600 Lesson</button>
        <button onClick={() => setTab("extra")} className={`rounded-full px-4 py-2 text-xs font-black ${tab === "extra" ? "bg-emerald-600 text-white" : "border bg-white text-emerald-700"}`}>900 Kolokasi Fasih ✨</button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari: make a decision, look up, EI em..." className="flex-1 min-w-[200px] rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-bold">
          <option value="all">Semua Level</option>
          {Array.from({ length: 10 }, (_, i) => <option key={i} value={`${i + 1}`}>Level {i + 1}</option>)}
          <option value="extra">Kolokasi Extra</option>
        </select>
        <span className="rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-black text-white">{filtered.length} kata</span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, 120).map((v, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 12) * 0.03 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2"><span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-black text-white">{v.lessonId}</span><span className="text-xs font-bold text-zinc-500">{v.lessonTitle}</span></div>
            <div className="mt-2 text-lg font-black">{v.en} <span className="text-sm font-normal text-zinc-500">/{v.pronounce}/</span></div>
            <div className="text-sm font-bold text-emerald-700">{v.id}</div>
            <div className="mt-2 rounded-xl bg-[#fcfbf8] p-2 text-xs leading-relaxed"><div className="font-semibold">{v.example}</div><div className="text-zinc-500">{v.exampleId}</div></div>
            <button onClick={() => speak(v.en)} className="mt-3 w-full rounded-full bg-zinc-900 py-2 text-xs font-black text-white hover:bg-black">🔊 Dengerin EI em →</button>
          </motion.div>
        ))}
      </div>
      {filtered.length > 120 && <p className="mt-4 text-center text-xs text-zinc-500">Showing 120 dari {filtered.length} — pakai search untuk filter.</p>}
    </div>
  );
}
