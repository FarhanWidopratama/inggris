import Link from "next/link";
import { levels } from "@/lib/curriculum";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-widest text-emerald-700">
              ● DARI 0 SAMPAI TOEFL & KERJA
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
              Belajar Inggris
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">gak hilang arah.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-600">
              Kurikulum 10 Level yang gua tuangin di web ini. Mulai dari <b>Greeting</b> sampai <b>TOEFL</b>. Tiap hari 1 lesson (15 menit), ada vocab + quiz. Gak bisa loncat level — jadi lu tau persis hari ini belajar apa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/dashboard" className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-bold text-white hover:bg-black">
                Mulai Level 1 →
              </Link>
              <a href="#levels" className="rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold hover:bg-zinc-50">
                Lihat 10 Level
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-zinc-500">
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">✓ 15 menit/hari</span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">✓ Vocab kerja</span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">✓ Quiz + Skor</span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">✓ Supabase Ready (Opsi B)</span>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-zinc-500">HARI INI • LEVEL 1</span>
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">Wajib Mulai Sini</span>
            </div>
            <h3 className="mt-3 text-xl font-bold">Sapa & Perkenalan</h3>
            <p className="text-sm text-zinc-500">Greeting & Introduction • 15 menit</p>
            <div className="mt-4 rounded-2xl bg-[#fcfbf8] p-4">
              <div className="text-xs font-bold tracking-widest text-zinc-500">CONTOH YANG BAKAL LU BISA:</div>
              <div className="mt-2 space-y-1.5 text-sm">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <span className="font-semibold">Hello, my name is Farha.</span> <span className="text-zinc-500">— Halo, nama saya Farha.</span>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <span className="font-semibold">I work as a marketing staff.</span> <span className="text-zinc-500">— Saya kerja sebagai staff marketing.</span>
                </div>
              </div>
            </div>
            <Link href="/learn/1-1" className="mt-4 flex w-full items-center justify-center rounded-full bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-black">
              Buka Lesson 1-1 →
            </Link>
            <p className="mt-2 text-center text-xs text-zinc-500">Langsung bisa, gak perlu login dulu. Progress kesimpen otomatis.</p>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section id="levels" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-extrabold tracking-tight">10 Level — Peta Jalan Lu</h2>
          <span className="hidden text-sm text-zinc-500 sm:inline">Kebuka satu-satu biar gak loncat</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((lvl) => (
            <div key={lvl.id} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white ${lvl.color}`}>{lvl.icon}</span>
                <div>
                  <div className="text-xs font-bold tracking-widest text-zinc-400">LEVEL {lvl.id}</div>
                  <div className="text-sm font-bold">{lvl.title} • {lvl.titleEn}</div>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-zinc-600">{lvl.description}</p>
              <div className="mt-3 text-xs font-semibold text-zinc-500">
                {lvl.id <= 1 ? "✅ Ready — 3 Lesson" : lvl.id <= 3 ? "🔜 Next" : "🔒 Terkunci sampai Level sebelumnya selesai"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cara pakai */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-[24px] bg-zinc-900 p-6 text-white sm:p-8">
          <h3 className="text-lg font-bold">Gimana cara pakainya biar gak hilang arah?</h3>
          <ol className="mt-4 grid gap-3 text-sm leading-relaxed text-zinc-300 sm:grid-cols-3">
            <li className="rounded-2xl bg-white/10 p-4">
              <b className="text-white">1. Buka Dashboard</b> → Liat Level 1 Lesson 1. Jangan buka Level 10 dulu.
            </li>
            <li className="rounded-2xl bg-white/10 p-4">
              <b className="text-white">2. 15 menit/hari</b> → Baca materi → Hafal 10 vocab (flashcard) → Quiz 5 soal.
            </li>
            <li className="rounded-2xl bg-white/10 p-4">
              <b className="text-white">3. Lulus 60%</b> → Baru lesson berikutnya kebuka. Streak jalan tiap hari.
            </li>
          </ol>
          <Link href="/dashboard" className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold text-zinc-900 hover:bg-zinc-100">
            Ke Dashboard →
          </Link>
        </div>
      </section>
    </div>
  );
}
