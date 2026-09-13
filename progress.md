# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

## 마지막 갱신

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

- 시각(ISO): **`2026-09-13T22:22+09:00`** — **심리학 3권 제34화(3-7 아들러)·제35화(3-8 신프로이트파 — 호나이·설리번·프롬) 확정·발행(id=56·57) — 35화 전체 재검증(서식·구조·각주 76:76·도판 3점 PASS) → 각주 정확 인용 4건 교정([^32][^35][^63][^64])·문장 교정 7건 → 02 검토내용 신규 작성 → 발행 id=57 — 이어 35화만 단어코너 0개로 통과한 누락 발견 → 코너 3개 신설(기본 불안·중요한 타인·동조) + 지침 §5.1·§8.2 '코너 화마다 1개 이상 필수' 항목 신설 + 게이트 코너 검사 추가 → 재발행(id=57 갱신) — homepage SERIES_MAP ep34·35 등록(미커밋) · 각 화 02 검토내용 완비 · llm-wiki 원고 미커밋**
  - [자동수집 · Git] 마지막 세션(2026-09-13T14:52+09:00) 이후:
    · homepage master: HEAD a963373 / origin a963373 ·작업트리 변경 1 :: a963373 진행 기록: 인계 갱신 (update-handover auto) / 5328d0f 자동: 카드뉴스 갱신 (2026-09-13)
    · llm-wiki master: HEAD 8ee71305 / origin 8ee71305 ·작업트리 변경 195 :: (커밋 없음)
    · harness  main: HEAD 798da74 / origin 798da74 ·작업트리 변경 3 :: 798da74 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - **제35화(3-8 「신프로이트파 — 호나이·설리번·프롬」)**: 01 본문 85,853 B(UTF-8 no-BOM·CRLF) · **E-basis 19,373(20p)** · 12절 · **각주 76** · **단어코너 3(신설)** · 도판 3점(실사 그림1 호나이 클리닉·그림2 프롬 1974 + 개념도 그림3 placeholder). 홈페이지 발행 **id=57**.
    · 재검증: 서식(BOM 없음·CRLF·굽은따옴표 0·후행공백 0·연속빈줄 0) · 구조(12절·각주 마커/정의 76:76·순서 연속·76/76 '확인.' 종결·도판 3점 실존) · 의문문 물음표 누락 0 · E-basis 19,373(코너는 '>' 블록이라 분량 제외) PASS.
    · 각주 정확 인용 **4건 교정**: [^32] `不在がちの`→`不在がちな` · [^35] 한국어 혼입 제거(`指導を受けた`) · [^63] 마르쿠제 인용을 원문 연속구절로 · [^64] 범위주석 오류 정정. 종결 정규화 2건([^17][^31]). `candidates.tsv` 86행(인용 문자열 110) 대조 **불일치 0**(NOCACHE 1=[^17] 제30화 캐시 교차 · 서지 1행 구성요소 일치) → sha256 `14ef15b4467737618b41a46f6d9c6cac471db43a6e295e2b091f6da7d1016b39`.
    · 문장 교정 7건(무진 지시): 곧은따옴표 3('중요한 타인'·'참여하며 관찰하기'·'동조') · 조사 2(마음은~) · '마지막의 필사의 시도' · '문화라는 흙'→'토양'.
    · **단어코너 누락 → 보강(중요)**: 3권 28~39화는 코너 2~3개인데 **35화만 0개**로 통과(검사 항목이 '문체'만 보고 '존재 여부'는 안 보던 구멍). 무진 지시로 **코너 3개 신설** — `기본 불안(基本不安, basic anxiety)` §4 · `중요한 타인(重要한 他人, significant other)` §6 · `동조(同調, conformity)` §8(§8.2 형식·다체·한자+원어 병기). **지침 §5.1 체크리스트·§8.2에 '화마다 1개 이상 필수' 항목 신설** + `_final_gate.py`에 코너 존재·개수 검사 추가. E-basis 불변. 재발행 id=57 갱신.
  - **제34화(3-7 「아들러 — 열등감과 우월 추구」)**: E-basis 17,780(18p)·각주 57·도판 3점 — 확정·**발행 id=56** · 02 검토내용 갱신.
  - 발행: `homepage` `SERIES_MAP.psychology.episodes`에 ep34·35 엔트리 등록 → `node scripts/publish-series-episodes.mjs psychology 34 35`(→ 35는 `--update`) → id=56·57. **SERIES_MAP 변경 1건 미커밋**(homepage 작업트리 변경 1).
  - 다음: **3권 3-9(제36화 「정신분석의 확산 — 미국과 세계」)부터 순차 확정·발행**. 다음 화부터 '코너 ≥1' 형식 검증 기본 적용.
  - 미커밋: llm-wiki 작업트리 변경 195(3권 33~35화 원고·02 + 5권 등) — 무진 검토 후 정리.
  - 인계 미러: 본 항목 apply 후 5개 미러 동기(Desktop\Harness 2 + desktop-handoff 2 + homepage/progress.md) · 위키 미러 `F:\wiki\HANDOVER.md` 별도 갱신.

