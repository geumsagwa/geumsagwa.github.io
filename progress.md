# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

## 마지막 갱신

- 시각(ISO): **`2026-09-12T16:57+09:00`** — 심리학 3권 33화(3-6 융 ②) 전체 재검증 통과 → **확정**(각주 1~24 정합·도판 슬롯 표준화·서식 무결) · 개념도 5키 도판의뢰서 분리 · 02 검토내용 갱신 · **홈페이지 업로드 off-peak 예약(미실행)**
  - [자동수집 · Git] 마지막 세션(2026-09-12T09:36+09:00) 이후:
    · homepage master: HEAD 3736c4f / origin 3736c4f ·작업트리 변경 1 :: 3736c4f 진행 기록: 인계 갱신 (update-handover auto) / 7327292 자동: 카드뉴스 갱신 (2026-09-12)
    · llm-wiki master: HEAD cdda7e90 / origin cdda7e90 ·작업트리 변경 166 :: (커밋 없음)
    · harness  main: HEAD f605cea / origin f605cea ·작업트리 변경 3 :: f605cea docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능
  - 33화 확정 상세: 파일 인코딩(UTF-8 no-BOM·CRLF) · 12절 구조 · 각주 [^1]~[^24] 참조↔정의 1:1 · 도판 4종(실사 슬롯 03·06 링크 실존 · 개념도 2 placeholder) · 단어코너 3 · 서식(구분선 11·줄끝 공백 0) 무결.
  - 도판 표준화: 파일 슬롯 `그림N = 0(N+2)` — 실사 그림1 `01`→`03`·그림4 `10`→`06`(복원포인트 포함 4개 리네임) · 01 본문 그림 링크 2곳 · ws_tmp README 후보목록 갱신 · 신규 `3권_33화_도판의뢰서.md`(개념도 그림2·그림3 5키).
  - **다음(off-peak)**: 홈페이지 업로드 `cd C:/Users/pass6/project/homepage && node scripts/publish-series-episodes.mjs psychology 33` — 선행: `SERIES_MAP.psychology.episodes`에 33화 엔트리(dir·file=3권_33화_01_융-분석-심리학의-실천.md·title·excerpt·card_image_url) 등록. 피크 회피로 미실행(무진 지시).

- 시각(ISO): **`2026-09-12T09:36+09:00`** — **심리학 5권 50화(5-3 「피아제 — 아이의 마음」) 산출물 3종(01 본문·02 검토내용·도판의뢰서) 완성 — E-basis 21,019·각주 68·단어코너 4·도판 4점(실사 2 채택 + 개념도 2 placeholder) — 게이트 22/22 PASS · DAV 인용 MISS 0 — 실사 2점(다보스 1928·에라스무스 상 1972) 무진 승인 확정, 개념도 2점(동화·조절·4단계) 5키 스펙 명시 후 placeholder만 유지 — 미커밋(무진 검토 대기)**

