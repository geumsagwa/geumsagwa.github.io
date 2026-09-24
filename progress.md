# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-25T07:05+09:00`** — 이번 세션: **70화 그림4를 2차본(49ace0b1…, 1,077,061 B)으로 복원·확정 — 도해 셋(그림4·5·7) 마무리.** 3차본은 새 편차 3건(스펙에 없는 주황 부채꼴 · 무게 표시가 빈 남색 사각형 · 출력 칸 흰 바탕)으로 미채택. 무진님 지적으로 **기록 정정 1건** — 무게 주황 사각형 셋은 **모두 '무게' 라벨**이 있고(첫째·둘째는 사각형 위, 셋째는 아래), 글자 없이 떠 있는 요소는 중심점 오른쪽 주황 직사각형(122×64 px) 하나뿐 → 그 자리도 넘어감(결격 아님). 도판의뢰서(§1 표·§2 상태·§3 기록)와 02 검토내용(③⑥⑦·12항·세션 기록)에서 '라벨 없는 주황 사각형' 표현을 '중심점 오른쪽 글자 없는 주황 직사각형'으로 정정. 게이트 70화 **23/23 PASS**(E-basis 19,992 불변) · DAV ok=42 bad=0. 커밋 bdbb2890 푸시 완료. **미발행 유지.**
  - [자동수집 · Git] 마지막 세션(2026-09-25T06:41+09:00) 이후:
    · homepage master: HEAD d9ec8a4 / origin d9ec8a4 ·작업트리 변경 5 :: d9ec8a4 진행 기록: 인계 갱신 (update-handover auto) / 1834dbe 자동: 카드뉴스 갱신 (2026-09-25) / ad83d9f 진행 기록: 인계 갱신 (update-handover auto) / f7dc93c 진행 기록: 인계 갱신 (update-handover auto) / 9c086ce 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD bdbb2890 / origin bdbb2890 ·작업트리 변경 156 :: bdbb2890 70화 그림4 2차본 복원·확정 — 도해 셋 마무리 (라벨 오독 정정) / 8ddc40a3 HANDOVER — 46차 7차: 70화 도해 3차 검증(그림7 확정 · 그림5 복원 · 그림4 판단 대기) / 37139747 70화 도해 3차 제작본 검증 — 그림7 확정 · 그림5 복원 · 그림4 검증(판단 대기) / 9568062d HANDOVER — 46차 세션 마감(70화 도해 외주본 처리) + 마지막 갱신일 2026-09-25 / 202107c0 HANDOVER — 46차 6차: 70화 도해 3차 재요청(라벨 없는 상자 둘) · 그림5 확정 / e7ff16c1 70화 도해 — 라벨 없는 상자 둘만 3차 재요청 · 그림5 확정 (무진님 「다」) / a88003b2 HANDOVER — 46차 
    · harness  main: HEAD 33de30a / origin 33de30a ·작업트리 변경 3 :: 33de30a docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 152a3dd docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 40cbef4 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / d0a7c79 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T06:41+09:00`** — ✅ 70화 도해 3차 제작본 검증·처리(무진님 「그림4 검증 · 그림5는 복원 · 그림7은 승인」): ① **3차 도착** = 그림5(05:46)·그림7(05:48)이 먼저, 그림4(06:37)가 나중 — 셋 다 전면 재생성(2차 대비 픽셀 변경 136,307 / 816,973 / 275,720). ② **그림7 = 승인·확정** — 되돌아가는 화살표 끝의 안이 빈 남색 사각형이 완전히 제거됨을 픽셀 확대로 확인(주황 성분 = 화살표·주황 글자뿐) · 네 기준 통과. ③ **그림5 = 복원** — 예상 밖 3차본(안내 글씨가 가로로 바뀜)은 미채택, 지시대로 2차 확정본(`c80c2c7e…`)을 슬롯에 되돌려 확정 유지. ④ **그림4 = 검증(판단 대기)** — 요청 사유(라벨 없는 주황 사각형)는 해소됐으나 재생성으로 새 편차 3건(중심점 뒤 주황 부채꼴 · 무게 표시가 테두리만 있고 안이 빈 남색 사각형 · 출력 칸이 흰 바탕+남색 테두리)이 생김. ⑤ **검증** = 게이트 70화 **23/23 PASS**(E-basis 19,992 불변). ⑥ **커밋** llm-wiki **`37139747`**(4건 = 70화 02·도판의뢰서 + PNG 그림4·그림7) push. **미발행.** **다음 = 그림4 판단(재요청 or 확정) 대기, 또는 6-11(제72화) 집필.** 잔존 이월 = 69화 02 검토내용 화번호 오기(`6권 66화` → 실은 67화).
  - [자동수집 · Git] 마지막 세션(2026-09-25T00:09+09:00) 이후:
    · homepage master: HEAD 1834dbe / origin 1834dbe ·작업트리 변경 5 :: 1834dbe 자동: 카드뉴스 갱신 (2026-09-25) / ad83d9f 진행 기록: 인계 갱신 (update-handover auto) / f7dc93c 진행 기록: 인계 갱신 (update-handover auto) / 9c086ce 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD 37139747 / origin 37139747 ·작업트리 변경 156 :: 37139747 70화 도해 3차 제작본 검증 — 그림7 확정 · 그림5 복원 · 그림4 검증(판단 대기) / 9568062d HANDOVER — 46차 세션 마감(70화 도해 외주본 처리) + 마지막 갱신일 2026-09-25 / 202107c0 HANDOVER — 46차 6차: 70화 도해 3차 재요청(라벨 없는 상자 둘) · 그림5 확정 / e7ff16c1 70화 도해 — 라벨 없는 상자 둘만 3차 재요청 · 그림5 확정 (무진님 「다」) / a88003b2 HANDOVER — 46차 5차: 70화 도해 2차 제작본 재검토(스펙 잔여 3건 · 판단 대기) / c3f36d47 70화 도해 2차 제작본 3점 수령·재검토 (스펙 잔여 3건 · 판단 대기)
    · harness  main: HEAD 152a3dd / origin 152a3dd ·작업트리 변경 3 :: 152a3dd docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 40cbef4 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / d0a7c79 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T00:09+09:00`** — **[세션 마감]** 70화 도해 외주본 처리로 마감 — ① 2차 제작본 3점 수령·재검토(커밋 `c3f36d47`) ② 무진님 「다」로 **라벨 없는 상자 둘만 3차 재요청 · 그림5 확정(2026-09-25) · 그림4·그림7 3차 대기**(커밋 `e7ff16c1`) ③ 게이트 70화·71화 **23/23 PASS**(19,992 / 12,714 불변) · DAV ep70 ok=42 / ep71 ok=24 · 인계 apply ×2(30,286B · 26,298B PASS) · HANDOVER 마감 항 + 6-9·6-10 도해 상태 추가 ④ **미발행 유지** · 다음 착수점 = 70화 3차 제작본 대조 또는 6-11(제72화) 집필 · **잔존 이월 = 69화 02 화번호 오기(66화→67화)**
  - [자동수집 · Git] 마지막 세션(2026-09-25T00:07+09:00) 이후:
    · homepage master: HEAD f7dc93c / origin f7dc93c ·작업트리 변경 5 :: f7dc93c 진행 기록: 인계 갱신 (update-handover auto) / 9c086ce 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD 9568062d / origin 202107c0 ·작업트리 변경 156 :: 9568062d HANDOVER — 46차 세션 마감(70화 도해 외주본 처리) + 마지막 갱신일 2026-09-25 / 202107c0 HANDOVER — 46차 6차: 70화 도해 3차 재요청(라벨 없는 상자 둘) · 그림5 확정 / e7ff16c1 70화 도해 — 라벨 없는 상자 둘만 3차 재요청 · 그림5 확정 (무진님 「다」) / a88003b2 HANDOVER — 46차 5차: 70화 도해 2차 제작본 재검토(스펙 잔여 3건 · 판단 대기) / c3f36d47 70화 도해 2차 제작본 3점 수령·재검토 (스펙 잔여 3건 · 판단 대기)
    · harness  main: HEAD 40cbef4 / origin 40cbef4 ·작업트리 변경 3 :: 40cbef4 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / d0a7c79 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T00:07+09:00`** — 무진님 「다」 집행 — 70화 도해 **2차 제작본 잔여 3건 가운데 라벨 없이 떠 있는 상자 둘만 3차 재요청**(그림4 라벨 없는 주황 사각형 · 그림7 안이 빈 남색 사각형, 스펙 '형태'에 더 단단히 못 박음) · 나머지는 넘어감 처리(그림4 '더한 값'·'문턱값'이 얹힌 기둥 판 — 결격 아님 명시 · 그림5 비스듬한 안내 글씨) → **그림5 확정(2026-09-25)**, 그림4·그림7은 3차 제작본 대기. 기록 = 도판의뢰서 §1·§2 '3차 재요청 결정'·각 '상태'·§3 + 02 ③·⑥·⑦ · 커밋 `e7ff16c1` · 게이트 70화·71화 **23/23 PASS** (19,992 / 12,714 불변) · **미발행**
  - [자동수집 · Git] 마지막 세션(2026-09-25T00:00+09:00) 이후:
    · homepage master: HEAD 9c086ce / origin 9c086ce ·작업트리 변경 5 :: 9c086ce 진행 기록: 인계 갱신 (update-handover auto)
    · llm-wiki master: HEAD e7ff16c1 / origin a88003b2 ·작업트리 변경 156 :: e7ff16c1 70화 도해 — 라벨 없는 상자 둘만 3차 재요청 · 그림5 확정 (무진님 「다」) / a88003b2 HANDOVER — 46차 5차: 70화 도해 2차 제작본 재검토(스펙 잔여 3건 · 판단 대기) / c3f36d47 70화 도해 2차 제작본 3점 수령·재검토 (스펙 잔여 3건 · 판단 대기)
    · harness  main: HEAD d0a7c79 / origin d0a7c79 ·작업트리 변경 3 :: d0a7c79 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T00:00+09:00`** — 70화 도해 **2차 제작본 3점**(23:48~23:51) 슬롯 도착·재검토: 그림4 '0과 1'·그림5 축 숫자 눈금 없음·그림7 '숨은 층'·노드 원·되돌아가는 화살표 둘은 반영, **잔여 3건**(그림4 글자 뒤 사각형 + 라벨 없는 주황 사각형 · 그림5 비스듬한 안내 글씨 · 그림7 안이 빈 남색 사각형)은 **판단 대기**. 슬롯 교체 커밋 `c3f36d47` · 배경 얼룩·반짝임 무늬는 무진님 판단으로 결격 제외 · 게이트 23/23 · DAV ep70 ok=42 / ep71 ok=24 · **미발행**
  - [자동수집 · Git] 마지막 세션(2026-09-24T23:57+09:00) 이후:
    · homepage master: HEAD 83b4d79 / origin 83b4d79 ·작업트리 변경 5 :: 83b4d79 진행 기록: 인계 갱신 (update-handover auto) / e21731a 진행 기록: 인계 갱신 (update-handover auto) / f33db36 진행 기록: 인계 갱신 (update-handover auto) / f7c4a97 진행 기록: 인계 갱신 (update-handover auto) / e3ec2bf 진행 기록: 45차 후속 인계 — 실사 승인·도해 검토(30KB 게이트 대응 30091B PASS) / e877aac 진행 기록: 인계 갱신 (update-handover auto) / 9133e3b 진행 기록: 45차 인계 항목 압축 — 30KB 게이트 대응(32232B→30357B, PASS) / cc00fa5 진행 기록: 인계 갱신 (update-handover a
    · llm-wiki master: HEAD c3f36d47 / origin b2574531 ·작업트리 변경 156 :: c3f36d47 70화 도해 2차 제작본 3점 수령·재검토 (스펙 잔여 3건 · 판단 대기) / b2574531 HANDOVER — 46차 4차: 배경 얼룩·반짝임 무늬 결격 제외(70화 3점 재요청 사유 축소 · 71화 도해 확정) / 1a395978 도판 배경 얼룩·반짝임 무늬 — 무진님 판단으로 결격 제외(70화 3점·71화 2점) / 614503ed HANDOVER — 46차 이월 보류 1건 해소 표시(70화 도해 재요청) · 69화 오기 잔존 명시 / f7808cc8 HANDOVER — 46차 3차: 70화 도판 스펙 수정→외주 재요청 + 71화 문안 정합 2건 승인 반영 / 1d81afcf 제70화 도판 스펙 수정 → AI 외주 재요청 + 제71화 문안 정합 2건 승인 반영 / d3cf944d H
    · harness  main: HEAD b721b60 / origin b721b60 ·작업트리 변경 3 :: b721b60 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 63d4a4f docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 98394c9 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 50c1896 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 22e1e25 docs(desktop-handoff): 45차 후속 인계 — 실사 승인·도해 검토(30KB 게이트 PASS 30091B) / 2aa9c3b docs(desktop-handoff): 인계 갱신 동기 (update-handover auto
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-24T23:57+09:00`** — ✅ **46차 4차 — 무진님 판단 「배경 얼룩 + 희미한 반짝임 무늬는 크게 거슬리지 않으니까 넘어가자」 집행: ① 70화 — 세 점 공통 배경 무늬를 결격 사유에서 제외. §2 공통 사항을 '단일 미색 한 색(무늬·텍스처 금지)' → '미색 계열로 채우되 희미한 얼룩·반짝임 무늬는 결격이 아니다'(뚜렷한 그라데이션·그림자 금지는 유지)로 고치고, 그림4·5·7 '상태'와 §3에 「배경 무늬 판단」 항 신설 · 재요청은 나머지 사유(그림4 흰 사각형·'0과 1' / 그림5 안내 글씨 가로·축 숫자 눈금 없음 / 그림7 빈 흰 사각형·'숨은 층')로 유지 ② 71화 — 같은 사안 '넘어감' 처리 → 남은 판단 없음 → 도해 둘(그림3·그림5)도 확정 → **여섯 자리 모두 확정**(실사 넷 승인·확정 + 도해 둘 검증·확정). §2.1 ③='넘어감'·'확정 여부'→확정·§1 표·'상태' 줄·§3 갱신 ③ 게이트 70화 23/23 PASS(E-basis 19,992 불변) · 71화 23/23 PASS(12,714 불변) ④ llm-wiki 1a395978(4건)+b2574531(HANDOVER) push · 미발행**
  - [자동수집 · Git] 마지막 세션(2026-09-24T23:42+09:00) 이후:
    · homepage master: HEAD e21731a / origin e21731a ·작업트리 변경 5 :: e21731a 진행 기록: 인계 갱신 (update-handover auto) / f33db36 진행 기록: 인계 갱신 (update-handover auto) / f7c4a97 진행 기록: 인계 갱신 (update-handover auto) / e3ec2bf 진행 기록: 45차 후속 인계 — 실사 승인·도해 검토(30KB 게이트 대응 30091B PASS) / e877aac 진행 기록: 인계 갱신 (update-handover auto) / 9133e3b 진행 기록: 45차 인계 항목 압축 — 30KB 게이트 대응(32232B→30357B, PASS) / cc00fa5 진행 기록: 인계 갱신 (update-handover auto) / 5c9aedc 진행 기록: 44차 후속 — placeholder 정리 
    · llm-wiki master: HEAD b2574531 / origin b2574531 ·작업트리 변경 159 :: b2574531 HANDOVER — 46차 4차: 배경 얼룩·반짝임 무늬 결격 제외(70화 3점 재요청 사유 축소 · 71화 도해 확정) / 1a395978 도판 배경 얼룩·반짝임 무늬 — 무진님 판단으로 결격 제외(70화 3점·71화 2점) / 614503ed HANDOVER — 46차 이월 보류 1건 해소 표시(70화 도해 재요청) · 69화 오기 잔존 명시 / f7808cc8 HANDOVER — 46차 3차: 70화 도판 스펙 수정→외주 재요청 + 71화 문안 정합 2건 승인 반영 / 1d81afcf 제70화 도판 스펙 수정 → AI 외주 재요청 + 제71화 문안 정합 2건 승인 반영 / d3cf944d HANDOVER: 46차 후속 — 71화 실사 확정 + AI 외주 도해 2점 검증 / 0df0d62
    · harness  main: HEAD 63d4a4f / origin 63d4a4f ·작업트리 변경 3 :: 63d4a4f docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 98394c9 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 50c1896 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 22e1e25 docs(desktop-handoff): 45차 후속 인계 — 실사 승인·도해 검토(30KB 게이트 PASS 30091B) / 2aa9c3b docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 0328e9f docs(desktop-handoff): 45차 인계 항목 압축 — 30KB 게이트 PASS(3
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
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
