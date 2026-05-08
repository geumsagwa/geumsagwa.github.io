# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

## 마지막 갱신
- 시각(ISO): `2026-05-08T20:00:00+09:00` (Desktop `Harness\progress.md`·`handover-progress.md`와 맞춤)
- **Kakao (직접 OAuth):** `client_id`를 **REST API 키**로 통일 (`supabase-config.js` `KAKAO_REST_API_KEY` + `login.js`). JS 키 사용이 실패 원인이었음 → **로컬에서 동작 확인.** 상세·에이전트 교훈: `C:\Users\pass6\Desktop\Harness\handover-progress.md`.
- **Git 정본:** 브랜치 **`master`**. **`origin/master` tip = `HEAD` = `5d792d9`** (@ fix: Kakao JS SDK 제거 → OAuth redirect 직접 구현). **아래 Kakao REST 키·에러 UI 수정은 아직 워킹트리만 변경(미커밋)** — 배포 반영하려면 **커밋·푸시** 후 본 절·Desktop 인계의 tip을 갱신.
- **레거시 브랜치:** `chore/public-readiness-20260312` 원격 tip **`4413071`** (변동 없음).
- **금일 로컬 변경 (미커밋, Kakao 관련):** `.env.example`, `login.js`, `supabase-config.js`, `progress.md`(본 파일).

## 브랜치·원격
- **작업 브랜치:** `master`
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **최근 `master` 히스토리:** tip **`5d792d9`** (Kakao SDK 제거·직접 OAuth code→token); 그 이전 **`c6953f5`**, **`c8463a9`** 등 Kakao 우회 시도 커밋. Reader TOC 등 **`9195d23`** 이전 시점 작업은 히스토리에 보존됨(필요 시 `git log` 참고).

## 워킹트리 상태 (2026-04-30, Git 기준)
- **상태:** **더러움** — `git status`상 추적 파일 **다수 수정**으로 표시되나, **`git diff HEAD` 기준 실제 줄 변경**은 종종 **`package.json` · `package-lock.json`** 등 소수에만 해당하는 패턴 관찰 — 나먼지 `M`은 **CRLF/인덱스 표시**(내용 무변) 가능성.
- **수정(M) 예:** 상동 — 정본 확인은 **`git diff HEAD --stat`** 권장.
- **미추적(??) 예:** `onse-soldae-invitation/`(온세솔대 요양원 **개업 초대 카드** HTML·PNG·Playwright 스크립트), `Images/*` 일부(webp/png), `main-live-*.png`, `main-page-*.png`, `.capture-tmp/`, `reports/public_precheck_*.md` 등 — 커밋·제외 정책 결정 필요.
- **주의:** 위 **미추적·로컬만** 항목은 **최신 `origin/master` 트리**에 포함되지 않을 수 있음(문서·코드 커밋만 있고 자산 폴더는 미추적) — 배포 사이트와 로컬 미리보기가 다를 수 있음.

## 이번 기간에 한 일 (요약) — 원격 `master` 히스토리에 포함된 범위

### tip `256eb7d` (2026-05-04)
- **`progress.md`** — 한글 인코딩 복구 내역 반영.

### tip `015815f` (2026-05-04)
- **한글 인코딩 복구:** `e22d696`에서 발생한 17개 HTML 파일 한글 깨짐을 이전 정상 버전(`e22d696^`)에서 복원. CSS 캐시버스트(`v=20260504`)는 유지. 배포 페이지(GitHub Pages) 한글 정상 출력 확인 완료.

### tip `afda2b0` (2026-05-04)
- **초대장 CSP 추가:** `onse-soldae-invitation` 3개 페이지에 CSP 메타 태그 추가. `npm run check` **READY** (CSP 24/24).

### tip `e22d696` (2026-05-04)
- **코드 리뷰 기반 3가지 개선:**
  - CSS 캐시버스트 통일: 전체 17개 HTML에 `style.css?v=20260504`, `style-pages.css?v=20260504`, `style-light.css?v=20260504` 일괄 적용
  - `escapeHtml` 중복 제거: `board.js`·`admin.js`·`diary.js`에 각각 있던 `escapeHtml` 함수 제거, `auth.js`의 전역 함수로 통일
  - `supabase-config.js` 개선: `window.__env` 오버라이드 지원 추가, `.env.example` 참조 주석 추가

