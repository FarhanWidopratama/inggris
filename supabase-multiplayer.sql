-- MULTIPLAYER UPGRADE — paste di Supabase SQL Editor, klik Run
-- Harus sudah jalanin supabase-schema.sql + supabase-fix.sql + supabase-friends.sql dulu

-- 1. Tabel quiz battle berdua
create table if not exists battles (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references auth.users(id) on delete cascade,
  opponent_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  questions jsonb not null,
  status text not null default 'waiting' check (status in ('waiting','active','finished')),
  scores jsonb not null default '{}',
  progress jsonb not null default '{}',
  finished jsonb not null default '{}',
  winner_id uuid references auth.users(id) on delete set null,
  created_at timestamp with time zone default now(),
  check (creator_id != opponent_id)
);

alter table battles enable row level security;

drop policy if exists "players read own battles" on battles;
create policy "players read own battles"
on battles for select
using (auth.uid() = creator_id or auth.uid() = opponent_id);

drop policy if exists "creator creates battle" on battles;
create policy "creator creates battle"
on battles for insert
with check (auth.uid() = creator_id);

drop policy if exists "players update own battle" on battles;
create policy "players update own battle"
on battles for update
using (auth.uid() = creator_id or auth.uid() = opponent_id)
with check (auth.uid() = creator_id or auth.uid() = opponent_id);

drop policy if exists "players delete own battle" on battles;
create policy "players delete own battle"
on battles for delete
using (auth.uid() = creator_id or auth.uid() = opponent_id);

-- 2. Nyalakan Realtime buat tabel multiplayer (leaderboard live + battle live)
-- Idempotent: skip kalau tabelnya sudah masuk publication
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'friendships'
  ) then
    alter publication supabase_realtime add table friendships;
  end if;
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'profiles'
  ) then
    alter publication supabase_realtime add table profiles;
  end if;
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'user_progress'
  ) then
    alter publication supabase_realtime add table user_progress;
  end if;
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'battles'
  ) then
    alter publication supabase_realtime add table battles;
  end if;
end $$;
