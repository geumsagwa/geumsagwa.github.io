// Supabase 설정
// ⚠️ 아래 값을 본인의 Supabase 프로젝트 URL과 anon key로 변경하세요.
// Supabase 대시보드 → Settings → API 에서 확인할 수 있습니다.
const SUPABASE_URL = 'https://qswzutgxtiuigrocqcmc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzd3p1dGd4dGl1aWdyb2NxY21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NzkxMjksImV4cCI6MjA3OTM1NTEyOX0.FezD3WM7YMhh45t6pYrUoi2yNWK8e1MQXPzzk6EjK8M';

// 관리자 권한은 members 테이블 role/status + RLS 정책에서 최종 판정
// 클라이언트는 DB 결과를 읽어 UI 표시만 보조한다.

// Supabase 클라이언트 초기화 (CDN의 전역 supabase와 충돌 방지)
const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
