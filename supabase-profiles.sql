-- PROFIL + NAMA PANGGILAN — paste di Supabase SQL Editor, klik Run
-- Harus sudah jalanin supabase-schema.sql dulu

-- 1. Kolom baru di profiles (aman di-run berkali-kali)
alter table profiles add column if not exists display_name text;
alter table profiles add column if not exists avatar text default '🦊';
alter table profiles add column if not exists bio text default '';

-- 2. Teman boleh lihat profil temannya (nama, avatar, bio, streak)
-- (kalau supabase-friends.sql sudah di-run, policy ini sudah ada — aman di-run lagi)
drop policy if exists "authenticated can read profiles for friends" on profiles;
create policy "authenticated can read profiles for friends"
on profiles for select
to authenticated
using (true);

-- 3. User boleh update profilnya sendiri (nama, avatar, bio, streak)
drop policy if exists "users can update own profile full" on profiles;
create policy "users can update own profile full"
on profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);
