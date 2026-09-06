# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

## 마지막 갱신

- 시각(ISO): **`2026-09-06T19:17+09:00`** — **23화(2-9) 발행 기록 정리 완료 — 무진님 '23화 확정→발행 완료'를 실서비스까지 교차 확인 후, 02 상태 '확정'→'확정·발행'(ep23·Supabase id=45)·발행 불릿 추가, 최종목차 2-9·2-10 발행 표기(id=45·22,085자 / id=46·24,864자, 2026-09-06 확정), llm-wiki fa3323b4 푸시**
  - [자동수집 · Git] 마지막 세션(2026-09-06T19:06+09:00) 이후:
    · homepage master: HEAD cdab172 / origin cdab172 :: cdab172 진행 기록: 인계 갱신 (update-handover auto) / a2d504e 진행 기록: 인계 갱신 (update-handover auto) / 7d91db1 publish SERIES_MAP ep23·ep24(심리학사 제23화 임상 심리학·제24화 응용 심리학) 추가 — 홈페이지 등록(Supabase id=45·46) / 231d2ba 진행 기록: 인계 갱신 (update-handover auto) / 2d123c5 publish SERIES_MAP ep22(심리학사 제22화 동물 심리학 — 비교와 실험의 시작) 추가 — 홈페이지 등록(Supabase id=44) / fd78c3a publish SERIES_MAP ep21(심리학사 제21화 발달 심리학의 탄생 — 홀과 볼드윈) 추가 —
    · llm-wiki master: HEAD fa3323b4 / origin fa3323b4 ·작업트리 변경 105 :: fa3323b4 2권 9화 제23화 발행 기록 정리 — 02 상태 '확정'→'확정·발행'(ep23·Supabase id=45) 반영·발행 불릿 추가, 최종목차 2-9·2-10 발행 표기(id=45·22,085자 / id=46·24,864자, 2026-09-06 확정) / 08220e24 2권 10화 제24화(응용 심리학) 도판 실사 반영 — 그림1 뮌스터베르크 초상(1900 책 스캔 크롭 1731×2180)·그림3 길브레스 부부(개별 초상 좌우 합성 1869×1156) png placeholder 교체 + 복원포인트 3점, 홈페이지 재발행(ep24·Supabase id=46) / f917fd33 2권 9·10화 제23·24화 확정·발행 — 23화 원고·검토내용·그림1(위트머 초상)·그림2 placeholde
    · harness  main: HEAD afd1c7f / origin afd1c7f ·작업트리 변경 3 :: afd1c7f docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / e6e6410 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 6d06c10 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f691e1a docs(desktop-handoff): 인계 갱신 동기 (인계 파일 상단에 자동 파이프라인 규칙 추가 — 위치 라우팅 개선) / 32c592f fix(scripts): optimize-handover BOM 규약 통일(no-BOM) + 5미러 자체 동기화 — 게이트 불일치 원인 제거 / cafa32d docs(desktop-handoff): 인계 갱
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능
  - 상세: ① 교차 검증 — llm-wiki 2권_9화(01·02·그림1·그림2) f917fd33 커밋·푸시 · homepage ep23 SERIES_MAP 등록(7d91db1) · Supabase id=45=「제23화 임상 심리학의 시작 — 위트머와 심리 클리닉」(심리학사·episode_number=23)·essay.html?id=45 HTTP 200 · 18:18 핸드오버 기록 일치. ② 장부 정리(관례) — 2권_9화_02 상태 줄 'off-peak 대기'→'확정·발행(id=45)', 개요 '발행 절차(대기)'→'발행 확정(완료)' 불릿 교체, 진행 기록에 발행 완료 불릿 추가 · 최종목차 2-9·2-10 발행 표기(2-10은 24화 ep24·id=46 보유분). ③ llm-wiki fa3323b4(2 files) 커밋·푸시 완료.

