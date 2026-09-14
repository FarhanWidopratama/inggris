"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const passages = [
  { id: "L1", title: "Short Conversation", text: "Woman: I was busy yesterday, so I put off the meeting. Man: Oh, so you will meet tomorrow at 9?", q: "What will the woman do?", opts: ["Meet tomorrow at 9 (correct)", "Meet today", "Cancel forever", "Call"], ans: 0, tip: "Keyword: put off = tunda → will meet tomorrow." },
  { id: "L2", title: "Announcement", text: "Good morning, team. Please find attached the monthly report. The deadline is Friday at 5 PM. Kindly confirm when you receive it.", q: "When is the deadline?", opts: ["Monday", "Friday at 5 PM (correct)", "Wednesday", "Today"], ans: 1, tip: "Scan angka: Friday at 5 PM." },
  { id: "L3", title: "Long Talk (Work culture)", text: "In my opinion, teamwork is very important. We make decisions together and deal with problems as a team. If we have good communication, we can carry out tasks faster.", q: "What is important?", opts: ["Teamwork (correct)", "Money", "Time only", "Boss"], ans: 0, tip: "Main idea di kalimat pertama." },
];

export default function ListeningPage() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"qa" | "dictation">("qa");
  const cur = passages[idx];

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.88;
    window.speechSynthesis.speak(u);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-black tracking-tight">Listening Lab — Dengar Panjang + Dictation 3D</h1>
      <p className="text-sm text-zinc-600">Bukan short doang. Denger passage 30 detik, take notes, jawab + dictation tulis ulang.</p>

      <div className="mt-4 flex gap-2">
        <button onClick={() => setMode("qa")} className={`rounded-full px-4 py-2 text-xs font-black ${mode === "qa" ? "bg-zinc-900 text-white" : "border bg-white"}`}>Q&A</button>
        <button onClick={() => setMode("dictation")} className={`rounded-full px-4 py-2 text-xs font-black ${mode === "dictation" ? "bg-zinc-900 text-white" : "border bg-white"}`}>Dictation (Tulis Ulang)</button>
        <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-bold border">{idx + 1}/{passages.length}</span>
      </div>

      <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex items-center gap-2"><span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-black text-white">{cur.id}</span><span className="text-sm font-black">{cur.title}</span></div>
        <div className="mt-3 flex gap-2">
          <button onClick={() => speak(cur.text)} className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-black text-white">🔊 Putar 0.88x</button>
          <button onClick={() => speak(cur.text)} className="rounded-full border bg-white px-4 py-2 text-sm font-bold">🔁 Ulang</button>
          <label className="ml-auto flex items-center gap-1 text-xs"><input type="range" min={0.7} max={1.1} step={0.1} defaultValue={0.88} onChange={(e) => {}} /> speed</label>
        </div>
        <div className="mt-3 rounded-xl bg-[#fcfbf8] p-3 font-mono text-sm leading-relaxed">{cur.text}</div>
        <div className="mt-2 text-xs text-zinc-500">Tip: take notes who/what/when sambil denger. Jangan hafal kata per kata.</div>

        {mode === "qa" ? (
          <div className="mt-4">
            <div className="font-bold text-sm">{cur.q}</div>
            <div className="mt-2 grid gap-2">
              {cur.opts.map((o, i) => (
                <button key={i} onClick={() => { setPicked(i); setShow(true); }} className={`rounded-xl border px-3 py-2 text-left text-sm font-semibold ${show ? (i === cur.ans ? "bg-emerald-50 border-emerald-300" : picked === i ? "bg-red-50 border-red-300" : "bg-zinc-50 opacity-60") : "bg-white hover:bg-zinc-50"}`}>{String.fromCharCode(65 + i)}. {o}</button>
              ))}
            </div>
            {show && <div className={`mt-3 rounded-xl p-3 text-sm ${picked === cur.ans ? "bg-emerald-50 border border-emerald-200" : "bg-amber-50 border border-amber-200"}`}>{picked === cur.ans ? "✅ Benar!" : "❌ Salah —"} {cur.tip}</div>}
          </div>
        ) : (
          <div className="mt-4">
            <div className="text-sm font-black">Dictation — Tulis ulang yang lu dengar:</div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={3} placeholder="Dengerin dulu, tutup script, tulis di sini..." className="mt-2 w-full rounded-xl border-2 border-zinc-900 p-3 text-sm" />
            <button onClick={() => setShow(true)} className="mt-2 w-full rounded-full bg-zinc-900 py-2 text-sm font-black text-white">Cek — bandingin</button>
            {show && input && (
              <div className="mt-2 rounded-xl bg-white border p-3 text-xs">
                <div>Lu tulis: <b>{input}</b></div>
                <div className="mt-1">Script: <b>{cur.text}</b></div>
                <div className="mt-1 text-zinc-500">Skor kasar: {Math.round((input.toLowerCase().split(" ").filter((w) => cur.text.toLowerCase().includes(w)).length / cur.text.split(" ").length) * 100)}% kata kecocokan — 80%+ lulus.</div>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex justify-between">
          <button onClick={() => { setIdx((i) => Math.max(0, i - 1)); setShow(false); setPicked(null); setInput(""); }} className="rounded-full border bg-white px-4 py-2 text-sm font-bold">← Prev</button>
          <button onClick={() => { setIdx((i) => Math.min(passages.length - 1, i + 1)); setShow(false); setPicked(null); setInput(""); }} className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-black text-white">Next →</button>
        </div>
      </motion.div>
    </div>
  );
}
