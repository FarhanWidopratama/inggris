"use client";

import { useState } from "react";
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
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold tracking-widest text-zinc-500">QUIZ • {idx + 1} / {questions.length}</span>
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold text-white">Skor: {score}</span>
      </div>

      <h4 className="text-lg font-semibold leading-snug">{cur.question}</h4>
      {cur.questionId && <p className="text-sm text-zinc-500">{cur.questionId}</p>}

      <div className="mt-5 grid gap-2.5">
        {cur.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === cur.answer;
          let cls = "border-zinc-200 bg-white hover:bg-zinc-50";
          if (showResult) {
            if (isCorrect) cls = "border-emerald-500 bg-emerald-50 text-emerald-900";
            else if (isPicked && !isCorrect) cls = "border-red-400 bg-red-50 text-red-900";
            else cls = "border-zinc-200 bg-zinc-50 opacity-60";
          } else if (isPicked) cls = "border-zinc-900 bg-zinc-900 text-white";

          return (
            <button key={i} onClick={() => choose(i)} className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${cls}`}>
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5 text-xs font-bold">{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className={`mt-4 rounded-xl p-4 text-sm ${picked === cur.answer ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
          <div className="font-bold">{picked === cur.answer ? "✓ Benar!" : "✗ Kurang tepat"}</div>
          <div className="mt-1 leading-relaxed">{cur.explanation}</div>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        {showResult && (
          <button onClick={() => {
            if (idx + 1 >= questions.length) {
              const finalScore = score; // score already includes current correct if any (since we setScore earlier)
              setDone(true);
              onComplete?.(finalScore);
            } else {
              next();
            }
          }} className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-black">
            {idx + 1 >= questions.length ? "Lihat Hasil →" : "Lanjut →"}
          </button>
        )}
      </div>
    </div>
  );
}