- 시각(ISO): **`2026-09-06T19:06+09:00`** — **24화(2-10 응용 심리학) 도판 실사 반영·홈페이지 재발행 완료(그림1 뮌스터베르크·그림3 길브레스 — 무진님 확정 2026-09-06)**: png placeholder → 실사 jpg 교체(뮌스터베르크 1900년 《Grundzüge der Psychologie》 책 스캔 크롭 1,731×2,180 / 길브레스 개별 초상 좌우 합성 1,869×1,156 — 확대 없음, 복원포인트 3점) → `publish-series-episodes.mjs psychology 24 --update` 재발행(ep24·Supabase id=46 갱신, essay.html?id=46 HTTP 200) — llm-wiki 커밋 08220e24 푸시 완료**
  - [자동수집 · Git] 마지막 세션(2026-09-06T18:18+09:00) 이후:
    · homepage master: HEAD a2d504e / origin a2d504e :: a2d504e 진행 기록: 인계 갱신 (update-handover auto) / 7d91db1 publish SERIES_MAP ep23·ep24(심리학사 제23화 임상 심리학·제24화 응용 심리학) 추가 — 홈페이지 등록(Supabase id=45·46) / 231d2ba 진행 기록: 인계 갱신 (update-handover auto) / 2d123c5 publish SERIES_MAP ep22(심리학사 제22화 동물 심리학 — 비교와 실험의 시작) 추가 — 홈페이지 등록(Supabase id=44) / fd78c3a publish SERIES_MAP ep21(심리학사 제21화 발달 심리학의 탄생 — 홀과 볼드윈) 추가 — 홈페이지 등록(Supabase id=43) / 526e071 진행 기록: 인계 갱
    · llm-wiki master: HEAD 08220e24 / origin 08220e24 ·작업트리 변경 105 :: 08220e24 2권 10화 제24화(응용 심리학) 도판 실사 반영 — 그림1 뮌스터베르크 초상(1900 책 스캔 크롭 1731×2180)·그림3 길브레스 부부(개별 초상 좌우 합성 1869×1156) png placeholder 교체 + 복원포인트 3점, 홈페이지 재발행(ep24·Supabase id=46) / f917fd33 2권 9·10화 제23·24화 확정·발행 — 23화 원고·검토내용·그림1(위트머 초상)·그림2 placeholder 최초 추가 / 24화 이번 세션 수정(§10 재배치·퍼듀 문장·§12 120년)·전체 재검증·확정 반영 + 도판 placeholder 5건, HANDOVER 갱신 (Supabase id=45·46) / 5541da1a 2권 8화 제22화 원고·도판 추가 — 동물 심리학
    · harness  main: HEAD e6e6410 / origin e6e6410 ·작업트리 변경 3 :: e6e6410 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 6d06c10 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f691e1a docs(desktop-handoff): 인계 갱신 동기 (인계 파일 상단에 자동 파이프라인 규칙 추가 — 위치 라우팅 개선) / 32c592f fix(scripts): optimize-handover BOM 규약 통일(no-BOM) + 5미러 자체 동기화 — 게이트 불일치 원인 제거 / cafa32d docs(desktop-handoff): 인계 갱신 동기 (5미러 정합 복구 — BOM 제거·ep20 미러 지연 해소)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능
  - 상세: 02 '도판 후보' 그림1·그림3 확정·적용 내역 기재(파일·해상도·출처·라이선스·복원포인트) + 01 캡션·이미지 참조 png→jpg 교체. 실사 후보 3종 스테이징·검증(뮌스터베르크 1,740×2,685 / 프랭크 1,362×1,556 / 릴리언 833×1,156 — 전부 PD, 릴리언은 직접 URL로 재확보). 그림2·4·5 개념 도식 placeholder 유지.
  - 다음 작업: ① 24화 개념도 그림2(거리 카드)·그림4(세 물음)·그림5(장교 평정) + 23화 그림2(진단 흐름) 타 AI 의뢰 → 수급 후 `publish-series-episodes.mjs psychology 23 24 --update` 재발행 ② 23화는 이번 세션 도판 무변화(그림1 실사 확보 유지) ③ 제25화(2-11) 이후 집필·검토 재개.
  - 참고: llm-wiki 작업 트리 미커밋 105건(선행 세션 기원) 유지 — 본 세션은 2권_10화 9건만 커밋.

