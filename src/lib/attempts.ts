"use client";

export type Attempt = {
  id: string; // lessonId-qId
  lessonId: string;
  questionId: string;
  picked: number;
  correct: number;
  isCorrect: boolean;
  at: string; // ISO
  explanation: string;
};

const KEY = "inggris_attempts_v1";

export function loadAttempts(): Attempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function saveAttempt(a: Attempt) {
  if (typeof window === "undefined") return;
  const arr = loadAttempts();
  arr.unshift(a);
  localStorage.setItem(KEY, JSON.stringify(arr.slice(0, 200)));
}

export function getWrongAttempts(): Attempt[] {
  return loadAttempts().filter((a) => !a.isCorrect);
}

export function clearAttempts() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
