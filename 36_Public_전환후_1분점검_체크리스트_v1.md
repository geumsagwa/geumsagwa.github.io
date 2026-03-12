# Public 전환 후 1분 점검 체크리스트 v1

## 목적

- Public 전환 직후 민감정보 노출/운영 리스크를 1분 내 재확인한다.

## 1분 체크

- [ ] GitHub 저장소가 실제로 `Public` 상태인지 확인 (`geumsagwa.github.io` 배지)
- [ ] `Settings -> Secrets and variables -> Actions`에 불필요/오노출 시크릿 없는지 확인
- [ ] `Actions` 최근 실행 로그에 키/토큰/개인정보 출력 없는지 확인
- [ ] 저장소 내 민감 파일 재확인 (`.env`, 키 파일, 개인 인증 파일 미추적 상태)
- [ ] `README`/문서/이슈에 개인 연락처/민감 운영정보(내부 경로, 키값) 없는지 확인
- [ ] 메인 페이지 접속 후 로그인/관리 메뉴 동작 이상 없는지 확인

## 빠른 재검증 명령

```powershell
cd C:\Users\pass6\project\homepage
npm run check
```

## 이상 발견 시 즉시 조치

1. 노출 내용 비공개 처리(문서/로그/파일 수정)
2. 키 노출 의심 시 즉시 rotate
3. 수정 후 `npm run check` 재실행
4. `35_Public_전환_최종서명_원페이지_v1.md` 비고에 조치 내역 기록
