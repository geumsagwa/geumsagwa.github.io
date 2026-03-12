-- ============================================
-- 관리자 권한 해제 (1회용)
-- 실행 전: v_target_admin_email 값을 실제 대상 이메일로 변경
-- 안전장치: 최소 1명의 admin은 반드시 유지
-- 선행 조건: setup_members.sql 적용 완료
-- ============================================

do $$
declare
    v_target_admin_email text := 'admin@example.com'; -- TODO: 해제 대상 관리자 이메일
    v_target_uid uuid;
    v_admin_count integer;
begin
    select count(*)
      into v_admin_count
      from public.members m
     where m.role = 'admin'
       and m.status = 'approved';

    if v_admin_count <= 1 then
        raise exception '승인된 관리자가 1명 이하입니다. 최소 1명 유지 규칙으로 해제를 중단합니다.';
    end if;

    select u.id
      into v_target_uid
      from auth.users u
     where lower(u.email) = lower(v_target_admin_email)
     order by u.created_at asc
     limit 1;

    if v_target_uid is null then
        raise exception '해제 대상 이메일(%) 사용자를 auth.users에서 찾지 못했습니다.', v_target_admin_email;
    end if;

    update public.members
       set role = 'member',
           status = 'approved',
           updated_at = now()
     where user_id = v_target_uid
       and role = 'admin'
       and status = 'approved';

    if not found then
        raise exception '대상 이메일(%)은 승인된 admin이 아닙니다.', v_target_admin_email;
    end if;
end $$;

-- 결과 확인
select id, user_id, email, nickname, status, role, updated_at
from public.members
where role = 'admin'
order by updated_at desc;
