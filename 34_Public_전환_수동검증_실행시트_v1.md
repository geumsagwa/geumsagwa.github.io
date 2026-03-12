# Public 전환 수동검증 실행시트 v1

## 사용 목적

- 자동 점검(`scripts/public-precheck.ps1`) 이후 남는 수동 항목을 빠르게 검증한다.
- 복붙 가능한 명령/SQL 기준으로 최종 공개 전환 여부를 결정한다.

## 0) 사전 준비

- Supabase 프로젝트 접근 가능 계정
- 관리자 후보 이메일 1개(기존 가입 완료 상태)
- 일반 사용자 이메일 1개(기존 가입 완료 상태)

## 1) 자동 점검 재실행

PowerShell:

```powershell
cd C:\Users\pass6\project\homepage
npm run check
```

통과 기준:
- 출력 `summary: READY`
- `reports/public_precheck_YYYYMMDD_HHMMSS.md` 새 파일 생성

## 2) Supabase 정책 적용

Supabase SQL Editor에서 순서대로 실행:

1. `setup_members.sql`
2. `setup_members_seed_admin.sql` (`v_admin_email` 실제 값으로 수정 후 실행)

참고:
- `setup_members.sql`에는 `auth.users -> members` 자동 동기화 트리거가 포함됨
- 이메일 미인증 사용자도 `members`에 `pending/member`로 생성되어 관리자 화면에서 검토 가능

검증 SQL:

```sql
select id, user_id, email, status, role, updated_at
from public.members
order by updated_at desc;
```

통과 기준:
- 최소 1개 행이 `status='approved' and role='admin'`

## 3) RLS 정책 상태 확인

검증 SQL:

```sql
select schemaname, tablename, policyname, cmd
from pg_policies
where schemaname = 'public'
  and tablename = 'members'
order by policyname;
```

통과 기준:
- `members_self_select/insert/update`
- `members_admin_select/update/delete`
- 위 6개 정책 확인

## 4) 관리자/비관리자 접근 검증

브라우저에서 진행:

1. 관리자 계정 로그인 -> `admin.html` 접속
2. 회원 상태 변경(approve/reject 중 1회) 실행
3. 로그아웃 후 일반 계정 로그인 -> `admin.html` 접속 시 `index.html`로 리다이렉트 확인

통과 기준:
- 관리자: 접근 가능 + 변경 가능
- 일반 사용자: 접근 차단

## 5) GitHub 보호장치 확인

로컬 GitHub CLI에서 실행(저장소명 수정):

```powershell
gh api repos/geumsagwa/geumsagwa.github.io/branches/master/protection
```

통과 기준:
- `required_status_checks` 설정 존재
- `enforce_admins`/`required_pull_request_reviews` 중 최소 정책 활성화

## 6) 최종 판정 체크

- [ ] 자동 점검 `READY`
- [ ] `setup_members.sql` 적용 완료
- [ ] `setup_members_seed_admin.sql` 적용 완료
- [ ] `members` 정책 6개 확인 완료
- [ ] 관리자 접근/동작 확인 완료
- [ ] 비관리자 접근 차단 확인 완료
- [x] branch protection 확인 완료

모든 체크 완료 시: **Public 전환 진행 가능**
