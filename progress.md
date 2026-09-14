# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

## 마지막 갱신

- 시각(ISO): **`2026-09-14T09:47+09:00`** — **각주·검증 체계 개편(지침 §10.0·§10.2·§5.6·§5.3·§5.7) + 55화 169→32 시범 + 21화 각주 소급 정규화(본문 불변). 02 동기화·5권 낱말 판정은 다음 창.**
  - [자동수집 · Git] 마지막 세션(2026-09-14T08:50+09:00) 이후:
    · homepage master: HEAD 2835e75 / origin 2835e75 :: 2835e75 진행 기록: 인계 갱신 (update-handover auto) / f65ea70 진행 기록: 인계 갱신 (update-handover auto) / 08810a5 진행 기록: 인계 갱신 (update-handover auto) / 52f3768 진행 기록: 인계 갱신 (update-handover auto) / 7069df2 진행 기록: 인계 갱신 (update-handover auto) / 845c7a4 진행 기록: 인계 갱신 (update-handover auto) / 1f0c538 자동: 카드뉴스 갱신 (2026-09-14)
    · llm-wiki master: HEAD 845230d0 / origin 845230d0 ·작업트리 변경 177 :: 845230d0 각주 소급 정규화 — 2·3·4·5권 각주 35 초과 21화 기계 정규화(문장각주·서술구 제거, 본문 산문 불변) + HANDOVER 갱신 / 6da03952 5권 55화 분량 확정 — 보강 없이 21.0쪽(각주 마커 제외 기준) / fbeff3ba 5권 55화 각주 개정 시범(169→32) · 통합집필지침 §5.3·§5.6·§10.0·§10.2 개정 · 개정안(결재용) 추가 / 19b1e2bd 심리학 5권 54화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반) / 472e699f 심리학 5권 55화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반) / 46d14e75 심리
    · harness  main: HEAD 893ad19 / origin 893ad19 ·작업트리 변경 3 :: 893ad19 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b1dea43 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 161a7b1 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cdaedf0 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 2849369 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1cf3dd6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@845230d0 (각주 소급 정규화 — 2·3·4·5권 각주 35 초과 21화 기계 정규화(문장각주·서술구 제거, 본문 산문 불변) + HANDOVER 갱신)

- 시각(ISO): **`2026-09-14T08:50+09:00`** — **5권 55화 각주 개정 시범 적용(169→32) + 통합집필지침 §5.3·§5.6·§10.0·§10.2 개정 + 각주·검증 개정안(결재용) 작성**
  - [자동수집 · Git] 마지막 세션(2026-09-14T08:37+09:00) 이후:
    · homepage master: HEAD f65ea70 / origin f65ea70 :: f65ea70 진행 기록: 인계 갱신 (update-handover auto) / 08810a5 진행 기록: 인계 갱신 (update-handover auto) / 52f3768 진행 기록: 인계 갱신 (update-handover auto) / 7069df2 진행 기록: 인계 갱신 (update-handover auto) / 845c7a4 진행 기록: 인계 갱신 (update-handover auto) / 1f0c538 자동: 카드뉴스 갱신 (2026-09-14)
    · llm-wiki master: HEAD 2747d133 / origin 2747d133 ·작업트리 변경 195 :: 2747d133 5권 55화 각주 개정 시범(169→32)·지침 §5.3/5.6/10.0/10.2 개정·개정안(결재용) 추가 / 19b1e2bd 심리학 5권 54화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반) / 472e699f 심리학 5권 55화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반) / 46d14e75 심리학 5권 55화 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정) / 09b45468 심리학 5권 55화 그림1 교체 승인 반영 — UCSB 특별컬렉션 소장 로저스 초상(1960년대)으로 확정 / 7c08a7e0 심리학 5권 55화 도
    · harness  main: HEAD b1dea43 / origin b1dea43 ·작업트리 변경 3 :: b1dea43 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 161a7b1 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cdaedf0 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 2849369 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1cf3dd6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@2747d133 (5권 55화 각주 개정 시범(169→32)·지침 §5.3/5.6/10.0/10.2 개정·개정안(결재용) 추가)

