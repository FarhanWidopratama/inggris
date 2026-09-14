"use client";

import type { UserProgress } from "./types";

const KEY = "inggris_progress_v1";

const defaultProgress: UserProgress = {
  completedLessons: [],
  scores: {},
  streak: 0,
  lastStudyDate: null,
};

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(p: UserProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function completeLesson(lessonId: string, score: number) {
  const p = loadProgress();
  if (!p.completedLessons.includes(lessonId)) {
    p.completedLessons.push(lessonId);
  }
  p.scores[lessonId] = Math.max(p.scores[lessonId] || 0, score);
  const today = new Date().toISOString().slice(0, 10);
  if (p.lastStudyDate !== today) {
    // simple streak: increment if last was yesterday
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (p.lastStudyDate === yesterday) p.streak += 1;
    else if (p.lastStudyDate !== today) p.streak = p.streak === 0 ? 1 : p.streak;
    p.lastStudyDate = today;
  }
  saveProgress(p);
  return p;
}

export function isLessonCompleted(id: string) {
  return loadProgress().completedLessons.includes(id);
}

export function getScore(id: string) {
  return loadProgress().scores[id] ?? null;
}
