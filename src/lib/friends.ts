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

export async function searchProfileByEmail(email: string) {
  const supabase = createClient();
  if (!supabase) throw new Error("Supabase belum connect");
  const clean = email.trim().toLowerCase();
  if (!clean) throw new Error("Isi email dulu");
  const { data, error } = await supabase
    .from("profiles")
    .select("id,username,streak")
    .ilike("username", clean)
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data as { id: string; username: string | null; streak: number } | null;
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
  const { data: profiles } = await supabase.from("profiles").select("id,username,streak").in("id", ids);
  const { data: progress } = await supabase.from("user_progress").select("user_id,lesson_id").in("user_id", ids).eq("is_completed", true);
  const countBy: Record<string, number> = {};
  (progress ?? []).forEach((r: { user_id: string }) => {
    countBy[r.user_id] = (countBy[r.user_id] ?? 0) + 1;
  });
  const list: FriendProfile[] = (profiles ?? []).map((p: { id: string; username: string | null; streak: number }) => ({
    id: p.id,
    username: p.username,
    streak: p.streak ?? 0,
    completedCount: countBy[p.id] ?? 0,
    isSelf: p.id === selfId,
  }));
  list.sort((a, b) => b.completedCount - a.completedCount || b.streak - a.streak);
  return list;
}
