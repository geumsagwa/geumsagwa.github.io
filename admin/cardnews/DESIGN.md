---
name: 게발이 카드뉴스 (Gebali Cardnews)
colors:
  primary: "#2a2520"
  secondary: "#7a7060"
  tertiary: "#8f7d60"
  neutral: "#f5f0e8"
  surface: "#faf6f0"
  border: "#ede6dc"
  label-important-bg: "#f5e6d3"
  label-important-text: "#8f5a3a"
  stat-icon-bg: "#e8e0d4"
  footer-text: "#b5a898"
  accent-politics: "#e74c3c"
  accent-economy: "#2ecc71"
  accent-society: "#f39c12"
  accent-world: "#3498db"
  accent-culture: "#9b59b6"
  accent-son: "#e67e22"
  accent-ai: "#1abc9c"
  accent-schedule: "#1a73e8"
  accent-wiki: "#8e44ad"
typography:
  headline:
    fontFamily: "Gyeonggi Batang, Malgun Gothic, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
  title:
    fontFamily: "Gyeonggi Batang, Malgun Gothic, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  section:
    fontFamily: "Gyeonggi Batang, Malgun Gothic, sans-serif"
    fontSize: 13px
    fontWeight: 700
    letterSpacing: 1px
  caption:
    fontFamily: "Malgun Gothic, sans-serif"
    fontSize: 11px
    fontWeight: 400
rounded:
  lg: 20px
  md: 16px
  sm: 4px
  full: 9999px
spacing:
  body: 40px 16px
  wrap-gap: 14px
  header: 36px 24px
  section: 14px 20px 12px
  item: 12px 20px
components:
  header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.lg}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  item-number:
    backgroundColor: "{colors.border}"
    textColor: "#5a5042"
    rounded: "{rounded.full}"
  section-tag:
    textColor: "{colors.accent-politics}"
  section-tag-economy:
    textColor: "{colors.accent-economy}"
  section-tag-society:
    textColor: "{colors.accent-society}"
  section-tag-world:
    textColor: "{colors.accent-world}"
  section-tag-culture:
    textColor: "{colors.accent-culture}"
  section-tag-son:
    textColor: "{colors.accent-son}"
  section-tag-ai:
    textColor: "{colors.accent-ai}"
  section-tag-schedule:
    textColor: "{colors.accent-schedule}"
  section-tag-wiki:
    textColor: "{colors.accent-wiki}"
  label-important:
    backgroundColor: "{colors.label-important-bg}"
    textColor: "{colors.label-important-text}"
  label-spam:
    backgroundColor: "{colors.border}"
    textColor: "#5a5042"
  stat-icon:
    backgroundColor: "{colors.stat-icon-bg}"
  footer:
    textColor: "{colors.footer-text}"
---

## Overview

게발이 브리핑 카드뉴스 — 모바일(420px) 최적화된 신문 느낌의 카드 레이아웃.
딥 잉크(#2a2520) 본문과 웜 라임스톤(#f5f0e8) 배경의 고대비 구성. 한글 서체(Gyeonggi Batang) 기반.

## Colors

고대비 뉴트럴 팔레트 + 카테고리별 단일 액센트.

- **primary (#2a2520):** 딥 잉크 — 본문·헤더·섹션 태그.
- **secondary (#7a7060):** 슬레이트 — 보조 텍스트·번호·출처.
- **tertiary (#8f7d60):** 링크 호버.
- **neutral (#f5f0e8):** 페이지 배경 (웜 라임스톤).
- **surface (#faf6f0):** 카드 배경.
- **border (#ede6dc):** 카드 구분선·번호 배경.
- **accent-politics (#e74c3c) / accent-economy (#2ecc71) / accent-society (#f39c12) / accent-world (#3498db) / accent-culture (#9b59b6) / accent-son (#e67e22) / accent-ai (#1abc9c) / accent-schedule (#1a73e8) / accent-wiki (#8e44ad):** 카테고리 헤더 액센트. 이메일 요약은 accent-politics, 홈페이지 상태는 accent-economy를 재사용.
- **헤더 그라데이션:** primary(#2a2520) → #3d3530, 135° — 헤더 배경은 토큰이 아닌 리터럴 그라데이션으로 구현.
- **label-important-bg (#f5e6d3) / label-important-text (#8f5a3a):** "중요" 이메일 라벨.
- **stat-icon-bg (#e8e0d4):** 홈페이지 상태 아이콘 원 배경.

## Typography

- **headline (24px/700):** 헤더 제목 "게발이 아침 카드뉴스".
- **title (14px/500):** 기사 제목. 줄바꿈 유지(keep-all).
- **section (13px/700, letter-spacing 1px):** 카테고리 헤더.
- **caption (11px):** 날짜·출처·푸터.

## Layout

- 최대 폭 420px, 중앙 정렬, 세로 스택 (gap 14px).
- 본문 패딩 40px 16px, 헤더 패딩 36px 24px, 카드 아이템 패딩 12px 20px.

## Elevation & Depth

- 헤더: `0 8px 24px rgba(42,37,32,.2)` — 리프팅된 상단 배너.
- 카드: `0 2px 12px rgba(42,37,32,.08)` — 은은한 카드 섀도우.

## Shapes

- 헤더 20px, 카드 16px, 라벨 4px 라운딩. 번호·점(·)은 원형(full).

## Components

- **header:** 딥 잉크 배경 + 라임스톤 텍스트. 날짜(opacity .6)·제목·부제(opacity .5) 계층.
- **card:** 라임스톤 카드. 카테고리 헤더(border-bottom 2px) + 기사 목록(구분선 1px).
- **item-number:** 회색 원형 번호(20×20).
- **section-tag:** 카테고리 헤더. 카테고리별 액센트 컬러 — section-tag(-economy·society·world·culture·son·ai·schedule·wiki) 각각 대응 토큰 참조. 이메일 요약·홈페이지 상태는 정치/경제 색 재사용.
- **label-important / label-spam:** 이메일 라벨 배지 (imp=버프 액센트, spam=뉴트럴).

## Do's and Don'ts

- DO: 한글 문단은 keep-all + overflow-wrap으로 줄바꿈 유지.
- DON'T: 배경에 순백(#fff) 사용 금지 — 항상 웜 톤 유지.
- DO: 본문 대비는 WCAG AA 이상 유지.
