-- ============================================
-- Diaries 테이블 설정
-- Supabase Dashboard → SQL Editor 에서 실행하세요
-- ============================================

-- 1. diaries 테이블 생성 (최초 설정 시)
CREATE TABLE IF NOT EXISTS diaries (
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    written_date DATE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. RLS 활성화
ALTER TABLE diaries ENABLE ROW LEVEL SECURITY;

-- 3. diaries Data API 접근 권한 (Supabase 2026-05-30 변경 대응)
-- anon은 일기 접근 불가 (인증 사용자만)
GRANT ALL ON public.diaries TO authenticated;
GRANT ALL ON public.diaries TO service_role;

-- 4. RLS 정책: 인증된 사용자만 읽기 가능
CREATE POLICY "diaries_auth_select"
ON diaries FOR SELECT
TO authenticated
USING (true);

-- 5. RLS 정책: 인증된 사용자만 추가 가능
CREATE POLICY "diaries_auth_insert"
ON diaries FOR INSERT
TO authenticated
WITH CHECK (true);

-- 6. RLS 정책: 인증된 사용자만 수정 가능
CREATE POLICY "diaries_auth_update"
ON diaries FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 7. RLS 정책: 인증된 사용자만 삭제 가능
CREATE POLICY "diaries_auth_delete"
ON diaries FOR DELETE
TO authenticated
USING (true);