- 시각(ISO): **`2026-09-11T09:46+09:00`** — **심리학 5권 48화(5-1 「인지 혁명의 전주 — 7±2의 마법」)·49화(5-2 「인지 심리학의 탄생 — 네이서」) 산출물 3종(01 본문·02 검토내용·도판의뢰서) 완성 — 48화 E-basis 21,264·각주 65·그림1 섀넌 초상(CC BY 2.0) 실사 채택·그림2 placeholder / 49화 E-basis 21,210·각주 107·그림3 챌린저 폭발(NASA PD) 실사 채택·그림1·2 placeholder — 양 화 게이트 22/22 PASS — 미커밋 유지(무진 검토 대기)**
  - [자동수집 · Git] 마지막 세션(2026-09-10T22:03+09:00) 이후:
    · homepage master: HEAD 6b2059c / origin 6b2059c ·작업트리 변경 1 :: 6b2059c 자동: 카드뉴스 갱신 (2026-09-11) / 5be4eb5 진행 기록: 인계 갱신 (update-handover auto) / 261c4f2 진행 기록: 인계 표기 교정 + 3권 순차 발행 기준 반영 — '(3권 7~10화)'→'(ep34~37)', 발행 기준 ep28(3-1), 이후 ep29부터 순차 확정·발행(2026-09-10) / eca202b 자동: 카드뉴스 갱신 (2026-09-10)
    · llm-wiki master: HEAD cdda7e90 / origin cdda7e90 ·작업트리 변경 156 :: cdda7e90 심리학 4권 42화(4-2) 「파블로프 — 고전적 조건화」 본문 완성 + 검토 02 + 실사 도판 2점 배치 / 0705e3ab 심리학 4권 41화(4-1) 「왓슨 — 행동주의 선언」 본문 완성 + 검토 02 + 실사 도판 2점 배치 / f59e50f4 심리학 3권 40화(3-13) 「심층 심리학의 유산」 본문 1차 완성 + 검토 02
    · harness  main: HEAD d16da0b / origin d16da0b ·작업트리 변경 3 :: d16da0b docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / fb52ded docs(desktop-handoff): 인계 표기 교정 + 3권 순차 발행 기준 반영 — '(3권 7~10화)'→'(ep34~37)', ep28(3-1) 발행 기준 ep29부터 순차 진행 (2026-09-10)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 상세:
    · **48화(5-1 「인지 혁명의 전주 — 7±2의 마법」)**: 01 본문 76,631 B · E-basis 21,264 · 각주 65 · 12절 — 그림1 클로드 섀넌 초상 실사(Tekniska museet · CC BY 2.0 · 1465×2196 → JPG q90 1600px) 무진 채택·배치(§1) · 그림2 청킹 도식 placeholder(외주 예정). 02 검토내용·도판의뢰서 완성. 무진 채택 확정 반영(2026-09-11). 게이트 통과.
    · **49화(5-2 「인지 심리학의 탄생 — 네이서」, Ulric Neisser 1967)**: 01 본문 87,587 B(CRLF) · E-basis 21,210 · 각주 107 · 12절 · 단어코너 3(인지·정보 처리·생태학적 타당성) — 그림3 챌린저호 폭발 실사(NASA PD · 3555×2879 → 1600×1296) 채택·배치(§10) · 그림1 네이서 초상·그림2 마음의 정보처리 흐름 placeholder(그림1·2 5키 스펙 확정). 게이트 `ws_tmp/ep49-research/_gate49.py` **22/22 PASS**.
    · **49화 그림1(네이서 초상) 조사 결론**: 자유 이용 초상 부재 확정(Wikidata Q62895 P18 없음 · Commons 없음 · 다언어 위키 대표 이미지 없음 · Openverse CC BY-NC-ND 1점뿐). Emory News 768×1047 = 원본 220×300 업스케일(§8.5 부적합) · Emory Magazine 600×851(© Emory University · 1200px 미만) · NYT 752×1024·APS·Cornell 등 비자유/저해상. sonria 1280×720 = 정체 미확인(실사/AI 미검증)·비자유·16:9 → 후보 제외. → 그림1은 개념 도상(외주) vs 권리자 허락 — **무진 결정 대기**.
    · **미커밋**: llm-wiki 작업트리 변경 156 — 48·49화 01/02/도판의뢰서 + 도판 파일 untracked 유지. **커밋·푸시 없음**(무진 검토 후 일괄).
    · **상세 인계 서브노트**: `F:\wiki\ws_tmp\ep49-research\HANDOFF_49화_20260911.md`(49화 상태·열린 결정·작업 규칙).

