-- ============================================
-- 초기 관리자 지정 (1회용)
-- 실행 전: 아래 v_admin_email 값을 실제 관리자 이메일로 변경
-- 실행 위치: Supabase Dashboard -> SQL Editor
-- 선행 조건: setup_members.sql 적용 완료
-- ============================================

do $$
declare
    v_admin_email text := 'admin@example.com'; -- TODO: 실제 관리자 이메일로 변경
    v_admin_uid uuid;
begin
    select u.id
      into v_admin_uid
      from auth.users u
     where lower(u.email) = lower(v_admin_email)
     order by u.created_at asc
     limit 1;

    if v_admin_uid is null then
        raise exception 'auth.users 에서 이메일(%) 사용자를 찾지 못했습니다. 먼저 해당 계정으로 회원가입/로그인하세요.', v_admin_email;
    end if;

    insert into public.members (user_id, email, nickname, status, role, updated_at)
    values (v_admin_uid, v_admin_email, '관리자', 'approved', 'admin', now())
    on conflict (user_id) do update
    set email = excluded.email,
        status = 'approved',
        role = 'admin',
        updated_at = now();
end $$;

-- 결과 확인
select id, user_id, email, nickname, status, role, created_at, updated_at
from public.members
where role = 'admin'
order by updated_at desc;
