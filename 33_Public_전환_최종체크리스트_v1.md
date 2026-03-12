# Public 전환 최종 체크리스트 v1

## 목적

- 공개 전환 직전에 누락/노출/권한 공백을 빠르게 차단한다.
- 코드쉴드 원칙(저장소/도구/규칙 기반 강제)을 운영 절차에 고정한다.

## 실행 순서

1. 자동 점검 실행
   - PowerShell:
     - `cd C:\Users\pass6\project\homepage`
     - `npm run check`
   - 개별 실행(선택):
     - `npm run check:syntax`
     - `npm run check:public`
2. 리포트 확인
   - 생성 위치: `reports/public_precheck_YYYYMMDD_HHMMSS.md`
   - 판정 기준:
     - `READY`: 즉시 진행 가능
     - `CONDITIONAL`: 수동 체크 후 진행
     - `BLOCK`: 차단, 이슈 해결 후 재실행
3. Supabase 정책 확인
   - `setup_members.sql` 적용
   - `setup_members_seed_admin.sql` 적용
4. 권한 동작 확인
   - 관리자 계정: `admin.html` 접근/상태변경 가능
   - 일반 계정: `admin.html` 접근 차단
5. 원격 보호 장치 확인
   - GitHub branch protection / required checks 최종 확인
6. 상세 수동검증 시트 사용
   - `34_Public_전환_수동검증_실행시트_v1.md`
7. 최종 서명 원페이지 작성
   - `35_Public_전환_최종서명_원페이지_v1.md`

## 필수 통과 조건

- HIGH FAIL = 0건
- 관리자 권한 정책 SQL 적용 완료
- 민감정보 재스캔 리포트 최신본 1개 확보

## 운영 메모

- 관리자 교체: `setup_members_transfer_admin.sql`
- 관리자 해제: `setup_members_revoke_admin.sql` (최소 1명 admin 유지 가드 포함)