- 시각(ISO): **`2026-09-14T08:37+09:00`** — **심리학 5권 54화(5-7) 구분선 앞 빈 줄 누락 정정 — 본문 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 위반) 수정 · 게이트 23항목.**
  - [자동수집 · Git] 마지막 세션(2026-09-14T08:34+09:00) 이후:
    · homepage master: HEAD 08810a5 / origin 08810a5 :: 08810a5 진행 기록: 인계 갱신 (update-handover auto) / 52f3768 진행 기록: 인계 갱신 (update-handover auto) / 7069df2 진행 기록: 인계 갱신 (update-handover auto) / 845c7a4 진행 기록: 인계 갱신 (update-handover auto) / 1f0c538 자동: 카드뉴스 갱신 (2026-09-14)
    · llm-wiki master: HEAD 19b1e2bd / origin 19b1e2bd ·작업트리 변경 196 :: 19b1e2bd 심리학 5권 54화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반) / 472e699f 심리학 5권 55화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반) / 46d14e75 심리학 5권 55화 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정) / 09b45468 심리학 5권 55화 그림1 교체 승인 반영 — UCSB 특별컬렉션 소장 로저스 초상(1960년대)으로 확정 / 7c08a7e0 심리학 5권 55화 도판 — 초상 실사 후보를 대학·기관 아카이브까지 확장 조사(UCSB 특별컬렉션 2점 발견) + 박사 연도 정정 / 5ba29fd3
    · harness  main: HEAD 161a7b1 / origin 161a7b1 ·작업트리 변경 3 :: 161a7b1 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cdaedf0 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 2849369 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1cf3dd6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@19b1e2bd (심리학 5권 54화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반)

- 원인: 각주 구분선(---) 바로 앞에 빈 줄이 없어 마크다운이 마지막 문단을 setext 제목으로 해석
- 수정: 구분선을 빈 줄로 감싸 정정(55화·타 화와 동일 표기). 본문 글자·각주 140·순서 불변
- 게이트에 구분선 검사 추가(22 → 23항목). DAV ok=140 bad=0 · 게이트 PASS(23/23) · E-basis 19,248 · sha256 62cc9f67…7297a (96,796 B)

Co-Authored-By: Claude Code <noreply@anthropic.com>)

- 시각(ISO): **`2026-09-14T08:34+09:00`** — **심리학 5권 55화(5-8) 「로저스 — 인간 중심의 상담」 구분선 앞 빈 줄 누락 정정 — 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 위반) 수정 · 게이트에 구분선 검사 추가.**
  - [자동수집 · Git] 마지막 세션(2026-09-14T08:31+09:00) 이후:
    · homepage master: HEAD 52f3768 / origin 52f3768 :: 52f3768 진행 기록: 인계 갱신 (update-handover auto) / 7069df2 진행 기록: 인계 갱신 (update-handover auto) / 845c7a4 진행 기록: 인계 갱신 (update-handover auto) / 1f0c538 자동: 카드뉴스 갱신 (2026-09-14)
    · llm-wiki master: HEAD 472e699f / origin 472e699f ·작업트리 변경 196 :: 472e699f 심리학 5권 55화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반) / 46d14e75 심리학 5권 55화 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정) / 09b45468 심리학 5권 55화 그림1 교체 승인 반영 — UCSB 특별컬렉션 소장 로저스 초상(1960년대)으로 확정 / 7c08a7e0 심리학 5권 55화 도판 — 초상 실사 후보를 대학·기관 아카이브까지 확장 조사(UCSB 특별컬렉션 2점 발견) + 박사 연도 정정 / 5ba29fd3 심리학 5권 55화(5-8) 「로저스 — 인간 중심의 상담」 본문 완성 + 검토 02 + 도판의뢰서 + 도판 4점 배치 / 8a18cd89 심리학 
    · harness  main: HEAD cdaedf0 / origin cdaedf0 ·작업트리 변경 3 :: cdaedf0 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 2849369 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1cf3dd6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@472e699f (심리학 5권 55화 구분선 표기 정정 — 본문 말미 마지막 문단이 큰 글씨로 렌더되던 문제(§5.10 구분선 앞뒤 빈 줄 위반)

- 원인: 각주 구분선(---) 바로 앞에 빈 줄이 없어 마크다운이 마지막 문단을 setext 제목으로 해석
- 수정: 구분선을 `

---

`로 정정(다른 화·타 권과 동일 표기). 본문 글자·각주·순서는 불변
- 게이트에 `구분선 --- 앞뒤 빈 줄` 검사 추가(22 → 23항목) — 54화도 같은 위반을 검출함(별도 확인 필요)
- DAV ok=169 bad=0 · 게이트 PASS(23/23) · E-basis 21,089 · sha256 513665b1…c8c81 (111,098 B)

Co-Authored-By: Claude Code <noreply@anthropic.com>)

