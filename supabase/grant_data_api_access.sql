-- ============================================
-- Data API 접근 권한 일괄 추가 (2026-05-30 Supabase 변경 대응)
-- 기존 테이블에 GRANT만 추가합니다. (테이블 재생성 없음)
-- Supabase Dashboard → SQL Editor 에서 실행하세요
-- ============================================

-- library
GRANT SELECT ON public.library TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.library TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.library TO service_role;

-- book_reviews
GRANT SELECT ON public.book_reviews TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.book_reviews TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.book_reviews TO service_role;

-- essays
GRANT SELECT ON public.essays TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.essays TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.essays TO service_role;

-- ai_writings
GRANT SELECT ON public.ai_writings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_writings TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_writings TO service_role;

-- members (anon 접근 불가)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.members TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.members TO service_role;

-- diaries (anon 접근 불가)
GRANT ALL ON public.diaries TO authenticated;
GRANT ALL ON public.diaries TO service_role;
