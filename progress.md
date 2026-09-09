# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

## 마지막 갱신

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
  - 다음 작업: ① ep37 도판 3점(그림1 아이젱크 · 그림2 포퍼 · 그림3 로프터스) 무진님 채택 → Commons 다운로드 · `3권_37화_03~05_그림N_….jpg` 슬롯 배치 · 01 연결(캡션 '(실사)'·판권 표기). ② 3권 34(3-7)·36(3-9) 산출물(01/02·도판)·미커밋, ep35(3-8) 본문 19,556자 초고 — DAV 재실행·부속(02·의뢰서·후보)·ep35 커밋 남음. ③ 3권 34~37 일괄 무진님 검토 → 확정·발행 시 homepage SERIES_MAP 등록·Supabase 업로드(3권 7~10화).

- 시각(ISO): **`2026-09-09T04:33+09:00`** — **제35화(3-8 · 신프로이트파 — 호나이·설리번·프롬) 본문 분량 확장·각주 정의 병합 마무리 — 본문 E-basis 14,493→19,556자(목표 ~19,500 충족)·마커 1..76 연속·정의 76개·문장 중복 0 게이트 통과(본문 01 미커밋 유지) — 남은 일: DAV 검증 재실행·부속 파일(02 검토내용·도판의뢰서·후보 선택지)·ep35 범위 선택 커밋·무진님 검토**
  - [자동수집 · Git] 마지막 세션(2026-09-08T18:43+09:00) 이후:
    · homepage master: HEAD 1e96099 / origin 1e96099 :: 1e96099 진행 기록: 인계 갱신 (update-handover auto) / 9939126 publish: SERIES_MAP ep27(심리학사 제27화 학파들의 대립 — 20세기 초 심리학의 지형) 추가 — Supabase essays id=49 등록·도판 inline(2026-09-08) / 8810137 진행 기록: 인계 정합 — 21화(2-7)·22화(2-8) 확정·발행 반영, 2권 15~26화 상태 일괄 갱신(21~26 발행분 커밋 확인) / aafdd27 자동: 카드뉴스 갱신 (2026-09-08)
    · llm-wiki master: HEAD c10c425d / origin 23b6165f ·작업트리 변경 83 :: c10c425d 3권 33화: 도판 그림4 적용 — 도라 칼프 모래놀이방(CC BY-SA 4.0) 배치·기록 / e012c1e7 3권 33화: 도판 그림1 적용 — 융 1935 ETH 공식 초상(PDM) 배치·기록 / 69e66e1b 3권 32화: 도판 적용 — 그림1(융 1910 초상)·그림3(볼링겐 탑) 배치·기록 / 83a81547 3권 31화 도판 실사 적용 — 그림1 클라크1909 앞뜰 단체(PD)·그림2 아들러 1925(CC BY-SA 3.0 de) volume3 배치·01 그림 연결·02 확정 기록 / 23b6165f ep27 기록에 llm-wiki 커밋 해시(a1e9a7c9) 명기 / a1e9a7c9 ep27(2권 13화 제27화) 학파들의 대립 확정·발행 정리 — 02 상태 '확정·발행'(e
    · harness  main: HEAD 345861f / origin 345861f ·작업트리 변경 3 :: 345861f docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8afd743 docs(desktop-handoff): 인계 갱신 동기 (21화 확정·발행 반영 — 2권 15~26 상태 정합)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세: ① 본문 보강 — 마커 번호 잠금(1..76) 하에 "마커 없는 해설 문단" 또는 "기존 마커 직전 graft" 방식으로 절 분산 확장(§2·§3·§4·§5·§8·§10 등, 독자 공감 시나리오·평이한 재설명·오늘날 연결 추가), 배치마다 마커 불변식·정의 76개·`---` 정상·문장 중복(≥20자) 0 assert 통과. 배치9~11로 17,654→19,556자. ② 각주 정의 — source of truth `F:\wiki\ws_tmp\ep35\ep35_각주정의.md` 76줄 완성, 원고 말미 `---` 뒤 정의 블록([^1]~[^76]) 병합 완료. ③ 범위 준수 — ep36(3-9 정신분석의 확산) 소관(브릴·1909-11 학회·존스·자아심리학·멘닝거/DSM·라캉 등)은 서술하지 않았고, §12는 프로이트 1938 빈 탈출→1939 사망의 전환절로 간결 유지(ep31 §11과 중복 회피). ④ 미커밋 유지 — llm-wiki는 이번 세션 편집(3권_35화_01 등)을 커밋하지 않음(기존 미커밋 83건에 포함).
  - 다음 작업: ① DAV 검증 파이프라인 전체 재실행(마커/정의 정합·문장 중복·다국어 대조·§5.7 게이트) → 통과 후 '완료' 선언. ② 부속 파일 작성 — `3권_35화_02_검토내용.md`·`3권_35화_도판의뢰서.md`·candidates.tsv·후보_선택지.md. ③ F:\wiki ep35 범위 파일만 선택 커밋(전체 `git add -A` 금지). ④ 무진님 검토 → 확정·발행 시 homepage SERIES_MAP 등록·Supabase 업로드(3권 8화, ep35).

- 시각(ISO): **`2026-09-08T18:43+09:00`** — **제27화(2권 13화 · 학파들의 대립 — 20세기 초 심리학의 지형) off-peak 파이프라인 완료 — 무진님 제작 개념도 그림1(학파 지형도)·그림4(학파를 묶은 책들)을 01 참조 파일명 자리에 연결(2권_27화_03/06 PNG) → 홈페이지 SERIES_MAP ep27 등록(9939126)·Supabase id=49 발행(도판 4 base64 인라인, HTTP 200 확인) → 도판 실사 후보 조사 완료(그림2 맥두걸: 1947 초상·1923 Bain, 그림3 우드워스: PSM 1909 유일 단독 초상) → 목차 2-13 발행 표기(26,608자) · llm-wiki a1e9a7c9·23b6165f 푸시 — 그림2·3은 무진님 확정 후 placeholder 교체·`--update` 재발행 예정**
  - [자동수집 · Git] 마지막 세션(2026-09-07T22:08+09:00) 이후:
    · homepage master: HEAD 9939126 / origin 9939126 :: 9939126 publish: SERIES_MAP ep27(심리학사 제27화 학파들의 대립 — 20세기 초 심리학의 지형) 추가 — Supabase essays id=49 등록·도판 inline(2026-09-08) / 8810137 진행 기록: 인계 정합 — 21화(2-7)·22화(2-8) 확정·발행 반영, 2권 15~26화 상태 일괄 갱신(21~26 발행분 커밋 확인) / aafdd27 자동: 카드뉴스 갱신 (2026-09-08) / 512fbee publish: SERIES_MAP ep26(심리학사 제26화 심리학의 확산 — 유럽에서 미국으
    · llm-wiki master: HEAD 23b6165f / origin 23b6165f ·작업트리 변경 84 :: 23b6165f ep27 기록에 llm-wiki 커밋 해시(a1e9a7c9) 명기 / a1e9a7c9 ep27(2권 13화 제27화) 학파들의 대립 확정·발행 정리 — 02 상태 '확정·발행'(ep27·Supabase id=49)·재검증/도판 후보 조사/발행 불릿 추가, 최종목차 2-13 발행 표기(id=49·26,608자, 2026-09-08), 그림1·그림4 개념도 제작·01 연결, 그림2·3 placeholder 생성, 도판 실사 후보 조사 완료(그림2 1947/Bain1923·그림3 PSM1909), 홈페이지·도판 off-peak 대기 파일 상태 갱신 (2026-09-08) / 8bb1bbca ep26 §12 '외국어로만 쓰여진'→'쓰인' 이중 피동 교정 반영 — E-basis 19,396자 재실측(
    · harness  main: HEAD 8afd743 / origin 8afd743 ·작업트리 변경 3 :: 8afd743 docs(desktop-handoff): 인계 갱신 동기 (21화 확정·발행 반영 — 2권 15~26 상태 정합) / f36b253 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f592dfb feat(scripts): 세션 마무리 원스톱 session-closeout.py — 콘텐츠 커밋·푸시 + 인계 갱신(collect→apply --git) 통합, --dry-run 지원 (2026-09-07) / bc39a59 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세: ①그림1·그림4 개념도(무진님 제작, 1024×768·1408×768) 수령 → 01이 이미 참조하던 슬롯 파일명 자리에 실제 파일 연결(03·06), 그림2·그림3 실사 placeholder(04·05, 816B) 생성. ②목차 v1 2-13(27화) 발행 표기 — id=49·26,608자·2026-09-08 확정. ③홈페이지 — SERIES_MAP ep27 등록(9939126 커밋·푸시) → `publish-series-episodes.mjs psychology 27` → Supabase id=49(series=심리학사·episode_number=27, 도판 4 인라인: 그림1·그림4 실물 + 그림2·그림3 placeholder). ④도판 실사 후보 조사(Commons 파일명·분류·본문 검색 3중 + imageinfo로 라이선스·해상도·연도 실측) — 그림2: `William McDougall psychical researcher.png`(1947·PD·224×309, 영문 위키백과 대표 단독 초상) + 1923 Bain News Service 단체(원판 `…LCCN2014716482.jpg` 5035×3684·크롭 410×612, PD-1923); 그림3: `PSM V74 D211 Robert Sessions Woodworth.png`(1909·PD·789×982)가 Commons 유일 단독 초상. 후보 세부·URL은 02 '도판' 절 그림2·그림3 상태 줄에 기록. ⑤02 상태 '확정·발행'·진행기록·남은 일 갱신, off-peak 대기 파일 3건 정리(_23화 홈페이지 → 기실행(id=45)·표기만, _27화 홈페이지 → 완료, _27화 도판 실사 → 완료·무진님 확정 대기). ⑥커밋·푸시: llm-wiki a1e9a7c9(확정·발행 정리)·23b6165f(llm-wiki 해시 명기) · homepage 9939126(SERIES_MAP ep27).
  - 다음 작업: ①그림2(맥두걸)·그림3(우드워스) 실사 후보 무진님 확정 → Commons 파일 내려받기·placeholder 교체 → `publish-series-episodes.mjs psychology 27 --update` 재발행(ep24 선례). 그림2 단독 초상은 1947 224px 저해상도 — 선명도가 필요하면 1923 Bain 원판에서 재크롭 검토. ②~③ 3권 28~33·철학사 11화는 아래 '다음에 할 일' 3·4와 동일.

- 시각(ISO): **`2026-09-07T22:08+09:00`** — **방안 A 적용: session-closeout.py 신설·푸시(f592dfb)·두 CLAUDE.md 규칙 문서 반영 — 세션 마무리 원스톱(콘텐츠 커밋+인계) 통합 완료**
  - [자동수집 · Git] 마지막 세션(2026-09-07T21:45+09:00) 이후:
    · homepage master: HEAD b96dc2f / origin b96dc2f :: b96dc2f 진행 기록: 인계 갱신 (update-handover auto) / 512fbee publish: SERIES_MAP ep26(심리학사 제26화 심리학의 확산 — 유럽에서 미국으로) 추가 — Supabase essays id=48 등록·도판 inline(2026-09-07) / 804a02e publish ep25(제25화 여성 심리학자들 — 칼킨스와 워시번) SERIES_MAP 추가 — Supabase id=47 / 기존 ep15~24 파일명 개명 정리 + 진행 기록 / e7cf59b 자동: 카드뉴스 갱신 (2026-09-07)
    · llm-wiki master: HEAD 8bb1bbca / origin 8bb1bbca ·작업트리 변경 71 :: 8bb1bbca ep26 §12 '외국어로만 쓰여진'→'쓰인' 이중 피동 교정 반영 — E-basis 19,396자 재실측(+63) · 02 기록·자수표·목차 갱신 (2026-09-07) / f4f1020d ep26(2권 12화 제26화 심리학의 확산) '실' 은유 제거 문장 12건 반영 — 전체 재검증 통과·이상 없음 → 확정·발행(ep26·Supabase id=48·본문 E-basis 19,397자) + 검토내용 갱신·도판 그림1·2 placeholder 생성·최종목차 2-12 발행 표기 (2026-09-07) / 0f1f9362 2권 11화 제25화(여성 심리학자들 — 칼킨스와 워시번) 확정·발행 기록 — 02 상태 '확정·발행'(ep25·Supabase id=47)·재검증/발행 불릿 추가, 최종목차
    · harness  main: HEAD f592dfb / origin f592dfb ·작업트리 변경 3 :: f592dfb feat(scripts): 세션 마무리 원스톱 session-closeout.py — 콘텐츠 커밋·푸시 + 인계 갱신(collect→apply --git) 통합, --dry-run 지원 (2026-09-07) / bc39a59 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - 상세(자동): 콘텐츠 커밋 없음 — 인계 갱신만 수행 (session-closeout)

## 이번 세션 요약

- **제37화(3-10 · 정신분석의 비판 — 증거와 윤리) 산출물 완료·커밋**: 01 12절 · E-basis 17,644자 · 각주 32 · 근거 인용 58 전수 byte-exact(불일치 0) · 동어반복·교차 화 반복 0 → 02 검토 7섹션(판정 '01 제출 가능 상태') · 도판의뢰서(실사 후보 5점 추천 — 아이젱크·포퍼·로프터스, Commons 실측 · 채택 대기) → llm-wiki `ebc6b040` 로컬 커밋(미푸시).

## 확정·상태 변경

- 21화(2-7)~26화(2-12): **✅ 확정·발행**(ep21~26·id=43~48, 2026-09-06~07) · 27화(2-13): **✅ 확정·발행(2026-09-08 · ep27 · id=49)** — 그림2·그림3 실사 후보 무진님 확정 대기.
- 3권 34~37(3-7~3-10): **산출물 완료 — 무진님 검토·도판 확정 대기**(미확정·미발행). ep34·ep36(01/02·도판)·ep37(01/02/의뢰서) 완성 · **ep37만 커밋(2026-09-09 · llm-wiki `ebc6b040`)** · ep35(3-8)는 본문 19,556자 초고(부속·DAV 재실행·커밋 남음). 확정·발행 시 homepage SERIES_MAP·Supabase 업로드(3권 7~10화).

## 다음 작업

- **ep37(3-10) 도판 채택(무진님)**: 실사 후보 5점(도판의뢰서) 중 주후보 3(그림1 아이젱크 §5 · 그림2 포퍼 §2·3 · 그림3 로프터스 §9) → Commons 다운로드 · `3권_37화_03~05_그림N` 슬롯 배치 · 01 연결.
- **3권 34~37 검토 대기열**: ep34(3-7)·ep36(3-9) 산출물 완료·미커밋 · ep35(3-8) 본문 19,556자 초고 — DAV 재실행·부속(02·의뢰서·후보)·ep35 커밋 남음 · ep37 완료·커밋(ebc6b040) — 무진님 검토·확정 → 확정·발행 시 SERIES_MAP·Supabase(3권 7~10화).
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
2. **심리학사 3권 34(3-7)~37(3-10)** — 산출물 완료(ep34·ep36·ep37 · ep35 본문 초고) — 도판 채택·무진님 검토 → 확정·발행 시 SERIES_MAP 등록·Supabase 업로드(3권 7~10화)
3. **심리학사 3권 38(3-11) 집필** — ep34~37 검토·도판 확정과 병행 · ep37 §10·§12가 다리를 놓은 '실험실의 무의식'(실험·인지 무의식) 방향 — 최종목차 확인 후 진행
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