- 시각(ISO): **`2026-09-06T18:18+09:00`** — **심리학 23·24화 확정·홈페이지 발행 완료(2-9 임상·2-10 응용)**: 24화 라인별 수정(§10 전쟁 문단→법정 블록 뒤 재배치·302행 퍼듀 강의 문장·§12 20→120년) 반영 후 전체 재검증 PASS → 이상 없음 확정(02 기록, E-basis 24,849자·각주 24) → 23화(ep23·Supabase id=45)·24화(ep24·id=46) 홈페이지 업로드 완료(이미지 base64 인라인, 도판 placeholder 6건 400×300 신설) — homepage 커밋 7d91db1 · llm-wiki 커밋 f917fd33(23·24화 원고·도판·HANDOVER) 푸시 완료**
  - [자동수집 · Git] 마지막 세션(2026-09-06T12:31+09:00) 이후:
    · homepage master: HEAD 7d91db1 / origin 7d91db1 :: 7d91db1 publish SERIES_MAP ep23·ep24(심리학사 제23화 임상 심리학·제24화 응용 심리학) 추가 — 홈페이지 등록(Supabase id=45·46) / 231d2ba 진행 기록: 인계 갱신 (update-handover auto) / 2d123c5 publish SERIES_MAP ep22(심리학사 제22화 동물 심리학 — 비교와 실험의 시작) 추가 — 홈페이지 등록(Supabase id=44) / fd78c3a publish SERIES_MAP ep21(심리학사 제21화 발달 심리학의 탄생 — 홀과 볼드윈) 추가 — 홈페이지 등록(Supabase id=43) / 526e071 진행 기록: 인계 갱신 (인계 파일 상단에 자동 파이프라인 규칙 추가 — 위치 라우팅 개선) / f97
    · llm-wiki master: HEAD f917fd33 / origin f917fd33 ·작업트리 변경 105 :: f917fd33 2권 9·10화 제23·24화 확정·발행 — 23화 원고·검토내용·그림1(위트머 초상)·그림2 placeholder 최초 추가 / 24화 이번 세션 수정(§10 재배치·퍼듀 문장·§12 120년)·전체 재검증·확정 반영 + 도판 placeholder 5건, HANDOVER 갱신 (Supabase id=45·46) / 5541da1a 2권 8화 제22화 원고·도판 추가 — 동물 심리학 본문 19,403자·도판 6(실물 5 + 그림5 학습 곡선 placeholder) / 8bce792c 2권 8화 제22화 동물 심리학 — 비교와 실험의 시작 확정·발행(ep22·Supabase id=44·본문 19,403자·검토내용·목차 2-8 발행 표기) / 2c702f15 2권 7화 제21화 원고·도판 추가 
    · harness  main: HEAD 6d06c10 / origin 6d06c10 ·작업트리 변경 3 :: 6d06c10 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / f691e1a docs(desktop-handoff): 인계 갱신 동기 (인계 파일 상단에 자동 파이프라인 규칙 추가 — 위치 라우팅 개선) / 32c592f fix(scripts): optimize-handover BOM 규약 통일(no-BOM) + 5미러 자체 동기화 — 게이트 불일치 원인 제거 / cafa32d docs(desktop-handoff): 인계 갱신 동기 (5미러 정합 복구 — BOM 제거·ep20 미러 지연 해소)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능
  - 상세: 24화(2권_10화) 본문 354줄 전체 재검증(구조·각주 24 1:1·도판 5·단어박스 1·연속빈줄 0) 및 §12 '열두 장 카드'↔§3 '12장' 수미상관 일치 확인. 23화·24화 검토내용 상태 줄 '확정 (2026-09-06 · 전체 재검증 통과 · 이상 없음)' 기입.
  - 다음 작업: ① 24화(2-10)·23화(2-9) 도판 수급 후 `publish-series-episodes.mjs psychology 23 24 --update` 재발행(실사 그림1 뮌스터베르크·그림3 길브레스 = 무진님 확정 대기, 개념도 그림2·4·5·23화 그림2 = 타 AI 의뢰 예정) ② 제25화(2-11) 이후 진행 화 집필·검토 재개(작업 트리 2권_11·12·13화 상태 확인).
  - 참고: llm-wiki 작업 트리에 선행 세션 기원 미커밋 변경(철학·1권·2권 1~5화 등 105건)이 남아 있음 — 이번 세션 산출물만 커밋했고 그 외는 손대지 않음.

