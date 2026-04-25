# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(팁·CSP·PR·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

## 마지막 갱신
- 시각(ISO): `2026-04-25T19:00:00+09:00`
- **원격 tip:** `git fetch` 후 `git rev-parse --short origin/chore/public-readiness-20260312` 로 확인(문서에 고정해 두면 “팁을 적는 문서” 커밋 때문에 한 끗 어긋날 수 있음). **기능·문서 뼈대:** 반응형 `cdba904`, 소셜·CSP·OAuth `430dd86`, `progress`·Handover 정합 `cf436b8`+.
- **최신 프리체크:** `npm run check` — syntax OK, public-precheck **PASS** (CSP **21/21**, 해결됨). 하네스 `gate-all` 통과 대기 중.
- **PR:** [`#8` merge](https://github.com/geumsagwa/geumsagwa.github.io/pull/8) → `master`·GitHub Pages 반영이 **다음 병합 목표**.

## 브랜치·원격
- 브랜치: `chore/public-readiness-20260312` (`origin/chore/public-readiness-20260312`와 동기)
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **원격 tip:** `git fetch` 후 `git log -1 --oneline origin/chore/public-readiness-20260312` (최초 `progress`·Handover 동기는 `cf436b8` 계열, 이후 tip은 위 명령이 정본)
- **최근 반영된 작업 예:** progress·public precheck 리포트, 반응형·로그인/CSP (커밋: `cdba904`, `430dd86` 등, 이전: `fb68cab`, `a40b8c4` 등)
- **`master`와의 차이:** `git rev-list --count master..chore/public-readiness-20260312` (머지·배포 전 커밋 수)

## 워킹트리 상태 (2026-04-05)
- **추적 파일:** 깨끗함 (`origin/chore/public-readiness-20260312`와 동기화된 상태를 가정).
- **미추적(로컬):** `main-page-*.png`, `Images/logo-for-mspaint.png`, `Images/logo-variants-for-mspaint.png`, `Picture/` 내 PNG 등 — 의도적 제외 유지 권장.
- 하네스 `gate-website` / `npm run check` : `2026-04-25` 기준 `public-precheck` 요약 **PASS** (CSP coverage **21/21**) → `gate-all` 파이프라인 통과 가능 상태.

## 이번 기간에 한 일 (요약) — 이미 원격에 반영된 범위

### 반응형 (전역 통일, 2026-04-23) — `cdba904` 등
- 구간(공통): **1280 · 768 · 480** (`max-width` px) — 모바일은 iPhone·갤럭시 대표 세로 폭(480px 이하)을 한 티어로 합침
- `style.css`: 네비 — 1280 / 768 / 480(옛 430·360·420 통합)
- `style-pages.css`: 히어로·페이지 — 기존 1920/1366/420 제거, 하단 “Unified”를 1280/768/480 3단으로 재구성; 서평 768 규칙을 도서관 등 768 블록과 병합
- `style-light.css`: 슬라이드 라이트 비네팅 `768`만 유지(430/360 중복 제거)
- `index.html`: 스타일 캐시 `?v=20260423r3`

### 소셜 로그인·CSP (Supabase) — `430dd86`
- CSP: `connect-src`에 `wss://*.supabase.co` 등, `frame-src`에 `https://*.supabase.co`, `form-action` 정합
- 다수 HTML·`login.js`: `signInWithOAuth` 후 `data.url`로 `location.assign` 등 OAuth 흐름 정리 (실제 동작 확인됨; Supabase·카카오 설정은 프로젝트 쪽에서 유지)

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
- **CSP 해결**: `Images/logo-variants-compare.html` 내 누락된 CSP 메타 태그 삽입 (21/21 완료)

## 미커밋 / 로컬만
- 스크린샷·미리보기 PNG: `main-page-*.png`, `Images/logo-for-mspaint.png`, `Images/logo-variants-for-mspaint.png`, `Picture/` 등 (의도적으로 커밋 제외 권장)

## 막힌 일 / blocked
- **PR #8** merge(쓰기·리뷰)·**품질 게이트:** CSP 해결로 precheck **PASS** 상태로 전환됨.

## 다음에 할 일 (최대 3개)
1. **PR #8** merge·[Pages](https://geumsagwa.github.io/) 확인; 필요 시 `master`에서 `git pull` 후 로컬 정합
2. `gate-website.ps1`·`gate-all` 재검 및 최종 배포 확인
3. 좁은 폭 히어로 세로 스택 등 UI 튜닝은 `style-pages.css` 중심으로 진행; 변경 후 `gate-website` 재실행 습관 유지. **끝날 때** `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md` 동기

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md` (원본·팁·PR·CSP는 **서로 맞출 것**)
- (로컬·게이트 외) Ollama 정리·`llama3.2:3b` 등은 **harness/ Desktop 통합 progress** 쪽 기록; 웹 repo 본 `progress`는 **사이트·PR·CSP** 중심으로 유지