### 금일 로컬 변경 (2026-05-08)
- **Kakao 직접 OAuth:** REST API 키로 `client_id` 통일, `kakaoRedirectUri()` 단일화, OAuth 오류 쿼리·토큰 실패·Supabase 오류 시 메시지·성공 시에만 `index.html` 이동 (`supabase-config.js`, `login.js`). `.env.example`에 `KAKAO_REST_API_KEY` 안내. 인계: Desktop `handover-progress.md`.

### 금일 로컬 변경 (2026-05-06)
- **KOE205 해결:** Kakao Developers 콘솔 앱 > 플랫폼 키 > 리다이렉트 URI에 Supabase 콜백 URL 등록, 카카오 로그인 정상 동작 확인
- **GitHub 소셜로그인 동작 확인 완료**

### 금일 로컬 변경 (2026-05-05, 미커밋)
- **슬라이드2 768px 텍스트 세로표시 버그 수정** — `style-pages.css` slide 2 `.text-overlay`의 `white-space: pre-line` 제거
- **메뉴바 768px 개선** — `style.css` 메뉴바 `height: 14vh` → `auto; flex-wrap: wrap`
- **Reader TOC 사이드바 → 오버레이 모달** — `reader.html` TOC를 `position: fixed` 오버레이+중앙 모달로 변경, `≡ 목차` 버튼+`×` 닫기 버튼, 반응형 대응
- **Reader spread 수정** — `spread: 'always'` → `'auto'`, 본문 CSS `box-sizing`, `max-width`, `word-wrap` 등 추가
- **카카오 로그인 KOE205** — 원인 파악 완료 (Kakao Developers 콘솔에 Supabase 콜백 URL 미등록). 설정 위치 파악 중 사용자 일정으로 중단

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
- **추적 파일 수정(M):** `.env.example`, `login.js`, `supabase-config.js`, `progress.md` — Kakao REST 키·에러 처리·문서(본 파일). **커밋·푸시 대기.**
- **미추적(??):** `onse-soldae-invitation/export-kakao-png.cjs`, `export-mobile-invitation-png.cjs`, `kakaotalk-invitation.png`, `logo.png`, `mobile-invitation-card.png` — 커밋 여부·용량 정책 결정 필요.
- 그 밖에 **`onse-soldae-invitation/`** HTML·기타 에셋, `Images/*`, `.capture-tmp/` 등은 과거 메모와 동일하게 정책 결정 필요.
- `git status`에서 `M`이 CRLF만 때문일 수 있음 — 정본은 **`git diff HEAD --stat`** 으로 확인.

## 막힌 일 / blocked
- **(해소)** 카카오 로그인 — **직접 OAuth 경로**: REST API 키·Redirect URI·`profile_nickname` 동의. (과거 “리다이렉트만으로 해결” 메모와 **통로 혼동 주의** — Supabase `signInWithOAuth('kakao')`는 GoTrue scope 이슈가 별도.)
- **(해소)** GitHub 소셜로그인 — 동작 확인 완료
- **(해소)** `e22d696` 한글 인코딩 깨짐 → `015815f` 복구·배포 확인 완료
- 잔여 CRLF/`package-lock` 표시 등(내용 무변 가능) — 필요 시 `git diff HEAD`로 확인

## 다음에 할 일 (최대 3개)
1. **우선:** Kakao·문서 워킹트리 변경 **커밋·푸시** → GitHub Pages에 REST 키·에러 UI 반영 **후** 본 파일·Desktop Harness 인계 tip 갱신
2. `onse-soldae-invitation` 미추적 에셋·스크립트 **커밋 정책** 결정
3. (백로그) Reader·스타일 등 기존 미커밋·CRLF 정리

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md` — 갱신 시 **세 파일 동기**
- 하네스 `gate-website.ps1`는 `configs/projects.v2.json`의 `homepage` **workspace**(본 레포 경로)에서 `npm run check`
- 로컬 Ollama 등은 **통합 progress(Desktop)** 쪽 기록; 본 파일은 **사이트 repo·Git tip·워킹트리** 중심
