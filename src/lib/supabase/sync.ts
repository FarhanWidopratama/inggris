"use client";

import { createClient } from "./client";
import type { UserProgress } from "../types";

// Fire-and-forget sync, never blocks UI. LocalStorage stays source of truth offline.
export async function syncLessonToSupabase(lessonId: string, score: number, isCompleted = true) {
  try {
    const supabase = createClient();
    if (!supabase) return;
    const { data } = await supabase.auth.getUser();
    const user = data.user;
    if (!user) return;

    // ensure profile exists (needs INSERT policy - see supabase-fix.sql)
    await supabase.from("profiles").upsert({ id: user.id, username: user.email }, { onConflict: "id" });

    await supabase.from("user_progress").upsert(
      {
        user_id: user.id,
        lesson_id: lessonId,
        is_completed: isCompleted,
        score,
        completed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id" }
    );

    // update streak in profile
    const streakRaw = localStorage.getItem("inggris_progress_v1");
    if (streakRaw) {
      const p = JSON.parse(streakRaw) as UserProgress;
      await supabase.from("profiles").update({ streak: p.streak }).eq("id", user.id);
    }
  } catch {
    // offline / RLS fail -> ignore, localStorage tetap aman
  }
}

export async function fetchSupabaseProgress(): Promise<UserProgress | null> {
  try {
    const supabase = createClient();
    if (!supabase) return null;
    const { data } = await supabase.auth.getUser();
    if (!data.user) return null;

    const { data: rows } = await supabase.from("user_progress").select("lesson_id,score,is_completed").eq("user_id", data.user.id);
    const { data: profile } = await supabase.from("profiles").select("streak").eq("id", data.user.id).single();

    if (!rows) return null;
    type Row = { lesson_id: string; score: number | null; is_completed: boolean | null };
    const typed = rows as unknown as Row[];
    const completedLessons = typed.filter((r: Row) => r.is_completed).map((r: Row) => r.lesson_id);
    const scores: Record<string, number> = {};
    typed.forEach((r: Row) => {
      if (typeof r.score === "number") scores[r.lesson_id] = r.score;
    });
    return {
      completedLessons,
      scores,
      streak: (profile?.streak as number) ?? 0,
      lastStudyDate: null,
    };
  } catch {
    return null;
  }
}

export async function pushAllLocalToSupabase(local: UserProgress) {
  try {
    const supabase = createClient();
    if (!supabase) return 0;
    const { data } = await supabase.auth.getUser();
    if (!data.user) return 0;
    let count = 0;
    for (const lessonId of local.completedLessons) {
      const score = local.scores[lessonId] ?? 0;
      await supabase.from("user_progress").upsert(
        { user_id: data.user.id, lesson_id: lessonId, is_completed: true, score, completed_at: new Date().toISOString() },
        { onConflict: "user_id,lesson_id" }
      );
      count++;
    }
    await supabase.from("profiles").upsert({ id: data.user.id, username: data.user.email, streak: local.streak }, { onConflict: "id" });
    return count;
  } catch {
    return 0;
  }
}
