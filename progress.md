# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

## 마지막 갱신
- 시각(ISO): **`2026-06-29T15:40+09:00`** — **세계사 6권 원고 병합 및 EPUB 빌드/업로드 완료.**
  - **원고 병합**: `6권_121화.md` ~ `6권_138화.md` 개별 원고 파일을 `이야기_세계사_6.md`로 자동 병합하고 목차 및 헤더 스타일을 규칙에 맞춰 재구성하였습니다.
  - **EPUB 빌드**: DALL-E로 6권 표지 이미지(`history6_cover.png`)를 자율 생성 배치하고 빌드 스크립트를 생성하여 `history6.epub` 최종 빌드를 완료하였습니다.
  - **Supabase 배포**: 빌드된 EPUB 파일을 Supabase Storage `history/history6.epub`로 업로드하고 `library` 테이블에 DB 레코드를 연동 완료하였습니다.
- 시각(ISO): **`2026-06-29T15:35+09:00`** — **David Bahn 채널 문학 작품 13종 동영상 스크립트 인제스트 및 깨진 링크 보완 완료 (llm-wiki).**
  - **문학 작품 인제스트**: David Bahn 채널의 문학 해설 동영상 13종(에밀 졸라 루공-마카르 총서 8종, 발자크 고리오 영감, 조지 오웰 동물농장 등)의 자막을 추출하여 raw 등록 및 요약본 인제스트 완료.
  - **깨진 위키링크 해결**: 신규 인제스트로 발생한 294개의 깨진 링크에 대해 136개의 스텁 개념 문서를 추가 생성하여 깨진 링크를 0개로 유지.
  - **Git 커밋/푸시**: 인제스트 산출물 및 스텁 개념 문서 전체를 Git에 등록하여 원격 저장소(`master`) 푸시 완료 (최종 해시: `1a38cb74`).
- 시각(ISO): **`2026-06-29T11:20+09:00`** — **깨진 위키링크 보완 및 세계사 6권 관련 파일 Git 커밋/푸시 완료 (llm-wiki).**
  - **깨진 위키링크 해결**: `create-stub-concepts.mjs`를 작동하여 128개의 스텁 개념 문서를 자동 생성하고 깨진 위키링크를 0개로 조치하였습니다.
  - **Git 커밋 및 푸시**: 세계사 6권 제127~136화 수정본, 제137~138화 신규 원고 및 출처 검증 문서, 스텁 개념 문서들을 Git에 등록하여 커밋 및 원격 저장소(`master`) 푸시를 완료하였습니다.
- 시각(ISO): **`2026-06-28T11:13+09:00`** — **Token Optimization Stack 설치 완료 (rtk + serena + codebase-memory-mcp).**
  - **rtk v0.42.4 설치:** `C:\Users\pass6\AppData\Local\token-saving-stack\bin\rtk.exe` — CLI 출력 토큰 최적화 프록시 (ls/tree/read/git/gh 등 명령어 출력 압축).
  - **Claude Hook 연동:** `PreToolUse` 훅으로 모든 Bash/PowerShell 명령어 실행 전 `rtk hook claude` 적용 — 불필요한 출력 필터링 및 요약.
  - **serena:** `.serena/project.yml` 설정 유지 (기존 설치 유지, 설정 정합성 확인).
  - **codebase-memory-mcp:** `token-saving-stack/bin/codebase-memory-mcp.exe` 배치 완료 (MCP 서버 기존 인덱스와 정상 연동).
- 시각(ISO): **`2026-06-26T21:42+09:00`** — **세계사 6권 127~138화 출처 검증 반영 및 본문·각주 수정 완료.**
  - **작업 근거:** `출처_검증_보고서.md` 기준 12개 화 총 8건 오류 지적에 대해 본문 및 각주 수정 완료.
  - **본문 수정:** 대부분 기반영 (김영삼 "150만 대", 호주 산불 "2,400만 헥타르", 그린란드 빙상 "연간 2,700억 톤", 아프리카 스타트업 "2022년 65억→2023년 35억" 등)
  - **각주 최종 정정 (2026-06-26):** 제131화[^119] 호주 산불 면적 수치, 제136화[^172] 아세모글루 저서 연도·저자명.
  - **산출물:** `출처_검증_수정_인계서.md` — 수정 내역 전반 문서화 완료.
  - **6권 집필:** 18/18화 (100%) — 전 화 출처 검증 및 수정 완료 ✅
- 시각(ISO): **`2026-06-26T15:50+09:00`** — **세계사 Ⅲ & Ⅳ 지도 반영 및 업로드 완료.**
  - **세계사 Ⅲ 지도 반영 및 업로드:** `map/history3_with_maps.epub` (9.19 MB, 12개 지도) 검증 완료 후 `map/upload-history3.js` 경로 설정 변경하여 Supabase Storage(`history/1779351897979_history3.epub`) 업로드 완료. 로컬 `epub/history3.epub`도 동기화.
  - **세계사 Ⅳ 지도 반영 및 업로드:** 1:1 비율의 정사각형 지도(16개)가 페이지 전체를 차지하고 캡션이 잘리는 현상을 수정하기 위해, 레이아웃에 `break-inside:avoid`를 추가하고 SVG 크기를 `width:55%; max-width:320px`로 축소하는 스타일 개선을 적용하여 빌드 및 검증 완료 후 Supabase Storage(`history/1779351946349_history4.epub`) 및 로컬 `epub/history4.epub`에 최종 반영/업로드하였습니다.
  - **리더 페이지 복구:** 로컬 테스트 우회 코드를 제거하고 `reader.html`을 원래의 Supabase 로드 로직으로 복구 완료.
- 시각(ISO): **`2026-05-27T12:00+09:00`** — **Supabase GRANT 대응 완료 + WIKI-005 문서화.**
  - **Supabase Data API GRANT 대응:**
    - 6개 테이블(library, book_reviews, essays, ai_writings, members, diaries)에 명시적 GRANT 추가
    - `setup.sql`, `setup_members.sql`, `create_book_reviews.sql` 수정
    - `setup_diaries.sql` (신규), `supabase/grant_data_api_access.sql` (신규)
    - Supabase Management API로 운영 DB 직접 적용 완료
  - LLM Wiki: concept 2,635개 / sources 363개 / 링크 12,427개
  - WIKI-005 그래프 뷰어: 현황 문서화 후 보류 (`D:\wiki\outputs\WIKI-005-graph-viewer-status.md`)
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
1. **세계사 3 & 4권 실서비스 확인** — 실제 서비스에서 지도 노출 상태 최종 모니터링
2. (선택) `Images/*`·`.capture-tmp/` 등 **용량** 기준 `.gitignore`/커밋 정리
3. (필요시) **세계사 6권 EPUB 최종 빌드** — 출처 검증 완료된 원고 기반 EPUB 제작

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md` — 갱신 시 **세 파일 동기**
- **LLM Wiki:** `94836dd` — 102화(일본 경제 성장) 최종 확정. 수정 금지.
- 하네스 `gate-website.ps1`는 `configs/projects.v2.json`의 `homepage` **workspace**(본 레포 경로)에서 `npm run check`
- 로컬 Ollama 등은 **통합 progress(Desktop)** 쪽 기록; 본 파일은 **사이트 repo·Git tip·워킹트리** 중심
