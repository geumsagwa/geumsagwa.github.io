# Progress — website (geumsagwa.github.io)

## 마지막 갱신
- 시각(ISO): 2026-04-05T17:00:00+09:00

## 브랜치·원격
- 브랜치: `chore/public-readiness-20260312` (`origin/chore/public-readiness-20260312`와 동기)
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **원격 최신 커밋:** `4355af6` — docs: progress.md 갱신 (로고·반응형·명함·커밋 요약)
- **이전 참고:** `131900e` (명함 추적), `af39bfa` (로고·반응형·배포·프리체크 등)
- **`master`와의 차이:** chore 브랜치가 `master`보다 **10커밋** 앞섬 (머지·배포 대기)

## 워킹트리 상태 (2026-04-05)
- **커밋되지 않은 수정 다수:** 예) `index.html`, `style-pages.css`, 로고 SVG·`logo-variants-compare.html`, `.github/workflows/deploy-pages.yml`, `admin.html`·블로그·리더 등 HTML/JS, `repair_promote_admin.sql` 등.
- **미추적(로컬):** `main-page-1920.png` 등 브레이크포인트 캡처, `Images/logo-for-mspaint.png`, `Picture/` 내 PNG 등 — 의도적 제외 유지 권장.
- 하네스 `gate-website` / `npm run check` : `2026-04-05` 기준 `public-precheck` 요약 **CONDITIONAL** (CSP coverage **20/21** WARN) → `gate-all` 파이프라인에서 실패할 수 있음. 최신 리포트 예: `reports/public_precheck_20260405_163805.md`

## 이번 기간에 한 일 (요약) — 이미 원격에 반영된 범위

### 반응형 (메인 히어로 우선, 단위 px `max-width`)
- 구간: **1920 · 1366 · 768 · 480 · 420** (FHD / 노트북 / 태블릿 / 중형 모바일 / 작은 폰)
- `style-pages.css`: 슬라이드·`.slide-container` 높이(dvh 보조)·히어로 패딩·통합 미디어쿼리 블록 정리
- `style.css`: 메뉴 로고 이미지 여백·`max-width` (가로형 로고 대비)

### 로고
- **A안 채택**: 펼친 책 + 골드 실 (`Images/logo-saenggak.svg`, 라이트: `logo-saenggak-light.svg`)
- 비교용 에셋: `logo-variant-*.svg`, `logo-variants-compare.html` (선택)
- 전 페이지 `<nav>`: img + 캐시 버스트 쿼리, `aria-label` 유지

### 명함
- `business-card.html`: 동일 로고 삽입, 하단 태그라인 가독색 조정
- **저장소 추적**: `.gitignore`에서 `business-card.html` 제외 후 커밋 (`131900e`)

### 기타 (동일 커밋 범위에 포함된 항목)
- `.github/workflows/deploy-pages.yml`, `repair_promote_admin.sql`
- `reports/public_precheck_20260328_*.md` 다수, 여러 HTML/JS(auth·library·blog 등) 정리

## 미커밋 / 로컬만
- 스크린샷·미리보기 PNG: `main-page-*.png`, `Images/logo-for-mspaint.png`, `Images/logo-variants-for-mspaint.png`, `Picture/` 등 (의도적으로 커밋 제외 권장)
- **추가:** 현재 워킹트리에 **이미 추적된 파일의 수정**이 많이 남아 있음 → 다음 작업에서 커밋/리버트 결정 필요

## 막힌 일 / blocked
- **품질 게이트:** CSP 커버리지 WARN (20/21)로 precheck가 CONDITIONAL일 때 harness `gate-all` 실패 가능

## 다음에 할 일 (최대 3개)
1. CSP 누락 1건 해결 → `npm run check` 및 `reports/public_precheck_*.md`가 허용 상태인지 확인
2. 로컬 수정분 검토 후 커밋·푸시 또는 `git restore`로 정리; 이후 `chore/public-readiness-20260312` → `master` 머지·배포
3. 좁은 폭 히어로 세로 스택 등 UI 튜닝은 `style-pages.css` 중심으로 진행; 변경 후 `gate-website.ps1` 재실행 습관 유지

## 하네스 메모
- 인계·진행 문서 복사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md`
