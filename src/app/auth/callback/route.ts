import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Supabase email link (konfirmasi / invite) mendarat di sini.
// Tugasnya cuma 1: tuker ?code= jadi session, terus arahkan ke dashboard.
// Kalau link kedaluwarsa / invalid, arahkan ke /auth dengan pesan yang ramah manusia.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        return NextResponse.redirect(`${origin}${next}`);
      }
      return NextResponse.redirect(
        `${origin}/auth?error=${encodeURIComponent(friendlyError(error.message))}`
      );
    }
  }

  // Link dari email yang kedaluwarsa / invalid mendarat di sini juga
  const desc =
    searchParams.get("error_description") ??
    searchParams.get("error") ??
    "Link tidak valid";
  return NextResponse.redirect(`${origin}/auth?error=${encodeURIComponent(friendlyError(desc))}`);
}

function friendlyError(raw: string): string {
  const m = raw.toLowerCase();
  if (m.includes("expired") || m.includes("invalid") || m.includes("otp")) {
    return "Link email kedaluwarsa — klik tombol kirim ulang di bawah, link baru langsung dikirim.";
  }
  if (m.includes("access_denied")) {
    return "Akses ditolak oleh link email — coba kirim ulang link baru di bawah.";
  }
  return raw.replace(/\+/g, " ");
}