- 시각(ISO): **`2026-09-13T14:52+09:00`** — **세션 시작·즉시 종료 준비 — 브리핑 자동 발행(2026-09-13 · 카드뉴스 `5328d0f` · GH Pages 200) · 콘텐츠 작업 없음 · 인계 로드·현황 확인 — 5권 48~51화 커밋·푸시 완료 확인(llm-wiki HEAD `8ee71305` · 구 인계문서 '51화 미커밋' 해소) — 다음 작업 변동 없음(5권 48·49 검토·확정 / 3권 ep29부터 순차 발행)**
  - [자동수집 · Git] 마지막 세션(2026-09-12T21:36+09:00) 이후:
    · homepage master: HEAD 5328d0f / origin 5328d0f :: 5328d0f 자동: 카드뉴스 갱신 (2026-09-13) / 790ee49 진행 기록: 인계 갱신 (update-handover auto) / 0ee6d2d 심리학사 SERIES_MAP 등록 — ep29~33 엔트리 (33화 융 · 분석 심리학의 실천 발행 id=55) / 76cdb43 진행 기록: 인계 갱신 (update-handover auto) / 3736c4f 진행 기록: 인계 갱신 (update-handover auto) / 7327292 자동: 카드뉴스 갱신 (2026-09-12)
    · llm-wiki master: HEAD 8ee71305 / origin 8ee71305 ·작업트리 변경 152 :: 8ee71305 심리학 5권 51화(5-4) 「비고츠키 — 사회적 마음」 본문 완성 + 검토 02 + 도판 4점 배치 / 4261583c 심리학 5권 50화(5-3) 「피아제 — 아이의 마음」 본문 완성 + 검토 02 + 도판 4점 배치 / 58b5c4b8 심리학 5권 49화(5-2) 「인지 심리학의 탄생 — 네이서」 본문 완성 + 검토 02 + 도판 3점 배치 / 4e044834 심리학 5권 48화(5-1) 「인지 혁명의 전주 — 7±2의 마법」 본문 완성 + 검토 02 + 도판 2점 배치 / bcb40521 HANDOVER: 5권 50·51·52화 현황 반영 — 52화 커밋·실사 2점 승인·인계 동기(2026-09-12) / ecfadec1 심리학 5권 52화: 실사 2점 무진 승인 확정 반영 — 도판의
    · harness  main: HEAD 6b9e6bd / origin 6b9e6bd ·작업트리 변경 3 :: 6b9e6bd docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ff51664 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f605cea docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션(2026-09-13)은 시작 직후 종료 준비 — **콘텐츠 변경 없음**. 브리핑 자동 발행으로 homepage 커밋 `5328d0f`(카드뉴스 2026-09-13)만 추가.
  - **[중요 현황 갱신]** llm-wiki `origin/master` HEAD가 `8ee71305`로 전진 — **5권 48화(`4e044834`)·49화(`58b5c4b8`)·50화(`4261583c`)·51화(`8ee71305`) 4화 모두 커밋·푸시 완료**(각 '본문 완성 + 검토 02 + 도판 배치'). 직전 인계문서(09-12)의 **'51화 이하 volume5 미커밋'은 해소**. 잔여 작업트리 변경 152.
  - 다음 작업 변동 없음: **5권 48·49화 검토·확정**(49화 그림1 초상 정책 무진 결정 대기) · **3권 ep29(프로이트 ②)부터 순차 발행** · 3권 대기 원고(ep30~33·37·39) 정리 · 51·52화 개념도 4점 외주 후 placeholder 교체.

