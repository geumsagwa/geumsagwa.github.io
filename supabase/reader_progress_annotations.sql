-- 리더 이어읽기·주석 저장 테이블 (2026-10-31)
-- Supabase Dashboard → SQL Editor 에서 실행한다.
-- 앱은 이 테이블이 없어도 로컬 저장으로 동작한다(베스트에포트).

-- 1) 이어읽기
create table if not exists public.reader_progress (
    user_id    uuid        not null references auth.users(id) on delete cascade,
    book_path  text        not null,
    cfi        text        not null,
    percent    int         not null default 0,
    updated_at timestamptz not null default now(),
    primary key (user_id, book_path)
);

alter table public.reader_progress enable row level security;

drop policy if exists "reader_progress_select_own" on public.reader_progress;
drop policy if exists "reader_progress_insert_own" on public.reader_progress;
drop policy if exists "reader_progress_update_own" on public.reader_progress;

create policy "reader_progress_select_own" on public.reader_progress
    for select using (auth.uid() = user_id);
create policy "reader_progress_insert_own" on public.reader_progress
    for insert with check (auth.uid() = user_id);
create policy "reader_progress_update_own" on public.reader_progress
    for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select, insert, update, delete on public.reader_progress to authenticated;

-- 2) 형광펜·메모
create table if not exists public.reader_annotations (
    id           text        primary key,
    user_id      uuid        not null references auth.users(id) on delete cascade,
    book_path    text        not null,
    cfi_range    text        not null,
    text_excerpt text,
    note         text,
    color        text        default '#f2c94c',
    created_at   timestamptz not null default now()
);

create index if not exists reader_annotations_user_book
    on public.reader_annotations (user_id, book_path);

alter table public.reader_annotations enable row level security;

drop policy if exists "reader_annotations_select_own" on public.reader_annotations;
drop policy if exists "reader_annotations_insert_own" on public.reader_annotations;
drop policy if exists "reader_annotations_update_own" on public.reader_annotations;
drop policy if exists "reader_annotations_delete_own" on public.reader_annotations;

create policy "reader_annotations_select_own" on public.reader_annotations
    for select using (auth.uid() = user_id);
create policy "reader_annotations_insert_own" on public.reader_annotations
    for insert with check (auth.uid() = user_id);
create policy "reader_annotations_update_own" on public.reader_annotations
    for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "reader_annotations_delete_own" on public.reader_annotations
    for delete using (auth.uid() = user_id);

grant select, insert, update, delete on public.reader_annotations to authenticated;
