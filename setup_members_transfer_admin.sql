-- ============================================
-- 관리자 권한 교체 (1회용)
-- 실행 전: v_new_admin_email (필수), v_old_admin_email (선택) 수정
-- 선행 조건: setup_members.sql 적용 완료
-- ============================================

do $$
declare
    v_new_admin_email text := 'new-admin@example.com'; -- TODO: 새 관리자 이메일(필수)
    v_old_admin_email text := 'old-admin@example.com'; -- TODO: 기존 관리자 이메일(선택, 미사용 시 '')
    v_new_admin_uid uuid;
    v_old_admin_uid uuid;
begin
    select u.id
      into v_new_admin_uid
      from auth.users u
     where lower(u.email) = lower(v_new_admin_email)
     order by u.created_at asc
     limit 1;

    if v_new_admin_uid is null then
        raise exception '새 관리자 이메일(%) 사용자를 auth.users에서 찾지 못했습니다.', v_new_admin_email;
    end if;

    insert into public.members (user_id, email, nickname, status, role, updated_at)
    values (v_new_admin_uid, v_new_admin_email, '관리자', 'approved', 'admin', now())
    on conflict (user_id) do update
    set email = excluded.email,
        status = 'approved',
        role = 'admin',
        updated_at = now();

    if coalesce(trim(v_old_admin_email), '') <> '' then
        select u.id
          into v_old_admin_uid
          from auth.users u
         where lower(u.email) = lower(v_old_admin_email)
         order by u.created_at asc
         limit 1;

        if v_old_admin_uid is not null and v_old_admin_uid <> v_new_admin_uid then
            update public.members
               set role = 'member',
                   status = 'approved',
                   updated_at = now()
             where user_id = v_old_admin_uid
               and role = 'admin';
        end if;
    end if;
end $$;

-- 결과 확인
select id, user_id, email, nickname, status, role, updated_at
from public.members
where role = 'admin'
order by updated_at desc;
