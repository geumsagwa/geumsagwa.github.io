# CLAUDE.md — 게발이 홈페이지 (geumsagwa.github.io)

## 🎨 디자인 기준 (필독)

- **디자인 단일 소스: `DESIGN.md`** (저장소 루트) — 골드/브라운 웜톤 팔레트·경기바탕 서체·간격/라운딩 토큰 문서.
- **원칙: 기존 디자인 임의 변경 금지.** 디자인 관련 수정·추가 시 반드시 `DESIGN.md`를 기준으로 판단.
- **디자인 토큰: `style.css` `:root` 변수** (`--color-primary` 등) — `DESIGN.md`와 동기화됨.
  - 신규 코드는 하드코딩 대신 `var(--color-*)` 사용 권장.
  - 수정 시: `DESIGN.md` 수정 → `designmd export --format css-vars` → `style.css` `:root` 반영 → 커밋.

## 📁 CSS 구조

| 파일 | 용도 |
|:--|:--|
| `style.css` | 전역 (폰트·리셋·디자인 토큰 `:root`) |
| `style-pages.css` | 페이지별 스타일 (블로그·서재·갤러리·다이어리·업로드) |
| `style-light.css` | 라이트 모드 (`.light-mode` 클래스 반전) |

## 📰 카드뉴스

- 디자인: `admin/cardnews/DESIGN.md` (카드뉴스 전용 토큰, CSS 변수·카테고리 클래스 기반)
- 생성: `scripts/generate-cardnews.ps1` (브리핑 MD → HTML) — 최신 브리핑 자동 감지
- 산출물: `admin/cardnews/YYYY-MM-DD.html` + `index.json`

## 🛠 주요 작업 흐름

- **디자인 변경:** DESIGN.md 수정 → export → style.css 반영 → 카드뉴스도 필요 시 admin/cardnews/DESIGN.md 수정
- **카드뉴스 재생성:** `powershell -File scripts/generate-cardnews.ps1`
- **브리핑 파이프라인:** openclaw-local-mvp → `scripts/run-briefing.ps1` → 카드뉴스 자동 생성·푸시

## ⚙️ 기타

- Supabase: essays·library·book_reviews 등 테이블 (admin/ 로그인 필요)
- 폰트: 경기천년바탕 (Fonts/경기천년체_220929/TTF), 무단 교체 금지
