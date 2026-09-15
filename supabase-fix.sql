-- FIX untuk Auth + sync permanen
-- Paste di Supabase SQL Editor, klik Run

-- 1. profiles butuh INSERT policy (kemarin cuma select/update, jadi upsert gagal)
drop policy if exists "users can insert own profile" on profiles;
create policy "users can insert own profile" on profiles for insert with check (auth.uid() = id);

-- 2. pastikan user_progress bisa insert/update/select sendiri (idempotent)
drop policy if exists "users can manage own progress" on user_progress;
create policy "users can manage own progress" on user_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 3. tabel attempts (record tiap soal, biar koreksi permanen, bukan localStorage doang)
create table if not exists attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  lesson_id text not null,
  question_id text not null,
  picked int,
  correct int,
  is_correct boolean,
  explanation text,
  created_at timestamp with time zone default now()
);
alter table attempts enable row level security;
drop policy if exists "users manage own attempts" on attempts;
create policy "users manage own attempts" on attempts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 4. tabel srs_items (opsional, kalau mau SRS permanen lintas HP)
create table if not exists srs_items (
  user_id uuid references auth.users(id) on delete cascade,
  key text not null,
  ease float default 2.5,
  interval_days int default 0,
  due date default current_date,
  reps int default 0,
  lapses int default 0,
  primary key (user_id, key)
);
alter table srs_items enable row level security;
drop policy if exists "users manage own srs" on srs_items;
create policy "users manage own srs" on srs_items for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