- 시각(ISO): **`2026-09-14T08:31+09:00`** — **심리학 5권 55화(5-8) 「로저스 — 인간 중심의 상담」 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정).**
  - [자동수집 · Git] 마지막 세션(2026-09-14T08:02+09:00) 이후:
    · homepage master: HEAD 7069df2 / origin 7069df2 :: 7069df2 진행 기록: 인계 갱신 (update-handover auto) / 845c7a4 진행 기록: 인계 갱신 (update-handover auto) / 1f0c538 자동: 카드뉴스 갱신 (2026-09-14)
    · llm-wiki master: HEAD 46d14e75 / origin 46d14e75 ·작업트리 변경 196 :: 46d14e75 심리학 5권 55화 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정) / 09b45468 심리학 5권 55화 그림1 교체 승인 반영 — UCSB 특별컬렉션 소장 로저스 초상(1960년대)으로 확정 / 7c08a7e0 심리학 5권 55화 도판 — 초상 실사 후보를 대학·기관 아카이브까지 확장 조사(UCSB 특별컬렉션 2점 발견) + 박사 연도 정정 / 5ba29fd3 심리학 5권 55화(5-8) 「로저스 — 인간 중심의 상담」 본문 완성 + 검토 02 + 도판의뢰서 + 도판 4점 배치 / 8a18cd89 심리학 5권 54화(5-7) 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정) / 39cce07b 심리학 5권 54화(5
    · harness  main: HEAD 2849369 / origin 2849369 ·작업트리 변경 3 :: 2849369 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1cf3dd6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@46d14e75 (심리학 5권 55화 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정)

- 실사 2점(그림1 로저스 초상(UCSB 소장) · 그림2 시카고 대학) = 무진 승인 확정(2026-09-14), 현 파일·캡션 유지
- 개념도 2점(그림3 세 가지 조건 · 그림4 인간 중심 접근) = 보류 확정 · 다른 AI 제작 예정(자리 표시(가안) 유지)
- 그림1 캡션에서 출처·© 표기 철회 — 출처·라이선스는 캡션에 넣지 않고 검토내용 ③·도판의뢰서에만 기록(§8.3·§8.5)
- DAV ok=169 bad=0 · 게이트 PASS(22/22) · sha256 ff49fd8a…2fd118 (111,096 B)

Co-Authored-By: Claude Code <noreply@anthropic.com>)

