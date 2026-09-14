"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Vocab } from "@/lib/types";
import { review } from "@/lib/srs";
import { useEffect } from "react";

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

export default function Flashcard({ vocab, lessonId }: { vocab: Vocab[]; lessonId?: string }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState<"flip" | "recall" | "dictation">("flip");
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const cur = vocab[idx];

  function next() {
    setFlipped(false);
    setFeedback(null);
    setInput("");
    setTimeout(() => setIdx((i) => (i + 1) % vocab.length), 220);
  }
  function prev() {
    setFlipped(false);
    setFeedback(null);
    setInput("");
    setTimeout(() => setIdx((i) => (i - 1 + vocab.length) % vocab.length), 220);
  }
  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.92;
    window.speechSynthesis.speak(u);
  }
  function checkRecall() {
    const ok = input.trim().toLowerCase() === cur.en.toLowerCase();
    const key = lessonId ? `${lessonId}::${cur.en}` : cur.en;
    review(key, ok ? 2 : 0);
    setFeedback(ok ? `✅ Benar! ${cur.en} — /${cur.pronounce}/ → SRS +3 hari` : `❌ Hampir! Kunci: ${cur.en} /${cur.pronounce}/ — gua jadwal besok lagi biar nempel`);
  }

  return (
    <div className="rounded-[20px] border border-zinc-200 bg-white p-4 sm:p-5 sm:sm:p-6" style={{ perspective: isMobile ? 800 : 1200 }}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h3 className="text-xs font-black tracking-widest text-zinc-500">FLASHCARD 3D • {idx + 1} / {vocab.length}</h3>
        <div className="ml-auto flex gap-1.5">
          {(["flip", "recall", "dictation"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setFeedback(null); setInput(""); setFlipped(false); }}
              className={`min-h-[36px] rounded-full px-3.5 py-1.5 text-xs font-black ${mode === m ? "bg-zinc-900 text-white shadow" : "border bg-white text-zinc-600 hover:bg-zinc-50"}`}
            >
              {m === "flip" ? "3D Flip" : m === "recall" ? "⌨️ Ketik" : "🎧 Dictation"}
            </button>
          ))}
        </div>
      </div>

      {mode === "flip" ? (
        <div className="relative h-[240px] sm:h-[280px]" style={{ perspective: isMobile ? 800 : 1200 }}>
          <motion.div
            onClick={() => setFlipped(!flipped)}
            className="relative h-full w-full cursor-pointer touch-manipulation select-none"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: isMobile ? 0.55 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={isMobile ? undefined : { scale: 1.01, rotateX: flipped ? 180 : 2 }}
            whileTap={isMobile ? { scale: 0.98 } : undefined}
          >
            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-[18px] border-2 border-dashed border-zinc-200 bg-gradient-to-br from-[#fcfbf8] to-white p-5 sm:p-8 text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-emerald-100/50 blur-[16px] sm:h-20 sm:w-20 sm:blur-[18px]" />
              <div className="absolute -left-6 -bottom-6 h-16 w-16 rounded-full bg-sky-100/40 blur-[16px] sm:h-20 sm:w-20 sm:blur-[18px]" />
              <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} className="relative text-2xl font-black tracking-tight sm:text-4xl">{cur.en}</motion.div>
              <div className="relative mt-1.5 font-mono text-xs sm:text-sm text-zinc-500">/{cur.pronounce}/</div>
              <div className="relative mt-4 rounded-full bg-zinc-900 px-4 py-2 text-xs font-black tracking-widest text-white sm:mt-6 sm:px-4 sm:py-1.5">TAP UNTUK 3D FLIP →</div>
              <div className="relative mt-1.5 text-[10px] font-bold text-zinc-400 sm:text-xs">{isMobile ? "tap card" : "hover untuk tilt"}</div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[18px] border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-6 text-center shadow-[0_12px_32px_rgba(0,0,0,0.08)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
              <div className="text-xl font-black text-emerald-700 sm:text-3xl">{cur.id}</div>
              <div className="mt-3 w-full rounded-xl bg-white p-3 sm:p-4 text-left text-sm leading-relaxed shadow-sm">
                <div className="font-semibold text-zinc-900 line-clamp-2 sm:line-clamp-none">{cur.example}</div>
                <div className="text-zinc-500 line-clamp-2 sm:line-clamp-none">{cur.exampleId}</div>
              </div>
              <div className="mt-3 text-xs font-bold tracking-widest text-emerald-600">TAP LAGI UNTUK KEMBALI</div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="rounded-[18px] border-2 border-zinc-900 bg-zinc-900 p-5 text-white">
          <div className="text-xs font-bold tracking-widest opacity-70">{mode === "recall" ? "KETIK — Active Recall (lawan lupa)" : "DICTATION — Dengar → Tulis"}</div>
          <div className="mt-2 rounded-xl bg-white p-4 text-center">
            {mode === "recall" ? (
              <>
                <div className="text-xs text-zinc-500">Arti ID → Ketik EN</div>
                <div className="text-xl font-black text-emerald-700">{cur.id}</div>
                <div className="text-xs text-zinc-500">{cur.exampleId}</div>
              </>
            ) : (
              <>
                <div className="text-xs text-zinc-500">Dengerin & tulis tanpa liat</div>
                <button onClick={() => speak(cur.en)} className="mt-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-black text-white">🔊 Putar: *** →</button>
                <div className="mt-1 text-xs text-zinc-400">Tutup mata, fokus EI em /{cur.pronounce}/</div>
              </>
            )}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkRecall()}
            placeholder={mode === "recall" ? `Ketik: ${cur.id} → ...` : "Tulis yang kamu dengar..."}
            className="mt-3 w-full rounded-xl border-2 border-white bg-white px-4 py-3 text-base font-bold text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:text-sm"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <div className="mt-3 flex gap-2">
            <button onClick={checkRecall} className="min-h-[44px] flex-1 rounded-full bg-emerald-500 py-2.5 text-sm font-black text-white hover:bg-emerald-600 active:scale-[0.98]">Cek — SRS →</button>
            <button onClick={() => speak(cur.en)} className="min-h-[44px] rounded-full bg-white px-4 py-2.5 text-xs font-black text-zinc-900">🔊 Native</button>
          </div>
          {feedback && <div className={`mt-3 rounded-xl p-3 text-sm font-bold ${feedback.startsWith("✅") ? "bg-emerald-100 text-emerald-900" : "bg-red-100 text-red-900"}`}>{feedback}</div>}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between gap-2 sm:gap-3">
        <motion.button whileHover={isMobile ? undefined : { x: -3 }} whileTap={{ scale: 0.96 }} onClick={prev} className="min-h-[44px] rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-bold hover:bg-zinc-50 sm:px-5">
          ← Prev
        </motion.button>
        <div className="flex gap-1 sm:gap-1.5">
          {vocab.map((_, i) => (
            <motion.span key={i} animate={{ scale: i === idx ? 1.15 : 1, opacity: i === idx ? 1 : 0.5 }} className={`h-1.5 w-4 sm:w-6 rounded-full ${i === idx ? "bg-zinc-900" : "bg-zinc-200"}`} />
          ))}
        </div>
        <motion.button whileHover={isMobile ? undefined : { x: 3, scale: 1.03 }} whileTap={{ scale: 0.96 }} onClick={next} className="min-h-[44px] rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-black text-white shadow-md hover:bg-black sm:px-5">
          Lanjut →
        </motion.button>
      </div>

      {/* progress dots 3D bar */}
      <div className="mt-4 flex gap-1">
        {vocab.map((_, i) => (
          <motion.div key={i} className="h-1 flex-1 rounded-full bg-zinc-100 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: i <= idx ? "100%" : "0%" }} transition={{ duration: 0.4, delay: i * 0.03 }} className="h-full bg-gradient-to-r from-emerald-500 to-sky-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
