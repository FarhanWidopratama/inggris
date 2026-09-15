-- FITUR BERTEMAN — paste di Supabase SQL Editor, klik Run
-- Harus sudah jalanin supabase-schema.sql + supabase-fix.sql dulu

-- 1. Biar bisa cari teman by email/username (sebelumnya cuma bisa baca profil sendiri)
drop policy if exists "authenticated can read profiles for friends" on profiles;
create policy "authenticated can read profiles for friends"
on profiles for select
to authenticated
using (true);

-- 2. Tabel pertemanan (requester -> addressee, status pending/accepted)
create table if not exists friendships (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references auth.users(id) on delete cascade,
  addressee_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','accepted','declined')),
  created_at timestamp with time zone default now(),
  unique(requester_id, addressee_id),
  check (requester_id != addressee_id)
);

alter table friendships enable row level security;

-- baca: yang terlibat aja
drop policy if exists "users read own friendships" on friendships;
create policy "users read own friendships"
on friendships for select
using (auth.uid() = requester_id or auth.uid() = addressee_id);

-- kirim request: requester harus diri sendiri
drop policy if exists "users send friend request" on friendships;
create policy "users send friend request"
on friendships for insert
with check (auth.uid() = requester_id);

-- accept/decline: addressee yang update status, requester boleh cancel (delete via policy bawah)
drop policy if exists "addressee responds request" on friendships;
create policy "addressee responds request"
on friendships for update
using (auth.uid() = addressee_id or auth.uid() = requester_id)
with check (auth.uid() = addressee_id or auth.uid() = requester_id);

-- hapus/batalkan: yang terlibat aja
drop policy if exists "users delete own friendships" on friendships;
create policy "users delete own friendships"
on friendships for delete
using (auth.uid() = requester_id or auth.uid() = addressee_id);

-- 3. Biar leaderboard bisa baca progress teman (sebelumnya cuma progress sendiri)
-- user_progress tetap private, tapi teman yang accepted boleh baca ringkasannya
drop policy if exists "friends can read friends progress" on user_progress;
create policy "friends can read friends progress"
on user_progress for select
using (
  auth.uid() = user_id
  or exists (
    select 1 from friendships f
    where f.status = 'accepted'
    and (
      (f.requester_id = auth.uid() and f.addressee_id = user_progress.user_id)
      or (f.addressee_id = auth.uid() and f.requester_id = user_progress.user_id)
    )
  )
);
