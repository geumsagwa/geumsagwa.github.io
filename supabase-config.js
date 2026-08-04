// Supabase 설정
// Supabase URL과 publishable key는 public 값입니다. RLS 정책이 실제 보안을 담당합니다.
// (2026-08-04) 기존 legacy anon JWT → 신형 publishable key 전환 (sb_publishable_...)
// 배포 시 window.__env 로 기본값을 재정의할 수 있습니다:
//   <script>window.__env = { SUPABASE_URL: '...', SUPABASE_ANON_KEY: '...', KAKAO_REST_API_KEY: '...' }</script>
// .env.example 파일도 참고하세요.
const ENV = window.__env || {};
const SUPABASE_URL = ENV.SUPABASE_URL || 'https://qswzutgxtiuigrocqcmc.supabase.co';
const SUPABASE_ANON_KEY = ENV.SUPABASE_ANON_KEY || 'sb_publishable_HdVmh17uc8bmp05LpxdEhQ_n4k8XLW7';

// Kakao authorize 는 브라우저에서 REST 키 사용. 토큰 교환은 Edge Function kakao-token (client_secret).
const KAKAO_REST_API_KEY = ENV.KAKAO_REST_API_KEY || 'daa0f2c3a8dfeac385bf5b02919f8cd7';

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
