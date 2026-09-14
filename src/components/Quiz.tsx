"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuizQuestion } from "@/lib/types";

export default function Quiz({ questions, onComplete }: { questions: QuizQuestion[]; onComplete?: (score: number) => void }) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const cur = questions[idx];

  function choose(i: number) {
    if (showResult) return;
    setPicked(i);
    setShowResult(true);
    if (i === cur.answer) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= questions.length) {
      const finalScore = score + (picked === cur.answer && showResult ? 0 : 0); // already counted
      // score is up-to-date because we incremented synchronously before
      setDone(true);
      onComplete?.(score + (picked === cur.answer ? 0 : 0));
      // Actually recalc: count correct answers
      let calc = 0;
      // We don't have history, just use state score (which includes current if correct)
      // But state update async, so compute:
      // simpler: we already updated score, use it
      // To avoid async issue, compute directly:
      // We'll not rely on state, compute final as score (which is already correct after last answer)
      // Trigger complete with that score
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
    setShowResult(false);
  }

  if (done) {
    const percent = Math.round((score / questions.length) * 100);
    const passed = percent >= 60;
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center">
        <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl ${passed ? "bg-emerald-100" : "bg-amber-100"}`}>
          {passed ? "🎉" : "💪"}
        </div>
        <h3 className="mt-4 text-2xl font-extrabold">{passed ? "Keren! Lulus!" : "Hampir! Coba lagi"}</h3>
        <p className="mt-2 text-zinc-600">
          Skor kamu <span className="font-bold text-zinc-900">{score}/{questions.length}</span> ({percent}%)
        </p>
        <p className="mt-1 text-sm text-zinc-500">{passed ? "Lesson ini selesai. Lanjut ke lesson berikutnya!" : "Minimal 60% untuk lulus. Ulangi quiznya ya."}</p>
        <button onClick={() => { setIdx(0); setPicked(null); setShowResult(false); setScore(0); setDone(false); }} className="mt-6 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold hover:bg-zinc-50">
          Ulangi Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm" style={{ perspective: 1000 }}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-100/40 blur-[24px]" />
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-black tracking-widest text-zinc-500">QUIZ 3D • {idx + 1} / {questions.length}</span>
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-black text-white shadow">Skor: {score}</span>
      </div>

      <motion.h4 key={idx} initial={{ x: 18, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="text-lg font-black leading-snug">{cur.question}</motion.h4>
      {cur.questionId && <p className="text-sm font-medium text-zinc-500">{cur.questionId}</p>}

      <div className="mt-5 grid gap-2.5">
        {cur.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === cur.answer;
          let cls = "border-zinc-200 bg-white hover:bg-zinc-50";
          if (showResult) {
            if (isCorrect) cls = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-[0_6px_18px_rgba(16,185,129,0.18)]";
            else if (isPicked && !isCorrect) cls = "border-red-400 bg-red-50 text-red-900";
            else cls = "border-zinc-200 bg-zinc-50 opacity-60";
          } else if (isPicked) cls = "border-zinc-900 bg-zinc-900 text-white shadow-md";

          return (
            <motion.button
              key={i}
              onClick={() => choose(i)}
              whileHover={!showResult ? { scale: 1.015, rotateX: 2, y: -2 } : undefined}
              whileTap={!showResult ? { scale: 0.98 } : undefined}
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${cls}`}
            >
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5 text-xs font-black">{String.fromCharCode(65 + i)}</span>
              {opt}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className={`mt-4 rounded-xl p-4 text-sm ${picked === cur.answer ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-amber-50 text-amber-900 border border-amber-200"}`}>
            <div className="font-black">{picked === cur.answer ? "✓ Benar! +10 XP" : "✗ Kurang tepat"}</div>
            <div className="mt-1 leading-relaxed">{cur.explanation}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex justify-end">
        {showResult && (
          <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }} onClick={() => {
            if (idx + 1 >= questions.length) {
              const finalScore = score;
              setDone(true);
              onComplete?.(finalScore);
            } else {
              next();
            }
          }} className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-black text-white shadow-[0_10px_20px_rgba(0,0,0,0.16)] hover:bg-black">
            {idx + 1 >= questions.length ? "Lihat Hasil 3D →" : "Lanjut →"}
          </motion.button>
        )}
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-100">
        <motion.div initial={{ width: 0 }} animate={{ width: `${((idx + (showResult ? 1 : 0)) / questions.length) * 100}%` }} className="h-full bg-gradient-to-r from-emerald-500 to-sky-500" />
      </div>
    </div>
  );
}
