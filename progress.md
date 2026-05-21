# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

## 마지막 갱신
- 시각(ISO): **`2026-05-21`** — **1-2권 각주 통일 해결. EPUB_BUILD_GUIDE.md 각주 규칙 종합.**
  - **1-2권 각주 통일 해결:** `endnotes.xhtml`에 인라인 스타일 직접 주입 + CSS 패치로 리더기 렌더링 문제 해결.
    - `unify-footnotes-epub.mjs`: 마크업·인라인 스타일 4권 형식으로 통일, `<br/>` 제거
    - `renumber-footnotes-book.mjs`: 책 전체 각주 번호 1부터 순차 재할당
    - 백업: `history1.epub.bak-footnotes`, `history2.epub.bak-footnotes`
  - **4권 각주 번호 재할당:** `extractChapters()` 각주 번호를 챕터별로 **1부터 순차 재할당** (`fnIdMap`). 본문 `[^n]` 참조와 정의 번호 불일치(원고 내 결번)로 인한 깨진 링크 수정. (직전 작업)
  - **3권 각주:** EPUB 내 각주 없음 확인. 원고 PDF만 존재, 마크다운 소스 없음.
  - **EPUB_BUILD_GUIDE.md 각주 규칙 종합 정리:** 챕터별 각주(4권 표준) vs endnotes(1-2권 레거시) 규칙 분리 문서화. 원고 `[^n]` 표기법·HTML 구조·CSS·번호 체계·빌드 로직 전 섹션 완비.
  - **Wiki tip:** **`git rev-parse origin/master` 로 최신 확인.**
- 직전(ISO): **`2026-05-20`** (북 리뷰 카드 이미지 수정 + 카드뉴스 기능 추가)
  - **북 리뷰:** `blog.js` `cover_url` 폴백 순서 수정 (`cover_url` → `card_image_url` → 기본 이미지). **`9a829d2`**
  - **카드뉴스:** `admin.html`·`admin.js`: 회원관리/카드뉴스 탭 전환, 모달 뷰어
  - `scripts/generate-cardnews.ps1`: 브리핑 → 카드뉴스 HTML 자동 생성
  - `admin/cardnews/`: 생성된 카드뉴스 + manifest 저장소
- 직전(ISO): **`2026-05-18`** (Harness 인계 동기) — **DeepSeek 공식 API** 전환·LiteLLM/NVIDIA 정리 반영. **`master` tip `ba82d38`** (`origin/master` 일치). Harness **`35c7065`**.
- 직전(ISO): `2026-05-12` (인계 동기) — **최신 `master` tip 은 `git fetch` 후 `git rev-parse origin/master` 로 확인.** 참고 시점: CI 안정화 **`397a594`**, 세계사 Ⅲ **`47123bc`**.
- 직전(ISO): `2026-05-11` — 세계사 Ⅲ 지도·EPUB **`47123bc`** 푸시 완료. 이후 **`397a594`** 에서 `library.js`·CodeShield 등 CI 수정 분 반영.
- 직전(ISO): `2026-05-11T21:15:00+09:00` — Desktop 인계·세계사 Ⅲ 로컬 산출 정리.
- 직전 갱신(ISO): `2026-05-11T18:00:00+09:00` — **`origin/master`** 에 **2026-05-11** 온세솔대 리플릿(`2df59e4`)·`progress.md` 인계(`8a346d5` 등)·문서 정합분 **푸시 완료** — **정확한 최신 해시는 `git rev-parse origin/master`**.
- **온세솔대 리플릿:** `onse-soldae-invitation/` 전체(HTML·에셋·PNG·스크립트·`package.json`) **커밋·푸시 완료** (`2df59e4`). HTML 수정 후 PNG는 `node export-leaflet-png.mjs` (무진님 지시, `task-continuity.mdc` 반영).
- **Kakao:** 직접 OAuth + Edge **`kakao-token`**, 프로덕션 로그인 성공 상태 유지. 상세: Desktop `handover-progress.md`.
- **Git 정본:** 브랜치 **`master`**. **최신 tip:** **`git fetch` 후 `git rev-parse origin/master`**. **카카오·Edge 기준점(과거):** **`dd325d1`**, **`441bd22`**, **`37171bd`**.
- **레거시 브랜치:** `chore/public-readiness-20260312` 원격 tip **`4413071`** (변동 없음).
- **하네스 인계 미러:** `geumsagwa-harness` → **`docs/desktop-handoff/`** — **`origin/main` tip** 은 해당 저장소에서 확인.

## 브랜치·원격
- **작업 브랜치:** `master`
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **최근 `master` 히스토리:** 카카오 Edge·직접 OAuth·인계 문서는 **`37171bd`** 이후 커밋들로 누적; 이전 **`5d792d9`**(SDK 제거·직접 OAuth code→token) 등은 히스토리 보존.

## 워킹트리 상태 (2026-05-12, Git 기준)
- **tip 확인:** `git fetch` 후 **`git rev-parse origin/master`**. 2026-05-12 인계 동기·CI 안정화(**`397a594`**)·세계사 Ⅲ(**`47123bc`**) 등이 **`master` 히스토리에 포함**됨.
- **상태:** 세계사 Ⅲ `map/` 산출은 **저장소에 반영됨**. 로컬에만 둘 **`epub/history3.epub`**, 주석 TXT 등은 **미추적** — 필요 시 `.gitignore` 또는 별도 보관.
- **리플릿:** 배포에 HTML이 필요하면 **`geumsagwa.github.io` 저장소의 `onse-soldae-invitation/`** 경로로 확인(본 커밋에 포함됨).
- **기타 로컬만:** `.capture-tmp/`, 일부 `Images/*`·스크린샷 등은 여전히 **정책에 따라** `.gitignore`/커밋 여부 확인 권장.

