# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-19T22:14+09:00`** — **B8-1(2권 25·26·27화) 각주 재편 집행분으로 세션 마감 — 무진님 지시 "일단 현상태 유지하고 세션 마무리"에 따라 추가 변경 없이 종료.** 집행 결과·검증 상세는 직전 항목(22:10) 참조 — 25화 15→**10** · 26화 17→**9** · 27화 18→**10**(유지 29 · 제거 21 · 재부여 0 · 커밋 `41502028` · HANDOVER 21차 `2f10c636`).
  - **[상태]** 추적 대상 미커밋 원고 **0**(llm-wiki 작업트리 변경은 복원포인트·selection 원본·`ws_tmp/`뿐 → 하드 룰 ②대로 **비추적 유지**).
  - **[대기 — 무진님 판단 3건]** ① 27화 마커 추가 이동 4자리(옛 [^6] · [^7] · [^13] · [^14] — 제안서 기재 4자리 대비 8자리) ② 27화 옛 [^17](조작적 정의) 마커를 인용문 뒤에 유보한 판단 ③ 26화 요약 인용부 따옴표 변환으로 DAV `BAD 11→0` — 그 결과 **ep26 `candidates.tsv` 0행**(근거 보강 필요 여부).
  - **[다음 세션]** **B8-2(2권 15·20·21화) — 근거 보강**(무진님 지시 "2. 보강"): `ep15/20/21-research` 캐시 재수집 → `｜ 근거:` 표기 보강 → 판정·집행. 잔여 = B8-2 + B9(1권 8~13) + B10(구형 12화) + B11(철학사 10화) = **10화**.
  - **[재발행 대기]** 2권 25·26·27화(기발행) — 각주 재편분이 사이트에 없음 → **묶어서 재발행**(개별 재발행 금지). 확정·재발행은 무진님 몫(재촉하지 않음).
  - [자동수집 · Git] 마지막 세션(2026-09-19T22:10+09:00) 이후:
    · homepage master: HEAD 45e40f0 / origin 45e40f0 :: 45e40f0 진행 기록: 인계 갱신 (update-handover auto) / 031db82 진행 기록: 인계 갱신 (update-handover auto) / 9492615 자동: 카드뉴스 갱신 (2026-09-19)
    · llm-wiki master: HEAD 2f10c636 / origin 2f10c636 ·작업트리 변경 126 :: 2f10c636 HANDOVER: 21차 갱신 — 배치 B8-1(2권 25·26·27화) 집행(총 42화) / 41502028 2권 25·26·27화 각주 재판정(B8-1) 적용 / b59cdeda HANDOVER: 20차 갱신 — 배치 B7-3(4권 46·47화) 집행(총 39화) / 60baef7f 4권 46·47화 각주 재판정(B7-3) 적용 / 9e20828d 4권 44·45화 02 「계측 기준」 명기 — E-basis 공식값(게이트 기준) 기록 / 4fa6695a HANDOVER: 19차 갱신 — 배치 B7-2(4권 44·45화) 집행(총 37화) / 3a399a43 4권 44·45화 각주 재판정(B7-2) 적용 / 6b9af77b HANDOVER: B6 02 14화 「유지」 값 산술 정정 집행 반
    · harness  main: HEAD f42177f / origin f42177f ·작업트리 변경 3 :: f42177f docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 7e02320 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)

