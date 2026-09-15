"use client";

import { createClient } from "./supabase/client";
import { lessons } from "./curriculum";

export type BattleStatus = "waiting" | "active" | "finished";

export type BattleQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Battle = {
  id: string;
  creator_id: string;
  opponent_id: string;
  lesson_id: string;
  questions: BattleQuestion[];
  status: BattleStatus;
  scores: Record<string, number>;
  progress: Record<string, number>;
  finished: Record<string, boolean>;
  winner_id: string | null;
  created_at: string;
};

function cleanOptions(options: string[]): string[] {
  return options.map((o) => o.replace(/\s*\(correct\)\s*/gi, "").trim());
}

export function battleLessons() {
  return lessons.filter((l) => l.quiz && l.quiz.length >= 3).slice(0, 12);
}

export async function createBattle(opponentId: string, lessonId: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { data } = await supabase.auth.getUser();
  const me = data.user;
  if (!me) throw new Error("Login dulu di /auth");
  if (me.id === opponentId) throw new Error("Itu diri lu sendiri 😅");
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) throw new Error("Lesson nggak ketemu");
  const questions: BattleQuestion[] = lesson.quiz.slice(0, 5).map((q) => ({
    id: q.id,
    question: q.question,
    options: cleanOptions(q.options),
    answer: q.answer,
    explanation: q.explanation,
  }));
  const { data: row, error } = await supabase
    .from("battles")
    .insert({
      creator_id: me.id,
      opponent_id: opponentId,
      lesson_id: lessonId,
      questions,
      status: "waiting",
      scores: { [me.id]: 0 },
      progress: { [me.id]: 0 },
      finished: {},
    })
    .select("id")
    .single();
  if (error) throw error;
  return (row as { id: string }).id;
}

export async function listBattles() {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { data } = await supabase.auth.getUser();
  const me = data.user;
  if (!me) throw new Error("Login dulu di /auth");
  const { data: rows, error } = await supabase
    .from("battles")
    .select("*")
    .or(`creator_id.eq.${me.id},opponent_id.eq.${me.id}`)
    .order("created_at", { ascending: false })
    .limit(10);
  if (error) throw error;
  return { me, battles: (rows ?? []) as unknown as Battle[] };
}

export async function getBattle(id: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error("Login dulu di /auth");
  const { data, error } = await supabase.from("battles").select("*").eq("id", id).single();
  if (error) throw error;
  return { me: auth.user, battle: data as unknown as Battle };
}

export async function acceptBattle(id: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error("Login dulu");
  // set active + pastikan key skor lawan ada
  const { data: row, error: readErr } = await supabase.from("battles").select("*").eq("id", id).single();
  if (readErr) throw readErr;
  const b = row as unknown as Battle;
  const scores = { ...(b.scores ?? {}), [auth.user.id]: b.scores?.[auth.user.id] ?? 0 };
  const progress = { ...(b.progress ?? {}), [auth.user.id]: b.progress?.[auth.user.id] ?? 0 };
  const { error } = await supabase.from("battles").update({ status: "active", scores, progress }).eq("id", id);
  if (error) throw error;
}

export async function updateBattleProgress(id: string, answered: number, score: number) {
  const supabase = createClient();
  if (!supabase) return;
  const { data: auth } = await supabase.auth.getUser();
  const me = auth.user;
  if (!me) return;
  const { data: row } = await supabase.from("battles").select("scores,progress").eq("id", id).single();
  const cur = (row ?? {}) as { scores?: Record<string, number>; progress?: Record<string, number> };
  const scores = { ...(cur.scores ?? {}), [me.id]: score };
  const progress = { ...(cur.progress ?? {}), [me.id]: answered };
  await supabase.from("battles").update({ scores, progress }).eq("id", id);
}

export async function finishBattle(id: string, finalScore: number, total: number) {
  const supabase = createClient();
  if (!supabase) return;
  const { data: auth } = await supabase.auth.getUser();
  const me = auth.user;
  if (!me) return;
  const { data: row } = await supabase.from("battles").select("*").eq("id", id).single();
  if (!row) return;
  const b = row as unknown as Battle;
  const scores: Record<string, number> = { ...(b.scores ?? {}), [me.id]: finalScore };
  const progress: Record<string, number> = { ...(b.progress ?? {}), [me.id]: total };
  const finished: Record<string, boolean> = { ...(b.finished ?? {}), [me.id]: true };
  const otherId = b.creator_id === me.id ? b.opponent_id : b.creator_id;
  let status: BattleStatus = b.status;
  let winner_id: string | null = b.winner_id ?? null;
  if (finished[otherId]) {
    status = "finished";
    const myScore = scores[me.id] ?? 0;
    const opScore = scores[otherId] ?? 0;
    winner_id = myScore === opScore ? null : myScore > opScore ? me.id : otherId;
  }
  await supabase.from("battles").update({ scores, progress, finished, status, winner_id }).eq("id", id);
}
