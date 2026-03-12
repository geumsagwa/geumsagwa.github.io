# home 폴더 Public 전환 사전점검 결과 (2026-03-12)

## 점검 범위

- 대상: `C:/Users/pass6/project/homepage` 전체
- 방식: 시크릿 패턴 스캔 + 민감정보/노출 리스크 확인

## 요약 판정

- 판정: **조건부 가능**
- High: 0건 (서비스 롤 키 하드코딩은 미검출)
- Medium: 1건
- Low: 2건
- 자동 점검: `scripts/public-precheck.ps1` 최신 실행 결과 **READY**
  - 리포트: `reports/public_precheck_20260312_150230.md`
  - 수동검증 실행시트: `34_Public_전환_수동검증_실행시트_v1.md`
  - 최종서명 원페이지: `35_Public_전환_최종서명_원페이지_v1.md`
  - 전환후 1분 점검: `36_Public_전환후_1분점검_체크리스트_v1.md`
  - 통합 실행: `npm run check` (syntax + public precheck)

## 주요 발견사항

### Medium-01. anon key 하드코딩

- 파일: `supabase-config.js`
- 내용: `SUPABASE_ANON_KEY`가 클라이언트 코드에 포함됨
- 해석: anon key 자체는 공개 전제지만, RLS 정책이 약하면 데이터 노출로 이어질 수 있음
- 조치:
  - Supabase 테이블 RLS/Policy를 재점검
  - 공개 권한 최소화(읽기/쓰기 분리)

### Medium-02. 관리자 권한 제어가 클라이언트 보조 로직에 의존 (조치 완료)

- 파일: `auth.js`, `admin.js`, `setup_members.sql`
- 내용: 관리자 판정을 `members(role/status)` + RLS 정책으로 이관
- 리스크: `setup_members.sql` 미적용 시 정책이 반영되지 않음
- 조치:
  - Supabase SQL Editor에서 `setup_members.sql` 실행
  - `setup_members_seed_admin.sql` 실행으로 초기 관리자 1인 지정
  - 운영 변경 시 `setup_members_transfer_admin.sql`, `setup_members_revoke_admin.sql` 사용

### Low-01. `.env` ignore 규칙 부재(보강 완료)

- 조치 완료: `.gitignore`에 `.env`, `.env.*`, `!.env.example` 추가

### Low-02. 공개 저장소 운영 전 체크 필요

- 브랜치 보호/필수체크/PR 게이트는 remote 설정 확인 필요
- 조치 완료: `master` 브랜치 branch protection 적용 및 확인 완료

### 참고. CSP 적용 범위 확대 완료

- `project/homepage` 내 HTML 20개 전체에 CSP 메타 태그 적용 완료
- 현재 정책은 기능 호환을 위해 `unsafe-inline` 허용 상태

## 최종 체크리스트

- [x] Supabase RLS 정책 재검토 완료 (`members` 정책 6개 확인)
- [x] 관리자 권한 판정 로직 서버 측 이관 코드 반영 (`setup_members.sql` 적용 필요)
- [x] 관리자 운영 SQL(`seed/transfer/revoke`) 실제 환경 적용 확인 (seed 적용 + admin 1건 확인)
- [x] 전체 HTML CSP 메타 적용 완료
- [x] `npm run` 기반 최소 품질 점검 명령 정리 (`package.json`의 `check/check:syntax/check:public`)
- [x] Public 전환 직전 민감정보 재스캔 1회 수행 (`reports/public_precheck_20260312_150230.md`)
- [x] GitHub branch protection 적용 확인 (`master`)

## 추가 조치 완료 (이번 턴)

- `migrate-essays.js`, `migrate-reviews.js`의 서비스 롤 키 하드코딩 제거
- 루트 `_env.js` 추가로 `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`를 `.env` 기반 로딩
- 루트 `.env.example` 추가
- 자동 점검 스크립트 `scripts/public-precheck.ps1` 추가 및 실행 검증 완료
- `setup_members.sql`에 `auth.users -> members` 자동 동기화 트리거/백필 추가 (미인증 가입자도 pending으로 관리 가능)
