# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

## 마지막 갱신
- 시각(ISO): `2026-05-04T09:00:00+09:00`
- **Git 정본 (배포·원격 히스토리):** 브랜치 **`master`**. **최신 SHA·메시지는** 저장소 기준 **`git fetch origin` 후** `git rev-parse --short origin/master` 및 `git log -1 --oneline origin/master`로 확인한다(본 파일에 적힌 과거 커밋 줄은 참고용). 로컬 `master`와 `origin/master`는 통상 **`git pull` 후 동기**.
- **레거시 브랜치:** `chore/public-readiness-20260312` 원격 tip **`4413071`**. `origin/master` 기준 **`git rev-list --count origin/chore/public-readiness-20260312..origin/master` = 33** — **과거 인계·작업 분기**로만 두고, **현재 작업·배포 기준은 `master`**.
- **프리체크·게이트:** `master` tip이 갱신되었으므로 **`npm run check`**, 하네스 **`gate-website.ps1`**(및 필요 시 `gate-all.ps1`) **재실행**으로 최종 여부 확인 권장. 이전 스냅샷(2026-04-23): public-precheck **CONDITIONAL**, CSP **20/21** WARN 가능.

## 브랜치·원격
- **작업 브랜치:** `master`
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **원격 tip 확인:** `git fetch` 후 `git log -1 --oneline origin/master`
- **최근 `master` 히스토리 (요약, 2026-04-30):** 히어로·슬라이드 튜닝 시리즈 **`ab91b73`에서 해당 튜닝 이전 상태로 revert** → **`4f64a07`**에서 **로고 비교용 HTML의 CSP 메타** 정리 → 같은 날 **`ee0136c`·`b2a034c` 이후 추가 커밋**으로 **`progress.md` 내용 반영·푸시**(정확한 개수와 SHA는 위 명령으로 확인).

## 워킹트리 상태 (2026-04-30, Git 기준)
- **상태:** **더러움** — `git status`상 추적 파일 **다수 수정**으로 표시되나, **`git diff HEAD` 기준 실제 줄 변경**은 종종 **`package.json` · `package-lock.json`** 등 소수에만 해당하는 패턴 관찰 — 나먼지 `M`은 **CRLF/인덱스 표시**(내용 무변) 가능성.
- **수정(M) 예:** 상동 — 정본 확인은 **`git diff HEAD --stat`** 권장.
- **미추적(??) 예:** `onse-soldae-invitation/`(온세솔대 요양원 **개업 초대 카드** HTML·PNG·Playwright 스크립트), `Images/*` 일부(webp/png), `main-live-*.png`, `main-page-*.png`, `.capture-tmp/`, `reports/public_precheck_*.md` 등 — 커밋·제외 정책 결정 필요.
- **주의:** 위 **미추적·로컬만** 항목은 **최신 `origin/master` 트리**에 포함되지 않을 수 있음(문서·코드 커밋만 있고 자산 폴더는 미추적) — 배포 사이트와 로컬 미리보기가 다를 수 있음.

## 이번 기간에 한 일 (요약) — 원격 `master` 히스토리에 포함된 범위

### 로컬 수정 (2026-05-04, 미커밋) — 코드 리뷰 후 3가지 개선
- **CSS 캐시버스트 통일:** 전체 17개 HTML에 `style.css?v=20260504`, `style-pages.css?v=20260504`, `style-light.css?v=20260504` 일괄 적용 (index.html만 있던 캐시버스트를 모든 페이지로 확산)
- **`escapeHtml` 중복 제거:** `board.js`·`admin.js`·`diary.js`에 각각 있던 `escapeHtml` 함수 제거, `auth.js`의 전역 함수로 통일
- **`supabase-config.js` 개선:** `window.__env` 오버라이드 지원 추가 (배포 파이프라인에서 주입 가능), `.env.example` 참조 주석 추가

### tip `b2a034c` (2026-04-30)
- **`progress.md`** — 원격 tip 문구·섹션을 **`ee0136c` 반영 이후 상태**와 맞춤(`docs: 원격 tip ee0136c로 progress.md 동기`).

### tip `ee0136c` (2026-04-30)
- **`progress.md`** — 원격 **`master`** tip·워킹트리·미추적 초대 카드 폴더 설명 반영 후 푸시.

### tip `4f64a07` (2026-04-30)
- **로고 비교용 HTML** — CSP 메타 정리 (`fix(home): 로고 비교용 HTML에 CSP 메타 추가`).

### tip `ab91b73` (그 직전)
- 히어로·메인 슬라이드 이미지/비네/필터 등 **튜닝 시리즈 후 전면 revert** — 저장소 메시지 기준 **튜닝 이전 UI 상태**로 복귀.

### 반응형 (전역 통일) — 과거 커밋 `cdba904` 등 (히스토리 보관)
- 구간(공통): **1280 · 768 · 480** (`max-width` px)
- `style.css` / `style-pages.css` / `style-light.css`, `index.html` 캐시 버스트 등

### 소셜 로그인·CSP (Supabase) — 과거 커밋 `430dd86` 등 (히스토리 보관)
- CSP: `connect-src`·`frame-src`·`form-action` 정합, `login.js` OAuth 흐름

### 로고·명함 등
- 로고 A안, `business-card.html`, `.gitignore` 정리 등 — 상세는 해당 시점 커밋 로그 참고

### 기타
- `.github/workflows`, `reports/public_precheck_*.md`, 기타 HTML/JS 정리

## 미커밋 / 로컬만
- `git diff HEAD --name-only`에 잡히는 수정: **`package*.json`** 등 소수 + **2026-05-04 세션 3가지 개선**(CSS 캐시버스트·escapeHtml 중복 제거·supabase-config 개선). `git status` `M`과 불일치 가능.
- 미추적: **`onse-soldae-invitation/`**(개업 초대 카드 웹/HTML·PNG) 등 — 스크린샷·시안 PNG는 의도적으로 제외할지, 커밋할지 구분 필요.

## 막힌 일 / blocked
- **로컬 워킹트리**와 **`origin/master`** 불일치 — 정리 전에는 “로컬에서 본 화면”과 “실제 Pages”가 어긋날 수 있음
- **품질 게이트:** `master` tip 변경 후 **precheck·CSP** — 재실행 결과로 확정

## 다음에 할 일 (최대 3개)
1. **2026-05-04 로컬 수정 3건**을 커밋할지 결정 → 필요 시 커밋·푸시
2. **`npm run check`**, 하네스 **`gate-website.ps1`**·필요 시 **`gate-all.ps1`** 실행 → 결과를 본 문서·`Desktop\Harness`에 기록
3. **세션 종료 시** `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 본 파일 **동기**

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md`
- 로컬 Ollama 등은 **통합 progress(Desktop)** 쪽 기록; 본 파일은 **사이트 repo·Git tip·워킹트리** 중심
