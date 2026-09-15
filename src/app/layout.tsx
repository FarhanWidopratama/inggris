import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthErrorNotice from "@/components/AuthErrorNotice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inggris Dari 0 — Belajar buat Kerja & TOEFL",
  description: "Website belajar bahasa Inggris dari 0 sampai jago. Terstruktur 10 Level, dari greeting sampai TOEFL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f8f7f4] text-zinc-900">
        <Navbar />
        <AuthErrorNotice />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white py-6 text-center text-sm text-zinc-500">
          Dibuat untuk belajar — Inggris Dari 0 • Supabase + Next.js • Deploy di Vercel
        </footer>
      </body>
    </html>
  );
}
