-- 관리자 메뉴(Diary/관리) 복구: members 행이 pending/member 이면 UI에 안 나옵니다.
-- 아래 이메일을 본인 로그인 주소로 바꾼 뒤 Supabase → SQL Editor 에서 한 번 실행하세요.
-- (서비스 롤이 아닌 대시보드 SQL은 RLS를 우회합니다.)

update public.members
set
  status = 'approved',
  role = 'admin',
  updated_at = now()
where lower(email) = lower('여기에-본인-이메일@example.com');

-- 확인
select id, user_id, email, nickname, status, role, updated_at
from public.members
where lower(email) = lower('여기에-본인-이메일@example.com');
