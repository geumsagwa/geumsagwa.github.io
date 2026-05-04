// Supabase 설정
// Supabase URL과 anon key는 public 값입니다. RLS 정책이 실제 보안을 담당합니다.
// 배포 시 window.__env 를 설정하여 기본값을 재정의할 수 있습니다:
//   <script>window.__env = { SUPABASE_URL: '...', SUPABASE_ANON_KEY: '...' }</script>
// .env.example 파일도 참고하세요.
const ENV = window.__env || {};
const SUPABASE_URL = ENV.SUPABASE_URL || 'https://qswzutgxtiuigrocqcmc.supabase.co';
const SUPABASE_ANON_KEY = ENV.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzd3p1dGd4dGl1aWdyb2NxY21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NzkxMjksImV4cCI6MjA3OTM1NTEyOX0.FezD3WM7YMhh45t6pYrUoi2yNWK8e1MQXPzzk6EjK8M';

// 관리자 권한은 members 테이블 role/status + RLS 정책에서 최종 판정
// 클라이언트는 DB 결과를 읽어 UI 표시만 보조한다.

// Supabase 클라이언트 초기화 (CDN의 전역 supabase와 충돌 방지)
const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    flowType: 'pkce',
    detectSessionInUrl: true,
    persistSession: true,
    autoRefreshToken: true,
    storage: window.localStorage,
  },
});
