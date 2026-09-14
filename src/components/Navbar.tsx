"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { loadProgress } from "@/lib/progress";

export default function Navbar() {
  const pathname = usePathname();
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const p = loadProgress();
    setStreak(p.streak);
    setCompleted(p.completedLessons.length);
  }, [pathname]);

  const linkCls = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${pathname === href ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white">E0</span>
          <span className="text-sm font-semibold tracking-tight">Inggris Dari 0</span>
          <span className="hidden rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold tracking-widest text-emerald-700 sm:inline">10 LEVEL</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/dashboard" className={linkCls("/dashboard")}>
            Dashboard
          </Link>
          <Link href="/speaking" className={linkCls("/speaking")}>
            Speaking 3D
          </Link>
          <Link href="/dashboard#levels" className="hidden sm:inline rounded-full px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100">
            Level
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold">
            <span>🔥</span> {streak} streak
          </div>
          <div className="flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-bold text-white">
            ✓ {completed}/10
          </div>
        </div>
      </div>
    </header>
  );
}
