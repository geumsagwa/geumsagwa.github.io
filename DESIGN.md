---
name: 게발이 홈페이지 (geumsagwa.github.io)
colors:
  primary: "#8f7d60"
  brand-gold: "#dabb7e"
  brand-gold-light: "#c4a87a"
  brand-gold-soft: "#c4a070"
  text-primary: "#333333"
  text-secondary: "#555555"
  text-muted: "#888888"
  text-dark: "#000000"
  background: "#f5f0e8"
  background-light: "#faf7f0"
  surface: "#ffffff"
  border: "#dddddd"
  border-strong: "#bbbbbb"
  danger: "#c0392b"
  success: "#2ecc71"
  dark-bg: "#1e1a15"
  dark-surface: "#3a3530"
  dark-text: "#faf7f0"
  dark-muted: "#6b5a3e"
  dark-accent: "#5B3A29"
typography:
  body:
    fontFamily: "'GyeonggiBatang', 'Malgun Gothic', serif"
    fontSize: 16px
    lineHeight: 1.6
  heading:
    fontFamily: "'GyeonggiBatang', serif"
    fontWeight: 700
  caption:
    fontFamily: "'GyeonggiBatang', sans-serif"
    fontSize: 12px
  code:
    fontFamily: "'Consolas', monospace"
rounded:
  sm: 4px
  md: 8px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.sm}"
    padding: 0.5rem 1.2rem
  button-hover:
    backgroundColor: "{colors.brand-gold}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
  nav-item:
    textColor: "{colors.text-primary}"
  nav-item-active:
    textColor: "{colors.primary}"
  danger-button:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
  success-text:
    textColor: "{colors.success}"
  badge:
    backgroundColor: "{colors.brand-gold}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
  badge-accent:
    backgroundColor: "{colors.brand-gold-light}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
  badge-soft:
    backgroundColor: "{colors.brand-gold-soft}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
  link:
    textColor: "{colors.primary}"
  link-hover:
    textColor: "{colors.brand-gold}"
  caption-text:
    textColor: "{colors.text-muted}"
  meta-text:
    textColor: "{colors.text-secondary}"
  light-panel:
    backgroundColor: "{colors.background-light}"
  panel-border:
    backgroundColor: "{colors.border}"
  panel-border-strong:
    backgroundColor: "{colors.border-strong}"
  dark-card:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-text}"
  dark-muted-text:
    textColor: "{colors.dark-muted}"
  dark-accent-text:
    textColor: "{colors.dark-accent}"
  photo-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  code-block:
    backgroundColor: "{colors.dark-bg}"
    textColor: "{colors.dark-text}"
    typography: "{typography.code}"
---

## Overview

게발이 브리핑 홈페이지 — **골드/브라운 웜톤** 정체성. 서점·갤러리처럼 따뜻하고 차분한 느낌.
본문은 경기바탕(GyeonggiBatang), 배경은 웜 라임스톤(#f5f0e8), 포인트는 골드 브라운(#8f7d60·#dabb7e).
블로그·서재(책장)·갤러리·다이어리·업로드 기능을 가진 복합 사이트. 라이트/다크 모드 전환 지원.

## Colors

웜톤 뉴트럴 + 골드 브라운 포인트 팔레트.

- **primary (#8f7d60):** 골드 브라운 — 메인 포인트·링크·활성 메뉴·버튼 배경.
- **brand-gold (#dabb7e) / brand-gold-light (#c4a87a) / brand-gold-soft (#c4a070):** 골드 파생 — 호버·배지·장식.
- **text-primary (#333) / text-secondary (#555) / text-muted (#888) / text-dark (#000):** 텍스트 계층. 버튼 텍스트는 검정(text-dark).
- **background (#f5f0e8) / background-light (#faf7f0):** 페이지 배경·밝은 표면.
- **surface (#ffffff):** 카드·입력칸 표면.
- **border (#ddd) / border-strong (#bbb):** 구분선·테두리.
- **danger (#c0392b) / success (#2ecc71):** 오류·성공 상태.
- **다크 모드:** dark-bg(#1e1a15)·dark-surface(#3a3530)·dark-text(#faf7f0)·dark-muted(#6b5a3e)·dark-accent(#5B3A29) — `.light-mode` 클래스로 반전.

## Typography

- **body (경기바탕 16px):** 본문. 줄바꿈 유지(keep-all), 행간 1.6.
- **heading (경기바탕 700):** 제목·섹션 헤더.
- **caption (12px):** 보조 설명·메타 정보.
- **code (Consolas):** 코드·URL 표기.

## Layout

- 반응형 4구간 (모바일 480 / 태블릿 768 / 데스크톱 1280 기준).
- 콘텐츠 최대 폭 제한 + 중앙 정렬. rem 기반 간격(4px 단위 그리드).

## Elevation & Depth

- 카드·모달에 은은한 그림자 사용. 강조 요소는 섀도우로 리프팅.

## Shapes

- 버튼·카드 4px(sm), 포토 카드 8px(md), 큰 배너 24px(lg), 아바타·배지 50%(full).

## Components

- **menu:** 상단 네비게이션 — 메뉴 아이템, 활성 항목은 primary.
- **library(서재):** 책장 뷰 — book-spine·book-open-overlay, surface 배경.
- **blog(블로그):** 카드 리스트 + 탭 분류 — post-body는 본문 서체.
- **gallery(갤러리):** photo-card(8px 라운드)·exhibit-frame, 그리드 배치.
- **diary(다이어리):** 입력 필드(text-input)·작성 폼.
- **upload:** 드롭존·카테고리 버튼·제출 버튼 — upload-btn-submit은 primary 배경 + 검정 텍스트. **disabled 상태는 #555 배경** (의도적으로 낮은 대비 — 비활성 표시, 접근성 개선 대상).
- **review-body:** 북 리뷰 본문 영역.
- **상태 표시:** danger(오류)·success(성공)·badge(배지).

## Do's and Don'ts

- DO: 웜톤 유지 — 배경은 순백(#fff) 대신 #f5f0e8/#faf7f0 계열.
- DO: 본문은 경기바탕, 보조 텍스트는 그레이 계층(#333/#555/#888).
- DO: 버튼 텍스트는 검정(#000) — 골드 브라운 배경과 대비 확보.
- DON'T: 골드/브라운 브랜드 색을 남용하지 말 것 (포인트로만).
- DO: 다크 모드는 `.light-mode` 클래스로 반전 (dark-bg·dark-surface·dark-text 사용).
- DO: 텍스트 대비는 WCAG AA 이상 유지.