- 시각(ISO): **`2026-09-14T08:02+09:00`** — **심리학 5권 55화(5-8) 「로저스 — 인간 중심의 상담」 본문 완성 + 검토 02 + 도판의뢰서 + 도판 4점 배치**
  - [자동수집 · Git] 마지막 세션(2026-09-14T06:56+09:00) 이후:
    · homepage master: HEAD 845c7a4 / origin 845c7a4 :: 845c7a4 진행 기록: 인계 갱신 (update-handover auto) / 1f0c538 자동: 카드뉴스 갱신 (2026-09-14)
    · llm-wiki master: HEAD 5ba29fd3 / origin 5ba29fd3 ·작업트리 변경 196 :: 5ba29fd3 심리학 5권 55화(5-8) 「로저스 — 인간 중심의 상담」 본문 완성 + 검토 02 + 도판의뢰서 + 도판 4점 배치 / 8a18cd89 심리학 5권 54화(5-7) 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 보류 확정(다른 AI 제작 예정) / 39cce07b 심리학 5권 54화(5-7) 「매슬로 — 욕구 위계와 자아실현」 본문 완성 + 검토 02 + 도판 4점 배치 / c5258686 심리학 5권 53화(5-6) 도판 상태 정정 — 개념도 2점은 보류(다른 AI 제작 예정) / d2d41896 심리학 5권 53화(5-6) 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 현상태 유지 / 70e76ae5 심리학 5권 53화(5-6) 「정보처리 모형 — 컴퓨터와 마음」 본문 완성
    · harness  main: HEAD 1cf3dd6 / origin 1cf3dd6 ·작업트리 변경 3 :: 1cf3dd6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@5ba29fd3 (심리학 5권 55화(5-8) 「로저스 — 인간 중심의 상담」 본문 완성 + 검토 02 + 도판의뢰서 + 도판 4점 배치

- 본문 E-basis 21,089자(21.9쪽) · 머리말+12절 · 각주 169건 · 도판 4점
- DAV ok=169 bad=0 · 게이트 PASS(22/22)

Co-Authored-By: Claude Code <noreply@anthropic.com>)

- 시각(ISO): **`2026-09-14T06:56+09:00`** — **심리학 5권 54화(5-7) 「매슬로 — 욕구 위계와 자아실현」 본문·검토·도판 완성 — E-basis 19,248 · 각주 140 · 게이트 22/22 PASS · 도판 4점(실사 2 배치 + 개념도 2 자리 표시)**
  - [자동수집 · Git] 마지막 세션(2026-09-13T22:22+09:00) 이후:
    · homepage master: HEAD 1f0c538 / origin 1f0c538 :: 1f0c538 자동: 카드뉴스 갱신 (2026-09-14) / df8fce9 발행: 심리학 시리즈 SERIES_MAP에 제34화(아들러)·제35화(신프로이트파) 등록 / 7889f69 진행 기록: 인계 갱신 (update-handover auto) / a963373 진행 기록: 인계 갱신 (update-handover auto) / 5328d0f 자동: 카드뉴스 갱신 (2026-09-13)
    · llm-wiki master: HEAD 200d00d6 / origin 200d00d6 ·작업트리 변경 196 :: 200d00d6 심리학 5권 54화(5-7) 「매슬로 — 욕구 위계와 자아실현」 본문 완성 + 검토 02 + 도판 4점 배치 / c5258686 심리학 5권 53화(5-6) 도판 상태 정정 — 개념도 2점은 보류(다른 AI 제작 예정) / d2d41896 심리학 5권 53화(5-6) 도판 승인 반영 — 실사 2점 확정 · 개념도 2점 현상태 유지 / 70e76ae5 심리학 5권 53화(5-6) 「정보처리 모형 — 컴퓨터와 마음」 본문 완성 + 검토 02 + 도판 4점 배치
    · harness  main: HEAD 421746b / origin 421746b ·작업트리 변경 3 :: 421746b docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 798da74 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@200d00d6 (심리학 5권 54화(5-7) 「매슬로 — 욕구 위계와 자아실현」 본문 완성 + 검토 02 + 도판 4점 배치)

## 이번 세션 요약

- **제37화(3-10 · 정신분석의 비판 — 증거와 윤리) 산출물 완료·커밋**: 01 12절 · E-basis 17,644자 · 각주 32 · 근거 인용 58 전수 byte-exact(불일치 0) · 동어반복·교차 화 반복 0 → 02 검토 7섹션(판정 '01 제출 가능 상태') · 도판의뢰서(실사 후보 5점 추천 — 아이젱크·포퍼·로프터스, Commons 실측 · 채택 대기) → llm-wiki `ebc6b040` 로컬 커밋(미푸시).

## 확정·상태 변경