- 시각(ISO): **`2026-09-19T22:10+09:00`** — **B8-1 각주 재편 집행(2권 25·26·27화) → 총 42화** — 25화 15→**10** · 26화 17→**9** · 27화 18→**10**(유지 29 · 제거 21 · 재부여 0 · 커밋 `41502028`). 각 화 게이트 **18/18 PASS** ×3(26·27화 정의부 종결 통일로 선재 FAIL 17/18 해소) · **E-basis 불변**(21,846·19,321·26,528) · DAV `BAD 0` · 02 동기화(제거 21건 무각주 이관표). 세 화 모두 **기발행 → 묶어서 재발행 대기**. 무진님 승인("모두 제안대로 승인") → 집행.
  - **[B8-1 · 2권 25~27화]** §1-3 (A)/(B)/(C) 적용 — 표제어 교체 7건 · 마커를 설명 대상 낱말 바로 뒤(조사 앞)로 재배치 **8자리**(제안 4 + §10.0 순서보존 스냅 4 — 26화 옛 [^6] · 27화 옛 [^7]·[^13]·[^14]) · **본문 산문 불변**(마커 제거 후 바이트 동일) · 27화 옛 [^17](조작적 정의) 마커는 인용문 뒤에 유보 · 26화 요약 인용부 작은따옴표→큰따옴표 변환으로 DAV `BAD 11→0`(그 결과 ep26 `candidates.tsv` 0행).
  - **[계획·대장 갱신]** `전체계획.md` — §3-1 재부여 초안 목표(25화 `10`·26화 `7`·27화 `9`)를 `—`로 정정 · §5 B8-1 ✅ 완료 · §7 `C단계 잔여` `13화` → **`10화(52 − 42화)`** · §9 `심리학사 C단계 완료·확정 11/52`(B4 시점 값이 stale) → **`42/52`**. `발행대기-목록.md` — §A B8 행을 **B8-1(집행 완료 · 재발행 대기) / B8-2(착수 대기)** 로 분리.
  - **[다음]** **B8-2(2권 15·20·21화) 착수** — 무진님 지시("2. 보강")대로 `ep15/20/21-research` 캐시 재수집 후 `｜ 근거:` 표기 보강. 잔여 = B8-2 + B9(1권 8~13) + B10(구형 12화) + B11(철학사 10화) = **10화**.
  - [자동수집 · Git] 마지막 세션(2026-09-19T21:03+09:00) 이후:
    · homepage master: HEAD 031db82 / origin 031db82 :: 031db82 진행 기록: 인계 갱신 (update-handover auto) / 9492615 자동: 카드뉴스 갱신 (2026-09-19)
    · llm-wiki master: HEAD 41502028 / origin 41502028 ·작업트리 변경 126 :: 41502028 2권 25·26·27화 각주 재판정(B8-1) 적용 / b59cdeda HANDOVER: 20차 갱신 — 배치 B7-3(4권 46·47화) 집행(총 39화) / 60baef7f 4권 46·47화 각주 재판정(B7-3) 적용 / 9e20828d 4권 44·45화 02 「계측 기준」 명기 — E-basis 공식값(게이트 기준) 기록 / 4fa6695a HANDOVER: 19차 갱신 — 배치 B7-2(4권 44·45화) 집행(총 37화) / 3a399a43 4권 44·45화 각주 재판정(B7-2) 적용 / 6b9af77b HANDOVER: B6 02 14화 「유지」 값 산술 정정 집행 반영 / a3704785 5권 48~61화 02 「유지」 값 산술 정정(B6 · 14화) / c1e52c77 HA
    · harness  main: HEAD 7e02320 / origin 7e02320 ·작업트리 변경 3 :: 7e02320 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)

