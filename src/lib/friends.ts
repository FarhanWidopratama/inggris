"use client";

import { createClient } from "./supabase/client";

export type FriendStatus = "pending" | "accepted" | "declined";

export type Friendship = {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: FriendStatus;
  created_at: string;
};

export type FriendProfile = {
  id: string;
  username: string | null;
  display_name: string | null;
  avatar: string | null;
  streak: number;
  completedCount: number;
  isSelf?: boolean;
};

export async function getCurrentUser() {
  const supabase = createClient();
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
}

export type ProfileHit = {
  id: string;
  username: string | null;
  display_name: string | null;
  avatar: string | null;
  bio: string | null;
  streak: number;
};

// Select profil yang tahan banting: kalau kolom baru belum ada di DB
// (migrasi supabase-profiles.sql belum di-run), otomatis fallback ke kolom lama
// biar halaman Friends tetap jalan buat semua orang.
async function selectProfiles(supabase: any, columns: string, build: (q: any) => any) {
  const full = await build(supabase.from("profiles").select(columns));
  if (!full.error) return full;
  const basic = await build(supabase.from("profiles").select("id,username,streak"));
  if (basic.error) throw basic.error;
  return {
    ...basic,
    data: (basic.data ?? []).map((p: { id: string; username: string | null; streak: number }) => ({
      ...p,
      display_name: null,
      avatar: "🦊",
      bio: "",
    })),
  };
}

export async function searchProfileByEmail(email: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const clean = email.trim().toLowerCase();
  if (!clean) throw new Error("Isi email dulu");
  const cleanCols = "id,username,display_name,avatar,bio,streak";
  const attempt = await supabase.from("profiles").select(cleanCols).ilike("username", clean).limit(1).maybeSingle();
  if (!attempt.error) return (attempt.data as ProfileHit | null) ?? null;
  const { data, error } = await supabase.from("profiles").select("id,username,streak").ilike("username", clean).limit(1).maybeSingle();
  if (error) throw error;
  if (!data) return null;
  const b = data as { id: string; username: string | null; streak: number };
  return { ...b, display_name: null, avatar: "🦊", bio: "" } as ProfileHit;
}

// Cari sebagian (nama/email) — max 5 hasil, buat add friend yang gampang
export async function searchProfiles(query: string, excludeId?: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const clean = query.trim();
  if (clean.length < 2) return [];
  const { data, error } = await selectProfiles(supabase, "id,username,display_name,avatar,bio,streak", (q) =>
    q.ilike("username", `%${clean}%`).limit(5)
  );
  if (error) throw error;
  const list = (data ?? []) as ProfileHit[];
  return excludeId ? list.filter((p) => p.id !== excludeId) : list;
}

// Cek relasi dua arah sebelum kirim request
export async function checkExisting(meId: string, otherId: string) {
  const supabase = createClient();
  if (!supabase) return null;
  const { data } = await supabase
    .from("friendships")
    .select("id,requester_id,addressee_id,status")
    .or(
      `and(requester_id.eq.${meId},addressee_id.eq.${otherId}),and(requester_id.eq.${otherId},addressee_id.eq.${meId})`
    )
    .limit(1)
    .maybeSingle();
  return data as { id: string; requester_id: string; addressee_id: string; status: FriendStatus } | null;
}

export async function sendFriendRequestSmart(addresseeId: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { data } = await supabase.auth.getUser();
  const me = data.user;
  if (!me) throw new Error("Login dulu");
  if (me.id === addresseeId) throw new Error("Itu diri lu sendiri 😅");
  const existing = await checkExisting(me.id, addresseeId);
  if (existing) {
    if (existing.status === "accepted") throw new Error("Udah temenan ✅ — cek leaderboard!");
    if (existing.requester_id === me.id) throw new Error("Udah kirim request — tinggal tunggu dia accept ⏳");
    throw new Error("REVERSE_EXISTS");
  }
  await sendFriendRequest(addresseeId);
}

export async function sendFriendRequest(addresseeId: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { data } = await supabase.auth.getUser();
  const me = data.user;
  if (!me) throw new Error("Login dulu");
  if (me.id === addresseeId) throw new Error("Itu diri lu sendiri 😅");
  const { error } = await supabase.from("friendships").insert({
    requester_id: me.id,
    addressee_id: addresseeId,
    status: "pending",
  });
  if (error) {
    if (error.message.includes("duplicate") || error.code === "23505") {
      throw new Error("Udah pernah kirim request ke dia");
    }
    throw error;
  }
}

export async function respondRequest(friendshipId: string, accept: boolean) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { error } = await supabase
    .from("friendships")
    .update({ status: accept ? "accepted" : "declined" })
    .eq("id", friendshipId);
  if (error) throw error;
}

export async function removeFriend(friendshipId: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { error } = await supabase.from("friendships").delete().eq("id", friendshipId);
  if (error) throw error;
}

export async function loadFriendships() {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const { data } = await supabase.auth.getUser();
  const me = data.user;
  if (!me) throw new Error("Login dulu di /auth");
  const { data: rows, error } = await supabase
    .from("friendships")
    .select("id,requester_id,addressee_id,status,created_at")
    .or(`requester_id.eq.${me.id},addressee_id.eq.${me.id}`)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return { me, rows: (rows ?? []) as Friendship[] };
}

export async function loadFriendLeaderboard(friendIds: string[], selfId: string) {
  const supabase = createClient();
  if (!supabase) return [];
  const ids = [selfId, ...friendIds].filter(Boolean);
  if (ids.length === 0) return [];
  const { data: profiles } = await selectProfiles(supabase, "id,username,display_name,avatar,bio,streak", (q) => q.in("id", ids));
  const { data: progress } = await supabase.from("user_progress").select("user_id,lesson_id").in("user_id", ids).eq("is_completed", true);
  const countBy: Record<string, number> = {};
  (progress ?? []).forEach((r: { user_id: string }) => {
    countBy[r.user_id] = (countBy[r.user_id] ?? 0) + 1;
  });
  const list: FriendProfile[] = ((profiles ?? []) as ProfileHit[]).map((p) => ({
    id: p.id,
    username: p.username,
    display_name: p.display_name ?? null,
    avatar: p.avatar ?? "🦊",
    streak: p.streak ?? 0,
    completedCount: countBy[p.id] ?? 0,
    isSelf: p.id === selfId,
  }));
  list.sort((a, b) => b.completedCount - a.completedCount || b.streak - a.streak);
  return list;
}