- 시각(ISO): **`2026-09-10T22:03+09:00`** — **심리학 4권 45화(4-5 스키너②·행동 설계) 도판 4점·46화(4-6 신행동주의 헐과 톨먼) 도판 3점 완성 — E-basis 21,772·21,733, 게이트 22/22 PASS — 발행 보류(무진 원고·도판 검토·수정 대기)**
  - [자동수집 · Git] 마지막 세션(2026-09-09T22:28+09:00) 이후:
    · homepage master: HEAD 261c4f2 / origin 261c4f2 ·작업트리 변경 1 :: 261c4f2 진행 기록: 인계 표기 교정 + 3권 순차 발행 기준 반영 — '(3권 7~10화)'→'(ep34~37)', 발행 기준 ep28(3-1), 이후 ep29부터 순차 확정·발행(2026-09-10) / eca202b 자동: 카드뉴스 갱신 (2026-09-10) / ac0783f 진행 기록: 인계 갱신 (update-handover auto) / 2821226 진행 기록: 인계 갱신 (update-handover auto) / 7e957b6 심리학사 28화 등록 — 프로이트 · 무의식의 발견 (volume3) / 2e20f79 진행 기록: 인계 갱신 (update-handover auto) / 3bfc0d0 자동: 카드뉴스 갱신 (2026-09-09) / 34cb6de 진행 기록: 인계 갱신 (up
    · llm-wiki master: HEAD cdda7e90 / origin cdda7e90 ·작업트리 변경 150 :: cdda7e90 심리학 4권 42화(4-2) 「파블로프 — 고전적 조건화」 본문 완성 + 검토 02 + 실사 도판 2점 배치 / 0705e3ab 심리학 4권 41화(4-1) 「왓슨 — 행동주의 선언」 본문 완성 + 검토 02 + 실사 도판 2점 배치 / f59e50f4 심리학 3권 40화(3-13) 「심층 심리학의 유산」 본문 1차 완성 + 검토 02 / 33e2f9b9 3권 39화: 코헛 — 자기 심리학 01 완성(46 각주·게이트 통과) + 실사 도판 2점 채택·배치 / 177778c7 3권 37화: 실사 초상 주후보 3점 채택·배치 (아이젱크·포퍼·로프터스) / fb4b4f9d 통합집필지침 개정 반영 + §8.3 개념도 placeholder 규칙 신설 / 6879c47b 3권 28화: 프로이트 — 무의
    · harness  main: HEAD fb52ded / origin fb52ded ·작업트리 변경 3 :: fb52ded docs(desktop-handoff): 인계 표기 교정 + 3권 순차 발행 기준 반영 — '(3권 7~10화)'→'(ep34~37)', ep28(3-1) 발행 기준 ep29부터 순차 진행 (2026-09-10) / cc438f5 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 105858a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f1b7e09 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 4aa30d8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b3fb6db doc
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 없음 — 인계 갱신만 수행 (session-closeout)

- 시각(ISO): **`2026-09-09T22:28+09:00`** — **제39화(3-12) 코헛-자기 심리학: 01 본문 19,812자·14절·각주 46 게이트 통과, 실사 도판 2점(코헛 초상 §8·기념 명판 §2) 무진 채택·배치 완료**
  - [자동수집 · Git] 마지막 세션(2026-09-09T18:35+09:00) 이후:
    · homepage master: HEAD 2821226 / origin 2821226 :: 2821226 진행 기록: 인계 갱신 (update-handover auto) / 7e957b6 심리학사 28화 등록 — 프로이트 · 무의식의 발견 (volume3) / 2e20f79 진행 기록: 인계 갱신 (update-handover auto) / 3bfc0d0 자동: 카드뉴스 갱신 (2026-09-09) / 34cb6de 진행 기록: 인계 갱신 (update-handover auto) / b547ab9 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD 33e2f9b9 / origin 33e2f9b9 ·작업트리 변경 96 :: 33e2f9b9 3권 39화: 코헛 — 자기 심리학 01 완성(46 각주·게이트 통과) + 실사 도판 2점 채택·배치 / 177778c7 3권 37화: 실사 초상 주후보 3점 채택·배치 (아이젱크·포퍼·로프터스) / fb4b4f9d 통합집필지침 개정 반영 + §8.3 개념도 placeholder 규칙 신설 / 6879c47b 3권 28화: 프로이트 — 무의식의 발견 확정·발행(id=50) / ebc6b040 3권 37화: 정신분석의 비판 — 증거와 윤리 01 초고·02 검토·도판 의뢰서 (2026-09-09)
    · harness  main: HEAD 105858a / origin 105858a ·작업트리 변경 3 :: 105858a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f1b7e09 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 4aa30d8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b3fb6db docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 llm-wiki@33e2f9b9 (3권 39화: 코헛 — 자기 심리학 01 완성(46 각주·게이트 통과) + 실사 도판 2점 채택·배치)

- 시각(ISO): **`2026-09-09T18:35+09:00`** — **심리학사 ep28(3-1 프로이트 · 무의식의 발견) 확정·발행(Supabase id=50) ＋ ep37 실사 초상 주후보 3점 채택·배치 ＋ 통합집필지침 §8.3 개념도 placeholder 규칙 신설**
  - [자동수집 · Git] 마지막 세션(2026-09-09T14:19+09:00) 이후:
    · homepage master: HEAD 7e957b6 / origin 7e957b6 :: 7e957b6 심리학사 28화 등록 — 프로이트 · 무의식의 발견 (volume3) / 2e20f79 진행 기록: 인계 갱신 (update-handover auto) / 3bfc0d0 자동: 카드뉴스 갱신 (2026-09-09) / 34cb6de 진행 기록: 인계 갱신 (update-handover auto) / b547ab9 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD 177778c7 / origin 177778c7 ·작업트리 변경 81 :: 177778c7 3권 37화: 실사 초상 주후보 3점 채택·배치 (아이젱크·포퍼·로프터스) / fb4b4f9d 통합집필지침 개정 반영 + §8.3 개념도 placeholder 규칙 신설 / 6879c47b 3권 28화: 프로이트 — 무의식의 발견 확정·발행(id=50) / ebc6b040 3권 37화: 정신분석의 비판 — 증거와 윤리 01 초고·02 검토·도판 의뢰서 (2026-09-09)
    · harness  main: HEAD f1b7e09 / origin f1b7e09 ·작업트리 변경 3 :: f1b7e09 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 4aa30d8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b3fb6db docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약:
    · **ep37 도판**: 무진님 주후보 3점 채택(아이젱크 §5 · 포퍼 §3 · 로프터스 §9) → Commons 라이선스 검증 · volume3 슬롯 배치(그림1→03 · 그림2→04 · 그림3→05) · 01 연결 · 02·도판의뢰서 갱신 · off-peak 대기 파일 실행 완료 기록. 커밋 177778c7.
    · **ep28 확정·발행**: 무진 지시 3건 반영(히스테리·무의식 단어코너 평서문 교정 · §5 '이야기 심리학사' 정식 명칭) → 전체 재검증(_gate28.py) 이상 없음 → 02 확정 · E-basis 22,083 · 개념도 그림3·4 placeholder PNG 제작 · homepage SERIES_MAP ep28 등록 → 발행 **Supabase id=50**(essay.html?id=50 HTTP 200) · 목차 v1 3-1 발행 표기. 커밋 6879c47b.
    · **지침 §8.3**: 개념도 미제작 시 자리표시(placeholder)로 진행 규칙 신설(무진 지시 — 별도 지시 없으면 이후 화도 동일) + 09-06/08 개정분(§5.7 화별 문서 구성·§5.10 공백 행·§10 각주 규범) 반영. 커밋 fb4b4f9d.
    · **homepage**: SERIES_MAP ep28 등록 커밋 7e957b6. llm-wiki·homepage 모두 origin 푸시 완료.
    · 남은 일: 28화 개념도 그림3·4 실물(타 AI 일괄 의뢰) 수령 시 placeholder 교체·`--update` 재발행 / 28화 확정 후 교차 링크(§9·다음 화 예고) / ep37 선택형 후보(포퍼2·로프터스4.0)는 보류 / llm-wiki 작업트리 잔여(철학 volume1·심리 volume1·3권 34~36화 등)는 타 작업분 — 이번 커밋에서 제외됨.

- 시각(ISO): **`2026-09-09T14:19+09:00`** — **제37화(3-10 · 정신분석의 비판 — 증거와 윤리) 산출물 완료·커밋 — 01 본문 12절 · E-basis 17,644자(목표 17,500~18,500) · 각주 32(단일 문서 근거) · 근거 인용 58 전수 byte-exact 불일치 0 · 동어반복 0 · 교차 화(28~36) 반복 0(최장 공통 11) · 형식 게이트 PROBLEMS 0 → 02 검토내용 7섹션(§5.7 판정 '01 제출 가능 상태') · 도판의뢰서(실사 초상 후보 5점 = 주후보 3 · 선택형 2 — 그림1 아이젱크 §5 · 그림2 포퍼 §2·3 · 그림3 로프터스 §9, Commons API 존재·라이선스·해상도 실측, 채택 대기) → llm-wiki 로컬 커밋 `ebc6b040`(01·02·의뢰서, 미푸시) — 본 건 인계 파일 갱신으로 세션 마무리**
  - [자동수집 · Git] 마지막 세션(2026-09-09T04:33+09:00) 이후:
    · homepage master: HEAD 3bfc0d0 / origin 3bfc0d0 :: 3bfc0d0 자동: 카드뉴스 갱신 (2026-09-09) / 34cb6de 진행 기록: 인계 갱신 (update-handover auto) / b547ab9 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD ebc6b040 / origin 23b6165f ·작업트리 변경 83 :: ebc6b040 3권 37화: 정신분석의 비판 — 증거와 윤리 01 초고·02 검토·도판 의뢰서 (2026-09-09)
    · harness  main: HEAD 4aa30d8 / origin 4aa30d8 ·작업트리 변경 3 :: 4aa30d8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b3fb6db docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 다음 작업: ① ep37 도판 3점(그림1 아이젱크 · 그림2 포퍼 · 그림3 로프터스) 무진님 채택 → Commons 다운로드 · `3권_37화_03~05_그림N_….jpg` 슬롯 배치 · 01 연결(캡션 '(실사)'·판권 표기). ② 3권 34(3-7)·36(3-9) 산출물(01/02·도판)·미커밋, ep35(3-8) 본문 19,556자 초고 — DAV 재실행·부속(02·의뢰서·후보)·ep35 커밋 남음. ③ 3권 34~37 일괄 무진님 검토 → 확정·발행 시 homepage SERIES_MAP 등록·Supabase 업로드(ep34~37).

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