- 21화(2-7)~26화(2-12): **✅ 확정·발행**(ep21~26·id=43~48, 2026-09-06~07) · 27화(2-13): **✅ 확정·발행(2026-09-08 · ep27 · id=49)** — 그림2·그림3 실사 후보 무진님 확정 대기.
- 심리학사 3권(ep28~): **ep28(3-1 · 프로이트 ① — 무의식의 발견) 확정·발행(2026-09-09 · id=50)이 최신 발행분** — ep29~40은 에피소드 순서대로 확정·발행 진행(무진 지시 2026-09-10).
- 3권 34~37(3-7~3-10): **산출물 완료 — 무진님 검토·도판 확정 대기**(미확정·미발행). ep34·ep36(01/02·도판)·ep37(01/02/의뢰서) 완성 · **ep37만 커밋(2026-09-09 · llm-wiki `ebc6b040`)** · ep35(3-8)는 본문 19,556자 초고(부속·DAV 재실행·커밋 남음). 확정·발행 시 homepage SERIES_MAP·Supabase 업로드(ep34~37).

## 다음 작업

- **심리학 5권 48·49화 검토·확정**: 48화(5-1 「인지 혁명의 전주 — 7±2의 마법」·E-basis 21,264·각주 65) · 49화(5-2 「인지 심리학의 탄생 — 네이서」·E-basis 21,210·각주 107) — 무진 검토 후 확정·발행(SERIES_MAP 등록·Supabase 업로드). 도판 잔여: 48화 그림2(청킹 도식) · 49화 그림1(네이서 초상)·그림2(정보처리 흐름) 외주 제작 → placeholder 교체. **49화 그림1은 자유 이용 실사 초상 부재 — 개념 도상 확정 vs 권리자(Emory 등) 허락 무진 결정 대기**(상세 `ws_tmp/ep49-research/HANDOFF_49화_20260911.md`).
- **심리학사 3권 순차 발행 재개 — ep29(3-2 · 프로이트 ② — 꿈의 해석)부터**: 발행이 ep28(3-1)까지 완료 → 다음 화부터 에피소드 순서대로 진행(무진 지시 2026-09-10). ep29 잔여 = 개념도 그림2·3 제작 의뢰(타 AI) · 무진 최종 검토 반영 → 교차 링크(§9·다음 화 예고) → 확정·발행(SERIES_MAP 등록·Supabase 업로드, episode_number=29).
- **3권 대기 원고(ep29→ep40 순서로 확정·발행)**: ep30(3-3)~ep33(3-6) 본문·도판 적용 완료(최종 확인·개념도 잔여) · ep34(3-7)·ep36(3-9) 산출물 완료 · ep35(3-8) 본문 19,556자 초고 — 부속(02·의뢰서·후보)·DAV 재실행·커밋 선행 · ep37(3-10)·ep38(3-11)·ep39(3-12) 게이트 통과·도판 배치(미발행) — 순서대로 확정·발행.
- 무진님 확정: 27화(2-13) 그림2·그림3 실사 후보(Commons 조사 완료) → 파일 교체·`--update` 재발행 · 23화(그림2)·25화(그림3·5)·26화(그림1·2) placeholder 선정.
- 26화 개념도 그림1(미국 첫 실험실 지도)·그림2(확산 지도) (AI 의뢰) 제작 → placeholder 교체·`--update` 재발행.
- Standing: 19화 그림1·3 / 20화 그림2~4 / 21화 그림2·3·5 / 22화 그림5 / 23화 그림2 / 25화 그림3·5 / 26화 그림1·2 placeholder → AI 개념도 제작 후 파일 교체·재업로드.
- llm-wiki 작업트리: 미커밋 83건 유지(ep34·ep36 산출물 · ep35 01 · 1권 철학/심리 · 2권 미반영분 · 작성지침 수정분 등) — 2권 21~27화 발행분은 커밋·푸시 완료 · ep37은 로컬 커밋 `ebc6b040`(미푸시).