- 시각(ISO): **`2026-09-19T21:03+09:00`** — **B7-1·B7-2 각주 재편 집행(4권 41~45화) → 총 37화 — 41화 20→**16** · 42화 21→**15** · 43화 12→**11**(유지 42 = 그대로 38·교체 4 · 제거 11 · 재부여 0 · 커밋 `cf4f5e46`) · 44화 30→**27** · 45화 31→**18**(유지 45 = 그대로·정규화 37·교체 8 · 제거 16 · 재부여 0 · 커밋 `3a399a43`). 각 화 게이트 **18/18 PASS** · E-basis 불변(20,931·20,873·19,407·20,762·21,589) · DAV 근거 인용 **불일치 0** · 02 동기화(무각주 이관표). B6 02 14화 「유지」 값 산술 정정 집행(커밋 `a3704785`). 다섯 화 모두 **미발행 → 최초 발행 대기**.
  - **[B7-1 · 4권 41~43화]** 표제어를 본문 표기로 5건 · 초안 오류 15건 정정(살린 9·제거 6) · 마커를 대상 낱말 바로 뒤(조사 앞)로 전면 재배치 — 게이트 18/18 PASS ×3 · DAV 40/30/11조각 불일치 0 · HANDOVER 18차(`c1e52c77`).
  - **[B7-2 · 4권 44~45화]** 표제어 교체·정규화 12건 · 중복 마커 통합(44화 1개·45화 10개 자리) · 중복 정의 8건 정리(ko·ja 위키판 제거, en·브리태니커·SimplyPsych 유지) · **본문 산문 불변**(마커 제거 후 바이트 동일) — 게이트 18/18 PASS ×2 · DAV 35/18조각 불일치 0 · 커밋 `3a399a43` · HANDOVER 19차(`4fa6695a`).
  - **[B6 02 산술 정정]** 5권 48~61화 02의 `유지`를 `확정 − 제거` → **`현행 − 제거`**로 28곳 정정(각 화 2줄) — 각주 수·게이트·DAV·E-basis·이관표 불변 · 커밋 `a3704785`.
  - **[계측 기준 통일]** 44·45화 02에 구 `epNN-research/_gateNN.py` 계측값(21,056·21,772)과 공용 게이트 공식값(**20,762·21,589**)의 관계를 명기(39·40화 선례) — 커밋 `9e20828d`.
  - **[다음]** **B7-3(4권 46·47화) 제안 작성** → 무진님 결재. 잔여 = B7-3~B9(15화) + B10(구형 12화) + B11(철학사 10화).**
  - [자동수집 · Git] 마지막 세션(2026-09-18T21:41+09:00) 이후:
    · homepage master: HEAD 9492615 / origin 9492615 :: 9492615 자동: 카드뉴스 갱신 (2026-09-19) / acf8595 진행 기록: 인계 갱신 (update-handover auto) / d00e2db SERIES_MAP — psychology 39·40 등록 (최초 발행) / c3312df 진행 기록: 인계 갱신 (update-handover auto) / 21f6dfc feat(publish): SERIES_MAP에 심리학사 38화 등록 — 3권 최초 발행 / 3cfca33 진행 기록: 인계 갱신 (update-handover auto) / 14d35f0 진행 기록: 인계 갱신 보정 — 30KB 준수(29,457B PASS) / 534b5b3 진행 기록: 인계 갱신 (update-handover auto) / 2ac08a0 진행 기록: 인계 갱신
    · llm-wiki master: HEAD 9e20828d / origin 9e20828d ·작업트리 변경 126 :: 9e20828d 4권 44·45화 02 「계측 기준」 명기 — E-basis 공식값(게이트 기준) 기록 / 4fa6695a HANDOVER: 19차 갱신 — 배치 B7-2(4권 44·45화) 집행(총 37화) / 3a399a43 4권 44·45화 각주 재판정(B7-2) 적용 / 6b9af77b HANDOVER: B6 02 14화 「유지」 값 산술 정정 집행 반영 / a3704785 5권 48~61화 02 「유지」 값 산술 정정(B6 · 14화) / c1e52c77 HANDOVER: 18차 갱신 — 배치 B7-1(4권 41~43화) 집행(총 35화) / cf4f5e46 4권 41·42·43화 각주 재판정(B7-1) 적용 / d97b8a88 HANDOVER: 17차 갱신 — 3권 39·40화 확정·최초 발행(i
    · harness  main: HEAD d52472d / origin d52472d ·작업트리 변경 3 :: d52472d docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / a42eab5 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 2b4ab25 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 5c23f93 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 7657a8e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 3f5da76 docs(desktop-handoff): 인계 갱신 보정 — 게이트 `해요체` 조문 교정·미결 해소 세션 현행화 + 30
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 없음 — 인계 갱신만 수행 (session-closeout)

- 시각(ISO): **`2026-09-18T21:41+09:00`** — **3권 39·40화 확정 → 홈페이지 최초 발행(id 61·62) 완료.** 무진님 지시("39, 40화 전체 재검증 → 이상 없으면 확정 → 검토내용 파일 작성 → 홈페이지 업로드")에 따라 — 게이트 `PASS 18/18` ×2(39화 E-basis **19,612** · 40화 **23,078**) · DAV 근거 인용 byte-exact **불일치 0**(39화 16·40화 37) · 산문 교정 39화 14건·40화 3건 · 도판 확정(39화 **그림3** '세 갈래의 자기' §14 신규 · 40화 **그림1 로르샤흐 도판 I** §2 신규·중복 소파 삭제) → 확정(llm-wiki `96ddcc44`) → 최종목차 3-12·3-13 발행 표기(`a5c6e260`) → `SERIES_MAP psychology 39·40` 등록(homepage `d00e2db`) → 발행(**id 61·62** — 사이트-원고 대조 완전 일치) → 3개 repo push. **각주 재편은 대기로 전환**(무진님 "일단 각주 작업은 대기로 걸어놓고") — 다음 = **B7(4권 41~47화)**.
  - **[계측 기준 통일]** 종전 02 §2·§7의 E-basis(39화 19,812 / 40화 23,505)는 구 `epNN-research/gate.py` 계측 — **공식값은 공용 게이트 기준 `gate_common`**(34~38화 확정 선례와 동일 기준): 39화 **19,612**(목표 20p 환산 ≈ 20.2p) · 40화 **23,078**(목표 24p 환산 ≈ 23.8p). 02 「확정」절에 경위 기록, §2·§7 표는 이력 보존.
  - **[확정 기록]** 39·40화 02 검토내용에 「확정」절 신설 — 게이트/E-basis 절별/DAV/각주/candidates.tsv sha256(39 `aa8f3234…` 16행 · 40 `b4787381…` 37행, 변동 없음)/01 sha256(LF)(39 `998255a0…` 55,781 B · 40 `ab6ce8c9…` 68,332 B)/교정·도판. 최종목차 3-12(39화)·3-13(40화) `✅ 발행(id=61·62, 2026-09-18 확정)`.
  - **[발행 대조]** 발행 후 사이트 본문 ↔ 원고 대조 — 39화 각주정의 16 · 마커 16 · 물음표 14 · 이미지 3 · 캡션 3 + 40화 각주정의 24 · 마커 24 · 물음표 24 · 이미지 2 · 캡션 2 = **원고와 완전 일치**(도판 5장 base64 인라인). 대장 `ws_tmp/각주판정/발행대기-목록.md` 갱신(39·40화 ✅ 발행 완료 · `SERIES_MAP` **40화까지 등록**, 41~61 미등록).
  - **[미발행 최초 발행 대기]** 4권 41~47 · 5권 48~61 · 6권 62·63·64. 6권 62·64는 확정(각주 재편 각 21 반영)·발행 준비 완료(63화는 확정 전). `SERIES_MAP` 미등록분은 `file`·`title`·`excerpt`·`card_image_url` 초안 + **무진님 검토·확정** 선행 필요.
  - **[규칙 준수]** 커밋은 경로 명시 스테이징(복원포인트·`ws_tmp`·selection 원본 비추적 — `git add -A` 금지). 39화 그림3 PNG·40화 도판 2점은 **본 파일만** 추적(38화 확정 선례 동일).

- 시각(ISO): **`2026-09-18T20:58+09:00`** — 3권 38화 최종 교정 확정 + 홈페이지 최초 발행(id 60): 01 본문 16곳 교정(시각 겉질→시각 피질 4곳 포함)·02 용어 2곳 → 재검증 이상 없음(게이트 19/19 · DAV 26/26 · E-basis 15,434) → 확정(llm-wiki `0985d95a`) → `SERIES_MAP psychology 38` 등록(homepage `21f6dfc`) 후 발행(id 60, 사이트-원고 대조 완전 일치)
  - [자동수집 · Git] 마지막 세션(2026-09-18T20:40+09:00) 이후:
    · homepage master: HEAD 21f6dfc / origin 21f6dfc :: 21f6dfc feat(publish): SERIES_MAP에 심리학사 38화 등록 — 3권 최초 발행 / 3cfca33 진행 기록: 인계 갱신 (update-handover auto) / 14d35f0 진행 기록: 인계 갱신 보정 — 30KB 준수(29,457B PASS) / 534b5b3 진행 기록: 인계 갱신 (update-handover auto) / 2ac08a0 진행 기록: 인계 갱신 (update-handover auto) / 9d5610b 진행 기록: 인계 갱신 보정 — 게이트 `해요체` 조문 교정·미결 해소 세션 현행화 + 30KB 준수(30,445B PASS) / 9cb6636 진행 기록: 인계 갱신 (update-handover auto) / 8b5108f 진행 기록: 인계 갱신 보정 —
    · llm-wiki master: HEAD 0985d95a / origin 0985d95a ·작업트리 변경 126 :: 0985d95a 3권 38화 최종 교정 확정 — 문장 교정 16곳 · 시각 겉질→시각 피질 / 43a76e64 HANDOVER: 발행 집행 반영 — 기발행 재발행(심리학사 21화·철학사 8화) 완료 / 633f7f0b HANDOVER: 15차 갱신 — 배치 B6-3(5권 58~61화) 집행(총 32화) / 04c35ac3 5권 58·59·60·61화 각주 재판정(B6-3) 적용 / 9956f9aa HANDOVER: 14차 갱신 — 배치 B6-2(5권 53~57화) 집행(총 28화) / 174fbce3 5권 53·54·55·56·57화 각주 재판정(B6-2) 적용 / d24b1bf4 게이트 `해요체` 조문 교정(지침 §8.2 코너 한정·인용문 예외) + 미결 2건 해소 반영 / 220241dc HANDOVER
    · harness  main: HEAD 2b4ab25 / origin 2b4ab25 ·작업트리 변경 3 :: 2b4ab25 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 5c23f93 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 7657a8e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 3f5da76 docs(desktop-handoff): 인계 갱신 보정 — 게이트 `해요체` 조문 교정·미결 해소 세션 현행화 + 30KB 준수(30,445B PASS) / dd5eec6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / c91259a docs(desktop-handoff): 인계 갱신 보정 — 이
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

## 이번 세션 요약

- **각주 재편 총괄 계획 수립·승인 + 배치 B1~B6-1 집행(23화)** — B1(3권 38화) → B2(3권 31·32·33·36) → B3(6권 62·64) → B4(2권 22·23·24) → B5(3권 28·29·30·34·35·39·40) → B6-1(5권 48~52). **배치별 일괄 결재** 전환 · 게이트 PASS(50·51화 선재 FAIL) · DAV 불일치 0 · E-basis 불변 · 02 동기화. 상세는 위 「마지막 갱신」 2026-09-18T09:41 블록.
- **[직전 세션] 숫자+의존명사 띄어쓰기 조문화 + 전수 교정 + 발행본 19화 재발행** — 지침 §5.8 5항 · llm-wiki `1d585aeb` · homepage `7af6c62`.

## 확정·상태 변경

- 21화(2-7)~26화(2-12): **✅ 확정·발행**(ep21~26·id=43~48, 2026-09-06~07) · 27화(2-13): **✅ 확정·발행(2026-09-08 · ep27 · id=49)** — 그림2·그림3 실사 후보 무진님 확정 대기.
- 심리학사 3권(ep28~): **ep28~ep37(3-1~3-10) 확정·발행 완료**(id=50~59 · **최신 = ep37(3-10) id=59, 2026-09-17**) — ep38~40(3-11~3-13)은 산출물 존재, 순차 확정·발행 대상.
- 3권 34~37(3-7~3-10): **✅ 전부 확정·발행**(ep34 id=56 · ep35 id=57 · ep36 id=58 · ep37 id=59) — 2026-09-13~17.
- **각주 재편(2026-09-18)** — 23화 완료(3권 37·38·31·32·33·36·28·29·30·34·35·39·40 · 6권 62·64 · 2권 22·23·24 · 5권 48~52). **미발행(3권 39·40 · 5권 48~52)은 최초 발행 시 자동 반영** / **기발행(2권 22·23·24 · 3권 28~37)은 묶어서 재발행 대기**(대장 `ws_tmp/각주판정/발행대기-목록.md`).

## 다음 작업
- **각주 재편 잔여 배치 — 다음은 B6-2(5권 53~57) 제안** → B6-3(58~61) → B7(4권 41~47) → B8(2권 15·20·21·25~27) → B9(1권 8~13) → B10(구형 12화) → B11(철학사 10화). **배치당 제안 1회 → 결재 1회**. 기준선 `ws_tmp/각주판정/전체계획.md`. 완료 23화 · 미완 29화.
- **각주 정의부 빈 줄 13화 정규화 — ✅ 해소(2026-09-18)**: 11화 PASS, 남은 것은 1권 11·12화 복원포인트 사본 2점(스냅숏 · 지침 대상 아님).
- **6권 6-4(제65화) 집필** → 6-14(제75화)까지. 파이프라인·검증은 62~64화와 동일(게이트 `gate_common.py` 20항목 · DAV · 후보 매핑 `candidates.tsv`). 조사 캐시·검증 도구 참조 = `ws_tmp/ep64-research/`.
- **무진님 대기 — 검토·확정·발행**: 62·63·64화 산출물 3종(01·02·도판의뢰서). 발행분은 **제1~37화(ids 12~59)** — 다만 **사이트 미반영 22화**(의문형 마침표·`심리학계에`)의 `--update` 재발행은 off-peak 무진님 트리거 대기(위 세션 블록 ④). 62·63화 실사 1순위 배치의 승인·교체 판단도 대기(후보 21종 = `ws_tmp/ep63-research/figures/raw/`).
- **도해 재외주 잔여**: 57화 그림5 · 58화 그림3 · 59화 그림1·2·5 · 60화 그림4 · 61화 그림1·2(팔레트 정정분) → 같은 파일명 교체(프롬프트 `ws_tmp\palette-fix\도해_팔레트_재제작_프롬프트.md`). 59화 실사 교체 판단(그림3 니스벳·그림4 여우와 신 포도)도 대기.

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

0. **각주 재편 잔여 배치(B6-2~B11) + 재발행(묶어서, 무진님 트리거) + 62·63·64화 검토·발행** — 명령·대장은 `ws_tmp/각주판정/발행대기-목록.md`.
1. **62·63·64화 검토·확정·발행** — 무진님 직접(도판 확정·SERIES_MAP 등록·업로드).
2. **6-4(제65화) 집필** — 6권 잔여 6-4~6-14(제65~75화).
3. **도해 재외주 잔여 수령·교체**(57·58·59·60·61화) · **59화 실사 교체 판단**.
4. 이월 과제(3차 재발행·CC 도판 소급·각주 통일·물음표 통일)는 **6차(2026-09-16)에서 전부 완료**.
4. **철학사 11화(아리스토텔레스 — 학문의 제왕, 1-13) 집필**
## 하네스 메모
- **인계 스크립트 버그 2건 수정 (09-15):** ① `update-handover.py`·`progress-file-check.py`가 cp949 콘솔에서 `—`를 print하다 `UnicodeEncodeError`로 죽어 **게이트 FAIL 직후 아카이브·커밋·초안 정리 단계가 통째로 누락**(게이트 출력이 비어 보인 원인도 이것) → stdout/stderr를 UTF-8로 재설정 + 게이트 자식에 `PYTHONIOENCODING=utf-8` 전달. ② 30KB 판정을 LF→CRLF 변환 **후** 실제 기록 바이트로 계산 — 변환 전 기준이라 30,674B로 보고됐으나 실제 30,791B라 **게이트가 쓰기 후에야 FAIL**. harness `7674d2f`.
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
