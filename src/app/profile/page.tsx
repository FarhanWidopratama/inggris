"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { fetchProfileFull, type ProfileFull } from "@/lib/profile";
import { computeAchievements, type AchieveStats } from "@/lib/achievements";
import { loadProgress } from "@/lib/progress";
import { loadAttempts } from "@/lib/attempts";

const AVATARS = ["🦊", "🐱", "🐼", "🐸", "🦁", "🐯", "🦄", "🐝", "🦋", "🐬", "🦉", "🐧"];

function levelTitle(n: number): string {
  if (n >= 60) return "Master Inggris 🎓";
  if (n >= 30) return "Ksatria Kata ⚔️";
  if (n >= 10) return "Pejuang Vocab 📚";
  if (n >= 1) return "Penjelajah 🔍";
  return "Pemula 🌱";
}

export default function MyProfilePage() {
  const [meId, setMeId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [full, setFull] = useState<ProfileFull | null>(null);
  const [friendsCount, setFriendsCount] = useState(0);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("🦊");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);
  const configured = isSupabaseConfigured();

  async function refresh() {
    const supabase = createClient();
    if (!supabase) return;
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      setLoading(false);
      return;
    }
    setMeId(data.user.id);
    setEmail(data.user.email ?? "");
    const f = await fetchProfileFull(data.user.id);
    setFull(f);
    if (f) {
      setName(f.profile.display_name ?? "");
      setAvatar(f.profile.avatar ?? "🦊");
      setBio(f.profile.bio ?? "");
    }
    try {
      const { count } = await supabase.from("friendships").select("id", { count: "exact", head: true }).eq("status", "accepted").or(`requester_id.eq.${data.user.id},addressee_id.eq.${data.user.id}`);
      setFriendsCount(count ?? 0);
    } catch {}
    // Akurasi dari HP ini (record lokal)
    try {
      const at = loadAttempts();
      setAttempts(at.length);
      setAccuracy(at.length ? at.filter((a) => a.isCorrect).length / at.length : null);
    } catch {}
    setLoading(false);
  }

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Realtime: profil + progres sendiri berubah → refresh otomatis
  useEffect(() => {
    if (!configured || !meId) return;
    const supabase = createClient();
    if (!supabase) return;
    const ch = supabase
      .channel(`profile:${meId}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "profiles", filter: `id=eq.${meId}` }, () => refresh())
      .on("postgres_changes", { event: "*", schema: "public", table: "user_progress", filter: `user_id=eq.${meId}` }, () => refresh())
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meId]);

  async function save() {
    const supabase = createClient();
    if (!supabase || !meId) return;
    setSaving(true);
    setMsg(null);
    const { error } = await supabase.from("profiles").upsert(
      { id: meId, username: email, display_name: name.trim(), avatar, bio: bio.trim() },
      { onConflict: "id" }
    );
    setSaving(false);
    if (error) {
      setMsg(`❌ Gagal simpan: ${error.message}. (Kalau kolomnya belum ada, run supabase-profiles.sql dulu ya.)`);
    } else {
      setMsg("✅ Profil kesimpen! Temen lu langsung bisa lihat yang baru. 🎉");
      setEditing(false);
      refresh();
    }
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10 text-center">
        <h1 className="text-xl font-black">Profil butuh Supabase</h1>
        <p className="mt-2 text-sm text-zinc-600">Isi env Supabase dulu, baru profil + achievement bisa jalan.</p>
      </div>
    );
  }

  if (loading) return <div className="p-8 text-center text-sm text-zinc-500">Buka profil...</div>;

  if (!meId) {
    return (
      <div className="mx-auto max-w-md px-4 py-10 text-center">
        <div className="text-5xl">🦊</div>
        <h1 className="mt-3 text-xl font-black">Belum masuk</h1>
        <p className="mt-1 text-sm text-zinc-600">Masuk dulu biar profil + achievement lu kesimpen permanen dan bisa dilihat temen.</p>
        <Link href="/auth" className="mt-4 inline-block rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white">Masuk / Daftar →</Link>
      </div>
    );
  }

  const completed = full?.completedCount ?? loadProgress().completedLessons.length;
  const stats: AchieveStats = {
    completedCount: completed,
    streak: full?.profile.streak ?? 0,
    avgScore: full?.avgScore ?? null,
    attempts,
    accuracy,
    battlesPlayed: full?.battlesPlayed ?? 0,
    battlesWon: full?.battlesWon ?? 0,
    friendsCount,
  };
  const ach = computeAchievements(stats);
  const unlocked = ach.filter((a) => a.unlocked).length;
  const shownName = (full?.profile.display_name?.trim() || email.split("@")[0] || "Teman");

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <span>›</span>
        <span className="text-zinc-900">Profil Gue</span>
      </div>

      {msg && <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-3 text-sm font-semibold">{msg}</div>}

      {/* Kartu profil */}
      <div className="mt-4 rounded-[24px] border border-zinc-200 bg-white p-6 text-center sm:p-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-sky-100 text-5xl">
          {full?.profile.avatar ?? "🦊"}
        </div>
        <h1 className="mt-3 text-2xl font-black tracking-tight">{shownName}</h1>
        <div className="mt-1 inline-block rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold text-white">{levelTitle(completed)}</div>
        {full?.profile.bio ? <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">“{full.profile.bio}”</p> : null}
        <p className="mt-1 text-xs text-zinc-400">{email}</p>
        <button onClick={() => setEditing(!editing)} className="mt-4 rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-bold hover:bg-zinc-50">
          {editing ? "Tutup" : "✏️ Edit profil"}
        </button>

        {editing && (
          <div className="mx-auto mt-4 max-w-md rounded-2xl bg-[#fcfbf8] p-4 text-left">
            <label className="text-xs font-bold">Nama panggilan</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="misal: Farha" className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm" />
            <label className="mt-3 block text-xs font-bold">Avatar</label>
            <div className="mt-1 grid grid-cols-6 gap-1.5">
              {AVATARS.map((a) => (
                <button key={a} type="button" onClick={() => setAvatar(a)} className={`rounded-xl border p-2 text-2xl ${avatar === a ? "border-zinc-900 bg-white shadow" : "border-zinc-200 bg-white/60 hover:bg-white"}`}>
                  {a}
                </button>
              ))}
            </div>
            <label className="mt-3 block text-xs font-bold">Bio singkat <span className="font-normal text-zinc-500">(misal: target TOEFL 500)</span></label>
            <input value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Ceritain target lu..." maxLength={80} className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm" />
            <button onClick={save} disabled={saving} className="mt-3 w-full rounded-full bg-zinc-900 py-2.5 text-sm font-black text-white disabled:opacity-50">
              {saving ? "Menyimpan..." : "Simpan →"}
            </button>
          </div>
        )}

        {/* Statistik ringkas */}
        <div className="mx-auto mt-5 grid max-w-lg grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["✓", `${completed}/60`, "lesson"],
            ["🔥", `${full?.profile.streak ?? 0}`, "streak"],
            ["⭐", full?.avgScore != null ? full.avgScore.toFixed(1) : "—", "rata nilai"],
            ["🏆", `${full?.battlesWon ?? 0}/${full?.battlesPlayed ?? 0}`, "battle menang"],
          ].map(([icon, val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-100 bg-[#fcfbf8] p-3">
              <div className="text-xs">{icon}</div>
              <div className="text-lg font-black">{val}</div>
              <div className="text-[11px] font-bold text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black tracking-tight">Achievement ({unlocked}/{ach.length}) 🏅</h2>
          <span className="text-xs font-bold text-zinc-500">Kebuka otomatis pas lu belajar</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {ach.map((a) => (
            <div key={a.id} className={`rounded-2xl border p-3.5 ${a.unlocked ? "border-emerald-200 bg-emerald-50" : "border-zinc-200 bg-white opacity-70"}`}>
              <div className={`text-3xl ${a.unlocked ? "" : "grayscale"}`}>{a.unlocked ? a.icon : "🔒"}</div>
              <div className="mt-1 text-sm font-black">{a.title}</div>
              <div className="text-xs text-zinc-600">{a.desc}</div>
              {!a.unlocked && <div className="mt-1 text-[11px] font-bold text-zinc-400">{a.hint}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Aktivitas terakhir */}
      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-sm font-black tracking-widest text-zinc-500">TERAKHIR DIKERJAIN</h2>
        {(full?.recent.length ?? 0) === 0 ? (
          <p className="mt-2 text-sm text-zinc-500">Belum ada. Selesaikan 1 lesson biar muncul di sini — temen lu juga bisa lihat ini.</p>
        ) : (
          <div className="mt-3 space-y-1.5">
            {full!.recent.map((r) => (
              <Link key={r.lesson_id} href={`/learn/${r.lesson_id}`} className="flex items-center gap-2 rounded-xl bg-[#fcfbf8] px-3 py-2 text-sm hover:bg-zinc-100">
                <span>✓</span>
                <b>Lesson {r.lesson_id}</b>
                <span className="ml-auto text-xs text-zinc-500">{r.score != null ? `nilai ${r.score}` : ""} {r.completed_at ? `• ${r.completed_at.slice(0, 10)}` : ""}</span>
              </Link>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/friends" className="rounded-full bg-pink-500 px-5 py-2 text-sm font-bold text-white hover:bg-pink-600">Lihat temen 💑</Link>
          <Link href="/history" className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-bold hover:bg-zinc-50">Record lengkap →</Link>
        </div>
      </div>
    </div>
  );
}
