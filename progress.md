# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-21T09:52+09:00`** — **🔴 이번 세션(2026-09-21 · 31차) 최신 — 각주 재편 **B10-4(2권 17·18·19화 · D단계 마지막 배치)** 정규화 **적용 완료(17·18·19화 전건)** — 세 화 모두 미발행 → 최초 발행 시 자동 반영. 다음 착수 지점 = **18화 동어반복 처방 판정 → 교차 링크 삽입 → 02 동기화 → 게이트 20/20 ×3 → 커밋**: ① **집행** — 17화(정의 **16**·게이트 **19/20** — §9.4만 · E-basis **18,833**) · 18화(정의 **18**·마커 이동 **14자리**·**18/20** — 내부 word-12 ① + §9.4 · E-basis **21,927**) · 19화(정의 **21**·마커 이동 **21자리**·**19/20** — §9.4만 · E-basis **26,384**) · 세 화 도판 4·4·5. 적용 도구 `python ws_tmp/_b10_4_apply2.py 18 --apply` / `19 --apply`(**17화 재실행 금지** — 직전 세션 적용분) · 백업 `ws_tmp/_b104bak/` · dry `_b104_dry_18.txt`(65,537 B)·`_b104_dry_19.txt`(76,564 B). ② **근거 자산(byte-exact)** — 생성기 `ws_tmp/_b104_gen1819.py` → 적용기 `ws_tmp/_b10_4_apply2.py` — 18화 근거조각 **35** · 19화 **37** · 정의 형식 미충족 **0** · `build_evid` LABELS 리팩터는 **17화 적용본 16 정의줄 byte 일치(True)** 로 정책 충실성 검증. ③ **18화 잠복 결함 1건 발견(판단 요청)** — 내부 word-12 동어반복: `과학의 말이 문학의 말이 되고 문학의 말이 다시 다른 언어의 땅으로 건너가는` — ① L159 본문 끝 ↔ ② L169 **그림 4 캡션**이 본문 문장을 그대로 재사용. **변환 전 원본(`_b104bak/`)에서도 동일 2회** → 정규화가 만든 결함이 아니라 **구형 서식이라 게이트가 못 돌던 동안 잠복한 결함을 드러낸 것**. 처방 후보 ①캡션 문구 교체(본문 유지) ②본문 L159 다듬기 — 무진님 승인 문장을 건드리므로 **확정 표기 없이 대기**. ④ **교차 링크(§9.1) 미삽입 — 대장 보류 4행(2-16~19)** — 세 화 모두 0건. 대상 후보(판정 필요·확정 아님 · 원칙은 계획.md §10-6 '인물·개념이 실제 등장하는 문장에만'): 17화 → 세계사 2권 62화 「제1차 세계 대전까지의 1백 년」 / 19화 → 세계사 3권 87화 「아인슈타인, 뉴턴을 뛰어넘다」(87화→19화 **역방향 링크는 이미 epub 안에 있음**) / 18화 → **대상 없음**(문학사·경성 서사로 세계사 접점 문장 부재) + 02 사유 기재. URL 정본 `history/1779351860344_history2.epub`…`target=%EC%A0%9C62%ED%99%94` · `history/1779351897979_history3.epub`…`target=%EC%A0%9C87%ED%99%94`(표시문 정본 형식은 2권 27화 실사용분). 삽입 후 **표시 형식 grep 확인**(계획.md §10-7 결함 ①: 마크다운 문법 결함은 게이트 사각지대). ⑤ **재개 메모 신설** — `ws_tmp/각주판정/_재개_B10-4.md`(**비추적**) — 상태표·판단 대기 2건(ⓐ 18화 동어반복 처방 ⓑ 교차링크 대상)·착수 순서 5단계·18화 소스명 매핑(PP·소개→`en_wp(The Principles of Psychology)` / 한국 문학사→`en_wp(Yi Sang)` / 실험심리학사→`en_wp(Behaviorism)` · `[^4]`는 `ja_wp(意識の流れ)`+`en_wp(Introspection)` **이중 출처**)·19화 표제어 **현행 유지**(제안 §4-3 제안란 `(파이 현상)` 미반영). ⑥ **커밋 대기** — llm-wiki 미커밋: **B10-3**(1권 7화·14화 · 2권 16화 01+02) + **B10-4**(2권 17화·18화·19화 01) + 본 HANDOVER = 추적 변경 **9파일**(경로 명시 커밋 예정 · `ws_tmp`·복원포인트 비추적 유지 · `git add -A` 금지). ⑦ **다음 = 18화 동어반복 판정 → 교차링크 삽입 → 02 동기화(각 화 `## 교차 링크` 절 + D단계 기록) → 게이트 20/20 ×3 → `교차링크/대장.tsv`(심리 2-16~19) · `전체계획` §3-2/§5/§9(**D단계 12/12 완료**) · `발행대기-목록.md` 갱신 → wiki 커밋**. 발행은 세 화 모두 미발행(무진님 명시 지시 시에만) — 재개 메모 §3·§5.
  - [자동수집 · Git] 마지막 세션(2026-09-20T21:38+09:00) 이후:
    · homepage master: HEAD 2c1c16b / origin 2c1c16b ·작업트리 변경 5 :: 2c1c16b feat(psychology): 4권 43화 SERIES_MAP 등록 (작은 앨버트 — 공포의 학습) / 882f222 심리학사 SERIES_MAP — 41·42화 등록(4권 왓슨·파블로프 최초 발행) / b5af91e 자동: 카드뉴스 갱신 (2026-09-21) / 71a3cca 진행 기록: 인계 갱신 보정 — 30KB 준수(29,010B PASS, 29차 Git 블록 1줄 압축) / 9971848 진행 기록: 인계 갱신 (update-handover auto) / aecd6e0 진행 기록: 인계 갱신 보정 — B10-2 후속(판단 요청 3건 승인·집행 · llm-wiki d62cc814) 29차 항목 반영 / f8fc83a 진행 기록: 인계 갱신 보정 — 30KB 준수(29,338B PAS
    · llm-wiki master: HEAD 0fffc683 / origin 0fffc683 ·작업트리 변경 134 :: 0fffc683 chore(psychology): 4권 43화 확정·최초 발행 반영 / 7b6a5862 최종목차 — 4권 41·42화 발행 표기(id 63·64, 2026-09-21) / 86501928 4권 42화 — §1 '마당' 삭제(본문 수정 2 · 게이트 20/20) / 92955609 4권 42화 — 머리말 '개→사람' 다리 보강(본문 수정 · 게이트 20/20) / d62cc814 각주 재편 B10-2 후속 — 판단 요청 3건 승인·집행(마커 이동 2 · 근거 확장 1) / ccd8425a 각주 재편 B10-2 — 판단 요청 ⓐ(4화 동어반복 교정) 무진님 승인 기록 / 3090cf6f 각주 재편 B10-2 — 구형 서식 1권 4·5·6화 D단계 정규화(게이트 20/20 ×3 · DAV 103조
    · harness  main: HEAD 372f473 / origin 372f473 ·작업트리 변경 3 :: 372f473 docs(desktop-handoff): 인계 갱신 보정 — 30KB 준수(29,010B PASS, 29차 Git 블록 1줄 압축) / 30252d2 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 41b0aa6 docs(desktop-handoff): 인계 갱신 보정 — B10-2 후속(판단 요청 3건 승인·집행) 29차 항목 반영 / 761ccd6 docs(desktop-handoff): 인계 갱신 보정 — 30KB 준수(29,338B PASS, Git 블록 1줄 압축) / 5226eb7 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 7a587c0 docs(desktop-handof
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-20T21:38+09:00`** — **세션 마무리 — 각주 재편 B10-2(구형 서식 1권 4·5·6화) 완료 + 후속 판단 3건 승인·집행** — 무진님 지시 "실행해"의 연속. 4·5·6화 D단계 정규화(정의 52·근거 52 신설 · 게이트 20/20 ×3 · DAV 103조각 BAD 0 · 표제어 교체 3) → 커밋 `3090cf6f`. 이어 판단 요청 3건(ⓐ 4화 동어반복 교정 승인 · ⓑ 4화 `[^22]`·5화 `[^5]` 마커 이동 · ⓒ 5화 `[^9]` 근거 2→5조각 · en_wp 캐시 14→20종)을 회신 "모두 권고대로 승인"에 따라 집행 → 커밋 `d62cc814`(5 files) 푸시. 인계 미러는 동일 세션 연속이라 29차 항목을 보정(후속 문구 + Git 기산점 d62cc814·f8fc83a·761ccd6) — gate PASS 29,806B → homepage `aecd6e0` · harness `41b0aa6`. publish-briefing 이미 발행(스킵). **재검증**: 게이트 1~6화 전건 20/20 PASS · DAV BAD 0 · E-basis 4화 25,413·5화 16,822 불변. **다음 = B10-3(1권 7화·1권 14화·2권 16화)**. **재발행 대기 6화**(1권 1~6화 · 무진님 트리거 시 묶음) · 무진님 판단 대기(B10-1 4건).
  - [자동수집 · Git] 마지막 세션(2026-09-20T21:14+09:00) 이후:
    · homepage master: HEAD aecd6e0 / origin aecd6e0 ·작업트리 변경 5 :: aecd6e0 진행 기록: 인계 갱신 보정 — B10-2 후속(판단 요청 3건 승인·집행 · llm-wiki d62cc814) 29차 항목 반영 / f8fc83a 진행 기록: 인계 갱신 보정 — 30KB 준수(29,338B PASS, Git 블록 1줄 압축) / 12f5604 진행 기록: 인계 갱신 (update-handover auto) / aa1e3d8 진행 기록: 인계 갱신 (update-handover auto) / 94d98e2 진행 기록: 인계 갱신 (update-handover auto) / abb2f3d 진행 기록: 인계 갱신 (26차 — 교차 링크 P2·P1 집행 완료) / 00ae334 세계사 epub 교차 링크 — 3·4권 삽입 · 1·2권 공백 정규화 · history3 toc 라벨 보
    · llm-wiki master: HEAD d62cc814 / origin d62cc814 ·작업트리 변경 126 :: d62cc814 각주 재편 B10-2 후속 — 판단 요청 3건 승인·집행(마커 이동 2 · 근거 확장 1) / ccd8425a 각주 재편 B10-2 — 판단 요청 ⓐ(4화 동어반복 교정) 무진님 승인 기록 / 3090cf6f 각주 재편 B10-2 — 구형 서식 1권 4·5·6화 D단계 정규화(게이트 20/20 ×3 · DAV 103조각 BAD 0) / 754ed1d7 각주 재편 B10-1 — 구형 서식 1권 1·2·3화 D단계 정규화(게이트 20/20 ×3 · DAV 82조각 BAD 0) / cee39c18 HANDOVER: 27차 — 교차 링크 P3 묶어서 재발행 완료 / 1001ad9e HANDOVER: 26차 — 교차 링크 P2 집행 완료 · 세계사 epub 3~6권 · P1 잔여 마감 / 4eb8fa
    · harness  main: HEAD 41b0aa6 / origin 41b0aa6 ·작업트리 변경 3 :: 41b0aa6 docs(desktop-handoff): 인계 갱신 보정 — B10-2 후속(판단 요청 3건 승인·집행) 29차 항목 반영 / 761ccd6 docs(desktop-handoff): 인계 갱신 보정 — 30KB 준수(29,338B PASS, Git 블록 1줄 압축) / 5226eb7 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 7a587c0 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 49c9f55 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / c8116f9 docs(desktop-handoff): 인계 갱신 동기 (26차 —
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-20T21:14+09:00`** — **각주 재편 B10-2(구형 서식 12화 중 1권 4·5·6화) D단계 정규화 집행 완료** — 무진님 지시 "실행해"의 연속. 4화(정의 **24**·근거 24·표제어 교체 **3**·게이트 **20/20**·E-basis 25,420 → **25,413**·DAV 48조각 BAD 0) · 5화(14·14·**20/20**·**16,822 불변**·27조각) · 6화(14·14·**20/20**·**26,405 불변**·28조각) = **정의 52·근거 52 신설 · DAV 103조각 BAD 0**. 공통 처방 5종(구분선 `---` 신설 · 정의부 내부 빈 줄 **53 제거** · `｜ 근거: … 확인.` 정규화 · 마커 이동 **0** · 표제어를 본문 표기로 교체 3 = `[^3]` 예수회 학교 · `[^16]` 엘리자베스 공주 · `[^17]` 프랑신). **게이트가 처음 드러낸 구형 화의 잠재 결함 교정** — 도판 이미지줄 뒤 빈 줄 누락 8건(문자수 불변) · 4화 내부 word-12 동어반복 1건(막간 요약 쪽 최소 교정·본문 무변 · '본문 산문 불변' 원칙의 유일한 예외로 별도 보고) · B10-1 산물인 1·2화 `---` 뒤 LF 혼입 1건 CRLF 정규화. 02 3화 동기화(「각주 재편 D단계」 절 추가 · "게이트 미실행(구형 서식)" 문구를 "B10-2로 해소 — 20/20 PASS"로 갱신) · HANDOVER 29차 · `제안-1권-B10-2.md`(판단 요청 3건) · `전체계획.md`(D단계 6/12) · `발행대기-목록.md`. **기발행 6화(1권 1~6화) 재발행 대기**(무진님 트리거 시 묶음 — `psychology 1 2 3 4 5 6 --update`). 다음 = **B10-3(1권 7화·1권 14화·2권 16화)**. **+ 후속(판단 요청 3건 승인·집행)** — 4화 `[^22]`·5화 `[^5]` 마커 이동 · 5화 `[^9]` 근거 2→5조각(en_wp 캐시 14→20종) · 게이트 20/20 ×3 유지 · 커밋 `d62cc814` 푸시.
  - [자동수집 · Git] 마지막 세션(2026-09-20T20:45+09:00) 이후 — homepage **f8fc83a**(origin f8fc83a·변경 5) / llm-wiki **d62cc814**(origin d62cc814·변경 126) / harness **761ccd6**(origin 761ccd6·변경 3) / openclaw **11a8f0a**(origin 11a8f0a·변경 5) (상세는 각 repo git log)
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
