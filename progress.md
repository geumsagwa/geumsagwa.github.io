# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-16T09:51+09:00`** — 제59화(5-12 사회 인지 — 귀인과 태도) 집필 완성(E-basis **14,610**·각주 35·단어코너 3·도판 5자리 배치, 미커밋·미발행) · 제60화(5-13 심리 치료의 확장 — 가족과 동네로 나간 마음 돌봄) 집필 완성(E-basis **13,593**·도판 5자리 확정) · **도해 팔레트 일괄 정정**(57·58·59·60화 도해 6점 — 시리즈 공통 팔레트(미색 #f6f1e6+남색 #2456a6+주황 #e08a2e)로 도판의뢰서 색상 키 정정, 재제작 프롬프트 작성)
- [확정·상태] 59화 산출물 3종 완성(01·02·도판의뢰서) — 게이트 23/23 PASS·DAV 35/35(인용 62)·candidates 수치 57+인용 62 전부 FOUND. 도판 5자리: 그림1(도형 실험)·그림2(세 가지 정보)·그림5(달러 실험) 도해 + 그림3(니스벳)·그림4(여우와 신 포도) 실사 배치. 60화 산출물 3종 완성 — 게이트 23/23 PASS·DAV 31/31·도판 5자리(실사 4 + 도해 1) 확정.
- [도해 팔레트 정정] 무진님 지적("외주 제작 도판에 배경색을 안 넣었네?"·"색상도 이전 도판들과 달라") → 실측 결과 48~56화 도해 17점은 시리즈 공통 팔레트(미색 배경), **57화 이후 6점은 흰 바탕(#ffffff)·검정/회색으로 어긋남**(57화 그림5·58화 그림3·59화 그림1·2·5·60화 그림4). 도판의뢰서 4종 색상 키를 시리즈 팔레트로 정정 + '공통 사항(개념도)' 삽입, 검토내용 4종에 정정 기록, 재제작 프롬프트 `ws_tmp/palette-fix/도해_팔레트_재제작_프롬프트.md`·상태 `ws_tmp/palette-fix/작업상태.md`. 1~4권은 문제 없음.
- [다음] 무진님이 위 프롬프트로 도해 6점 재외주 → 같은 파일명 교체 → 표기 복원 + 게이트 재실행. 이어 5-14(제61화) 집필.
  - [자동수집 · Git] 마지막 세션(2026-09-15T21:59+09:00) 이후:
    · homepage master: HEAD 0fec457 / origin 0fec457 ·작업트리 변경 1 :: 0fec457 자동: 카드뉴스 갱신 (2026-09-16) / 60414d2 진행 기록: 인계 갱신 (update-handover auto) / bc1a694 진행 기록: 인계 갱신 (update-handover auto) / 10ce477 진행 기록: 인계 갱신 (update-handover auto) / be9f0e9 진행 기록: 인계 갱신 (update-handover auto) / e517eb3 진행 기록: 인계 갱신 (update-handover auto) / 7e35759 진행 기록: 인계 갱신 (update-handover auto) / 002e062 자동: 카드뉴스 갱신 (2026-09-15)
    · llm-wiki master: HEAD d6c0eba7 / origin d6c0eba7 ·작업트리 변경 201 :: d6c0eba7 HANDOVER: 제59화(5-12 사회 인지 — 귀인과 태도) 집필 완성 반영 / 7bce4535 HANDOVER: 제58화 실사 도판 4점 확정·배치 반영 / a5e7d5a3 제58화 실사 도판 4점 확정 배치 — 지팀바도·모집 광고·감옥 장면·마슬라흐 / caee80df HANDOVER: 제58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 반영 / 440c0c24 5권 58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 / a5179f01 HANDOVER: 맨 위에 다음 세션 TL;DR 추가 — 인수 시 첫 1KB만 읽어도 재개 가능 / 0a0165dd 5권 57화(5-10 사회 심리학의 부상 — 애슈와 밀그램) 집필 완성 + HANDOVER 갱신
    · harness  main: HEAD 127bcc7 / origin 127bcc7 ·작업트리 변경 3 :: 127bcc7 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 7674d2f fix(scripts): 인계 파이프라인 cp949 출력 예외 및 30KB 크기 계산 오차 수정 / c029897 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 9f10a38 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 5206e0a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 6f94ccc docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ecafe98 doc
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-15T21:59+09:00`** — **인계 파이프라인 스크립트 버그 2건 수정 + llm-wiki HANDOVER 푸시**: ① **원고 인계문서 `F:\wiki\HANDOVER.md` 59화 기준 갱신 커밋 `d6c0eba7`을 origin/master로 푸시**(HEAD=origin 일치). ② **인계 파이프라인 버그 2건 수정·커밋 harness `7674d2f`** — (a) cp949 콘솔에서 `—` print 시 `UnicodeEncodeError`로 스크립트가 죽어 **게이트 FAIL 직후 아카이브·커밋·초안 정리 누락**(게이트 출력이 비어 보인 원인) → `update-handover.py`·`progress-file-check.py` stdout/stderr를 UTF-8로 재설정 + 게이트 자식에 `PYTHONIOENCODING=utf-8` 전달, (b) 30KB 판정을 **LF→CRLF 변환 후 실제 기록 바이트**로 정정(변환 전 30,674B 보고 vs 실제 30,791B → 쓰기 후에야 게이트 FAIL). ③ 검증: `—` 출력 재현 테스트 통과 · 크기 예측 31,002B = 실제 31,002B 일치 · 게이트 FAIL 경로(51,689B 시험) 정상 출력 · 게이트 재실행 PASS(5개 미러 28,916B 바이트 동일). ④ 하네스 메모에 수정 내역 기록. **다음 작업 = 5-13(제60화) 「심리 치료의 확장」(14p) 집필**(무진님 착수 지시 대기).
  - [자동수집 · Git] 마지막 세션(2026-09-15T21:53+09:00) 이후:
    · homepage master: HEAD bc1a694 / origin bc1a694 ·작업트리 변경 1 :: bc1a694 진행 기록: 인계 갱신 (update-handover auto) / 10ce477 진행 기록: 인계 갱신 (update-handover auto) / be9f0e9 진행 기록: 인계 갱신 (update-handover auto) / e517eb3 진행 기록: 인계 갱신 (update-handover auto) / 7e35759 진행 기록: 인계 갱신 (update-handover auto) / 002e062 자동: 카드뉴스 갱신 (2026-09-15)
    · llm-wiki master: HEAD d6c0eba7 / origin d6c0eba7 ·작업트리 변경 176 :: d6c0eba7 HANDOVER: 제59화(5-12 사회 인지 — 귀인과 태도) 집필 완성 반영 / 7bce4535 HANDOVER: 제58화 실사 도판 4점 확정·배치 반영 / a5e7d5a3 제58화 실사 도판 4점 확정 배치 — 지팀바도·모집 광고·감옥 장면·마슬라흐 / caee80df HANDOVER: 제58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 반영 / 440c0c24 5권 58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 / a5179f01 HANDOVER: 맨 위에 다음 세션 TL;DR 추가 — 인수 시 첫 1KB만 읽어도 재개 가능 / 0a0165dd 5권 57화(5-10 사회 심리학의 부상 — 애슈와 밀그램) 집필 완성 + HANDOVER 갱신
    · harness  main: HEAD 7674d2f / origin 7674d2f ·작업트리 변경 3 :: 7674d2f fix(scripts): 인계 파이프라인 cp949 출력 예외 및 30KB 크기 계산 오차 수정 / c029897 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 9f10a38 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 5206e0a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 6f94ccc docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ecafe98 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-15T21:53+09:00`** — **인계문서 정비 — 제59화 기준 반영 완료**: ① **원고 인계문서 `F:\wiki\HANDOVER.md` 59화 기준 갱신**(TL;DR 「현재 위치」·「다음 작업 = 5-13 심리 치료의 확장 14p」·「대기(무진님)」·「현재 상태」5권 줄·「다음 세션」1·2번·「갱신 노트」2026-09-15(3차) 신설) → **llm-wiki 커밋 `d6c0eba7`**(HANDOVER.md 단독 지정 커밋, 원고 3종은 비추적 유지 · **미푸시** origin 7bce4535). ② **배치본 재검증 재실행 — 전부 이상 없음**: 게이트 **23/23 PASS** · E-basis **14,604** · DAV **35/35**(인용 조각 62) · candidates 수치 57 + 인용 62 FOUND · 본문 sha256 `c7e39b56…`(draft01.md와 완전 일치). 검증 3종 도구 = `ws_tmp\ep59-research\_gate59.py`·`_dav59.py`·`_cand59.py`. ③ 세션 시작 시 읽을 인계문서 안내 정리 — 원고 재개는 `F:\wiki\HANDOVER.md` 맨 위 TL;DR(약 1KB), 진행 인계는 `Desktop\Harness\handover-progress.md`(5개 미러 동일, 27,761B — 30KB 근접). **다음 작업 = 5-13(제60화) 「심리 치료의 확장」(14p) 집필**(무진님 착수 지시 대기).
  - [자동수집 · Git] 마지막 세션(2026-09-15T21:45+09:00) 이후:
    · homepage master: HEAD 10ce477 / origin 10ce477 ·작업트리 변경 1 :: 10ce477 진행 기록: 인계 갱신 (update-handover auto) / be9f0e9 진행 기록: 인계 갱신 (update-handover auto) / e517eb3 진행 기록: 인계 갱신 (update-handover auto) / 7e35759 진행 기록: 인계 갱신 (update-handover auto) / 002e062 자동: 카드뉴스 갱신 (2026-09-15)
    · llm-wiki master: HEAD d6c0eba7 / origin 7bce4535 ·작업트리 변경 176 :: d6c0eba7 HANDOVER: 제59화(5-12 사회 인지 — 귀인과 태도) 집필 완성 반영 / 7bce4535 HANDOVER: 제58화 실사 도판 4점 확정·배치 반영 / a5e7d5a3 제58화 실사 도판 4점 확정 배치 — 지팀바도·모집 광고·감옥 장면·마슬라흐 / caee80df HANDOVER: 제58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 반영 / 440c0c24 5권 58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 / a5179f01 HANDOVER: 맨 위에 다음 세션 TL;DR 추가 — 인수 시 첫 1KB만 읽어도 재개 가능 / 0a0165dd 5권 57화(5-10 사회 심리학의 부상 — 애슈와 밀그램) 집필 완성 + HANDOVER 갱신
    · harness  main: HEAD 9f10a38 / origin 9f10a38 ·작업트리 변경 3 :: 9f10a38 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 5206e0a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 6f94ccc docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ecafe98 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-15T21:45+09:00`** — **제59화(5-12 사회 인지 — 귀인과 태도, 16p) 집필 완성**: 산출물 3종(01 본문·02 검토내용·도판의뢰서)을 `manuscripts/psychology/volume5/`에 배치(미커밋·미발행, 무진님 검토 대기). E-basis 14,604·각주 35·단어코너 3·게이트 23/23 PASS·DAV 35/35(인용 조각 62)·candidates 수치 57+인용 62 전부 FOUND. 본문 sha256 `c7e39b561a2518d849fe499fc4e63b71f922d4026fcd2e76cdf1d7c992034f14` · candidates.tsv sha256 `c38d63ac0509b757513084fbefc14acfea8838cc796ce9b5f4c19914754168ab`. 도판 5자리 확정 — 그림1·3·5는 도해(도판의뢰서), **그림2(하이더)·그림4(페스팅거)는 공용에 자유 라이선스 초상이 없어 실사 후보 16종을 내려받아 접촉 시트 `ws_tmp\ep59-research\figures\contact_sheet_ep59.png` 작성, 무진님 선택 대기**(대안: 니스벳·1983 학회 단체·여우와 신 포도). 자세한 내역은 `5권_59화_02_검토내용.md` ③·⑤·⑥.
  - [자동수집 · Git] 마지막 세션(2026-09-15T20:47+09:00) 이후:
    · homepage master: HEAD be9f0e9 / origin be9f0e9 ·작업트리 변경 1 :: be9f0e9 진행 기록: 인계 갱신 (update-handover auto) / e517eb3 진행 기록: 인계 갱신 (update-handover auto) / 7e35759 진행 기록: 인계 갱신 (update-handover auto) / 002e062 자동: 카드뉴스 갱신 (2026-09-15)
    · llm-wiki master: HEAD 7bce4535 / origin 7bce4535 ·작업트리 변경 176 :: 7bce4535 HANDOVER: 제58화 실사 도판 4점 확정·배치 반영 / a5e7d5a3 제58화 실사 도판 4점 확정 배치 — 지팀바도·모집 광고·감옥 장면·마슬라흐 / caee80df HANDOVER: 제58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 반영 / 440c0c24 5권 58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 / a5179f01 HANDOVER: 맨 위에 다음 세션 TL;DR 추가 — 인수 시 첫 1KB만 읽어도 재개 가능 / 0a0165dd 5권 57화(5-10 사회 심리학의 부상 — 애슈와 밀그램) 집필 완성 + HANDOVER 갱신
    · harness  main: HEAD 5206e0a / origin 5206e0a ·작업트리 변경 3 :: 5206e0a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 6f94ccc docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ecafe98 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-15T20:47+09:00`** — **제58화 실사 도판 4점 확정·배치(`a5e7d5a3`)** — 무진 선택(그림1 지팀바도·그림2 모집광고·그림4 감옥 장면·그림5 마슬라흐. 넷 다 위키미디어 공용 CC BY-SA 4.0, 저작자 표시 필요)을 `manuscripts/psychology/volume5/`의 본문 참조 이름으로 배치. 출처·라이선스·URL은 §8.5에 따라 캡션이 아니라 도판의뢰서 §3·검토내용 ③에 기록. §8.5 해상도(권장 1,600~2,000·최소 1,200·800 미만 사용 자제) 대비 그림1 1920·그림5 1648 충족, 그림4 750·그림2 286은 원본 자체가 그 크기라 미달로 기록(확대하지 않음). 재검증: 게이트 23/23 PASS·DAV ok=33 bad=0·candidates 수치 33+인용 36 FOUND. HANDOVER 갱신 `7bce4535`. 남은 것: 그림3(감옥 배치 개념도) 외주 제작.
  - [자동수집 · Git] 마지막 세션(2026-09-15T20:20+09:00) 이후:
    · homepage master: HEAD e517eb3 / origin e517eb3 ·작업트리 변경 1 :: e517eb3 진행 기록: 인계 갱신 (update-handover auto) / 7e35759 진행 기록: 인계 갱신 (update-handover auto) / 002e062 자동: 카드뉴스 갱신 (2026-09-15)
    · llm-wiki master: HEAD 7bce4535 / origin 7bce4535 ·작업트리 변경 173 :: 7bce4535 HANDOVER: 제58화 실사 도판 4점 확정·배치 반영 / a5e7d5a3 제58화 실사 도판 4점 확정 배치 — 지팀바도·모집 광고·감옥 장면·마슬라흐 / caee80df HANDOVER: 제58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 반영 / 440c0c24 5권 58화(5-11 스탠퍼드 감옥 실험 — 지팀바도) 집필 완성 / a5179f01 HANDOVER: 맨 위에 다음 세션 TL;DR 추가 — 인수 시 첫 1KB만 읽어도 재개 가능 / 0a0165dd 5권 57화(5-10 사회 심리학의 부상 — 애슈와 밀그램) 집필 완성 + HANDOVER 갱신
    · harness  main: HEAD 6f94ccc / origin 6f94ccc ·작업트리 변경 3 :: 6f94ccc docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ecafe98 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

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
