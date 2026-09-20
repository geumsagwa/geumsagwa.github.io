# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-20T21:14+09:00`** — **각주 재편 B10-2(구형 서식 12화 중 1권 4·5·6화) D단계 정규화 집행 완료** — 무진님 지시 "실행해"의 연속. 4화(정의 **24**·근거 24·표제어 교체 **3**·게이트 **20/20**·E-basis 25,420 → **25,413**·DAV 48조각 BAD 0) · 5화(14·14·**20/20**·**16,822 불변**·27조각) · 6화(14·14·**20/20**·**26,405 불변**·28조각) = **정의 52·근거 52 신설 · DAV 103조각 BAD 0**. 공통 처방 5종(구분선 `---` 신설 · 정의부 내부 빈 줄 **53 제거** · `｜ 근거: … 확인.` 정규화 · 마커 이동 **0** · 표제어를 본문 표기로 교체 3 = `[^3]` 예수회 학교 · `[^16]` 엘리자베스 공주 · `[^17]` 프랑신). **게이트가 처음 드러낸 구형 화의 잠재 결함 교정** — 도판 이미지줄 뒤 빈 줄 누락 8건(문자수 불변) · 4화 내부 word-12 동어반복 1건(막간 요약 쪽 최소 교정·본문 무변 · '본문 산문 불변' 원칙의 유일한 예외로 별도 보고) · B10-1 산물인 1·2화 `---` 뒤 LF 혼입 1건 CRLF 정규화. 02 3화 동기화(「각주 재편 D단계」 절 추가 · "게이트 미실행(구형 서식)" 문구를 "B10-2로 해소 — 20/20 PASS"로 갱신) · HANDOVER 29차 · `제안-1권-B10-2.md`(판단 요청 3건) · `전체계획.md`(D단계 6/12) · `발행대기-목록.md`. **기발행 6화(1권 1~6화) 재발행 대기**(무진님 트리거 시 묶음 — `psychology 1 2 3 4 5 6 --update`). 다음 = **B10-3(1권 7화·1권 14화·2권 16화)**.
  - [자동수집 · Git] 마지막 세션(2026-09-20T20:45+09:00) 이후:
    · homepage master: HEAD aa1e3d8 / origin aa1e3d8 ·작업트리 변경 5 :: aa1e3d8 진행 기록: 인계 갱신 (update-handover auto) / 94d98e2 진행 기록: 인계 갱신 (update-handover auto) / abb2f3d 진행 기록: 인계 갱신 (26차 — 교차 링크 P2·P1 집행 완료) / 00ae334 세계사 epub 교차 링크 — 3·4권 삽입 · 1·2권 공백 정규화 · history3 toc 라벨 보정 / f93e1f6 진행 기록: 인계 갱신 (update-handover auto) / 603ed9e 진행 기록: 인계 갱신 (update-handover auto) / 765dda4 진행 기록: 인계 갱신 (update-handover auto) / e954dab 진행 기록: 인계 갱신 보정 — 30KB 준수(29,943B PASS, Git
    · llm-wiki master: HEAD 3090cf6f / origin 3090cf6f ·작업트리 변경 126 :: 3090cf6f 각주 재편 B10-2 — 구형 서식 1권 4·5·6화 D단계 정규화(게이트 20/20 ×3 · DAV 103조각 BAD 0) / 754ed1d7 각주 재편 B10-1 — 구형 서식 1권 1·2·3화 D단계 정규화(게이트 20/20 ×3 · DAV 82조각 BAD 0) / cee39c18 HANDOVER: 27차 — 교차 링크 P3 묶어서 재발행 완료 / 1001ad9e HANDOVER: 26차 — 교차 링크 P2 집행 완료 · 세계사 epub 3~6권 · P1 잔여 마감 / 4eb8fa1c 철학사·세계사 교차 링크 검토 기록 — P1 잔여(철학 6~10화) · P2(세계사 3~4권) / 99fdaa11 심리학사 교차 링크 P2 삽입 · P1 잔여 형식 정규화·복구 (1~3권) / 25cf7e
    · harness  main: HEAD 7a587c0 / origin 7a587c0 ·작업트리 변경 3 :: 7a587c0 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 49c9f55 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / c8116f9 docs(desktop-handoff): 인계 갱신 동기 (26차 — 교차 링크 P2·P1 집행 완료) / f665b90 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 408f549 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f232fb2 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 91f0f7a
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-20T20:45+09:00`** — 각주 재편 **B10-1(구형 서식 1권 1·2·3화) D단계 정규화 집행 완료**(무진님 지시 "실행해") — B10(12화)을 4소배치로 분할(B10-1~B10-4)하고 B10-1 집행: 구분선 `---` 신설 · 정의부 빈 줄 제거(10·7·22) · **근거 신설 41건**(정의 10·8·23) · **게이트 20/20 ×3**(구형 서식이라 종전 미실행 → 전부 해소) · E-basis 1화 **19,836 불변**·2화 **21,499**·3화 **16,662** · 본문 산문 불변(마커 이동 1자리 + 링크 공백 1 외 동일). **DAV byte-exact 82조각 BAD 0** — 캐시 신설 `ws_tmp/ep01~ep03-research/pages/`(en_wp 중심 · 3화 en_wp 25편). **표제어 교체 8건**(§1-3 (B) 본문 표기) · **3화 [^7] 마커는 이동하지 않음**(02에 기록된 2026-08-22 무진님 확인 존중) · 교차 링크 형식 정규화 3건 · 02 3본 동기화(D단계·교차 링크 절). 기록 = `전체계획.md`(§3-2·§4·§5·§9·이력) · `발행대기-목록.md`(B10-1 재발행 대기) · `제안-1권-B10.md`(판단 요청 4건) · HANDOVER 28차. 커밋 `754ed1d7`(llm-wiki) 푸시 완료. **다음 = B10-2(1권 4·5·6화)** — 잔여 `\~` 이스케이프 정규화 여부·하한 20 미달 유지 여부는 무진님 판단 대기.
  - [자동수집 · Git] 마지막 세션(2026-09-20T20:25+09:00) 이후:
    · homepage master: HEAD 94d98e2 / origin 94d98e2 ·작업트리 변경 5 :: 94d98e2 진행 기록: 인계 갱신 (update-handover auto) / abb2f3d 진행 기록: 인계 갱신 (26차 — 교차 링크 P2·P1 집행 완료) / 00ae334 세계사 epub 교차 링크 — 3·4권 삽입 · 1·2권 공백 정규화 · history3 toc 라벨 보정 / f93e1f6 진행 기록: 인계 갱신 (update-handover auto) / 603ed9e 진행 기록: 인계 갱신 (update-handover auto) / 765dda4 진행 기록: 인계 갱신 (update-handover auto) / e954dab 진행 기록: 인계 갱신 보정 — 30KB 준수(29,943B PASS, Git 블록 1줄 압축) / 834c5d2 진행 기록: 인계 갱신 (update-hand
    · llm-wiki master: HEAD 754ed1d7 / origin 754ed1d7 ·작업트리 변경 126 :: 754ed1d7 각주 재편 B10-1 — 구형 서식 1권 1·2·3화 D단계 정규화(게이트 20/20 ×3 · DAV 82조각 BAD 0) / cee39c18 HANDOVER: 27차 — 교차 링크 P3 묶어서 재발행 완료 / 1001ad9e HANDOVER: 26차 — 교차 링크 P2 집행 완료 · 세계사 epub 3~6권 · P1 잔여 마감 / 4eb8fa1c 철학사·세계사 교차 링크 검토 기록 — P1 잔여(철학 6~10화) · P2(세계사 3~4권) / 99fdaa11 심리학사 교차 링크 P2 삽입 · P1 잔여 형식 정규화·복구 (1~3권) / 25cf7ed1 교차 링크 §9.1 조문 정비 — 주인·미삽입 사유·매체별 서식 (P0) / bd981cad HANDOVER: 22차 — 2권 재발행 완료(
    · harness  main: HEAD 49c9f55 / origin 49c9f55 ·작업트리 변경 3 :: 49c9f55 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / c8116f9 docs(desktop-handoff): 인계 갱신 동기 (26차 — 교차 링크 P2·P1 집행 완료) / f665b90 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 408f549 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f232fb2 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 91f0f7a docs(desktop-handoff): 인계 갱신 보정 — 30KB 준수(29,943B PASS, Git 블록 1
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-20T20:25+09:00`** — **27차 — 교차 링크 §9.1 P3 묶어서 재발행 집행 완료(심리 28화 · 세계사 epub 1~4권)**: 무진님 트리거("p3 재발행"). **① 대상 확정은 실측** — 발행본(Supabase `body_markdown`) ↔ 원고 01을 이미지 base64만 정규화해 전문 비교하는 도구 `ws_tmp/교차링크/p3/_site_diff.cjs` 신설 → 심리 **28화 불일치**(1·8·9·10·11·12·13·15·20~37·39·40) · **철학 10화 전 화 일치**(원고 불변 → 재발행 불필요). 불일치 폭 = 삽입 링크 문자수와 정확히 일치(30·33화 91자 … 40화 850자). **② 세계사 epub 1~4권 업로드**(`node scripts/upload-history-epub.cjs 1 2 3 4`) — 1·2권 공백 정규화본 · **3권 신규 링크 3건 + toc 라벨 `제N화` 15/15 보정본** · 4권 신규 링크 1건 + mimetype STORED 보정본 → Storage 재다운로드 **sha256 4/4 MATCH**(공개 URL 400 → 인증 헤더 경로로 확인). **③ 심리 28화 재발행** — 27화 성공 · **30화 `57014 statement timeout`**(그림3 9.3MB base64) → **단독 재시도 성공(id 52)** · **발행 후 대조 40/40 일치 · 불일치 0**(철학 10/10 유지). **④ 기록** — `대장.tsv`(심리 28행·epub 4행 P3 반영 표시) · `발행대기-목록.md`(**기발행 재발행 대기 0화** · B9 ✅ · 「P3 묶음 재발행」 절) · `검증결과.md` P3절 · `계획.md` §10-8 · `_재개_메모.md`. **⑤ 함정 2건** — (가) `publish-series-episodes.mjs` CRLF: 꼬리 `
` 미제거 시 블록 파서가 다음 시리즈로 새어 나감(대조 도구에서 발견·수정) (나) 셸 인자 역슬래시 소실로 정규화 검사 오탐 → 문자열 재확인으로 정상 판정. **⑥ 남은 것 = 없음(교차 링크 기준)** — 보류 7화(심리 1-14 · 2-16~19 · 철학 1-9·10)만 **F단계** 후 삽입·재발행. 다음 = 각주 재편 B10 → B11 · 미발행분 집필(심리 4권 41화~). **llm-wiki HANDOVER 커밋 `cee39c18`(미푸시) — 무진님 확인 시 푸시.**
  - [자동수집 · Git] 마지막 세션(2026-09-20T20:01+09:00) 이후 — homepage **abb2f3d**(origin abb2f3d·변경 5) / llm-wiki **cee39c18**(origin bd981cad·미푸시·변경 126) / harness **c8116f9**(origin c8116f9·변경 3) / openclaw **11a8f0a**(origin 11a8f0a·변경 5) (상세는 각 repo git log)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-20T20:01+09:00`** — **26차 — 교차 링크 P2 완료 · P1 잔여 마감(신규 삽입 0건 · 형식 정규화 5건 · 복구 5건 · epub 정규화 4건)**: 무진님 지시("기 발행 분 전체 · 1-4 승인 · **내 승인 없이도 자동 삽입**" · "커밋은 묶어서~")에 따라 P2 잔여분과 P1 잔여를 끝까지 집행. **① P2 완료** — 심리 원고 3권 36~40(38화 0건)·2권 15·20~27·1권 13화 전 화 **게이트 20/20 PASS** · **삽입 문자수 = E-basis 증가분 정확 일치**(문장 무변경, 괄호 링크만). **세계사 epub 3~6권**: 3권 3건(심리 essay 35·58·41)·4권 1건(20) 삽입 · 5·6권 0건(오탐 배제 사유) — 엔트리 순서·비대상 해시 불변·testzip None·mimetype STORED PASS, **history4 mimetype DEFLATE 결함 보정** + **history3 toc 라벨 "제N화 " 접두 보정**(reader.html 이 target 을 nav.toc 라벨과 `includes()` 매칭 — 3권만 접두가 없어 점프 실패하던 결함 · `epub/fix-toc-labels.mjs`). **② P1 잔여 마감** — 신규 삽입 **0건**: 철학 6·7·8화(세계사 1~6권 **전 권**에 헤라클레이토스·파르메니데스·제논·다원론자 0건) · 심리 4~12화(철학사 기발행분이 1권 1~10화뿐이고 등장 철학자 전원 화 미발행) → **화별 02에 §9.1-7 미삽입 사유**. 정규화 = 심리 1화 3건(인라인 HTML→마크다운·상대→절대 URL·앞 한 칸)·12화 인코딩 2건(`%2F`→`/`·`+`→`%20`). 복구 = **심리 3-36화 마크다운 문법 결함 3건**(`((표시문)(URL))`→`([표시문](URL))` · 문자수·E-basis 불변)·**심리 11·12화 무기록 평문화 각 1건**(+180자, 커밋본·발행본 대조로 회귀 판정). epub = history1·2 기존 4건 `다.(<a …` → `다. (<a …`(재빌드 소실 위험 회피 · `normalize-epub-xlinks.py` 멱등). **③ 결함 2종(기록)** — (가) **게이트 사각지대**: §9.2가 URL만 검증해 `((표시문)(URL))` **문법 결함을 20/20 PASS로 통과** → 삽입 직후 표시 형식 grep 확인을 절차에 추가. (나) 작업트리 단독 **무기록 평문화 2건** → 수정 전후 커밋본·발행본 대조 절차 추가. **④ 보류 7화** — 심리 1권 14화·2권 16~19화 + **철학 1권 9·10화**(세계사 1권 9화에 소크라테스 20·소피스트 1·플라톤 4로 대상은 실재하나 구형 서식 → 게이트 중단) → **F단계**(각주 재편) 후 삽입. 게이트 실측: 심리 8~12화 PASS(23,473·16,368·18,585·22,131·21,861) · 철학 8화 FAIL 17/20(각주 정의 구본 — 링크 무관) · 심리 1~7화·철학 3~7·9·10화 구형 서식 미실행. **⑤ 커밋(묶어서, 미푸시)** — llm-wiki 3건 + homepage 1건(`00ae334`) · 업로드·재발행 없음 · 비추적 규칙 준수(실수로 staged 된 복원포인트 55점 커밋 전 되돌림). **⑥ 기록(비추적)** — 02 15개 · `검증결과.md` P1 잔여절 · `계획.md` §8(구형 서식 전수)·§10-7 · `대장.tsv` 25행. **다음** = **P3 재발행**(무진님 트리거 — history1·2 정규화본·history3 toc 보정본·history3·4 신규 링크·심리 재발행분) → F단계에서 보류 7화 링크 삽입 → 미발행분 집필(심리 4권 41화~).
  - [자동수집 · Git] 마지막 세션(2026-09-20T14:47+09:00) 이후 — homepage **00ae334**(세계사 epub 교차 링크: 3·4권 삽입·1·2권 정규화·history3 toc 라벨) / llm-wiki **25cf7ed1·99fdaa11·4eb8fa1c**(조문 정비 P0 · 심리 P2·P1 · 철학·세계사 기록 · 미푸시) / harness f665b90 / openclaw 11a8f0a (상세는 각 repo git log)

- 시각(ISO): **`2026-09-20T14:47+09:00`** — **교차 링크(§9.1) P2 삽입 착수 — 심리학사 3권 31~34화 완료 · 35화 진행 중**
  - 무진님 지시("기 발행 분 전체를 대상으로 하고 **1-4 승인**. 다만 **내 승인 없이도 자동으로 삽입**" · "6-1. 포함이야"(세계사 epub 트랙) · "**승인**")에 따라 P2 삽입 착수 — **삽입은 자동, 재발행만 묶어서**(§9.1 주인 항 신설) · 커밋도 묶어서.
  - **게이트 편입**: `ws_tmp/gate_common.py`에 §9.2 `교차 링크 URL 형식` + §9.4 `교차 링크 검토 기록` 2항 신설 → 20항목.
  - **집행**: 31화 4건(세계사 3권 76화 「총알 하나가 불러온 제1차 세계대전」·철학사 1권 2화 id 15·세계사 3권 82화 「아돌프 히틀러」·세계사 1권 7화 「유일신이 선택한 민족") · 32화 2건(3권 76화·철학사 1권 10화 id 32) · 33화 1건(철학사 2화) · 34화 2건(3권 76화·82화) — 네 화 **게이트 20/20 PASS**(32·33·34화의 종전 FAIL은 §9.4 기록 부재가 원인). 표시문 정본 `이야기 {시리즈명} {권}권 {화}화 「{제목}」` · **문장 텍스트 불변 · 문장 뒤 괄호 링크만 추가**.
  - **검증**: **삽입 문자 수 = E-basis 증가분 정확 일치**(31화 18,394 +726 · 32화 23,775 +300 · 33화 15,683 +91 · 34화 17,932 +426 · 35화 19,424 +422) → 부수 편집 0. **미삽입 사유 02 기재**(33화 세계사 · 34·35화 철학사 — 기발행분은 1권 고대 그리스뿐).
  - **재개 지점 = 35화 02 기록**(01 편집 완료 2건 — 세계사 3권 82화·1권 31화 「도시의 공기는 자유를 낳는다」 · 게이트 19/20은 §9.4 기록뿐). 순서 = 3권 35~40화 → 2권 15~27화 → 1권 13·14화 → **세계사 epub 3~6권(인라인 HTML)** → P1 잔여. 대장 `ws_tmp/교차링크/대장.tsv`(비추적).
  - **llm-wiki 미커밋**(심리학사 3권 31~35화 01·02 — 커밋은 묶어서) · **재발행 0**.
  - [자동수집 · Git] 마지막 세션(2026-09-20T12:06+09:00) 이후 — homepage **765dda4** / llm-wiki **bd981cad** / harness **f232fb2** / openclaw **11a8f0a** (상세 이력은 각 repo `git log`)

## 이번 세션 요약

- **각주 재편 총괄 계획 수립·승인 + 배치 B1~B6-1 집행(23화)** — B1(3권 38화) → B2(3권 31·32·33·36) → B3(6권 62·64) → B4(2권 22·23·24) → B5(3권 28·29·30·34·35·39·40) → B6-1(5권 48~52). **배치별 일괄 결재** 전환 · 게이트 PASS(50·51화 선재 FAIL) · DAV 불일치 0 · E-basis 불변 · 02 동기화. 상세는 위 「마지막 갱신」 2026-09-18T09:41 블록.

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
- **최근 `master` 히스토리:** 인계·브리핑·OAuth 누적분은 각 repo `git log` 참조(구체 sha 이력은 아카이브). (08-17: `5012a78` …)

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
- **Claude Code 통로 (DeepSeek 공식 직판 — 최신 실측 2026-09-03):** 실행 `OneDrive\바탕 화면\AI\Claude-Code-DeepSeek.cmd` → `~\.claude\start-claude-deepseek.ps1` → **`api.deepseek.com/anthropic`**(deepseek-v4-flash, opus 슬롯 deepseek-v4-pro) · 키 `~\.claude\deepseek-api-key.local`(sk-...) · `/login` 금지 · VS Code 자동실행 버그해결: cmd title 제거+claude.exe 직접 실행 · **⚠️ 08-31 기록의 'DeepInfra 직결'(start-claude-deepinfra.ps1·api.deepinfra.com/anthropic, 잔액 $5)은 현재 미사용(구식)** — 런처·키는 롤백용 보존
- **컨텍스트 캐시 규약 (09-04, 모델 무관 적용):** 모든 세션 준수 · 원문 `OneDrive\바탕 화면\AI\DeepSeek-컨텍스트-캐시-규약.md`(진입점 옆 CLAUDE.md 자동 로드) · 요지 ① 자동 압축 유발 금지·한 작업=한 세션(프리픽스 보존) ② 같은 파일 재-read 금지·구간 read·도구는 한 턴에 묶기 ③ 출력은 1회·파일로 직접 기록·수정은 해당 부분만 patch(전체 재생성 금지) ④ 참조 머리 고정: 지침→공통 자료→작업 지시, 시각/세션ID 등 가변 텍스트 머리 배제 ⑤ 검증은 로컬(measure.py/verify.py) — 이유: DeepSeek 자동 프리픽스 캐시(반복 앞=히트 저가, 매 턴 append=미스, 출력=비캐시 고단가)
- **승인 기준 (09-04, 모델 무관):** 지시 = 사전승인 — 지시받은 목표의 필수 하위 단계(원고 파일 수정·검증 실행·연속 프로세스 중간 단계)는 되묻지 않고 실행 · 되묻는 건 범위 밖 새 작업 / 파괴 작업 / 외부 공개·비용 / 지침·설정 변경 / 보안 경계뿐(1회 통합) · 중간 도구 거부 = 작업 거부 아님(우회 후 1회 보고) · 예외: 자동 진행 중이라도 상태 불일치·범위 침범·의도치 않은 삭제/덮어쓰기·게이트 상태 이상·외부 영향 급증 시 **진행 전 경고**(가역·범위 안이면 경고 후 계속, 아니면 경고+1회 확인) · 상세 `OneDrive\바탕 화면\AI\승인-기준.md`
- **Git tip:** LLM Wiki `origin/master` · homepage `origin/master`(`project\homepage\progress.md` 동기) · harness `origin/main`(`docs\desktop-handoff\` 미러) · openclaw `origin/main` · CRLF `M`은 `git diff HEAD --stat` 확인
- **(완료 참조 — 상세는 아카이브·저장소):** 4개 PDF 파이프라인(피그마·예일대지성사·AI Agent·듀얼브레인 → `G:\내 드라이브\Claude\`) · 철학사수업1 1~11부 교정 → `F:\wiki\raw\`(2c2f0775·de65a7e4) · HWP→TXT `harness\scripts\convert-hwp-to-txt.ps1`(pyhwp) · 카드뉴스·홈페이지 DESIGN.md 1~3단계(`homepage\admin\cardnews\DESIGN.md`→style.css :root→CLAUDE.md) · openclaw-local-mvp(축구/개인 카드) · confidence:low 0 · Google OAuth 토큰 만료(refreshAccessToken)