- 시각(ISO): **`2026-09-06T12:31+09:00`** — 23화(2-9) 펀버거 출처 대조 확정·195행 문구·각주 보강 + 26화(2-12) 도판 실사 수급(모토라 완료·에노 홀 삭제로 4→3 재번호) 처리; 21화·22화 홈페이지 발행(ep21·ep22)은 직전 세션분 커밋 반영 상태
  - [자동수집 · Git] 마지막 세션(2026-09-05T20:01+09:00) 이후:
    · homepage master: HEAD 2d123c5 / origin 2d123c5 :: 2d123c5 publish SERIES_MAP ep22(심리학사 제22화 동물 심리학 — 비교와 실험의 시작) 추가 — 홈페이지 등록(Supabase id=44) / fd78c3a publish SERIES_MAP ep21(심리학사 제21화 발달 심리학의 탄생 — 홀과 볼드윈) 추가 — 홈페이지 등록(Supabase id=43) / 526e071 진행 기록: 인계 갱신 (인계 파일 상단에 자동 파이프라인 규칙 추가 — 위치 라우팅 개선) / f97e9c8 진행 기록: 인계 갱신 (5미러 정합 복구 — BOM 제거·ep20 미러 지연 해소) / b290942 자동: 카드뉴스 갱신 (2026-09-06) / f2bb8e4 진행 기록: 인계 갱신 (20화 확정·발행 ep20·id=42 반영) / 7663bac 
    · llm-wiki master: HEAD 5541da1a / origin 5541da1a ·작업트리 변경 95 :: 5541da1a 2권 8화 제22화 원고·도판 추가 — 동물 심리학 본문 19,403자·도판 6(실물 5 + 그림5 학습 곡선 placeholder) / 8bce792c 2권 8화 제22화 동물 심리학 — 비교와 실험의 시작 확정·발행(ep22·Supabase id=44·본문 19,403자·검토내용·목차 2-8 발행 표기) / 2c702f15 2권 7화 제21화 원고·도판 추가 — 발달 심리학의 탄생(홀·볼드윈) 본문 21,815자·도판 5(그림1·4 실사 초상 + 그림2·3·5 자리표시) / 4ffdbd48 2권 7화 제21화 발달 심리학의 탄생 — 홀과 볼드윈 확정·발행(ep21·Supabase id=43·본문 21,815자·검토내용·목차 2-7 발행 표기) / de77a1b1 HANDOVER 갱신 — 
    · harness  main: HEAD f691e1a / origin f691e1a ·작업트리 변경 3 :: f691e1a docs(desktop-handoff): 인계 갱신 동기 (인계 파일 상단에 자동 파이프라인 규칙 추가 — 위치 라우팅 개선) / 32c592f fix(scripts): optimize-handover BOM 규약 통일(no-BOM) + 5미러 자체 동기화 — 게이트 불일치 원인 제거 / cafa32d docs(desktop-handoff): 인계 갱신 동기 (5미러 정합 복구 — BOM 제거·ep20 미러 지연 해소) / 17e1a6c docs(desktop-handoff): 인계 갱신 동기 (19화 확정·발행 ep19·id=41 + 18화 표 CSS 반영, 2026-09-05)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

## 이번 세션 요약

- **21화·22화 홈페이지 발행(직전 세션분, 커밋 반영 완료)**: ep21(심리학사 제21화 발달 심리학 — 홀·볼드윈, Supabase id=43)·ep22(제22화 동물 심리학, id=44) — homepage 커밋 fd78c3a·2d123c5, llm-wiki 커밋 4ffdbd48·2c702f15·8bce792c·5541da1a. (본 세션은 인계·5거울 반영 차원)
- **① 23화(2권_9화 임상) 마빈 공로 기록 — 펀버거 출처 대조 확정(완료)**:
  - archive.org 페스트슈리프트 원문(`clinicalpsycholo00unse`, 1931)에서 펀버거 장 문장 확인 → 기록자는 **위트머가 아니라 펀버거**(Option A 확정). 각주 [^11] 근거 실재·정확.
  - 본문 195행 "뒤에 기록을 남긴 학자는…" → **"훗날 이 클리닉의 역사를 기록한 학자도…라고 적었다[^11]"**로 다듬어 123행 장치와 평행화(위트머 오독 제거). 각주 [^11]에 영문 원문 인용·장 제목 명기.
  - 보류 추적 파일 `_23화-출처-대조_다음-과제(보류-20260906).md` → "해결" 처리.
  - 23화 상태: 여전히 **무진님 검토·승인 대기**(미확정/미발행) — 수정은 02 확정 시 함께 기록 예정.
