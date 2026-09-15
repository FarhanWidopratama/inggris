"use client";

export type AchieveStats = {
  completedCount: number;
  streak: number;
  avgScore: number | null; // rata-rata skor quiz (skala 0-5), null kalau belum ada data
  attempts: number; // jumlah soal yang pernah dikerjakan (progres lokal, profil sendiri)
  accuracy: number | null; // 0-1, null kalau belum ada data
  battlesPlayed: number;
  battlesWon: number;
  friendsCount: number;
};

export type Achievement = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  unlocked: boolean;
  hint: string; // cara dapetin kalau belum kebuka
};

export function computeAchievements(s: AchieveStats): Achievement[] {
  const defs: Omit<Achievement, "unlocked">[] = [
    { id: "langkah-pertama", icon: "🌱", title: "Langkah Pertama", desc: "Selesaikan 1 lesson", hint: "Selesaikan 1 lesson di Dashboard" },
    { id: "semangat-10", icon: "📚", title: "Semangat 10", desc: "Selesaikan 10 lesson", hint: `Kurang ${Math.max(0, 10 - s.completedCount)} lesson lagi` },
    { id: "setengah-jalan", icon: "📖", title: "Setengah Jalan", desc: "Selesaikan 30 lesson", hint: `Kurang ${Math.max(0, 30 - s.completedCount)} lesson lagi` },
    { id: "lulus-60", icon: "🎓", title: "Lulus 60", desc: "Selesaikan semua 60 lesson", hint: `Kurang ${Math.max(0, 60 - s.completedCount)} lesson lagi` },
    { id: "streak-3", icon: "🔥", title: "Api Kecil", desc: "Belajar 3 hari beruntun", hint: "Buka web + selesaikan 1 soal tiap hari" },
    { id: "streak-7", icon: "🔥", title: "Seminggu Penuh", desc: "Belajar 7 hari beruntun", hint: `Streak sekarang ${s.streak} hari` },
    { id: "streak-30", icon: "🌋", title: "Gunung Api", desc: "Belajar 30 hari beruntun", hint: `Streak sekarang ${s.streak} hari` },
    { id: "bintang-quiz", icon: "⭐", title: "Bintang Quiz", desc: "Rata-rata nilai ≥ 4 dari 5", hint: "Kerjakan quiz dengan teliti, boleh ngulang" },
    { id: "penembak-jitu", icon: "🎯", title: "Penembak Jitu", desc: "Akurasi jawaban ≥ 80%", hint: "Jawab 20+ soal dengan benar 80%" },
    { id: "battle-pertama", icon: "⚔️", title: "Turun Arena", desc: "Main 1 quiz battle", hint: "Tantang teman di halaman Friends" },
    { id: "juara-battle", icon: "🏆", title: "Juara Battle", desc: "Menang 1 quiz battle", hint: "Menangkan 1 battle lawan teman" },
    { id: "punya-temen", icon: "💑", title: "Punya Temen", desc: "Punya 1 teman belajar", hint: "Add teman di halaman Friends" },
  ];

  const checks: Record<string, boolean> = {
    "langkah-pertama": s.completedCount >= 1,
    "semangat-10": s.completedCount >= 10,
    "setengah-jalan": s.completedCount >= 30,
    "lulus-60": s.completedCount >= 60,
    "streak-3": s.streak >= 3,
    "streak-7": s.streak >= 7,
    "streak-30": s.streak >= 30,
    "bintang-quiz": (s.avgScore ?? 0) >= 4,
    "penembak-jitu": (s.accuracy ?? 0) >= 0.8 && s.attempts >= 20,
    "battle-pertama": s.battlesPlayed >= 1,
    "juara-battle": s.battlesWon >= 1,
    "punya-temen": s.friendsCount >= 1,
  };

  return defs.map((d) => ({ ...d, unlocked: !!checks[d.id] }));
}

// Nama yang ramah ditampilin: display_name > username > potongan email
export function displayNameOf(p: { display_name?: string | null; username?: string | null } | null): string {
  if (!p) return "Teman";
  if (p.display_name && p.display_name.trim()) return p.display_name.trim();
  const u = (p.username ?? "").trim();
  if (!u) return "Teman";
  if (u.includes("@")) return u.split("@")[0];
  return u;
}
