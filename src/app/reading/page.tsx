"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const passages = [
  {
    id: "R1", title: "Work Culture Email", text: "Dear Team, Please find attached the quarterly report. Our teamwork has been excellent. We make decisions together and carry out tasks on time. Although we had a busy month, we achieved our target. Therefore, I want to thank everyone. Best regards, Manager.",
    qs: [
      { q: "What is attached?", opts: ["Quarterly report (correct)", "No file", "Meeting notes", "Invoice"], ans: 0 },
      { q: "Why thank?", opts: ["Achieved target (correct)", "Late", "Error", "Holiday"], ans: 0 },
    ],
  },
  {
    id: "R2", title: "Meeting Notes", text: "In my opinion, communication is key. We deal with clients every day. If we have good communication, we can deal with problems faster. However, if we don't listen, we will make mistakes. So let's practice listening daily.",
    qs: [
      { q: "What is key?", opts: ["Communication (correct)", "Money", "Time", "Boss"], ans: 0 },
      { q: "It in 'If we don't listen, we will...' refers to?", opts: ["We (correct)", "Clients", "Problems", "Money"], ans: 0 },
    ],
  },
  {
    id: "R3", title: "TOEFL Passage — Office", text: "The office is very significant for productivity. Employees who have a clean desk are more consistent. Researchers conducted a study and obtained results that indicate a positive increase when the environment is tidy. This is consistent with previous research.",
    qs: [
      { q: "Main idea?", opts: ["Clean office → productivity (correct)", "Dirty is better", "No effect", "Only salary"], ans: 0 },
      { q: "‘obtain’ closest meaning?", opts: ["get (correct)", "lose", "hide", "make"], ans: 0 },
    ],
  },
  {
    id: "R4", title: "TOEFL Passage — Technology", text: "Although technology has made communication faster, it also requires attention. People who look up information quickly can make better decisions. However, if they rely too much on technology, they may put off real meetings. Therefore, balance is required.",
    qs: [
      { q: "Although technology has..., it also...", opts: ["requires attention (correct)", "is useless", "is slow", "stops"], ans: 0 },
      { q: "Inference: balance is...?", opts: ["Required (correct)", "Not needed", "Impossible", "Bad"], ans: 0 },
    ],
  },
  {
    id: "R5", title: "Full Sim Mix", text: "Skimming is reading quickly for main idea. Scanning is searching for details like numbers or names. For TOEFL, you should skim the first sentence of each paragraph, then scan for the question's keyword. Don't read word by word; check time left and make an inference if needed.",
    qs: [
      { q: "Skimming is for?", opts: ["Main idea (correct)", "Numbers only", "All words", "Nothing"], ans: 0 },
      { q: "Scanning is for?", opts: ["Details (correct)", "Main idea", "All", "None"], ans: 0 },
    ],
  },
];

export default function ReadingPage() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<Record<string, number>>({});
  const [show, setShow] = useState(false);
  const cur = passages[idx];
  const score = cur.qs.filter((qq, i) => picked[`${idx}-${i}`] === qq.ans).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-black tracking-tight">Reading Lab — 5 Passage + Skim/Scan</h1>
      <p className="text-sm text-zinc-600">Bukan baca full. Latih skim (ide) & scan (detail) — timer TOEFL.</p>

      <div className="mt-4 flex gap-2">
        {passages.map((p, i) => (
          <button key={p.id} onClick={() => { setIdx(i); setShow(false); }} className={`rounded-full px-3 py-1.5 text-xs font-black ${i === idx ? "bg-zinc-900 text-white" : "border bg-white"}`}>{p.id}</button>
        ))}
        <span className="ml-auto rounded-full bg-white border px-3 py-1 text-xs font-bold">{idx + 1}/5</span>
      </div>

      <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex items-center gap-2"><span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-black text-white">{cur.id}</span><span className="font-black">{cur.title}</span></div>
        <div className="mt-3 rounded-xl bg-[#fcfbf8] p-4 text-sm leading-relaxed whitespace-pre-wrap">{cur.text}</div>
        <div className="mt-2 text-xs font-bold text-zinc-500">💡 Skim: baca judul + kalimat pertama. Scan: cari angka/nama.</div>

        <div className="mt-4 space-y-3">
          {cur.qs.map((qq, qi) => (
            <div key={qi} className="rounded-xl border border-zinc-100 bg-white p-3">
              <div className="text-sm font-bold">{qi + 1}. {qq.q}</div>
              <div className="mt-2 grid gap-1.5">
                {qq.opts.map((o, oi) => {
                  const key = `${idx}-${qi}`;
                  const isPicked = picked[key] === oi;
                  const isCorrect = oi === qq.ans;
                  let cls = "border-zinc-200 bg-white hover:bg-zinc-50";
                  if (show) {
                    if (isCorrect) cls = "bg-emerald-50 border-emerald-300";
                    else if (isPicked) cls = "bg-red-50 border-red-300";
                    else cls = "opacity-60 bg-zinc-50";
                  } else if (isPicked) cls = "bg-zinc-900 text-white border-zinc-900";
                  return <button key={oi} onClick={() => !show && setPicked({ ...picked, [key]: oi })} className={`rounded-lg border px-3 py-2 text-left text-xs font-bold ${cls}`}>{String.fromCharCode(65 + oi)}. {o}</button>;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={() => setShow(true)} className="flex-1 rounded-full bg-zinc-900 py-2 text-sm font-black text-white">Cek Jawaban →</button>
          <button onClick={() => { setShow(false); setPicked({}); }} className="rounded-full border bg-white px-4 py-2 text-sm font-bold">Ulang</button>
        </div>
        {show && <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-sm font-bold">Skor: {score}/{cur.qs.length} — {score === cur.qs.length ? "Perfect! 🔥" : "Review passage lagi, fokus keyword."}</div>}

        <div className="mt-4 flex justify-between">
          <button onClick={() => { setIdx((i) => Math.max(0, i - 1)); setShow(false); }} className="rounded-full border bg-white px-4 py-2 text-sm font-bold">← Prev</button>
          <button onClick={() => { setIdx((i) => Math.min(passages.length - 1, i + 1)); setShow(false); }} className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-black text-white">Next →</button>
        </div>
      </motion.div>
    </div>
  );
}
