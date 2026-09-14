import { lessons } from "@/lib/curriculum";

const rules = [
  { title: "1. To Be: am/is/are", rum: "I AM / He IS / You ARE", ex: "I am ready. She is busy. They are here.", lvl: "1-3" },
  { title: "2. Simple Present", rum: "S + V1 ( + s untuk he/she)", ex: "I work at 9. He works at 9.", lvl: "3-1" },
  { title: "3. Simple Past", rum: "S + V2", ex: "I went yesterday. She was busy.", lvl: "4-1" },
  { title: "4. Will Future", rum: "S + will + V1", ex: "I will call you.", lvl: "5-1" },
  { title: "5. Going to", rum: "S + am/is/are + going to + V1", ex: "I am going to meet.", lvl: "5-2" },
  { title: "6. Tanya What/Where", rum: "What/Where + do/does/did + S + V1", ex: "Where do you work?", lvl: "2-4" },
  { title: "7. Negatif don't/doesn't", rum: "I don't / He doesn't + V1", ex: "I don't work Sunday.", lvl: "2-5" },
  { title: "8. Have/Has", rum: "I have / She has + noun", ex: "I have 2 books.", lvl: "2-2" },
  { title: "9. Polite Request", rum: "Could you please + V1?", ex: "Could you send file?", lvl: "6-4" },
  { title: "10. Email Formal", rum: "Dear ..., Please find ..., Regards", ex: "Best regards, Farha", lvl: "6-1" },
  { title: "11. Meeting Opini", rum: "In my opinion, I think...", ex: "In my opinion we should...", lvl: "7-1" },
  { title: "12. S-V Agreement (TOEFL)", rum: "He goes (s), They go", ex: "He goes, They go", lvl: "8-1" },
  { title: "13. Clause Although/Because", rum: "Although + clause, ...", ex: "Although rain, I go.", lvl: "8-2" },
  { title: "14. Preposisi", rum: "at 9 o'clock / on Monday / in June", ex: "Meet at 9 on Monday", lvl: "8-4" },
  { title: "15. Article", rum: "a/an (umum) vs the (spesifik)", ex: "a book vs the book", lvl: "8-5" },
  { title: "16. Listening Keyword", rum: "Dengar who/what/where", ex: "Man: ... Woman: where?", lvl: "9-1" },
  { title: "17. Skimming", rum: "Baca judul + kalimat pertama", ex: "Main idea = kalimat 1", lvl: "10-1" },
  { title: "18. Scanning", rum: "Cari angka/nama cepat", ex: "Find 2024, John", lvl: "10-2" },
  { title: "19. Conditional If", rum: "If I were you, I would...", ex: "If I were you, I would join.", lvl: "8-2" },
  { title: "20. Passive Voice", rum: "is/are + V3 (is done)", ex: "Report is done by team.", lvl: "8-3" },
  { title: "21. Reported Speech", rum: "He said he was busy", ex: "Direct: I am busy → He said he was busy", lvl: "8-3" },
  { title: "22. Relative Clause", rum: "which/that/who + clause", ex: "Book that I read is good.", lvl: "8-2" },
  { title: "23. Phrasal Verbs", rum: "look up / carry out / deal with", ex: "I look up a word, carry out task", lvl: "6-3" },
  { title: "24. Gerund vs Infinitive", rum: "like doing vs want to do", ex: "I like working, I want to work", lvl: "3-2" },
  { title: "25. Comparison", rum: "bigger, biggest, more...than", ex: "Bigger than, the biggest", lvl: "3-5" },
  { title: "26. Perfect Tenses", rum: "have/has + V3 (have gone)", ex: "I have gone to Bali.", lvl: "8-3" },
  { title: "27. TOEFL Trap: Double Subject", rum: "My friend he is... (SALAH)", ex: "My friend is kind (benar, tanpa he)", lvl: "8-6" },
  { title: "28. Collocation", rum: "make a decision (bukan do)", ex: "make, do, take + noun", lvl: "6-3" },
];

export default function GrammarPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <h1 className="text-2xl font-black tracking-tight">Grammar Wajib — 28 Rumus 1 Baris Fasih</h1>
      <p className="text-sm text-zinc-600">18 basic + 10 fasih (conditional, passive, phrasal, perfect). Hafal ini = TOEFL 500+ & email kerja lancar. Klik kartu → buka lesson.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {rules.map((r) => (
          <a key={r.title} href={`/learn/${r.lvl}`} className="rounded-2xl border border-zinc-200 bg-white p-4 hover:shadow-md hover:-translate-y-1 transition">
            <div className="flex items-center gap-2"><span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-black text-white">{r.lvl}</span><span className="text-xs font-bold text-zinc-500">Hafal</span></div>
            <div className="mt-2 font-black">{r.title}</div>
            <div className="mt-1 rounded-xl bg-amber-50 p-2 text-sm font-bold">RUMUS: {r.rum}</div>
            <div className="mt-2 text-xs text-zinc-600">Contoh: {r.ex}</div>
          </a>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-zinc-900 p-6 text-white">
        <div className="font-black">Cara pakai:</div>
        <div className="text-sm text-zinc-300">1. Hafal 28 rumus (18 basic + 10 pro) 2. Buka lesson terkait 3. Quiz 5 soal per rumus 4. Salah → lihat Record → ErrorReview.</div>
        <div className="mt-2 text-xs text-zinc-400">Total 1500 vocab (600 lesson + 900 kolokasi) + 28 rumus = fasih.</div>
      </div>
    </div>
  );
}
