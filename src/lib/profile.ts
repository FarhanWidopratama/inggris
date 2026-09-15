"use client";

import { createClient } from "./supabase/client";
import type { AchieveStats } from "./achievements";

export type ProfileRow = {
  id: string;
  username: string | null;
  display_name: string | null;
  avatar: string | null;
  bio: string | null;
  streak: number;
};

export type RecentLesson = { lesson_id: string; score: number | null; completed_at: string | null };

export type ProfileFull = {
  profile: ProfileRow;
  completedCount: number;
  avgScore: number | null;
  recent: RecentLesson[];
  battlesPlayed: number;
  battlesWon: number;
};

// Ambil 1 baris profil. Tahan banting: kalau kolom baru (display_name dll)
// belum ada di DB (migrasi belum di-run), otomatis fallback ke kolom lama.
export async function fetchProfileRow(userId: string): Promise<ProfileRow | null> {
  const supabase = createClient();
  if (!supabase) return null;
  const full = await supabase.from("profiles").select("id,username,display_name,avatar,bio,streak").eq("id", userId).maybeSingle();
  if (!full.error && full.data) {
    const p = full.data as ProfileRow;
    return { ...p, streak: p.streak ?? 0 };
  }
  const basic = await supabase.from("profiles").select("id,username,streak").eq("id", userId).maybeSingle();
  if (basic.error || !basic.data) return null;
  const b = basic.data as { id: string; username: string | null; streak: number };
  return { id: b.id, username: b.username, display_name: null, avatar: "🦊", bio: "", streak: b.streak ?? 0 };
}

export async function fetchProfileFull(userId: string): Promise<ProfileFull | null> {
  const supabase = createClient();
  if (!supabase) return null;
  const profile = await fetchProfileRow(userId);
  if (!profile) return null;

  let completedCount = 0;
  let avgScore: number | null = null;
  let recent: RecentLesson[] = [];
  try {
    const { data } = await supabase
      .from("user_progress")
      .select("lesson_id,score,is_completed,completed_at")
      .eq("user_id", userId)
      .eq("is_completed", true)
      .order("completed_at", { ascending: false })
      .limit(60);
    const rows = (data ?? []) as { lesson_id: string; score: number | null; completed_at: string | null }[];
    completedCount = rows.length;
    const scores = rows.map((r) => r.score).filter((s): s is number => typeof s === "number");
    avgScore = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null;
    recent = rows.slice(0, 5).map((r) => ({ lesson_id: r.lesson_id, score: r.score, completed_at: r.completed_at }));
  } catch {}

  let battlesPlayed = 0;
  let battlesWon = 0;
  try {
    const { data } = await supabase.from("battles").select("id,winner_id,status").or(`creator_id.eq.${userId},opponent_id.eq.${userId}`);
    const list = (data ?? []) as { id: string; winner_id: string | null; status: string }[];
    battlesPlayed = list.length;
    battlesWon = list.filter((b) => b.winner_id === userId).length;
  } catch {}

  return { profile, completedCount, avgScore, recent, battlesPlayed, battlesWon };
}

export function statsFromFull(full: ProfileFull, extra: { attempts?: number; accuracy?: number | null; friendsCount?: number }): AchieveStats {
  return {
    completedCount: full.completedCount,
    streak: full.profile.streak,
    avgScore: full.avgScore,
    attempts: extra.attempts ?? 0,
    accuracy: extra.accuracy ?? null,
    battlesPlayed: full.battlesPlayed,
    battlesWon: full.battlesWon,
    friendsCount: extra.friendsCount ?? 0,
  };
}
