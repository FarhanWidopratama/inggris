"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Menangkap ?error=... yang mendarat di halaman mana pun
// (misal link konfirmasi email yang kedaluwarsa) lalu menjelaskannya
// dengan bahasa manusia + kasih jalan keluar. Tidak merusak halaman lain:
// kalau tidak ada ?error=, komponen ini tidak render apa-apa.
function NoticeInner() {
  const params = useSearchParams();
  const raw = params.get("error") ?? params.get("error_description");
  if (!raw) return null;

  const text = raw.replace(/\+/g, " ");
  const m = text.toLowerCase();
  const expired = m.includes("expired") || m.includes("invalid") || m.includes("otp");

  return (
    <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm">
        <div className="font-black text-amber-900">
          {expired ? "🔗 Link email kedaluwarsa — santai, gampang benerinnya" : "⚠️ Ada masalah dari link email"}
        </div>
        <p className="mt-1 leading-relaxed text-amber-800">
          {expired
            ? "Link konfirmasi itu cuma berlaku sebentar. Klik tombol di bawah buat kirim link baru, atau langsung login kalau email lu sudah terkonfirmasi."
            : text}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/auth"
            className="rounded-full bg-zinc-900 px-5 py-2 text-xs font-bold text-white hover:bg-black"
          >
            Ke halaman Masuk →
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-amber-300 bg-white px-5 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100"
          >
            Belajar dulu tanpa daftar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorNotice() {
  return (
    <Suspense fallback={null}>
      <NoticeInner />
    </Suspense>
  );
}
