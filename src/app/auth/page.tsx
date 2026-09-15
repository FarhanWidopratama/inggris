"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [msg, setMsg] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }: { data: { user: { email?: string | null } | null } }) => setUser(data.user?.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_: unknown, session: { user?: { email?: string | null } } | null) => setUser(session?.user?.email ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);

  const [resending, setResending] = useState(false);
  async function resendConfirm() {
    if (!supabase || !email) return;
    setResending(true);
    const { error } = await supabase.auth.resend({ type: "signup", email });
    setResending(false);
    if (error) setMsg(`❌ Gagal kirim ulang: ${error.message}`);
    else setMsg("✅ Email konfirmasi dikirim ulang — cek inbox/spam, klik link, lalu login lagi. Atau matikan Confirm email di Supabase biar langsung login (lihat bawah).");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (!supabase) { setMsg("Supabase belum connect. Cek env di Vercel."); return; }
    if (!email || !password) { setMsg("Isi email & password dulu bro"); return; }
    try {
      if (mode === "register") {
        const { error, data } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        // kalau langsung ada session (confirm mati), auto login
        if (data.session) {
          setMsg("✅ Daftar + login sukses! Langsung sync permanen.");
          setTimeout(() => router.push("/dashboard"), 600);
        } else {
          setMsg("✅ Daftar sukses! Cek email untuk konfirmasi, lalu login. Kalau mau langsung tanpa konfirmasi, lihat cara di bawah.");
          setMode("login");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setMsg("✅ Login sukses! Sync record lokal → Supabase...");
        try {
          const { loadProgress, saveProgress } = await import("@/lib/progress");
          const { pushAllLocalToSupabase, fetchSupabaseProgress } = await import("@/lib/supabase/sync");
          const local = loadProgress();
          if (local.completedLessons.length > 0) {
            const n = await pushAllLocalToSupabase(local);
            setMsg(`✅ Login sukses! ${n} lesson lokal di-push ke Supabase permanen.`);
          } else {
            // gak ada lokal, tarik dari cloud
            const cloud = await fetchSupabaseProgress();
            if (cloud && cloud.completedLessons.length > 0) {
              const merged = { ...local, completedLessons: cloud.completedLessons, scores: cloud.scores, streak: Math.max(local.streak, cloud.streak) };
              saveProgress(merged);
              setMsg(`✅ Login sukses! ${cloud.completedLessons.length} lesson dari cloud di-restore.`);
            } else {
              setMsg("✅ Login sukses! Record lu bakal kesimpen permanen ke Supabase.");
            }
          }
        } catch {}
        setTimeout(() => router.push("/dashboard"), 900);
      }
    } catch (err: unknown) {
      const m = err instanceof Error ? err.message : String(err);
      if (m.toLowerCase().includes("email not confirmed")) {
        setMsg(`❌ Email belum dikonfirmasi — cek inbox/spam lu (${email}) dan klik link konfirmasi. Atau klik 'Kirim ulang' di bawah.`);
      } else {
        setMsg(`❌ ${m}`);
      }
    }
  }

  async function logout() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setMsg("Keluar — record lokal tetap ada, login lagi buat sync.");
  }

  if (user) {
    return (
      <div className="mx-auto max-w-md px-4 py-10">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <div className="text-sm font-bold tracking-widest text-emerald-700">LOGIN 3D ✓</div>
          <div className="mt-1 font-black">{user}</div>
          <div className="text-xs text-zinc-600">Record lu (progress, streak, attempts, SRS) udah sync permanen ke Supabase. Gak hilang ganti HP.</div>
          <div className="mt-4 flex justify-center gap-2">
            <button onClick={logout} className="rounded-full border bg-white px-5 py-2 text-sm font-bold">Logout</button>
            <button onClick={() => window.location.href = "/dashboard"} className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-black text-white">Ke Dashboard →</button>
          </div>
        </div>
        {msg && <div className="mt-3 rounded-xl bg-white p-3 text-sm font-semibold border">{msg}</div>}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-8">
      <h1 className="text-2xl font-black tracking-tight">Auth — Save Permanen ke Supabase</h1>
      <p className="text-sm text-zinc-600">Login biar record lu (60 lesson, 500 vocab, streak, history) gak hilang. Gratis, pakai email aja.</p>

      <div className="mt-4 flex gap-2">
        <button onClick={() => setMode("login")} className={`rounded-full px-4 py-2 text-sm font-black ${mode === "login" ? "bg-zinc-900 text-white" : "border bg-white"}`}>Login</button>
        <button onClick={() => setMode("register")} className={`rounded-full px-4 py-2 text-sm font-black ${mode === "register" ? "bg-zinc-900 text-white" : "border bg-white"}`}>Daftar</button>
      </div>

      <form onSubmit={submit} className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 space-y-3">
        <div>
          <label className="text-xs font-bold">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="lu@email.com" className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm" />
        </div>
        <div>
          <label className="text-xs font-bold">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="min 6 char" className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2.5 text-sm" />
        </div>
        <button type="submit" className="w-full rounded-full bg-zinc-900 py-3 text-sm font-black text-white hover:bg-black">{mode === "login" ? "Login →" : "Daftar →"}</button>
        <div className="text-xs text-zinc-500">Supabase Auth email/pass. Data ke-save di <code>auth.users</code> + <code>profiles</code> + <code>user_progress</code>.</div>
      </form>

      {msg && (
        <div className={`mt-3 rounded-xl p-3 text-sm font-semibold border ${msg.startsWith("✅") ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}>
          <div>{msg}</div>
          {msg.toLowerCase().includes("email") && msg.toLowerCase().includes("confirm") && (
            <button onClick={resendConfirm} disabled={resending} className="mt-2 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-black text-white hover:bg-amber-600 disabled:opacity-50">
              {resending ? "Mengirim..." : "↻ Kirim ulang email konfirmasi"}
            </button>
          )}
        </div>
      )}

      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed">
        <div className="font-black">🔧 Biar gak ribet Email not confirmed (dipermudah):</div>
        <div className="mt-1">Buka Supabase Dashboard → project <b>iakvcfxsjlrsentganni</b> → <b>Authentication → Providers → Email</b> → matikan <b>Confirm email</b> (uncheck) → Save. Habis itu daftar/login langsung tanpa cek email. Ini yang bikin error di screenshot lu.</div>
        <a href="https://supabase.com/dashboard/project/iakvcfxsjlrsentganni/auth/providers" target="_blank" className="mt-2 inline-block rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold text-white">Buka Supabase Auth Settings →</a>
      </div>

      <div className="mt-3 text-center text-xs text-zinc-500">Belum ada akun? Klik Daftar. Udah ada? Login langsung sync.</div>
    </div>
  );
}