- 시각(ISO): **`2026-09-12T21:36+09:00`** — **심리학 5권 51화(5-4 「비고츠키 — 사회적 마음」)·52화(5-5 「기억의 재구성 — 바틀렛」) 산출물 3종(01 본문·02 검토내용·도판의뢰서) 완성 — 51화 E-basis 15,771·각주 106·16p / 52화 E-basis 13,604·각주 97·14p, 양 화 게이트 22/22 PASS·DAV 인용 MISS 0 — 실사 2점씩 무진 승인 확정 · 개념도 2점씩 5키 스펙 명시 후 placeholder 유지 — 52화 커밋(a55cf86b·ecfadec1), 51화 이하 volume5 미커밋**
  - [자동수집 · Git] 마지막 세션(2026-09-12T16:57+09:00) 이후:
    · homepage master: HEAD 0ee6d2d / origin 0ee6d2d :: 0ee6d2d 심리학사 SERIES_MAP 등록 — ep29~33 엔트리 (33화 융 · 분석 심리학의 실천 발행 id=55) / 76cdb43 진행 기록: 인계 갱신 (update-handover auto) / 3736c4f 진행 기록: 인계 갱신 (update-handover auto) / 7327292 자동: 카드뉴스 갱신 (2026-09-12)
    · llm-wiki master: HEAD ecfadec1 / origin a6e1fbf2 ·작업트리 변경 178 :: ecfadec1 심리학 5권 52화: 실사 2점 무진 승인 확정 반영 — 도판의뢰서·검토 02 상태 갱신 / a55cf86b 심리학 5권 52화(5-5) 「기억의 재구성 — 바틀렛」 본문 완성 + 검토 02 + 도판 4점 배치 / a6e1fbf2 3권 33화: 홈페이지 발행 완료(id=55) — 목차 v1 발행 표기(3-2~3-6) + 02 배포 상태 갱신 / 82dfc747 3권 33화: 융 — 분석 심리학의 실천 재검증·확정 — 도판 슬롯 표준화(그림1→03·그림4→06)·개념도 5키 도판의뢰서 분리
    · harness  main: HEAD ff51664 / origin ff51664 ·작업트리 변경 3 :: ff51664 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f605cea docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 52화(5-5 「기억의 재구성 — 바틀렛」, Frederic Bartlett 재구성 기억): 01 본문 61,735 B(UTF-8 no-BOM·LF) · E-basis 13,604(14p) · 머리말+12절 · 각주 97 · 단어코너 3(연쇄 재생·재구성·합리화) · 도판 4점. 게이트 `ws_tmp/ep52-research/_gate52.py` **22/22 PASS** · DAV `_dav52.py` **97/97 MISS 0**.
  - 52화 도판: 그림1 바틀렛 초상 실사(PD · 616×800 · §2) · 그림2 카누 실사(Curtis 1914 · No known copyright restrictions · 1600×1187 · §4) **무진 승인 확정** — 그림3 전승 연쇄 · 그림4 기억의 재구성 개념도는 **placeholder(자리 표시 배지)** 유지. 도판의뢰서에 5키 스펙(위치·형태·요소·색상·캡션) 명시 → 다른 AI 외주 후 같은 파일명 교체(01 본문 수정 불필요). 실사 후보 7점 상세: `ws_tmp/ep52-research/figures/README_후보목록.md`.
  - 51화(5-4 「비고츠키 — 사회적 마음」): 01 본문 E-basis 15,771(16p) · 각주 106 · 12절 · 도판 4점(그림1 비고츠키 초상·그림4 묘 = 실사 무진 승인 확정 / 그림2 매개 삼각형·그림3 근접발달영역 = 개념도 placeholder) — 게이트 22/22 PASS · DAV MISS 0. **미커밋**.
  - 커밋: llm-wiki `a55cf86b`(52화 본문·검토·도판의뢰서 + 도판 4점) · `ecfadec1`(52화 실사 2점 승인 반영). volume5 48~51화는 untracked(미커밋).
  - 다음: 51·52화 무진 원고 검토 → 확정·발행 / 개념도 4점(51화 그림2·그림3, 52화 그림3·그림4) 타 AI 외주 생성 후 placeholder 교체.

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
