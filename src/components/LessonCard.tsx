import Link from "next/link";
import type { Lesson } from "@/lib/types";

export default function LessonCard({ lesson, completed, locked }: { lesson: Lesson; completed?: boolean; locked?: boolean }) {
  return (
    <Link
      href={locked ? "#" : `/learn/${lesson.id}`}
      className={`group relative flex flex-col rounded-2xl border bg-white p-5 transition ${
        locked ? "opacity-60 cursor-not-allowed border-dashed" : "hover:shadow-md hover:-translate-y-0.5 border-zinc-200"
      }`}
      onClick={(e) => locked && e.preventDefault()}
    >
      {completed && <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white">SELESAI ✓</span>}
      {locked && <span className="absolute right-4 top-4 rounded-full bg-zinc-200 px-2.5 py-1 text-xs font-bold text-zinc-600">🔒 TERKUNCI</span>}
      <div className="mb-2 text-xs font-bold tracking-widest text-zinc-400">LEVEL {lesson.levelId} • {lesson.duration}</div>
      <h3 className="text-base font-semibold leading-tight">{lesson.title}</h3>
      <p className="text-sm text-zinc-500">{lesson.titleEn}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{lesson.objective}</p>
      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-zinc-900">
        <span className={`rounded-full px-3 py-1.5 ${locked ? "bg-zinc-100 text-zinc-400" : "bg-zinc-900 text-white group-hover:bg-black"}`}>
          {locked ? "Selesaikan Level sebelumnya" : completed ? "Ulangi →" : "Mulai Belajar →"}
        </span>
        <span className="text-zinc-400">{lesson.vocab.length} vocab • {lesson.quiz.length} soal</span>
      </div>
    </Link>
  );
}
