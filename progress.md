# Progress — website (geumsagwa.github.io)

## 마지막 갱신
- 시각(ISO): 2026-04-23T18:00:00+09:00
- **최신 프리체크:** `npm run check` — syntax OK, public-precheck **CONDITIONAL** (CSP 20/21, 미변경).

## 브랜치·원격
- 브랜치: `chore/public-readiness-20260312` (`origin/chore/public-readiness-20260312`와 동기)
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **원격 tip:** `git fetch` 후 `git log -1 origin/chore/public-readiness-20260312`로 확인
- **최근 반영된 작업 예:** progress·public precheck 리포트 추가, progress·워킹트리 설명 정합 (중간 커밋: `fb68cab`, `a40b8c4` 등)
- **`master`와의 차이:** `git rev-list --count master..chore/public-readiness-20260312` (머지·배포 전 커밋 수)

## 워킹트리 상태 (2026-04-05)
- **추적 파일:** 깨끗함 (`origin/chore/public-readiness-20260312`와 동기화된 상태를 가정).
- **미추적(로컬):** `main-page-*.png`, `Images/logo-for-mspaint.png`, `Images/logo-variants-for-mspaint.png`, `Picture/` 내 PNG 등 — 의도적 제외 유지 권장.
- 하네스 `gate-website` / `npm run check` : `2026-04-23` 기준 `public-precheck` 요약 **CONDITIONAL** (CSP coverage **20/21** WARN) → `gate-all` 파이프라인에서 실패. 최신 리포트: `reports/public_precheck_20260423_082415.md` (이전 예: `reports/public_precheck_20260405_163805.md`)

## 이번 기간에 한 일 (요약) — 이미 원격에 반영된 범위

### 반응형 (전역 통일, 2026-04-23)
- 구간(공통): **1280 · 768 · 480** (`max-width` px) — 모바일은 iPhone·갤럭시 대표 세로 폭(480px 이하)을 한 티어로 합침
- `style.css`: 네비 — 1280 / 768 / 480(옛 430·360·420 통합)
- `style-pages.css`: 히어로·페이지 — 기존 1920/1366/420 제거, 하단 “Unified”를 1280/768/480 3단으로 재구성; 서평 768 규칙을 도서관 등 768 블록과 병합
- `style-light.css`: 슬라이드 라이트 비네팅 `768`만 유지(430/360 중복 제거)
- `index.html`: 스타일 캐시 `?v=20260423r3`

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

## 막힌 일 / blocked
- **품질 게이트:** CSP 커버리지 WARN (20/21)로 precheck가 CONDITIONAL일 때 harness `gate-all` 실패 가능

## 다음에 할 일 (최대 3개)
1. CSP 누락 1건 해결 → `npm run check` 및 `reports/public_precheck_*.md`가 허용 상태인지 확인
2. 로컬 수정분 검토 후 커밋·푸시 또는 `git restore`로 정리; 이후 `chore/public-readiness-20260312` → `master` 머지·배포
3. 좁은 폭 히어로 세로 스택 등 UI 튜닝은 `style-pages.css` 중심으로 진행; 변경 후 `gate-website.ps1` 재실행 습관 유지

## 하네스 메모
- 인계·진행 문서 복사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md`
