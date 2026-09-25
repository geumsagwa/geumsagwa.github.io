# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**📌 운영 규칙·메모는 별도 문서로 분리(2026-09-25 · 46차 15차):** 자동 아카이브 하드 룰 · 브리핑 자동 발행 룰 · 인계 읽기 가이드 · 인계 갱신 파이프라인 · 파이프라인 변경 금지 룰 · 하네스 메모 전체 → **`C:\Users\pass6\Desktop\Harness\handover-RULES.md`**. 세션 시작 시 본 로그와 함께 읽는다. (30KB 상한 대응 — 본 로그에는 상단 규칙·하네스 메모를 다시 두지 말 것)

## 마지막 갱신

- 시각(ISO): **`2026-09-25T20:07+09:00`** — **(2026-09-25 · 46차 15차) 인계 30KB 구조 개정 — 정적 규칙·하네스 메모를 `handover-RULES.md`로 분리 + 파이프라인 자동축소 개정**(무진님 「1번 권장안으로 정정」 승인): ① 로그 **27,713→19,795B**(고정부 14.5KB 중 9.0KB 분리) · `handover-RULES.md`(**9,949B**) 신설(§1 운영 규칙 5종 · §2 하네스 메모 전체 · §3 유지보수 규약). ② 게이트 `progress-file-check.py` — EXPECTED_PATHS 검사를 로그→RULES로 이동 + RULES 미러(2개) 검사·identity 추가. ③ `optimize-handover.ps1` — 세션 '수' 고정(5) → **초과분 자동 축소**(결과 크기 기준, 최소 1세션); 샌드박스 검증 = 15세션→5(28.8KB)·6세션(5.8KB×6)→4(29.8KB). ④ `update-handover.py` — RULES 동기·커밋 추가. ⑤ 위키 원고 변경 0건 · 미발행 유지. 커밋 harness **`0db2551`** · homepage **`870b91c`**(+본 항목 via apply). **다음 세션 = 무진님 발행 판정 또는 6권 잔여(제74·75화) 집필.**
  - [자동수집 · Git] 마지막 세션(2026-09-25T19:57+09:00) 이후:
    · homepage master: HEAD 870b91c / origin 870b91c ·작업트리 변경 5 :: 870b91c 진행 기록: 인계 로그 30KB 구조 개정 — 규칙·하네스 메모 → handover-RULES.md 분리 / 1a084f6 진행 기록: 인계 갱신 (update-handover auto) / bb4f8f9 진행 기록: 인계 갱신 — 수동 아카이브 후 30KB 게이트 PASS (update-handover 후속) / c5c893f 진행 기록: 인계 갱신 (update-handover auto) / 5c8bdae 진행 기록: 인계 갱신 (update-handover auto) / 05d1eff 진행 기록: 인계 갱신 (update-handover auto) / fb153db 진행 기록: 인계 갱신 (update-handover auto) / 3ec39f0 진행 기록: 인계 갱신 (update-ha
    · llm-wiki master: HEAD 8a36618f / origin 8a36618f ·작업트리 변경 166 :: 8a36618f HANDOVER 정정 — 46차 9~12차 번호를 하네스 인계 번호에 일치시킴 / 15d9b3c8 HANDOVER — 46차 9~12차 기록 보충: 제72·73화 집필·도판 확정(위키 인계 정합 복구) / 537ce631 HANDOVER — 46차 13차 별건: HyperFrames 설치(F:) + Voicebox 연동 검증·사용설명서 + qwen-tts-1.7B 삭제 / a890bbcb 73화 도판 마무리: 그림1 2차본 재검증·확정 + 그림6 스펙 정정·확정 (도판 7자리 전부 확정) / 343a36a2 73화 도판 확정: 실사 셋 승인 + 도해 제작본 검증(그림4·5 확정 · 그림1 재요청 · 그림6 판단 대기) / 317a7030 6권 73화: 「평생 발달 — 태아기에서 노년기까지」 
    · harness  main: HEAD 0db2551 / origin 0db2551 ·작업트리 변경 3 :: 0db2551 인계 30KB 구조 개정: 규칙·하네스 메모를 handover-RULES.md로 분리 + 게이트/아카이브 자동축소 / 03cc3c2 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / bd834f7 docs(desktop-handoff): 인계 갱신 동기 — 수동 아카이브 후 30KB 게이트 PASS / 799c967 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 094ccdf docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 4477461 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) 
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T19:57+09:00`** — **(2026-09-25 · 46차 14차) 인계 정합 정정 — 하네스 인계의 '위키 HANDOVER TL;DR은 46차 8차까지만 갱신' 주의 문장을 ✅해소로 정정**(직전 세션들이 남긴 stale 문장 — 이제 거짓): ① 13차 항목 ⑥의 ⚠️주의 → ✅해소, 위키 HANDOVER에 46차 9~12차(제72·73화)를 TL;DR·현재 상태·갱신 노트에 보충했다는 사실과 커밋(`15d9b3c8`·`8a36618f`)을 명기. ② 위키 원고 변경 0건 · 미발행 유지. ③ 용량: 신규 항목 삽입 시 30KB 초과 → 가장 오래된 11차(제73화 도판 확정)를 아카이브 ZIP으로 수동 이동(optimize 5세션 하한 때문에 자동 미발동) → 활성 24.5KB·게이트 PASS. **다음 세션 = 무진님 발행 판정 또는 6권 잔여(제74·75화) 집필.**
  - [자동수집 · Git] 마지막 세션(2026-09-25T15:02+09:00) 이후:
    · homepage master: HEAD bb4f8f9 / origin bb4f8f9 ·작업트리 변경 5 :: bb4f8f9 진행 기록: 인계 갱신 — 수동 아카이브 후 30KB 게이트 PASS (update-handover 후속) / c5c893f 진행 기록: 인계 갱신 (update-handover auto) / 5c8bdae 진행 기록: 인계 갱신 (update-handover auto) / 05d1eff 진행 기록: 인계 갱신 (update-handover auto) / fb153db 진행 기록: 인계 갱신 (update-handover auto) / 3ec39f0 진행 기록: 인계 갱신 (update-handover auto) / 43a1fdf 진행 기록: 인계 갱신 (update-handover auto) / 96a33e1 진행 기록: 인계 갱신 (update-handover auto) / 2da4494 
    · llm-wiki master: HEAD 8a36618f / origin 8a36618f ·작업트리 변경 166 :: 8a36618f HANDOVER 정정 — 46차 9~12차 번호를 하네스 인계 번호에 일치시킴 / 15d9b3c8 HANDOVER — 46차 9~12차 기록 보충: 제72·73화 집필·도판 확정(위키 인계 정합 복구) / 537ce631 HANDOVER — 46차 13차 별건: HyperFrames 설치(F:) + Voicebox 연동 검증·사용설명서 + qwen-tts-1.7B 삭제 / a890bbcb 73화 도판 마무리: 그림1 2차본 재검증·확정 + 그림6 스펙 정정·확정 (도판 7자리 전부 확정) / 343a36a2 73화 도판 확정: 실사 셋 승인 + 도해 제작본 검증(그림4·5 확정 · 그림1 재요청 · 그림6 판단 대기) / 317a7030 6권 73화: 「평생 발달 — 태아기에서 노년기까지」 
    · harness  main: HEAD bd834f7 / origin bd834f7 ·작업트리 변경 3 :: bd834f7 docs(desktop-handoff): 인계 갱신 동기 — 수동 아카이브 후 30KB 게이트 PASS / 799c967 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 094ccdf docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 4477461 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 3facddb docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ef905c8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b75b43e
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T15:02+09:00`** — **(2026-09-25 · 46차 13차) 별건 — HyperFrames 설치(F:) + Voicebox 연동 사용설명서 작성·검증 완료 · Voicebox `qwen-tts-1.7B` 삭제**: 무진님 지시(「유튜브 영상(aaiEg5ZniyQ)을 분석해서 앞서 설치해 둔 Voicebox와 함께 쓸 수 있게 HyperFrames 설치 + 사용설명서 작성」 · 중간 조건 「C:에 설치 진행 중이면 멈추고 F:에 설치」) 집행. ① **설치** — `heygen-com/hyperframes`(Apache 2.0 · HeyGen) **CLI 0.8.75** 를 **전부 F: `F:\HyperFrames`** 에 설치. 스킬 코어 10종 = F: 실파일 + `C:\Users\pass6\.claude\skills` 등 **8곳 정션(C: 물리 사용 0)**, `~\.hyperframes`·`~\.cache\hyperframes`(Chrome 셸 268MB+웹폰트)도 F:로 이전 후 정션, npm 캐시 `F:\npm-cache`. ② **연동 실증(말이 아니라 산출물)** — Voicebox REST로 나레이션 생성(`narration.wav` 333,644B · **6.95초** · 24kHz 모노) → HyperFrames 컴포지션(호스트 `index.html` + 서브컴포지션 `compositions\scene.html` · 오디오는 호스트 루트 `<audio id>`) → `check` **0 error / 0 warning**(레이아웃 9샘플 · 대비 19/19) → MP4 **989.9KB · 7.2초 · H.264 1920×1080 + AAC 48kHz 스테레오**(렌더 33.0초 · 216프레임 · 오디오 믹싱 포함). 산출물 `F:\HyperFrames\projects\voicebox-demo\renders\voicebox-demo_2026-09-25_14-52-54.mp4`. ③ **사용설명서** `F:\HyperFrames\사용설명서.md`(29.9KB · §0 세 도구 역할 ~ §9 라이선스 — 설치 실측 · 참고 영상 분석 · Voicebox(프로필·엔진·REST·MCP) · HyperFrames(정석 구조·CLI·스킬 라우팅) · 통합 워크플로 + **§6.5 실증 재현** · **`check` 함정 4종**(한국어 `@font-face` · `<template>` 밖 스타일 · `<audio id>` 누락=무음 · `sweep_static`) · 문제 해결) + `README.md` + 도우미 `scripts\voicebox-tts.mjs`(REST 나레이션 생성 · 무한대기 결함 수정). ④ **Voicebox 정리** — `DELETE /models/qwen-tts-1.7B` → **200** · **3,678.72MB 회수**(`F:\Voicebox\models` 6,293.95MB → 2,615.23MB · RAM 7.7GB에서 모델 로딩이 백엔드를 죽이는 주원인) → 보유 `qwen-tts-0.6B`(1,744.6MB)·`kokoro`(312.6MB)·`whisper-base`(281.1MB). 검증용 프리셋 프로필은 삭제(무진님 프로필 무변경). ⑤ **검증** = 실측 3종(`ffprobe` 2회 + `hyperframes check`). ⑥ **위키 원고 변경 0건 · 미발행 유지** — llm-wiki 커밋 **`537ce631`**(HANDOVER 1건 push). ✅ **해소(2026-09-25) — 46차 9~12차(제72·73화) 기록을 `F:\wiki\HANDOVER.md` TL;DR·현재 상태·갱신 노트에 보충함**(llm-wiki `15d9b3c8`·`8a36618f`). 종전 'TL;DR은 46차 8차까지만 갱신' 주의는 폐기됨. ⚠️ **Voicebox 백엔드가 이 세션 3회 종료**(모델 다운로드 중 · 렌더 직후 · 그 후 · 메모리 부족) — REST 연결 거부 시 `voicebox.exe` 재시작(약 40초)으로 매번 복구. **다음 세션 = 무진님 발행 판정 또는 6권 잔여(제74·75화) 집필.**
  - [자동수집 · Git] 마지막 세션(2026-09-25T10:40+09:00) 이후:
    · homepage master: HEAD 5c8bdae / origin 5c8bdae ·작업트리 변경 5 :: 5c8bdae 진행 기록: 인계 갱신 (update-handover auto) / 05d1eff 진행 기록: 인계 갱신 (update-handover auto) / fb153db 진행 기록: 인계 갱신 (update-handover auto) / 3ec39f0 진행 기록: 인계 갱신 (update-handover auto) / 43a1fdf 진행 기록: 인계 갱신 (update-handover auto) / 96a33e1 진행 기록: 인계 갱신 (update-handover auto) / 2da4494 진행 기록: 인계 갱신 (update-handover auto) / b087fd7 진행 기록: 인계 갱신 (update-handover auto) / 479b45f 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD 537ce631 / origin 537ce631 ·작업트리 변경 166 :: 537ce631 HANDOVER — 46차 13차 별건: HyperFrames 설치(F:) + Voicebox 연동 검증·사용설명서 + qwen-tts-1.7B 삭제 / a890bbcb 73화 도판 마무리: 그림1 2차본 재검증·확정 + 그림6 스펙 정정·확정 (도판 7자리 전부 확정) / 343a36a2 73화 도판 확정: 실사 셋 승인 + 도해 제작본 검증(그림4·5 확정 · 그림1 재요청 · 그림6 판단 대기) / 317a7030 6권 73화: 「평생 발달 — 태아기에서 노년기까지」 초고 + 검토내용·도판의뢰서 / cdf512be 6권 72화: 그림3 자체 제작·확정 + 도판 검증 기록 갱신 / d13c73b2 72화 그림3 3차 제작본 검증 — 제목·낮음/높음 해소, 잔여 1건(저울 여섯 개·우호성 
    · harness  main: HEAD 094ccdf / origin 094ccdf ·작업트리 변경 3 :: 094ccdf docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 4477461 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 3facddb docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ef905c8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b75b43e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 3935aed docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1af0761 do
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능
  - [인계 아카이브 · 수동] 활성 로그가 **5세션 유지 상태로도 35,689B(>30KB)** 라 자동 아카이브(optimize-handover.ps1 · sessionsToKeep=5)가 스킵됨 → 선례(46차 11차)와 같이 **최오래 세션 2건(46차 9차 · 6권 72화)을 `handover-progress-archive.zip` 으로 수동 아카이브** → 30KB 미만 달성 · 5미러 바이트-동일 · **게이트 PASS** · 커밋/푸시완료.

- 시각(ISO): **`2026-09-25T10:40+09:00`** — **(2026-09-25 · 46차 12차) 제73화 도판 마무리 — 무진님 「그림1은 재검증, 그림6은 스펙 정정해서 확정」 집행 · 도판 일곱 자리 전부 확정**: ① **그림1 2차본 재검증 → 확정** — 2026-09-25 10:25 슬롯에 재요청본이 들어와(1312×816 PNG·불투명 · sha256 `ef4dceaea64420bf…` · 사본 `ws_tmp/ep73-research/figures/제작본_20260925/2차_…`) 네 기준을 다시 대조. **4/4 통과** — 1차본의 ④ 위반(이름 이중 인쇄)이 해소되어 제목 하나 + 이정표 이름 다섯이 각각 한 번씩만 인쇄됨을 확인. ② **그림6 스펙 정정 → 확정** — 스펙 '형태'의 "두 선은 서로 만나지 않는다"는 기하학적으로 불가능한 문구였으므로(내려가는 선과 올라가는 선은 반드시 만남) 무진님 지시대로 **"두 선은 가운데에서 한 번 교차한다"로 정정**하고, '나이' 축을 눈금선으로 그린 것도 스펙에 적어 **확정**. ③ **그림1 스펙 보강** — '형태'에 "이름은 이정표 이름표에만 넣고 길 아래에 이름을 따로 늘어놓지 않는다" 문구 추가. ④ **기록** — 도판의뢰서: §0 도판 상태(전부 확정)·§1 표 '상태'(그림1 2차 검증 4/4 확정 · 그림6 스펙 정정 후 확정)·§2 그림1·그림6 '상태' 줄·§2 그림1·그림6 '형태' 스펙·**§2.1 검증 표에 그림1 1차/2차 행 추가·실측값 갱신** / `02 검토내용` 머리말·③·⑥(1)·⑦. ⑤ **검증** = 게이트 73화 **23/23 PASS**(E-basis 14,514 불변·본문 무변경). ⑥ **커밋** llm-wiki **`a890bbcb`**(3건 = 02·도판의뢰서 + 그림1 2차본 PNG) **push** · 인계 = collect → apply --git. **미발행.** **도판 일곱 자리 전부 확정 — 무진님 판단 대기 0건.** 남은 일 = 검토·확정·발행(무진님).
  - [자동수집 · Git] 마지막 세션(2026-09-25T10:06+09:00) 이후:
    · homepage master: HEAD 3ec39f0 / origin 3ec39f0 ·작업트리 변경 5 :: 3ec39f0 진행 기록: 인계 갱신 (update-handover auto) / 43a1fdf 진행 기록: 인계 갱신 (update-handover auto) / 96a33e1 진행 기록: 인계 갱신 (update-handover auto) / 2da4494 진행 기록: 인계 갱신 (update-handover auto) / b087fd7 진행 기록: 인계 갱신 (update-handover auto) / 479b45f 진행 기록: 인계 갱신 (update-handover auto) / 2494951 진행 기록: 인계 갱신 (update-handover auto) / 1d28b8f 진행 기록: 인계 갱신 (update-handover auto) / 5e74a32 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD a890bbcb / origin a890bbcb ·작업트리 변경 166 :: a890bbcb 73화 도판 마무리: 그림1 2차본 재검증·확정 + 그림6 스펙 정정·확정 (도판 7자리 전부 확정) / 343a36a2 73화 도판 확정: 실사 셋 승인 + 도해 제작본 검증(그림4·5 확정 · 그림1 재요청 · 그림6 판단 대기) / 317a7030 6권 73화: 「평생 발달 — 태아기에서 노년기까지」 초고 + 검토내용·도판의뢰서 / cdf512be 6권 72화: 그림3 자체 제작·확정 + 도판 검증 기록 갱신 / d13c73b2 72화 그림3 3차 제작본 검증 — 제목·낮음/높음 해소, 잔여 1건(저울 여섯 개·우호성 중복) / cf610629 72화 그림7 문안 다듬어 확정 + 그림3 2차 제작본 검증(잔여 2건 재요청 권고) / 9ed7cbaf 72화 실사 승인·확정 + 도해 제작본
    · harness  main: HEAD ef905c8 / origin ef905c8 ·작업트리 변경 3 :: ef905c8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b75b43e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 3935aed docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1af0761 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 679aead docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 466da71 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbb3439 do
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

## 확정·상태 변경
- **심리학사 발행 완료 = 제1~37화(ids 12~59)** — 2권 21~27화(ep21~27 · id=43~49 · 09-06~08) · 3권 28~37화(ep28~37 · id=50~59 · ~09-17). 최신 = ep37(3-10) id=59.
- **미발행·검토 대기(무진님)**: 6권 62·63·64화 · **73화(6-12)** — 산출물 3종(01·02·도판의뢰서) 완비, 73화는 도판 7자리 전부 확정(llm-wiki `317a7030`→`343a36a2`→`a890bbcb`).
- **사이트 미반영 22화**(의문형 마침표·`심리학계에`) → `--update` 재발행 off-peak 무진님 트리거 대기.
- **각주 재편(2026-09-18)** — 배치 B1~B6-1 완료(23화). 기발행(2권 22~24 · 3권 28~37)은 묶어서 재발행 대기, 미발행(3권 39·40 · 5권 48~52)은 최초 발행 시 자동 반영. 대장 `ws_tmp/각주판정/발행대기-목록.md`.

## 다음 작업 (다음 세션 우선순위)
1. **6권 6-13(제74화) 집필** → 6-14(제75화)까지 — 파이프라인·검증은 62~64화 동일(게이트 `gate_common.py` · DAV · 후보 매핑 `candidates.tsv`).
2. **무진님 대기 — 검토·확정·발행**: 62·63·64화 + 73화(6-12). 62·63화 실사 1순위 승인·교체 판단(후보 21종 `ws_tmp/ep63-research/figures/raw/`).
3. **각주 재편 잔여 배치**: B6-2(5권 53~57) → B6-3(58~61) → B7(4권 41~47) → B8(2권 15·20·21·25~27) → B9(1권 8~13) → B10(구형 12화) → B11(철학사 10화) · 배치당 제안 1회·결재 1회 · 기준선 `ws_tmp/각주판정/전체계획.md`(완료 23화/미완 29화).
4. **도해 재외주 잔여 교체**: 57화 그림5 · 58화 그림3 · 59화 그림1·2·5 · 60화 그림4 · 61화 그림1·2(팔레트 정정분) — 같은 파일명 교체(프롬프트 `ws_tmp\palette-fix\도해_팔레트_재제작_프롬프트.md`) + 59화 실사 교체 판단.
5. **철학사 11화**(아리스토텔레스 — 학문의 제왕, 1-13) 집필.

## 브랜치·원격
- **작업 브랜치 `master`** · 원격 `https://github.com/geumsagwa/geumsagwa.github.io.git` · 구체 sha 이력은 각 repo `git log` 참조.

## 미커밋 / 로컬만
- `epub/history3.epub`·`epub/주석 명령문.txt` 등 저장소 미포함(필요 시 정리) · `git status`의 CRLF `M`은 `git diff HEAD --stat`로 확인.

## 막힌 일 / blocked
- **현 미해결 0건** — (해소) 카카오 로그인 · GitHub 소셜로그인 · `e22d696` 인코딩 복구(`015815f`) · 1-2권 각주 리더기(`unify-footnotes-epub.mjs`+`renumber-footnotes-book.mjs`).

## 하네스 메모

**→ 별도 문서로 이동(2026-09-25):** 하네스 메모 전체(운영 참조)는 `C:\Users\pass6\Desktop\Harness\handover-RULES.md` §2 참조. (본 로그는 세션 기록·현재 상태만 유지)