## 이번 기간에 한 일 (요약) — 원격 `master` 히스토리에 포함된 범위

### 금일 반영 (2026-05-11 — 세계사 Ⅲ 지도, `master` 커밋)
- **경로:** `project/homepage/map/` (작업 레포 워킹디렉터리 기준 **상대 경로 `map/`**).
- **`temp_history3.epub`**: 삽입용 **원본 EPUB**(스크립트는 이 파일을 입력으로 사용; 본문에 지도 블록을 직접 넣지 않음).
- **`embed-all-maps-history3.js`**: 제74~85화 구간에 지도 **12개** 삽입, SVG `<image>` + `afterParagraph` 맥락 배치, viewBox **`1200×800`** (`optimize-images.js` 결과에 맞춤).
- **이미지:** `ch74_…` ~ `ch85_…` PNG·JPEG(1200폭 변환 후 삽입).
- **결과 EPUB:** **`history3_with_maps.epub`** — 실제 확인·배포용은 이 파일.
- **검증:** `node map/verify-history3.js` — 12개 Section·이미지 통과.
- **업로드:** `map/upload-history3.js` — `DEFAULT_STORAGE_PATH`를 `library.epub_path`와 맞춘 뒤 실행(또는 `HISTORY3_EPUB_PATH`).
- **룰:** `.cursor/rules/epub-map-project.mdc` 에 3권 작업 파일 표 갱신(Supabase `history3` 네이밍 참고).

### tip `8a346d5` (2026-05-11)
- **`progress.md`** 인계 갱신(본 파일·Desktop·하네스 `docs/desktop-handoff/` 동기 반영) **커밋·푸시**.

### tip `2df59e4` (2026-05-11)
- **온세솔대 리플릿 저장소 반영:** `leaflet-trifold.html` 갱신분, `leaflet-assets/`·`leaflet-front.png`·`leaflet-back.png`·한글 파일명 PNG, `package.json` / `package-lock.json`, 내보내기·추출 보조 스크립트, 참고 PDF·TXT 등 **일괄 추가 후 푸시**.
- 직전 커밋(요약): `24e8985` head 주석 닫힘 수정, `552c644` 생활주거 패널·연락처 등(리플릿 관련 마크업/CSS).

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
- **(선택)** `epub/history3.epub`, `epub/주석 명령문.txt` 등 — 저장소 미포함, 필요 시 정리.
- **`origin/master`** 확인: **`git fetch`** 후 **`git rev-parse origin/master`** 또는 **`git log -1 --oneline origin/master`**.
- `git status`의 `M`이 **내용 없음(CRLF)** 일 수 있음 — **`git diff HEAD --stat`** 으로 확인.

## 막힌 일 / blocked
- **(해소)** 카카오 로그인 — **직접 OAuth 경로**: REST API 키·Redirect URI·`profile_nickname` 동의. (과거 “리다이렉트만으로 해결” 메모와 **통로 혼동 주의** — Supabase `signInWithOAuth('kakao')`는 GoTrue scope 이슈가 별도.)
- **(해소)** GitHub 소셜로그인 — 동작 확인 완료
- **(해소)** `e22d696` 한글 인코딩 깨짐 → `015815f` 복구·배포 확인 완료
- **(해소) 1-2권 각주 리더기 미적용 문제** → `unify-footnotes-epub.mjs` + `renumber-footnotes-book.mjs`로 인라인 스타일 직접 주입하여 해결
- 잔여 CRLF/`package-lock` 표시 등(내용 무변 가능) — 필요 시 `git diff HEAD`로 확인

## EPUB 빌드 규칙 (2026-05-21 통일)
**모든 EPUB 권은 동일한 구조를 따라야 함.** 규칙 파일:
- `C:\Users\pass6\project\homepage\ebooks\EPUB_BUILD_GUIDE.md` (각주 규칙 종합 포함)

**핵심 규칙 요약:**
- CSS: `Style0001.css` 통일
- 작가의 말: `Section0000.xhtml` 통일
- 각주 (신규 권): `<section class="footnotes"><ol><li id="note{n}"><a href="#ref{n}">...</a></li></ol></section>` + **인라인 스타일 필수**
- 각주 (레거시 1-2권): `endnotes.xhtml` — 수정 완료, 추가 작업 불필요
- 본문 각주 참조: `<sup><a href="#note{n}" id="ref{n}" style="text-decoration:none;color:inherit;">[{n}]</a></sup>`
- 빌드 템플릿: `이야기_세계사_4\build-ebook.mjs` 복사 후 경로만 수정
- 지도는 EPUB에 직접 포함 금지 (커서 별도 작업)
- 각주 HTML 구조 전체는 `EPUB_BUILD_GUIDE.md` §각주 규칙 참조

## 다음에 할 일 (최대 3개)
1. **세계사 Ⅲ** — Supabase Storage 업로드(`upload-history3.js` 경로 설정)·`library` 테이블 `epub_path`·리더 연동 확인
2. **세계사 Ⅳ EPUB 생성** — 지도 작업·커버 이미지·홈페이지 업로드
3. (선택) `Images/*`·`.capture-tmp/` 등 **용량** 기준 `.gitignore`/커밋 정리

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md` — 갱신 시 **세 파일 동기**
- **LLM Wiki:** `94836dd` — 102화(일본 경제 성장) 최종 확정. 수정 금지.
- 하네스 `gate-website.ps1`는 `configs/projects.v2.json`의 `homepage` **workspace**(본 레포 경로)에서 `npm run check`
- 로컬 Ollama 등은 **통합 progress(Desktop)** 쪽 기록; 본 파일은 **사이트 repo·Git tip·워킹트리** 중심
