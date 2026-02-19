-- book_reviews 테이블 생성
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

ALTER TABLE book_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "book_reviews_public_read"
ON book_reviews FOR SELECT USING (true);

CREATE POLICY "book_reviews_auth_insert"
ON book_reviews FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "book_reviews_auth_update"
ON book_reviews FOR UPDATE
USING (auth.role() = 'authenticated');

CREATE POLICY "book_reviews_auth_delete"
ON book_reviews FOR DELETE
USING (auth.role() = 'authenticated');
