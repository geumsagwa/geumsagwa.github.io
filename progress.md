# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-23T08:18+09:00`** — **심리학사 6권 제68화 「정신 약리학의 시대 — 약물과 마음」(6-7·16쪽) 집필 완료 — 산출물 3종(01 본문·02 검토내용·도판의뢰서) · 게이트 23/23 PASS(분량 범위 지정) · DAV ok=63 bad=0 · E-basis 14,448 · 각주 32(문서 28종 en27·ja1) · 단어코너 3 · 도판 6자리(실사 4 후보 10점 내려받음 · 자작 도해 2는 5키 스펙만) · **미발행(무진님 결재 대기)** + 별건 **Voicebox 0.5.0(F:드라이브) 설치** — 음성 클론·TTS(MIT) `F:\Voicebox` · 기동 확인(REST 17493) · 모델 폴더 F: 지정**
  - [자동수집 · Git] 마지막 세션(2026-09-22T09:50+09:00) 이후:
    · homepage master: HEAD 11c0ce6 / origin 11c0ce6 ·작업트리 변경 5 :: 11c0ce6 진행 기록: 인계 갱신 (update-handover auto) / 053a7b7 자동: 카드뉴스 갱신 (2026-09-22)
    · llm-wiki master: HEAD 21f58f02 / origin 21f58f02 ·작업트리 변경 163 :: 21f58f02 6권 68화 집필 완료 — 「정신 약리학의 시대 — 약물과 마음」(6-7·16쪽) / 9371a9d8 67화 각주에 원판·일본어판 구분 명시 + 62·63·64화 게이트 표기 23항목 정정(무진님 「모두 승인」) / 7e9d7320 6권 67화 — 자작 도해 3점 확정 배치 + 본문 개정판 연도 예외 수정(2023→2022) / 94474ebe 기록: 게이트 항목 수 표기 전 화 정정(23항목 · 23/23) — 65·66·67화 02 + HANDOVER / 47174737 6권 66화 예외 수정(그림1 대조 본문 한 구절) + 67화 도판 기록 확정 / 8c8a6699 6권 66화: 개념도 3점 확정본 커밋 (그림1·4·5) / 801d2001 14~19화 묶음 도판 정규화: 02 검토내용
    · harness  main: HEAD f01778e / origin f01778e ·작업트리 변경 3 :: f01778e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

  - [기재 영역] 상세 — ① **68화 검증** 게이트 23/23(분량 범위 지정 실행) · DAV ok=63 bad=0 · sha256 `b07434f6…`(55,700 B). ② **도판** 실사 후보 10점 전량 다운로드(집필조건 8 · 접촉 시트·후보 목록 = `ws_tmp/ep68-research/figures/`) · 자작 도해 2점(그림3 탈제도화 도식·그림5 시냅스 도식)은 5키 스펙 작성·제작 의뢰 대기 · 슬롯 6개는 미색 1312×816 자리표시. ③ **교차 링크** 삽입 0건(미발행 → 발행 시 §9.1) + 02 §9.4 기록. ④ **커밋·푸시** llm-wiki `21f58f02`(01·02·도판의뢰서 + HANDOVER). ⑤ **무진님 결정 대기** 실사 4자리 선택 · 도해 2점 제작 의뢰 · 발행. ⑥ **Voicebox** 설치 파일 `F:\Voicebox_0.5.0_x64-setup.exe` → `/S /D=F:\Voicebox` 무인 설치 · 제거 `uninstall.exe` · 출처 영상 https://www.youtube.com/watch?v=UzzTPBvOmaA(방구석컴퍼니) · **이 PC는 NVIDIA GPU 없음(Intel UHD)** → DirectML·CPU 백엔드.

