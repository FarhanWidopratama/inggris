-- Supabase schema for Inggris app (Opsi B)
-- Jalankan di SQL Editor Supabase

-- 1. profiles
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text,
  streak int default 0,
  created_at timestamp with time zone default now()
);

-- 2. lessons (seed dari curriculum.ts)
create table if not exists lessons (
  id text primary key,
  level_id int not null,
  order_num int not null,
  title text not null,
  title_en text not null,
  objective text,
  content jsonb,
  vocab jsonb,
  quiz jsonb
);

-- 3. user_progress
create table if not exists user_progress (
  user_id uuid references auth.users(id) on delete cascade,
  lesson_id text references lessons(id) on delete cascade,
  is_completed boolean default false,
  score int,
  completed_at timestamp with time zone,
  primary key (user_id, lesson_id)
);

-- RLS
alter table profiles enable row level security;
alter table user_progress enable row level security;
alter table lessons enable row level security;

create policy "public can read lessons" on lessons for select using (true);
create policy "users can read own profile" on profiles for select using (auth.uid() = id);
create policy "users can update own profile" on profiles for update using (auth.uid() = id);
create policy "users can manage own progress" on user_progress for all using (auth.uid() = user_id);

-- Seed example (3 lessons Level 1) - nanti diisi via app
-- insert into lessons ...
