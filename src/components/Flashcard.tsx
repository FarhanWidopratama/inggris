"use client";

import { useState } from "react";
import type { Vocab } from "@/lib/types";

export default function Flashcard({ vocab }: { vocab: Vocab[] }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cur = vocab[idx];

  function next() {
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i + 1) % vocab.length), 150);
  }
  function prev() {
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i - 1 + vocab.length) % vocab.length), 150);
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold tracking-widest text-zinc-500">FLASHCARD • {idx + 1} / {vocab.length}</h3>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Tap untuk balik</span>
      </div>

      <div
        onClick={() => setFlipped(!flipped)}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-zinc-200 bg-[#fcfbf8] p-8 text-center transition hover:border-zinc-300 sm:p-10"
      >
        {!flipped ? (
          <>
            <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">{cur.en}</div>
            <div className="mt-2 text-sm font-mono text-zinc-500">/{cur.pronounce}/</div>
            <div className="mt-6 text-xs font-bold tracking-widest text-zinc-400">KLIK UNTUK LIHAT ARTI →</div>
          </>
        ) : (
          <>
            <div className="text-2xl font-bold text-emerald-700 sm:text-3xl">{cur.id}</div>
            <div className="mt-4 rounded-xl bg-white p-4 text-left text-sm leading-relaxed shadow-sm">
              <div className="font-semibold text-zinc-900">{cur.example}</div>
              <div className="text-zinc-500">{cur.exampleId}</div>
            </div>
          </>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button onClick={prev} className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-zinc-50">
          ← Sebelumnya
        </button>
        <div className="flex gap-1.5">
          {vocab.map((_, i) => (
            <span key={i} className={`h-1.5 w-6 rounded-full transition ${i === idx ? "bg-zinc-900" : "bg-zinc-200"}`} />
          ))}
        </div>
        <button onClick={next} className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-black">
          Lanjut →
        </button>
      </div>
    </div>
  );
}
