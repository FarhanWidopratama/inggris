"use client";

import { useParams } from "next/navigation";
import { getLessonById, lessons } from "@/lib/curriculum";
import Flashcard from "@/components/Flashcard";
import Quiz from "@/components/Quiz";
import Link from "next/link";
import { useState, useEffect } from "react";
import { completeLesson, loadProgress } from "@/lib/progress";

export default function LearnPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const lesson = getLessonById(id);
  const [tab, setTab] = useState<"materi" | "vocab" | "quiz">("materi");
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const p = loadProgress();
    setCompleted(p.completedLessons.includes(id));
    setScore(p.scores[id] ?? null);
  }, [id]);

  if (!lesson) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-sm text-zinc-500">Lesson tidak ditemukan.</p>
        <Link href="/dashboard" className="mt-4 inline-block rounded-full bg-zinc-900 px-6 py-2 text-sm font-bold text-white">
          Ke Dashboard
        </Link>
      </div>
    );
  }

  const idx = lessons.findIndex((l) => l.id === id);
  const nextLesson = lessons[idx + 1];

  function handleQuizComplete(finalScore: number) {
    // score is count of correct answers, convert to percent? But quiz returns count
    // We'll store score as count, but completeLesson expects number (we store count)
    const passed = finalScore >= 3; // 60% of 5
    if (passed) {
      completeLesson(id, finalScore);
      setCompleted(true);
      setScore(finalScore);
    } else {
      setScore(finalScore);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <span>›</span>
        <span className="text-zinc-900">Level {lesson.levelId} • {lesson.title}</span>
        {completed && <span className="ml-2 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">SELESAI ✓</span>}
      </div>

      <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{lesson.title}</h1>
      <p className="text-sm font-medium text-zinc-500">{lesson.titleEn} • {lesson.duration} • {lesson.objective}</p>

      {/* Tabs */}
      <div className="mt-6 flex gap-2 overflow-x-auto">
        {[
          ["materi", "📖 Materi"],
          ["vocab", "🔤 Vocab (10)"],
          ["quiz", "📝 Quiz (5)"],
        ].map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k as never)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${tab === k ? "bg-zinc-900 text-white" : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "materi" && (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="rounded-xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
              <b>🎯 Tujuan:</b> {lesson.objective}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">{lesson.content.intro}</p>

            {lesson.content.sections.map((sec, i) => (
              <div key={i} className="mt-8">
                <h3 className="text-base font-extrabold">{sec.heading}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{sec.body}</p>
                <div className="mt-3 grid gap-2">
                  {sec.examples.map((ex, j) => (
                    <div key={j} className="flex flex-col rounded-xl border border-zinc-100 bg-[#fcfbf8] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-semibold text-zinc-900">{ex.en}</span>
                      <span className="text-sm text-zinc-500 sm:text-right">— {ex.id}</span>
                    </div>
                  ))}
                </div>
                {sec.tip && <div className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm leading-relaxed text-emerald-900">💡 {sec.tip}</div>}
              </div>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setTab("vocab")} className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-black">
                Lanjut ke Vocab →
              </button>
              <Link href="/dashboard" className="rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold hover:bg-zinc-50">
                Kembali
              </Link>
            </div>
          </div>
        )}

        {tab === "vocab" && (
          <div className="space-y-4">
            <Flashcard vocab={lesson.vocab} />
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <h4 className="text-sm font-bold">Daftar Vocab Lengkap</h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {lesson.vocab.map((v) => (
                  <div key={v.en} className="rounded-xl border border-zinc-100 bg-[#fcfbf8] p-3">
                    <div className="font-bold">{v.en} <span className="text-xs font-normal text-zinc-500">/{v.pronounce}/</span></div>
                    <div className="text-sm text-emerald-700">{v.id}</div>
                    <div className="mt-1 text-xs text-zinc-500">{v.example} — {v.exampleId}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setTab("quiz")} className="mt-4 w-full rounded-full bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-black sm:w-auto sm:px-8">
                Siap Quiz →
              </button>
            </div>
          </div>
        )}

        {tab === "quiz" && (
          <div>
            {score !== null && completed && (
              <div className="mb-4 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-900">Skor terakhir: {score}/5 — Sudah lulus ✓</div>
            )}
            <Quiz questions={lesson.quiz} onComplete={handleQuizComplete} />
            {completed && nextLesson && (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <p className="text-sm font-bold text-emerald-900">🎉 Lesson selesai! Lanjut?</p>
                <Link href={`/learn/${nextLesson.id}`} className="mt-3 inline-flex rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-black">
                  Ke {nextLesson.title} →
                </Link>
              </div>
            )}
            {!completed && <p className="mt-3 text-center text-xs text-zinc-500">Lulus 3/5 (60%) untuk membuka lesson berikutnya.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
