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
