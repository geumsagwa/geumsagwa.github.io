-- ============================================
-- ELibrary Supabase 설정 스크립트
-- Supabase Dashboard → SQL Editor 에서 실행하세요
-- ============================================

-- 1. Storage 버킷 생성 (비공개: 인증 사용자만 접근)
INSERT INTO storage.buckets (id, name, public)
VALUES ('epubs', 'epubs', false)
ON CONFLICT (id) DO NOTHING;

-- 2. Storage RLS 정책: 인증된 사용자만 다운로드 가능
CREATE POLICY "epubs_auth_read"
ON storage.objects FOR SELECT
USING (bucket_id = 'epubs' AND auth.role() = 'authenticated');

-- 3. Storage RLS 정책: 인증된 사용자만 업로드 가능
CREATE POLICY "epubs_auth_upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'epubs' AND auth.role() = 'authenticated');

-- 4. Storage RLS 정책: 인증된 사용자만 삭제 가능
CREATE POLICY "epubs_auth_delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'epubs' AND auth.role() = 'authenticated');

-- 5. Library 테이블 생성
CREATE TABLE IF NOT EXISTS library (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('history', 'philosophy', 'psychology')),
    epub_path TEXT NOT NULL,
    spine_color TEXT DEFAULT '#8B4513',
    spine_height INTEGER DEFAULT 240,
    spine_width INTEGER DEFAULT 54,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Library 테이블 RLS 활성화
ALTER TABLE library ENABLE ROW LEVEL SECURITY;

-- 7. Library RLS 정책: 누구나 읽기 가능
CREATE POLICY "library_public_read"
ON library FOR SELECT
USING (true);

-- 8. Library RLS 정책: 인증된 사용자만 추가 가능
CREATE POLICY "library_auth_insert"
ON library FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- 9. Library RLS 정책: 인증된 사용자만 삭제 가능
CREATE POLICY "library_auth_delete"
ON library FOR DELETE
USING (auth.role() = 'authenticated');

-- ============================================
-- Book Reviews 테이블
-- ============================================

-- 10. book_reviews 테이블 생성
CREATE TABLE IF NOT EXISTS book_reviews (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    translator TEXT,
    year INTEGER,
    publisher TEXT,
    cover_url TEXT,
    review_title TEXT,
    excerpt TEXT,
    body_markdown TEXT NOT NULL,
    card_image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 11. book_reviews RLS 활성화
ALTER TABLE book_reviews ENABLE ROW LEVEL SECURITY;

-- 12. book_reviews RLS 정책: 누구나 읽기 가능
CREATE POLICY "book_reviews_public_read"
ON book_reviews FOR SELECT USING (true);

-- 13. book_reviews RLS 정책: 인증된 사용자만 추가 가능
CREATE POLICY "book_reviews_auth_insert"
ON book_reviews FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- 14. book_reviews RLS 정책: 인증된 사용자만 수정 가능
CREATE POLICY "book_reviews_auth_update"
ON book_reviews FOR UPDATE
USING (auth.role() = 'authenticated');

-- 15. book_reviews RLS 정책: 인증된 사용자만 삭제 가능
CREATE POLICY "book_reviews_auth_delete"
ON book_reviews FOR DELETE
USING (auth.role() = 'authenticated');

-- ============================================
-- Essays 테이블
-- ============================================

-- 16. essays 테이블 생성
CREATE TABLE IF NOT EXISTS essays (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT,
    body_markdown TEXT NOT NULL,
    card_image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 17. essays RLS 활성화
ALTER TABLE essays ENABLE ROW LEVEL SECURITY;

-- 18. essays RLS 정책: 누구나 읽기 가능
CREATE POLICY "essays_public_read"
ON essays FOR SELECT USING (true);

-- 19. essays RLS 정책: 인증된 사용자만 추가 가능
CREATE POLICY "essays_auth_insert"
ON essays FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- 20. essays RLS 정책: 인증된 사용자만 수정 가능
CREATE POLICY "essays_auth_update"
ON essays FOR UPDATE
USING (auth.role() = 'authenticated');

-- 21. essays RLS 정책: 인증된 사용자만 삭제 가능
CREATE POLICY "essays_auth_delete"
ON essays FOR DELETE
USING (auth.role() = 'authenticated');
