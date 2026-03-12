# Home Project 작업명세서 (연결 구조/유지보수 기준)

## 1) 목적
- 파일 간 연결(HTML-CSS-JS-DB)을 한 번에 파악할 수 있는 기준 문서.
- 수정 시 여러 파일을 왕복하지 않도록 "수정 위치의 단일 책임"을 명확히 정의.
- 앞으로의 리팩토링 우선순위를 고정.

## 2) 공통 로딩 규칙 (현재 구조)
- 대부분 페이지 공통:
  - CSS: `style.css` -> `style-pages.css` -> `style-light.css`
  - JS: `supabase-config.js` -> `auth.js` -> 페이지 전용 JS(또는 inline script)
- 테마:
  - 각 HTML 상단 inline script로 `light-mode` 클래스 선적용.
  - 실제 토글 로직은 `auth.js`의 `toggleTheme()`.
- 인증/권한:
  - `_supabase`는 `supabase-config.js`에서 생성.
  - 인증 체크/네비 UI/관리자 메뉴 표시 제어는 `auth.js`.
  - 관리자 최종 권한은 `members(role/status)` + RLS(`setup_members.sql`) 기준.

## 3) 페이지별 연결 맵

### Home
- `index.html`
  - JS: `main.js`, `supabase-config.js`, `auth.js`
  - 책임:
    - 슬라이드 전환: `main.js`
    - 홈 비주얼/슬라이드 스타일: `style-pages.css`

### Blog/Detail
- `blog.html`
  - JS: `blog.js`, `supabase-config.js`, `auth.js`
  - 테이블: `book_reviews`, `essays`, `ai_writings`
- `essay.html`, `ai-writing.html`
  - JS: `blog-detail-common.js` + 각 페이지 inline config
  - 공통 상세 렌더러를 재사용
- `review.html`
  - JS: inline script(개별 구현)
  - 테이블: `book_reviews`

### Editor
- `essay-editor.html`, `ai-writing-editor.html`, `review-editor.html`
  - JS: 대부분 inline script
  - 에디터: EasyMDE CDN
  - DB 저장 로직이 페이지별로 중복 구현

### Library/Reader
- `library.html`
  - JS: `library.js`, `supabase-config.js`, `auth.js`
  - 테이블: `library`
  - Storage: `epubs` 버킷 업로드/다운로드 경로 관리
- `reader.html`
  - JS: 대형 inline script + `epub.min.js`, `supabase-config.js`, `auth.js`
  - 리더 렌더링/페이지네이션/스타일 후처리 로직이 한 파일에 집중

### Gallery/Board/Diary/Admin
- `gallery.html` -> `gallery.js` (라이트박스/탭)
- `board.html` -> `board.js` (localStorage 중심 + 일부 auth 사용자명)
- `diary.html` -> `diary.js` (`diaries` 테이블 CRUD)
- `admin.html` -> `admin.js` (`members` 테이블 상태 관리)

### Auth
- `login.html`
  - JS: `supabase-config.js` + 대형 inline auth script
  - `auth.js` 미사용(로그인 페이지 자체 구현)

## 4) CSS 책임 분리 (현재)
- `style.css`
  - 폰트/리셋/공통 레이아웃/메뉴바 등 베이스
- `style-pages.css`
  - 페이지별 세부 스타일 (Home/Library/Blog/Gallery/Board/Diary/Reader 등)
  - 현재 파일 규모가 매우 큼 (다중 페이지가 한 파일에 결합)
- `style-light.css`
  - 라이트 모드 오버라이드

## 5) DB/스토리지 사용 맵
- 공통 클라이언트: `_supabase` (`supabase-config.js`)
- 테이블
  - `library` (도서 목록)
  - `book_reviews` (서평)
  - `essays` (에세이)
  - `ai_writings` (AI 글)
  - `diaries` (일기)
  - `members` (회원 상태 + 역할)
- 스토리지
  - 버킷: `epubs`
  - 업로드/다운로드 중심 파일: `library.js`, `reader.html` inline

## 6) 유지보수 난이도 원인 (현재 확인)
- 여러 HTML에 대형 inline script가 분산되어 공통 변경 시 추적이 어려움.
- 페이지별 CRUD 로직이 유사하게 반복(에디터/상세).
- `style-pages.css`가 광범위한 역할을 가져 Home 수정 시 타 페이지 영향 확인이 어려움.
- `login.html` 인증 로직이 `auth.js`와 별도 경로로 동작.
- 마이그레이션 스크립트(`migrate-essays.js`, `migrate-reviews.js`)에 서비스 롤 키가 하드코딩되어 있음.

## 7) 즉시 적용 운영 규칙 (실무용)
- Home 시각 효과 수정은 아래만 수정:
  - `index.html` (마크업 구조가 바뀔 때만)
  - `style-pages.css`의 Home 슬라이드 블록
  - 라이트 모드가 필요할 때만 `style-light.css` 동시 수정
- 인증/권한 관련 수정은 `auth.js` 단일 진입점 우선.
- DB 쿼리 컬럼/테이블 변경 시:
  - 사용 페이지 목록을 이 문서에서 먼저 확인 후 일괄 수정.
- 운영 권한 변경은 SQL 스크립트 사용:
  - `setup_members_seed_admin.sql` (초기 관리자)
  - `setup_members_transfer_admin.sql` (관리자 교체)
  - `setup_members_revoke_admin.sql` (관리자 해제, 최소 1명 가드)
- `archive/` 폴더는 참조 전용(기능 수정 대상에서 제외).

## 8) 리팩토링 작업 순서 (권장)
1. `login.html` inline auth 로직을 `auth.js`로 통합.
2. 에디터 3종(essay/ai/review) 공통 저장 모듈 추출.
3. `blog-detail-common.js` 패턴을 `review.html`까지 확장.
4. `style-pages.css`를 도메인별 파일로 분리:
   - `style-home.css`, `style-library.css`, `style-blog.css`, ...
5. `reader.html` inline script를 `reader.js`로 분리.

## 9) 다음 작업 시 체크리스트
- 변경 대상 페이지와 연결된 JS/CSS를 먼저 이 문서에서 확인.
- 동일 기능의 중복 구현(inline vs js 파일) 존재 여부 확인.
- 수정 후 최소 점검:
  - 대상 페이지 1개
  - 공통 네비/테마/auth 영역 1회
  - 관련 CRUD 1회(해당 시)

