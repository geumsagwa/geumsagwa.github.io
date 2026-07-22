-- ============================================
-- Essays 테이블에 series, episode_number 컬럼 추가
-- Supabase Dashboard → SQL Editor 에서 실행하세요
-- 실행 후 새로고침(F5)하여 브라우저에 반영
-- ============================================

-- 1. 컬럼 추가
ALTER TABLE essays ADD COLUMN IF NOT EXISTS series TEXT;
ALTER TABLE essays ADD COLUMN IF NOT EXISTS episode_number INTEGER;

-- 2. 기존 철학사 에세이 업데이트
UPDATE essays SET series = '철학사', episode_number = 1 WHERE id = 3;  -- 제1화 철학의 탄생
UPDATE essays SET series = '철학사', episode_number = 2 WHERE id = 4;  -- 제2화 신화에서 철학으로
UPDATE essays SET series = '철학사', episode_number = 3 WHERE id = 5;  -- 제3화 왜 그리스인가?

-- 3. 새 컬럼에 대한 접근 권한 부여
-- (DELETE는 컬럼 레벨 권한이 불가능하므로 제외)
GRANT SELECT (series, episode_number) ON public.essays TO anon;
GRANT SELECT, INSERT, UPDATE (series, episode_number) ON public.essays TO authenticated;
GRANT SELECT, INSERT, UPDATE (series, episode_number) ON public.essays TO service_role;
