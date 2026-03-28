# Progress — website (geumsagwa.github.io)

## 마지막 갱신
- 시각(ISO): 2026-03-28T18:30:00+09:00

## 브랜치·원격
- 브랜치: `chore/public-readiness-20260312`
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- 최근 커밋: `131900e` (명함 추적), `af39bfa` (로고·반응형·배포·프리체크 등 대량 갱신)

## 이번 기간에 한 일 (요약)

### 반응형 (메인 히어로 우선, 단위 px `max-width`)
- 구간: **1920 · 1366 · 768 · 480 · 420** (FHD / 노트북 / 태블릿 / 중형 모바일 / 작은 폰)
- `style-pages.css`: 슬라이드·`.slide-container` 높이(dvh 보조)·히어로 패딩·통합 미디어쿼리 블록 정리
- `style.css`: 메뉴 로고 이미지 여백·`max-width` (가로형 로고 대비)

### 로고
- **A안 채택**: 펼친 책 + 골드 실 (`Images/logo-saenggak.svg`, 라이트: `logo-saenggak-light.svg`)
- 비교용 에셋: `logo-variant-*.svg`, `logo-variants-compare.html` (선택)
- 전 페이지 `<nav>`: img + `?v=20260328a` 캐시 버스트, `aria-label` 유지

### 명함
- `business-card.html`: 동일 로고 삽입, 하단 태그라인 가독색 조정
- **저장소 추적**: `.gitignore`에서 `business-card.html` 제외 후 커밋 (`131900e`)

### 기타 (동일 커밋 범위에 포함된 항목)
- `.github/workflows/deploy-pages.yml`, `repair_promote_admin.sql`
- `reports/public_precheck_20260328_*.md` 다수, 여러 HTML/JS(auth·library·blog 등) 정리

## 미커밋 / 로컬만
- 스크린샷·미리보기 PNG: `main-page-*.png`, `Images/logo-for-mspaint.png`, `Images/logo-variants-for-mspaint.png`, `Picture/` 등 (의도적으로 커밋 제외)

## 막힌 일 / blocked
- (없음)

## 다음에 할 일 (최대 3개)
1. `chore/public-readiness-20260312` → `master` 머지·배포 절차가 있으면 진행
2. 좁은 폭에서 히어로 세로 스택 여부 등 추가 튜닝 시 `style-pages.css`만 점검
3. 하네스 `gate-website.ps1` 등 변경 후 재실행 습관 유지

## 하네스 메모
- 인계·진행 문서 복사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md`
