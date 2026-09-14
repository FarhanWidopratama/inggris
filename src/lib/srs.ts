"use client";

export type SRSItem = {
  key: string; // vocab en or lessonId
  ease: number; // 1.3..2.5
  interval: number; // days
  due: string; // ISO date yyyy-mm-dd
  reps: number;
  lapses: number;
};

const KEY = "inggris_srs_v1";

function todayStr() { return new Date().toISOString().slice(0, 10); }
function addDays(dateStr: string, days: number) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function loadSRS(): Record<string, SRSItem> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
export function saveSRS(map: Record<string, SRSItem>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(map));
}

export function getItem(key: string): SRSItem | null {
  return loadSRS()[key] || null;
}

// SM-2 simplified: grade 0=fail, 1=hard, 2=good, 3=easy
export function review(key: string, grade: 0 | 1 | 2 | 3) {
  const map = loadSRS();
  let item = map[key];
  const today = todayStr();
  if (!item) {
    item = { key, ease: 2.5, interval: 0, due: today, reps: 0, lapses: 0 };
  }
  if (grade === 0) {
    item.lapses += 1;
    item.reps = 0;
    item.interval = 1;
    item.ease = Math.max(1.3, item.ease - 0.2);
    item.due = addDays(today, 1); // besok lagi — lawan lupa
  } else {
    item.reps += 1;
    if (grade === 1) item.ease = Math.max(1.3, item.ease - 0.05);
    if (grade === 3) item.ease = Math.min(2.6, item.ease + 0.08);
    if (item.reps === 1) item.interval = 1;
    else if (item.reps === 2) item.interval = 3;
    else item.interval = Math.round(item.interval * item.ease);
    const add = grade === 1 ? Math.max(1, Math.round(item.interval * 0.7)) : item.interval;
    item.due = addDays(today, add);
  }
  map[key] = item;
  saveSRS(map);
  return item;
}

export function dueItems(keys: string[]): string[] {
  const map = loadSRS();
  const today = todayStr();
  return keys.filter((k) => {
    const it = map[k];
    if (!it) return true; // belum pernah → due
    return it.due <= today;
  });
}

export function stats() {
  const map = loadSRS();
  const all = Object.values(map);
  const today = todayStr();
  const due = all.filter((a) => a.due <= today).length;
  const learned = all.filter((a) => a.reps > 0).length;
  return { total: all.length, due, learned };
}
