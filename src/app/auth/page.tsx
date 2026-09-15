"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

// Halaman Masuk / Daftar — dibuat semudah mungkin buat manusia:
// 1. Bisa langsung belajar TANPA daftar (tombol tamu)
// 2. Daftar cuma butuh nama + email + password, langsung diarahkan
// 3. Link email selalu balik ke domain yang benar (bukan localhost)
// 4. Semua error dijelaskan dengan bahasa manusia + solusi
export default function AuthPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("register");
  const [msg, setMsg] = useState<string | null>(null);
  const [msgOk, setMsgOk] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  function say(ok: boolean, text: string) {
    setMsgOk(ok);
    setMsg(text);
  }

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }: { data: { user: { email?: string | null } | null } }) => setUser(data.user?.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_: unknown, session: { user?: { email?: string | null } } | null) => setUser(session?.user?.email ?? null));
    // Tangkap ?error= dari link email yang kedaluwarsa (lihat /auth/callback)
    try {
      const err = new URLSearchParams(window.location.search).get("error");
      if (err) say(false, err);
    } catch {}
    return () => sub.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [resending, setResending] = useState(false);
  async function resendConfirm() {
    if (!supabase || !email) {
      say(false, "Isi email lu dulu di kolom atas, baru klik kirim ulang.");
      return;
    }
    setResending(true);
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setResending(false);
    if (error) say(false, `Gagal kirim ulang: ${humanError(error.message)}`);
    else say(true, "Link baru dikirim! Cek inbox + folder spam, link-nya berlaku 1 jam. Klik dari HP/laptop yang sama ya.");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (!supabase) { say(false, "Belum connect ke server. Coba refresh halaman ini."); return; }
    if (!email || !password) { say(false, "Isi email + password dulu ya."); return; }
    if (password.length < 6) { say(false, "Password minimal 6 karakter. Tambahin dikit lagi."); return; }
    setBusy(true);
    try {
      if (mode === "register") {
        const { error, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
            data: { display_name: name.trim() || email.split("@")[0] },
          },
        });
        if (error) throw error;
        // Simpan nama panggilan ke profil (kalau tabelnya sudah ada kolomnya)
        try {
          if (data.user) {
            await supabase.from("profiles").upsert(
              {
                id: data.user.id,
                username: email,
                display_name: name.trim() || email.split("@")[0],
                avatar: "🦊",
              },
              { onConflict: "id" }
            );
          }
        } catch {}
        if (data.session) {
          say(true, `Beres, ${name.trim() || "teman baru"}! Akun lu langsung aktif. Lanjut belajar 👇`);
          setTimeout(() => router.push("/dashboard"), 800);
        } else {
          say(true, "Akun kebuat! Satu langkah lagi: cek email lu (juga folder spam) terus klik link konfirmasinya. Link-nya cuma berlaku 1 jam — habis klik lu otomatis masuk.");
          setMode("login");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        say(true, "Masuk! Lagi nyambungin catatan belajar lu...");
        try {
          const { loadProgress, saveProgress } = await import("@/lib/progress");
          const { pushAllLocalToSupabase, fetchSupabaseProgress } = await import("@/lib/supabase/sync");
          const local = loadProgress();
          if (local.completedLessons.length > 0) {
            const n = await pushAllLocalToSupabase(local);
            say(true, `Masuk! ${n} lesson yang lu kerjain offline ikut kesimpen permanen. 🎉`);
          } else {
            const cloud = await fetchSupabaseProgress();
            if (cloud && cloud.completedLessons.length > 0) {
              const merged = { ...local, completedLessons: cloud.completedLessons, scores: cloud.scores, streak: Math.max(local.streak, cloud.streak) };
              saveProgress(merged);
              say(true, `Masuk! ${cloud.completedLessons.length} lesson lu dari HP lain balik lagi. 🎉`);
            } else {
              say(true, "Masuk! Mulai dari Level 1 ya, 15 menit aja. 🎉");
            }
          }
        } catch {}
        setTimeout(() => router.push("/dashboard"), 900);
      }
    } catch (err: unknown) {
      const m = err instanceof Error ? err.message : String(err);
      say(false, humanError(m, email));
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    if (!supabase) return;
    await supabase.auth.signOut();
    say(true, "Udah keluar. Catatan di HP ini tetap ada — login lagi kapan aja buat sync.");
  }

  if (user) {
    return (
      <div className="mx-auto max-w-md px-4 py-10">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <div className="text-sm font-bold tracking-widest text-emerald-700">LUDAH MASUK ✓</div>
          <div className="mt-1 font-black">{user}</div>
          <div className="text-xs text-zinc-600">Catatan belajar lu kesimpen permanen. Ganti HP pun aman.</div>
          <div className="mt-4 flex justify-center gap-2">
            <button onClick={logout} className="rounded-full border bg-white px-5 py-2 text-sm font-bold">Keluar</button>
            <button onClick={() => router.push("/dashboard")} className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-black text-white">Lanjut belajar →</button>
          </div>
        </div>
        {msg && <div className={`mt-3 rounded-xl border p-3 text-sm font-semibold ${msgOk ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>{msg}</div>}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-8">
      <h1 className="text-2xl font-black tracking-tight">Masuk biar progres kesimpen</h1>
      <p className="mt-1 text-sm leading-relaxed text-zinc-600">
        <b>Tanpa daftar pun bisa belajar</b> — tapi progres cuma nempel di HP ini. Daftar (gratis, 1 menit) biar progres ikut ke mana-mana + bisa temenan + battle.
      </p>

      {/* 3 langkah manusia */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[["1", "Isi nama,\nemail, sandi"], ["2", "Klik link\ndi email"], ["3", "Otomatis\nmasuk"]].map(([n, t]) => (
          <div key={n} className="rounded-xl border border-zinc-200 bg-white p-2.5">
            <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-black text-white">{n}</div>
            <div className="mt-1 whitespace-pre-line text-[11px] font-bold leading-tight">{t}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={() => { setMode("register"); setMsg(null); }} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-black ${mode === "register" ? "bg-zinc-900 text-white" : "border bg-white"}`}>Daftar baru</button>
        <button onClick={() => { setMode("login"); setMsg(null); }} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-black ${mode === "login" ? "bg-zinc-900 text-white" : "border bg-white"}`}>Udah punya akun</button>
      </div>

      <form onSubmit={submit} className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 space-y-3">
        {mode === "register" && (
          <div>
            <label className="text-xs font-bold">Nama panggilan <span className="font-normal text-zinc-500">(buat profil + leaderboard)</span></label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="misal: Farha" className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm" />
          </div>
        )}
        <div>
          <label className="text-xs font-bold">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="lu@email.com" autoComplete="email" className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm" />
        </div>
        <div>
          <label className="text-xs font-bold">Password <span className="font-normal text-zinc-500">(min. 6 karakter)</span></label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••" autoComplete={mode === "register" ? "new-password" : "current-password"} className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm" />
        </div>
        <button type="submit" disabled={busy} className="w-full rounded-full bg-zinc-900 py-3 text-sm font-black text-white hover:bg-black disabled:opacity-50">
          {busy ? "Sebentar..." : mode === "login" ? "Masuk →" : "Bikin akun gratis →"}
        </button>
        <button type="button" onClick={() => router.push("/dashboard")} className="w-full rounded-full border border-zinc-200 bg-white py-3 text-sm font-bold hover:bg-zinc-50">
          Skip dulu, belajar tanpa daftar →
        </button>
      </form>

      {msg && (
        <div className={`mt-3 rounded-xl border p-3 text-sm font-semibold ${msgOk ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
          <div>{msg}</div>
          {!msgOk && (
            <button onClick={resendConfirm} disabled={resending} className="mt-2 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-black text-white hover:bg-amber-600 disabled:opacity-50">
              {resending ? "Mengirim..." : "↻ Kirim link baru ke email gue"}
            </button>
          )}
        </div>
      )}

      <div className="mt-3 text-center text-xs leading-relaxed text-zinc-500">
        Link email cuma berlaku <b>1 jam</b>. Kalau kedaluwarsa, tinggal klik kirim ulang di atas — gratis, bisa berkali-kali.
      </div>
    </div>
  );
}

function humanError(m: string, email = ""): string {
  const t = m.toLowerCase();
  if (t.includes("email not confirmed")) {
    return `Email ${email} belum dikonfirmasi. Cek inbox + spam, klik link-nya — atau klik tombol kirim ulang di bawah.`;
  }
  if (t.includes("invalid login credentials") || t.includes("invalid email or password")) {
    return "Email atau password-nya keliru. Coba lagi pelan-pelan, atau daftar baru kalau belum punya akun.";
  }
  if (t.includes("user already registered") || t.includes("already exists")) {
    return "Email ini sudah terdaftar — pindah ke tab 'Udah punya akun' terus login aja.";
  }
  if (t.includes("password") && t.includes("6")) {
    return "Password minimal 6 karakter ya.";
  }
  if (t.includes("expired") || t.includes("otp") || t.includes("invalid") || t.includes("token")) {
    return "Link email kedaluwarsa / tidak valid. Klik tombol kirim ulang di bawah buat link baru (berlaku 1 jam).";
  }
  if (t.includes("rate limit") || t.includes("too many")) {
    return "Kebanyakan klik nih — tunggu 1 menit baru coba lagi ya.";
  }
  return m;
}