## 브랜치·원격
- **작업 브랜치:** `master`
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **최근 `master` 히스토리:** 카카오 Edge·직접 OAuth·인계 문서는 **`37171bd`** 이후 커밋들로 누적; 이전 **`5d792d9`**(SDK 제거·직접 OAuth code→token) 등은 히스토리 보존. (08-17: `5012a78` · 08-18: `569ddd3` · 08-19: `ba47069` 08-19 브리핑 카드뉴스 → `2b95b62` 심리학사 연재 등록 → `8f16fff`·`09e523d` 스크롤 UX → `2bcf0d5` 발행 파이프라인 통합 → `b2ee767`·`cf40fe0` 틸드 취소선 수정 · 08-20: `7556ab0` 08-20 브리핑 카드뉴스 → `e848cbe` .serena memories 제외 → `a3fdf64` 에세이 이미지 반응형·캐시 버전 20260820)

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

## 다음에 할 일 (최대 4개)
1. **심리학사 26화(2-12) ✅ 확정·발행(ep26·id=48)** — 개념도 그림1·2 AI 제작 시 placeholder 교체·`--update` 재발행 · **27화(2-13) ✅ 확정·발행(ep27·id=49)** — 그림2(맥두걸)·그림3(우드워스) 실사 무진님 확정 → 교체·`--update` 재발행
2. **심리학사 3권 순차 발행 — ep29(3-2 · 프로이트 ② 꿈의 해석)부터**: 발행이 ep28(3-1)까지 완료 → 다음 화부터 순서대로 확정·발행(episode_number=29→40 · SERIES_MAP 등록·Supabase 업로드). ep29 잔여(개념도 그림2·3 의뢰 · 무진 최종 검토)부터 시작.
3. **3권 대기 원고 정리·발행(순서 경로 내)** — ep30~ep33·ep37·ep39 최종 확인만 · ep34·ep36 산출물 완료 · ep35 부속·DAV·커밋 선행 · ep38 1차분 검토 — 각 화 순서대로 확정·발행 (ep40(3-13)은 ep39 발행 후 집필).
4. **철학사 11화(아리스토텔레스 — 학문의 제왕, 1-13) 집필**
## 하네스 메모
- **브리핑 축구 일정 (08-14):** 카테고리 `축구 스타`(손흥민·이강인) · `##7 축구 일정`(LAFC 18966·아틀레티코 1068·한국 451) — ESPN scoreboard `site.api.espn.com/apis/site/v2/sports/soccer/{usa.1|esp.1|fifa.world}/scoreboard?dates=YYYYMMDD-YYYYMMDD`(하이픈 없음·KST=UTC+9·EDT 버킷 URL[오늘-1,오늘+6]→KST 필터) · 카드 `cat-football`+`dot-football`(주황) · TheSportsDB/KFA 보조
- **스킬화·개인화·llm-wiki (08-13):** ① `harness\skills\`(규율+카드: supabase-management-api·github-pages-cache) ② 브리핑 `##6 개인 컨텍스트` — openclaw `buildPersonalSection()`(F:\wiki\wiki\personal\) ③ 개인 위키 `F:\wiki\wiki\personal\` · 카드 `cat-personal`(금색 #c4a87a)
- **회원 4단계 역할 (08-13):** member(0)<staff(1)<manager(2)<admin(3) · `setup_members.sql` 통째 실행(멱등, `to_old` 금지 — pg-meta 미지원) · test3/test4=staff · role변경=admin만 · 회원관리=manager 이상, Diary=admin만
- **인계 사본·아카이브:** `Desktop\Harness\progress.md`·`handover-progress.md`와 `project\homepage\progress.md`·harness `docs\desktop-handoff\` 미러 동기 · 30KB 초과 시 `harness\scripts\optimize-handover.ps1`(ISO 마커·최근 5세션·테일 보존)
- **게발이 브리핑 자동 발행:** `harness\scripts\publish-briefing.ps1` — 인계 읽 즉시 실행(멱등 스킵) · openclaw `npm run dev`→`generate-cardnews.ps1`→homepage 커밋→GH Pages 200 · 로그 `F:\backup\briefing-YYYY-MM-DD.log` · 옵션 `-Date`/`-Force`
- **철학사 1권:** 1~10화 확정·업로드 완료(id 8·15·16·17·18·27·29·30·31·32) · 11화(아리스토텔레스·1-13) 집필 예정 · 업로드 스킬 `openclaw-local-mvp\.claude\skills\philosophy-essay-upload\SKILL.md`
- **심리학사 1권:** 1~14화 확정·업로드 완료(id 12·13·14·19·20·21·22·23·33·34·36) · 집필지침 §6.2 분량표·목차 갱신
- **심리학사 2권:** 15~27화(2-1~2-13) **✅ 완간·발행(2026-09-01~08, id=37~49)** — 세부는 마지막 갱신·아카이브 참조 · 27화 그림2·그림3 실사 후보 조사 완료 — 무진님 확정 후 교체·`--update` 재발행 예정
- **Claude Code 통로 (DeepSeek 공식 직판 — 최신 실측 2026-09-03):** 실행 `OneDrive\바탕 화면\AI\Claude-Code-DeepSeek.cmd` → `~\.claude\start-claude-deepseek.ps1` → **`api.deepseek.com/anthropic`**(deepseek-v4-flash, opus 슬롯 deepseek-v4-pro) · 키 `~\.claude\deepseek-api-key.local`(sk-...) · `/login` 금지 · VS Code 자동실행 버그해결: cmd title 제거+claude.exe 직접 실행 · **⚠️ 08-31 기록의 'DeepInfra 직결'(start-claude-deepinfra.ps1·api.deepinfra.com/anthropic, 잔액 $5)은 현재 미사용(구식)** — 런처·키는 롤백용 보존
- **컨텍스트 캐시 규약 (09-04, 모델 무관 적용):** 모든 세션 준수 · 원문 `OneDrive\바탕 화면\AI\DeepSeek-컨텍스트-캐시-규약.md`(진입점 옆 CLAUDE.md 자동 로드) · 요지 ① 자동 압축 유발 금지·한 작업=한 세션(프리픽스 보존) ② 같은 파일 재-read 금지·구간 read·도구는 한 턴에 묶기 ③ 출력은 1회·파일로 직접 기록·수정은 해당 부분만 patch(전체 재생성 금지) ④ 참조 머리 고정: 지침→공통 자료→작업 지시, 시각/세션ID 등 가변 텍스트 머리 배제 ⑤ 검증은 로컬(measure.py/verify.py) — 이유: DeepSeek 자동 프리픽스 캐시(반복 앞=히트 저가, 매 턴 append=미스, 출력=비캐시 고단가)
- **승인 기준 (09-04, 모델 무관):** 지시 = 사전승인 — 지시받은 목표의 필수 하위 단계(원고 파일 수정·검증 실행·연속 프로세스 중간 단계)는 되묻지 않고 실행 · 되묻는 건 범위 밖 새 작업 / 파괴 작업 / 외부 공개·비용 / 지침·설정 변경 / 보안 경계뿐(1회 통합) · 중간 도구 거부 = 작업 거부 아님(우회 후 1회 보고) · 예외: 자동 진행 중이라도 상태 불일치·범위 침범·의도치 않은 삭제/덮어쓰기·게이트 상태 이상·외부 영향 급증 시 **진행 전 경고**(가역·범위 안이면 경고 후 계속, 아니면 경고+1회 확인) · 상세 `OneDrive\바탕 화면\AI\승인-기준.md`
- **Git tip:** LLM Wiki `origin/master` · homepage `origin/master`(`project\homepage\progress.md` 동기) · harness `origin/main`(`docs\desktop-handoff\` 미러) · openclaw `origin/main` · CRLF `M`은 `git diff HEAD --stat` 확인
- **(완료 참조 — 상세는 아카이브·저장소):** 4개 PDF 파이프라인(피그마·예일대지성사·AI Agent·듀얼브레인 → `G:\내 드라이브\Claude\`) · 철학사수업1 1~11부 교정 → `F:\wiki\raw\`(2c2f0775·de65a7e4) · HWP→TXT `harness\scripts\convert-hwp-to-txt.ps1`(pyhwp) · 카드뉴스·홈페이지 DESIGN.md 1~3단계(`homepage\admin\cardnews\DESIGN.md`→style.css :root→CLAUDE.md) · openclaw-local-mvp(축구/개인 카드) · confidence:low 0 · Google OAuth 토큰 만료(refreshAccessToken)
