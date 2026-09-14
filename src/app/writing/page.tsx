"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const templates = [
  { id: "email1", label: "Email: Request file", text: "Subject: Request for Report\n\nDear Mr. Andi,\n\nI hope you are well. Could you please send me the monthly report? I need it by Friday.\n\nThank you.\nBest regards,\nFarha" },
  { id: "email2", label: "Email: Apologize late", text: "Subject: Apology for Delay\n\nDear Team,\n\nI apologize for the delay. I was busy yesterday. I will send the report today at 5 PM.\n\nThank you for your understanding.\nBest regards,\nFarha" },
  { id: "chat", label: "Slack: Quick check", text: "Hi team, please check the file I sent. Let me know if you need anything. Thanks!" },
];

function correct(text: string) {
  const issues: string[] = [];
  if (!text.trim()) return { score: 0, issues: ["Tulis dulu bro!"], fixed: text };
  if (text[0] !== text[0]?.toUpperCase()) issues.push("Huruf pertama harus kapital (Dear, Hi).");
  if (!text.includes(".")) issues.push("Tambah titik (.) di akhir kalimat biar formal.");
  if (text.toLowerCase().includes(" he go ") || text.includes(" He go")) issues.push("He go → He goes (S-V agreement, pakai s).");
  if (text.includes(" i ")) issues.push("I selalu kapital: I (bukan i).");
  if (!/Best regards|Thank you|Please/i.test(text)) issues.push("Tambah sopan: Please / Thank you / Best regards.");
  if (text.length < 30) issues.push("Terlalu pendek — tambah 1 kalimat detail biar jelas.");
  const score = Math.max(0, 100 - issues.length * 18);
  let fixed = text
    .replace(/\bi\b/g, "I")
    .replace(/ he go\b/gi, " he goes")
    .replace(/^\s*[a-z]/, (m) => m.toUpperCase());
  if (!fixed.trim().endsWith(".") && !fixed.trim().endsWith("!")) fixed += ".";
  return { score, issues: issues.length ? issues : ["✅ Keren! Formal, kapital bener, sopan. 90%+ mirip native."], fixed };
}

export default function WritingPage() {
  const [tpl, setTpl] = useState(templates[0].text);
  const [input, setInput] = useState(templates[0].text);
  const [res, setRes] = useState<ReturnType<typeof correct> | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-black tracking-tight">Writing Lab 3D — Ketik Email → Koreksi Langsung</h1>
      <p className="text-sm text-zinc-600">Tulis email kerja, gua koreksi kayak guru (bukan AI ngasal). Fokus: kapital, S-V agreement, sopan.</p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {templates.map((t) => (
          <button key={t.id} onClick={() => { setTpl(t.text); setInput(t.text); setRes(null); }} className="whitespace-nowrap rounded-full border bg-white px-4 py-2 text-xs font-black hover:bg-zinc-50">{t.label}</button>
        ))}
        <button onClick={() => { setInput(""); setRes(null); }} className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-black text-white">Kosongkan → tulis sendiri</button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <div className="text-xs font-black tracking-widest text-zinc-500">TULIS DI SINI (EI em gak perlu)</div>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={12} className="mt-2 w-full rounded-xl border-2 border-zinc-900 p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Ketuk template di atas atau tulis email lu..." />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => setRes(correct(input))} className="mt-3 w-full rounded-full bg-zinc-900 py-3 text-sm font-black text-white">✨ Koreksi Sekarang →</motion.button>
          <div className="mt-2 text-xs text-zinc-500">Tips: pakai Subject, Dear ..., Please, Thank you, Best regards.</div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-[#fcfbf8] p-4">
          <div className="text-xs font-black tracking-widest text-zinc-500">HASIL KOREKSI GURU</div>
          {!res ? (
            <div className="mt-4 rounded-xl bg-white p-6 text-center text-sm text-zinc-500">Klik Koreksi — nanti muncul skor + apa yang salah + versi bener.</div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
              <div className={`rounded-xl p-3 text-center font-black text-white ${res.score >= 80 ? "bg-emerald-500" : res.score >= 50 ? "bg-amber-500" : "bg-red-500"}`}>{res.score}% — {res.score >= 80 ? "Siap kirim ke bos! 🔥" : res.score >= 50 ? "Lumayan, perbaiki dikit" : "Butuh benerin lagi"}</div>
              <div className="mt-3 space-y-2">
                {res.issues.map((iss, i) => (
                  <div key={i} className="rounded-lg bg-white p-2 text-xs font-semibold border">{i + 1}. {iss}</div>
                ))}
              </div>
              <div className="mt-3 rounded-xl bg-white p-3">
                <div className="text-xs font-black">Versi Lebih Baik:</div>
                <pre className="mt-1 whitespace-pre-wrap font-mono text-xs leading-relaxed">{res.fixed}</pre>
                <button onClick={() => { navigator.clipboard.writeText(res.fixed); }} className="mt-2 rounded-full border bg-white px-3 py-1 text-xs font-bold">Copy →</button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