- 시각(ISO): **`2026-09-22T09:50+09:00`** — **심리학사 6권 집필 2화 완료 — 6-4 제65화 「문화 심리학 — 마음의 다양성」 · 6-5 제66화 「긍정 심리학 — 행복의 과학」(각 18쪽) · 산출물 3종(01·02·도판의뢰서) ×2 완성 · 게이트 22/22·23/23 PASS · DAV ok=28·ok=34 bad=0 · 도판 실사 후보 전량 다운로드 · 교차 링크 0건 + 02 §9.4 기록 · **미발행(무진님 결재 대기)**
  - [자동수집 · Git] 마지막 세션(2026-09-21T21:47+09:00) 이후:
    · homepage master: HEAD 053a7b7 / origin 053a7b7 ·작업트리 변경 5 :: 053a7b7 자동: 카드뉴스 갱신 (2026-09-22) / 1483419 진행 기록: 인계 갱신 (update-handover auto) / a244bd9 진행 기록: 인계 갱신 (update-handover auto) / afe565a 진행 기록: 인계 갱신 (update-handover auto) / 2ac0b13 진행 기록: 인계 갱신 — 35차(B11-1 철학 1권 1·2·3화) 항목 압축 (30KB 게이트 PASS, 29376B) / 1d04403 진행 기록: 인계 갱신 (update-handover auto) / 64abf97 진행 기록: 인계 갱신 — 34차 항목 압축 (30KB 게이트 PASS, 30244B) / ca5e94f 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD 63963f45 / origin 63963f45 ·작업트리 변경 153 :: 63963f45 HANDOVER 39차 — 심리학사 6권 6-4·6-5(제65·66화) 집필 완료 / 0f3ca34c HANDOVER 38차 완결 — 묶음 재발행 14화 집행 완료 + 게이트 조문 2종 보강(19→22항목) / fa9bf7a2 철학사 1권 도판 캡션 §8.3 정본화(G단계) + 교차 링크 종결부호 뒤 한 칸 누락 5건 정정 / 67a52ae8 HANDOVER — 「미발행분 집필(심리 4권 41화~ / 44화~)」 기록 오기 정정 완결(9곳 전량 표기) / f63cf7d6 철학사 1권 4·5화 교차 링크 종결부호 뒤 한 칸 누락 정정(§9.2) + HANDOVER 38차(G단계 제안 · 기록 오기 정정) / 568dd1e8 HANDOVER 37차 — B11-3 결재(소제목 유지·9화 1행 작업
    · harness  main: HEAD 7c2fbb7 / origin 7c2fbb7 ·작업트리 변경 3 :: 7c2fbb7 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / de77a7f docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 0d15c48 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbd0bd6 docs(desktop-handoff): 인계 갱신 — 35차(B11-1 철학 1권 1·2·3화) 항목 압축 (30KB 게이트 PASS, 29376B) / 978a7df docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8331892 docs(desktop-handoff): 인계 갱신 — 34차 항목
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- **상태**: **제65화(6-4)** E-basis **16,417**(목표 16,200~17,100) · 각주 **28**(문서 21종 en19·ja1·ko1) · 단어코너 3(위어드·생태학적 오류·상호의존적 자기) · 도판 **6자리**(실사 4 + 공용 도해 2 — 자작 도해 0) · 게이트 **22/22 PASS** · DAV **ok=28 bad=0** · 본문 sha256 `0b5bd14b…`. **제66화(6-5)** E-basis **16,535** · 각주 **34**(문서 21종 en18·ja1·ko2) · 단어코너 3(학습된 무기력·몰입·쾌락 적응) · 도판 **6자리**(실사 3 + **자작 도해 3 = 제작 의뢰 대상**) · 게이트 **23/23 PASS** · DAV **ok=34 bad=0** · 직접 인용 대조 **64/64** · 본문 sha256 `742eb55b…`. 두 화 모두 `manuscripts/psychology/volume6/`에 산출물 3종 — **미발행**.
- **결정**: ① 집필조건 1~9 준수 — 자료 조사 충분 · 중학생 눈높이(어려운 문어체·은유·난해 단어 배제) · '단어로 의미 찾기' 코너 해요체 금지 · SEP·위키백과 의존 최소화(66화 서사 12절 주체 구성) · 동어 반복 없는 분량 보강 · 실사 후보 전량 다운로드(조건 8) · DAV 등 검증 파이프라인 통과. ② 교차 링크는 **미발행분이라 삽입 0건** — 최초 발행 시 §9.1에 따라 자동 삽입, 02 §9.4에 기록(게이트 통과 조건).
- **다음 작업**: ⓐ **무진님 결재 대기** — 65·66화 도판 실사 선택(`ws_tmp/ep65-research/figures/` · `ws_tmp/ep66-research/figures/` — 접촉 시트·후보 목록·메타) · 66화 **자작 도해 3점 제작 의뢰**(5키 스펙 = `6권_66화_도판의뢰서.md` §2 — 그림1 학습된 무기력 실험·그림4 몰입 도식·그림5 페르마 다섯 요소) · 발행은 **명시 지시 시에만**. ⓑ 미집필 잔여 = **6권 6-6~6-14(제67~75화)**. ⓒ 대기분 — 심리학사 4권 41~47화 · 5권 48~61화 · 6권 62~66화 발행/검토(무진님 몫).

- 시각(ISO): **`2026-09-21T21:47+09:00`** — **각주 재편 B11-3 결재·발행 마감 — ⑴ 9·10화 `## 각주` 소제목 유지 ⑵ 9화 01 선두 작업 메모 1행 삭제 ⑶ 10화 도판 alt 최소 교정 승인 ⑷ 철학사 1권 1~10화 묶음 재발행 완료(사이트-원고 10/10 일치) — F단계 정규화분 전량 반영**
  - [자동수집 · Git] 마지막 세션(2026-09-21T21:23+09:00) 이후:
    · homepage master: HEAD a244bd9 / origin a244bd9 ·작업트리 변경 5 :: a244bd9 진행 기록: 인계 갱신 (update-handover auto) / afe565a 진행 기록: 인계 갱신 (update-handover auto) / 2ac0b13 진행 기록: 인계 갱신 — 35차(B11-1 철학 1권 1·2·3화) 항목 압축 (30KB 게이트 PASS, 29376B) / 1d04403 진행 기록: 인계 갱신 (update-handover auto) / 64abf97 진행 기록: 인계 갱신 — 34차 항목 압축 (30KB 게이트 PASS, 30244B) / ca5e94f 진행 기록: 인계 갱신 (update-handover auto) / 084afa2 진행 기록: 인계 갱신 (update-handover auto) / 32d2296 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD 568dd1e8 / origin 568dd1e8 ·작업트리 변경 126 :: 568dd1e8 HANDOVER 37차 — B11-3 결재(소제목 유지·9화 1행 작업 메모 삭제) + 철학사 1권 1~10화 묶음 재발행 완료(사이트-원고 10/10 일치) / f146f34f 철학사 1권 B11-3 결재 기록 — 9화 소제목 유지·1행 작업 메모 삭제 · 10화 도판 alt 교정 승인 / 51c07340 HANDOVER 36차 최신 표기 해제 (37차 등재에 따른 🔴→✅) / 0635ae81 철학사 1권 각주 재편 B11-3(7·8·9·10화) — F단계 마감 · 9화 각주 39→35 / 2c548163 철학사 1권 각주 재편 B11-2(4·5·6화) — F단계 정규화 · 6화 각주 53→35 / 6e2918db HANDOVER 35차 — B11-1(철학사 1권 1·2·3화) 집행: 게이
    · harness  main: HEAD de77a7f / origin de77a7f ·작업트리 변경 3 :: de77a7f docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 0d15c48 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbd0bd6 docs(desktop-handoff): 인계 갱신 — 35차(B11-1 철학 1권 1·2·3화) 항목 압축 (30KB 게이트 PASS, 29376B) / 978a7df docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8331892 docs(desktop-handoff): 인계 갱신 — 34차 항목 압축 (30KB 게이트 PASS) / a60fd9a docs(desktop-handoff): 인계 갱신 동기 (up
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - **결정**: 무진님 「１。 소제목 유지、 그런데 １행에 포함되어서는 안될 내용이 있음 -> 삭제 ２。 승인 및 발행」. 9·10화 `## 각주` 소제목은 **유지**(A안 — 1~8화와의 레이아웃 차이는 보존). 9화 01 머리에 남아 있던 작업 메모 1행 `43화  전체 재검증  -> 이상 없으면 확정 -> 검토내용 파일 갱신 -> 홈페이지 업로드`는 **삭제** — 발행 스크립트가 원고 파일 **전체**를 `body_markdown`으로 업로드하므로 그대로 두면 공개 본문 **첫 줄**로 노출될 상태였다(현재 공개본이 `# 제9화 …`로 시작하는 것은 재발행 전 구본이기 때문). 삭제 결과는 **커밋본과 byte-identical**(작업트리 잔여분 · `git diff` 없음) — **E-basis 31,395 불변** · 게이트 **20/20 PASS** 재확인. 10화 도판 그림 1 alt 최소 교정은 **승인**(A안 · ⑤ 고아 마커 교정도 확인).
  - **상태**: **철학사 1권 1~10화 묶음 재발행 집행 완료**(2026-09-21 · `node scripts/publish-series-episodes.mjs philosophy 1 2 3 4 5 6 7 8 9 10 --update` · **1회 묶음** · 권 단위 상한 준수 · 미발행 화 0) → ids **8·15·16·17·18·27·29·30·31·32** 전량 갱신 · 검증 `_site_diff.cjs philosophy` **검사 10 / 일치 10 / 불일치 0 / 미발행 0**. **기발행 재발행 대기 0화** · F단계(철학사 1권 10화) 정규화분 전량 사이트 반영. 기록 = 9·10화 `02_검토내용.md` 결재 절(llm-wiki `f146f34f`) · `발행대기-목록.md`(B11-1~3 행 ✅ · 재발행 대기 0화 · 신규 「철학사 1권 묶음 재발행」 절 · B10-1·2 stale ⬜ 정정) · `전체계획.md`(§4 F · §5 B11 · §10 이력) · `교차링크/대장.tsv` 철 1-1~10행 재발행 표기 · 본 HANDOVER 37차 bullet 갱신(llm-wiki `568dd1e8`).
  - **다음 작업**: 미발행분 집필(**심리학사 4권 44화~**) · 별건 후보 — 철학 4화 L3 링크 앞 한 칸 누락 정정 · **G단계**(철학사 1권 도판 캡션 서식 3종 통일).

- 시각(ISO): **`2026-09-21T21:23+09:00`** — **B11-3(철학사 1권 7·8·9·10화) 집행 완료 — F단계 마감 · 9화 각주 39→35 재판정 · 교차 링크 9·10화 보류 해소(세계사 1권 9화) · 게이트 20/20 ×4**
  - **결정**: ① B11 제안 「모두 승인」(판단 4건 ⓐ + ⑤ 확정본 수정 예외)의 **예정 범위대로** 집행 — 추가 결재 없음. ② 9·10화 `## 각주` 소제목은 최소 변경 원칙으로 **유지**(삭제 여부는 무진님 판단 · 제안 §2-1). ③ 10화 도판 alt 최소 교정은 B10-4 선례대로 집행(승인 여부는 제안 §2-2).
  - **상태**: **7화**(정의앞 `---` 신설·인라인 HTML 4→마크다운·정의 31·**20/20**·23,737) · **8화**(정의부 빈 줄 34→0·HTML 3→마크다운·정의 35·**20/20**(FAIL 17/20 해소)·23,074) · **9화**(**각주 39→35 재판정**(4건 제거·02 이관)·`---` 신설·빈 줄 38→0·교차 링크 1건 삽입·정의 35·**20/20**·31,395) · **10화**(`---` 신설·빈 줄 24→0·교차 링크 1건 삽입·도판 alt 최소 교정·고아 마커 교정·정의 25·**20/20**·37,890). **이로써 F단계 완료(철학사 1권 10화 전 화)**. 검증 등급 C(자산 캐시 미보유 → DAV 미적용 · 전거 진위는 §10.1 추적 표 31/35/35/25행과 §5.5·§5.6 대조). 02 검토내용 4본 동기화 · `교차링크/대장.tsv`(철 1-7·8·9·10행 · 상태 보류→삽입완료) · `전체계획.md`(§9 F **10/10 화**) · `발행대기-목록.md`(철학사 1권 1~10화 재발행 대기). 본문 산문 불변. llm-wiki 커밋 `0635ae81` 푸시(01·02 8파일 + HANDOVER 37차).
  - **다음 작업**: ① **발행** — 무진님 명시 트리거 시 철학사 1권 **1~10화 묶어서 재발행**(`philosophy 1 2 3 4 5 6 7 8 9 10 --update` · B11-1~B11-3 1회 묶음). ② 미발행분 집필(심리학사 4권 44화~). ③ 무진님 판단 대기 2건(9·10화 `## 각주` 소제목 유지/삭제 · 10화 도판 alt 교정 승인).
  - [자동수집 · Git] 마지막 세션(2026-09-21T21:00+09:00) 이후:
    · homepage master: HEAD afe565a / origin afe565a ·작업트리 변경 5 :: afe565a 진행 기록: 인계 갱신 (update-handover auto) / 2ac0b13 진행 기록: 인계 갱신 — 35차(B11-1 철학 1권 1·2·3화) 항목 압축 (30KB 게이트 PASS, 29376B) / 1d04403 진행 기록: 인계 갱신 (update-handover auto) / 64abf97 진행 기록: 인계 갱신 — 34차 항목 압축 (30KB 게이트 PASS, 30244B) / ca5e94f 진행 기록: 인계 갱신 (update-handover auto) / 084afa2 진행 기록: 인계 갱신 (update-handover auto) / 32d2296 진행 기록: 인계 갱신 (update-handover auto) / e1551e6 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD 0635ae81 / origin 0635ae81 ·작업트리 변경 126 :: 0635ae81 철학사 1권 각주 재편 B11-3(7·8·9·10화) — F단계 마감 · 9화 각주 39→35 / 2c548163 철학사 1권 각주 재편 B11-2(4·5·6화) — F단계 정규화 · 6화 각주 53→35 / 6e2918db HANDOVER 35차 — B11-1(철학사 1권 1·2·3화) 집행: 게이트 철학사 §10.1 분기 + 3화 정규화(게이트 20/20 ×3) / bc80d8f7 각주 재편 F단계 B11-1 — 철학사 1권 1·2·3화 §10.1 서식 정규화 (게이트 20/20 ×3) / 456a2817 HANDOVER 34차 — B11(F단계 · 철학사 1권) 착수: 실측 + 소배치 3분할 + 판단 요청 4건(결재 대기) / e6e995bc 각주 재편 C단계 마감 — 6권 63화 집행
    · harness  main: HEAD 0d15c48 / origin 0d15c48 ·작업트리 변경 3 :: 0d15c48 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbd0bd6 docs(desktop-handoff): 인계 갱신 — 35차(B11-1 철학 1권 1·2·3화) 항목 압축 (30KB 게이트 PASS, 29376B) / 978a7df docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8331892 docs(desktop-handoff): 인계 갱신 — 34차 항목 압축 (30KB 게이트 PASS) / a60fd9a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 5aefef8 docs(desktop-handoff): 인계 갱신 동기 (up
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-21T21:00+09:00`** — **B11-2(철학사 1권 4·5·6화) 집행 완료 — F단계 두 번째 소배치 · 게이트에 도판 캡션 문단 동어반복 제외 추가(무진님 「승인」·처방 ⓐ)**
  - **결정**: ① 무진님 **「승인」** — 5·6화의 도판 캡션 문단(`![alt]` ↔ `<p style="text-align:center; … color:#8f7d60; …">`)이 alt 텍스트와 **같은 문구**를 쓰도록 정한 2026-08-28 승인 서식이라 구조적 word-12 동어반복이 불가피 → **처방 ⓐ**(게이트에 캡션 문단 동어반복 제외 추가)로 확정 집행. ② 확정본 수정 예외에도 불구하고 원고측 alt·CSS 우회 수정은 **전량 원복** — 원고는 승인본 그대로 보존.
  - **상태**: B11-2 집행 완료 — 4화(정의 블록 앞 `---` 신설·인라인 HTML 1→마크다운·정의 23·**20/20**·E-basis 22,480) · 5화(`---` 신설·인라인 HTML 3→마크다운·정의부 빈 줄 24→0·정의 25·**20/20**·24,227) · 6화(**각주 53→35 재판정**·`---` 신설·정의부 빈 줄 51→0·정의 35·**20/20**·23,581). `gate_common.py`에 `strip_captions()` 반영(심리학사 전 66화 old/new 판정 diff 0 재증명). 동어반복 교정 3자리(6화 델포이 인용 간접화·4화 결구·6화 결구). 02 검토내용 3본 동기화 · 기록 4본(전체계획·대장.tsv·발행대기-목록·제안서 승인 배너) 갱신 · wiki 커밋 `2c548163` 푸시(HANDOVER 36차).
  - **다음 작업**: **B11-3(철학사 1권 7·8·9·10화)** — 9화 각주 39→≤35 재판정 · 8화 FAIL 17/20(정의부 빈 줄 34) · 7·10화 정의 블록 앞 `---` 신설(8화는 이미 1회) · **교차 링크 9·10화 보류 해소**(승인 ③ⓐ — 정규화 후 묶어서 삽입 · epub 업로드는 무진님 트리거 시). 이후 발행은 무진님 명시 지시 시 **철학사 1권 1~6화 묶음 재발행**(`philosophy 1 2 3 4 5 6 --update`).

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