- **② 26화(2권_12화 확산) 도판 실사 수급(완료)**:
  - **모토라 초상 ✅ 수급**: Commons `Portrait of Yujiro Motora.jpg`(PD-Japan-oldphoto, 《아동연구》1권3호 1899 게재, 789×1189) → `2권_12화_05_그림3_모토라-초상.jpg` 저장·01 참조 갱신.
  - **에노 홀(프린스턴) Commons·archive.org 부재 확정** → 추천대로 **③안(그림 삭제) 채택**: §9는 본문 서술로만. 도판 **4→3 재번호**(그림3 확산지도→그림2, 그림4 모토라→그림3), 01 도판 참조·캡션·파일명·02(도판 섹션·개요·절 구성·진행기록) 일괄 갱신. E-basis 변동 없음(도판 줄은 측정 제외).
  - 26화 상태: 02 헤더 기준 **산출물 완료 — 무진님 최종 검토 대기**. 남은 일: 개념도 그림1(미국 첫 실험실 지도)·그림2(확산 지도) AI 의뢰, placeholder 파일명 최종 조정(확정 시).

## 확정·상태 변경

- 23화(2-9): 초안 완성·승인 대기 유지 (본문 195행·각주11 수정분 포함 — 미확정).
- 26화(2-12): 산출물 완료·승인 대기 유지 (도판 3점 체계로 정리 — 모토라 실사 수급 + 에노 홀 삭제).

## 다음 작업

- 무진님 검토: 23화(위 수정 반영 검토·승인), 26화(최종 검토·확정).
- 26화 개념도 그림1·그림2 (AI 의뢰) 제작 → placeholder 파일명 최종 조정(확정 시).
- Standing: 21화 그림2·3·5 / 22화 그림5 / 19화 그림1·3 / 20화 그림2~4 placeholder → AI 개념도 제작(별도 AI) 후 파일 교체·재업로드.
- llm-wiki 작업트리: 2권_9화(01·02·그림1)·2권_11화·2권_12화(01·02·그림3)·보류 추적 파일 2종 등 다수 미커밋(미확정 화 관례 유지) — 확정·발행 시 커밋.

- 시각(ISO): **`2026-09-05T20:01+09:00`** — **09-05 세션: 20화(2-6 지능의 측정 — 비네와 IQ) 무진님 승인 → 확정·발행(ep20·id=42) — 본문 24,933자·도판 4(그림1 비네 초상 실사 + 그림2~4 자리표시)·각주 63, llm-wiki 6b129542·homepage 7663bac 푸시.**
  - [20화 확정 ✅ → 발행 절차 완료] 본문 **24,933자**·12절·각주 63(마커↔정의 1:1)·도판 4
    · **llm-wiki**: 02_검토내용 상태 ✅ 확정·발행 반영(2026-09-05·ep20·id=42·24,933자) + 목차 v1 2-6 "20p → ✅ 발행(id=42·24,933자, 2026-09-05 확정)" → 커밋 **6b129542**(7 files: 2권_6화_01~06 + 최종목차), push fe75e1eb..6b129542 — 타 작업트리(1권 13·14화 도판 정정 등)는 미커밋 유지
    · **homepage**: publish-series-episodes.mjs SERIES_MAP ep20 추가 → 커밋 **7663bac**, push 80aa18b..7663bac (GH Pages 자동 배포)
    · **Supabase**: essays INSERT **id=42**·심리학사 **ep20** — 도판 4 base64 인라인(그림1 비네 초상 실사; 그림2~4는 자리표시 816B — 실물(AI 개념 도식) 제작 후 파일 교체·재업로드) · series·episode_number=20 비-null 확인(시리즈 그리드 포함) · essay.html?id=42 HTTP 200
  - [자동수집 · Git] 마지막 세션(2026-09-05T07:18+09:00) 이후:
    · homepage master: HEAD 7663bac / origin 7663bac(푸시 완료) :: 7663bac 심리학사 ep20(제20화 지능의 측정 — 비네와 IQ의 탄생) SERIES_MAP 등록 · 홈페이지 발행 / (progress.md 미러 동기 커밋 예정)
    · llm-wiki master: HEAD 6b129542 / origin 6b129542(푸시 완료) ·작업트리 변경(1권 13·14화 도판 정정 등) 미커밋 유지 :: 6b129542 2권 6화 제20화 지능의 측정 — 비네와 IQ의 탄생 확정·발행(ep20·Supabase id=42·본문 24,933자·검토내용·목차 발행 표기)
    · harness main: HEAD 17e1a6c / origin 17e1a6c(푸시 완료) :: 17e1a6c docs(desktop-handoff) 인계 갱신 동기(19화 ep19·id=41) — **ep20 미러 동기는 Desktop\Harness 두 파일 갱신 → update-handover auto로 후행 동기·커밋 예정**
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a(변경 없음)
  - [다음 작업] 20화 그림2~4·19화 그림1·3 자리표시 → AI 개념도 제작 시 파일 교체·재업로드 · 21화(2-7 홀·볼드윈) 검토 → 확정 → 발행 · 철학사 11화(아리스토텔레스) 집필

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
1. **심리학사 20화(2-6 지능의 측정 — 비네와 IQ) ✅ 확정·발행(2026-09-05, ep20·id=42, 24,933자)** — 도판 그림2~4 자리표시 → **AI 개념도 제작 시 파일 교체·재업로드**(19화 그림1·3 자리표시와 동일 선례)
2. **심리학사 21화(2-7 발달 심리학 — 홀과 볼드윈) 검토 → 확정 → 발행** — 2권_7화 원고·검토내용 작업트리에 있음(미커밋)
3. **철학사 11화(아리스토텔레스 — 학문의 제왕, 1-13) 집필**
4. **(도판 후속) 19화 그림1·3 · 20화 그림2~4 AI 개념도 제작 시 교체·재업로드**

## 하네스 메모
- **브리핑 축구 일정 (08-14):** 카테고리 `축구 스타`(손흥민·이강인) · `##7 축구 일정`(LAFC 18966·아틀레티코 1068·한국 451) — ESPN scoreboard `site.api.espn.com/apis/site/v2/sports/soccer/{usa.1|esp.1|fifa.world}/scoreboard?dates=YYYYMMDD-YYYYMMDD`(하이픈 없음·KST=UTC+9·EDT 버킷 URL[오늘-1,오늘+6]→KST 필터) · 카드 `cat-football`+`dot-football`(주황) · TheSportsDB/KFA 보조
- **스킬화·개인화·llm-wiki (08-13):** ① `harness\skills\`(규율+카드: supabase-management-api·github-pages-cache) ② 브리핑 `##6 개인 컨텍스트` — openclaw `buildPersonalSection()`(F:\wiki\wiki\personal\) ③ 개인 위키 `F:\wiki\wiki\personal\` · 카드 `cat-personal`(금색 #c4a87a)
- **회원 4단계 역할 (08-13):** member(0)<staff(1)<manager(2)<admin(3) · `setup_members.sql` 통째 실행(멱등, `to_old` 금지 — pg-meta 미지원) · test3/test4=staff · role변경=admin만 · 회원관리=manager 이상, Diary=admin만
- **인계 사본·아카이브:** `Desktop\Harness\progress.md`·`handover-progress.md`와 `project\homepage\progress.md`·harness `docs\desktop-handoff\` 미러 동기 · 30KB 초과 시 `harness\scripts\optimize-handover.ps1`(ISO 마커·최근 5세션·테일 보존)
- **게발이 브리핑 자동 발행:** `harness\scripts\publish-briefing.ps1` — 인계 읽 즉시 실행(멱등 스킵) · openclaw `npm run dev`→`generate-cardnews.ps1`→homepage 커밋→GH Pages 200 · 로그 `F:\backup\briefing-YYYY-MM-DD.log` · 옵션 `-Date`/`-Force`
- **철학사 1권:** 1~10화 확정·업로드 완료(id 8·15·16·17·18·27·29·30·31·32) · 11화(아리스토텔레스·1-13) 집필 예정 · 업로드 스킬 `openclaw-local-mvp\.claude\skills\philosophy-essay-upload\SKILL.md`
- **심리학사 1권:** 1~14화 확정·업로드 완료(id 12·13·14·19·20·21·22·23·33·34·36) · 집필지침 §6.2 분량표·목차 갱신
- **심리학사 2권:** 15화(2-1 분트) **✅ 확정·발행(2026-09-01, id=37)** · 16화(2-2 구조주의) **✅ 확정·발행(2026-09-02, ep16·id=38)** · 17화(2-3 기능주의) **✅ 확정·발행(2026-09-04, ep17·id=39, 19,235자 — 사실 수정 4건·도판 등장순 재배치/재번호·단어 코너 §5 이동, placeholder 3종)** · 18화(2-4 의식의 흐름) **✅ 확정·발행(2026-09-04, ep18·id=40, 22,310자 — 교정 20건·오버톤 각주 신설 총 18·§8 제목/§6 대구 재작성, placeholder 3종)** · 19화(2-5 게슈탈트) **✅ 확정·발행(2026-09-05, ep19·id=41, 26,831자 — 실사 3판[세 초상 합성·루빈·술탄]+자리표시 2[그림1·3=AI 개념도 예정])** · 20화(2-6 비네) **✅ 확정·발행(2026-09-05, ep20·id=42, 24,933자 — 그림1 비네 초상 실사 + 그림2~4 자리표시)** · 21화(2-7 홀·볼드윈) **무진님 검토 대기(원고·검토내용 작업트리 미커밋)**
- **Claude Code 통로 (DeepSeek 공식 직판 — 최신 실측 2026-09-03):** 실행 `OneDrive\바탕 화면\AI\Claude-Code-DeepSeek.cmd` → `~\.claude\start-claude-deepseek.ps1` → **`api.deepseek.com/anthropic`**(deepseek-v4-flash, opus 슬롯 deepseek-v4-pro) · 키 `~\.claude\deepseek-api-key.local`(sk-...) · `/login` 금지 · VS Code 자동실행 버그해결: cmd title 제거+claude.exe 직접 실행 · **⚠️ 08-31 기록의 'DeepInfra 직결'(start-claude-deepinfra.ps1·api.deepinfra.com/anthropic, 잔액 $5)은 현재 미사용(구식)** — 런처·키는 롤백용 보존
- **컨텍스트 캐시 규약 (09-04, 모델 무관 적용):** 모든 세션 준수 · 원문 `OneDrive\바탕 화면\AI\DeepSeek-컨텍스트-캐시-규약.md`(진입점 옆 CLAUDE.md 자동 로드) · 요지 ① 자동 압축 유발 금지·한 작업=한 세션(프리픽스 보존) ② 같은 파일 재-read 금지·구간 read·도구는 한 턴에 묶기 ③ 출력은 1회·파일로 직접 기록·수정은 해당 부분만 patch(전체 재생성 금지) ④ 참조 머리 고정: 지침→공통 자료→작업 지시, 시각/세션ID 등 가변 텍스트 머리 배제 ⑤ 검증은 로컬(measure.py/verify.py) — 이유: DeepSeek 자동 프리픽스 캐시(반복 앞=히트 저가, 매 턴 append=미스, 출력=비캐시 고단가)
- **승인 기준 (09-04, 모델 무관):** 지시 = 사전승인 — 지시받은 목표의 필수 하위 단계(원고 파일 수정·검증 실행·연속 프로세스 중간 단계)는 되묻지 않고 실행 · 되묻는 건 범위 밖 새 작업 / 파괴 작업 / 외부 공개·비용 / 지침·설정 변경 / 보안 경계뿐(1회 통합) · 중간 도구 거부 = 작업 거부 아님(우회 후 1회 보고) · 예외: 자동 진행 중이라도 상태 불일치·범위 침범·의도치 않은 삭제/덮어쓰기·게이트 상태 이상·외부 영향 급증 시 **진행 전 경고**(가역·범위 안이면 경고 후 계속, 아니면 경고+1회 확인) · 상세 `OneDrive\바탕 화면\AI\승인-기준.md`
- **Git tip:** LLM Wiki `origin/master` · homepage `origin/master`(`project\homepage\progress.md` 동기) · harness `origin/main`(`docs\desktop-handoff\` 미러) · openclaw `origin/main` · CRLF `M`은 `git diff HEAD --stat` 확인
- **(완료 참조 — 상세는 아카이브·저장소):** 4개 PDF 파이프라인(피그마·예일대지성사·AI Agent·듀얼브레인 → `G:\내 드라이브\Claude\`) · 철학사수업1 1~11부 교정 → `F:\wiki\raw\`(2c2f0775·de65a7e4) · HWP→TXT `harness\scripts\convert-hwp-to-txt.ps1`(pyhwp) · 카드뉴스·홈페이지 DESIGN.md 1~3단계(`homepage\admin\cardnews\DESIGN.md`→style.css :root→CLAUDE.md) · openclaw-local-mvp(축구/개인 카드) · confidence:low 0 · Google OAuth 토큰 만료(refreshAccessToken)
