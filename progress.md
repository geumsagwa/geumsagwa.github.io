# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

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

## 이번 세션 요약

- **각주 재편 총괄 계획 수립·승인 + 배치 B1~B6-1 집행(23화)** — B1(3권 38화) → B2(3권 31·32·33·36) → B3(6권 62·64) → B4(2권 22·23·24) → B5(3권 28·29·30·34·35·39·40) → B6-1(5권 48~52). **배치별 일괄 결재** 전환 · 게이트 PASS(50·51화 선재 FAIL) · DAV 불일치 0 · E-basis 불변 · 02 동기화. 상세는 위 「마지막 갱신」 2026-09-18T09:41 블록.

## 확정·상태 변경

- 21화(2-7)~26화(2-12): **✅ 확정·발행**(ep21~26·id=43~48, 2026-09-06~07) · 27화(2-13): **✅ 확정·발행(2026-09-08 · ep27 · id=49)** — 그림2·그림3 실사 후보 무진님 확정 대기.
- 심리학사 3권(ep28~): **ep28~ep37(3-1~3-10) 확정·발행 완료**(id=50~59 · **최신 = ep37(3-10) id=59, 2026-09-17**) — ep38~40(3-11~3-13)은 산출물 존재, 순차 확정·발행 대상.
- 3권 34~37(3-7~3-10): **✅ 전부 확정·발행**(ep34 id=56 · ep35 id=57 · ep36 id=58 · ep37 id=59) — 2026-09-13~17.
- **6권 73화(6-12) 「평생 발달 — 태아기에서 노년기까지」** — 2026-09-25 초고(14,514자 · 각주 24 · 도판 7자리) + 검토내용·도판의뢰서 완성 · 게이트 23/23 PASS · DAV ok=26 bad=0 nodoc=0 · **도판 7자리 전부 확정**(실사 셋 무진님 승인 · 도해 넷 제작본 검증) · **미발행** — 무진님 검토·확정·발행 대상(commit llm-wiki `317a7030`→`343a36a2`→`a890bbcb`).
- **각주 재편(2026-09-18)** — 23화 완료(3권 37·38·31·32·33·36·28·29·30·34·35·39·40 · 6권 62·64 · 2권 22·23·24 · 5권 48~52). **미발행(3권 39·40 · 5권 48~52)은 최초 발행 시 자동 반영** / **기발행(2권 22·23·24 · 3권 28~37)은 묶어서 재발행 대기**(대장 `ws_tmp/각주판정/발행대기-목록.md`).

## 다음 작업
- **각주 재편 잔여 배치 — 다음은 B6-2(5권 53~57) 제안** → B6-3(58~61) → B7(4권 41~47) → B8(2권 15·20·21·25~27) → B9(1권 8~13) → B10(구형 12화) → B11(철학사 10화). **배치당 제안 1회 → 결재 1회**. 기준선 `ws_tmp/각주판정/전체계획.md`. 완료 23화 · 미완 29화.
- **각주 정의부 빈 줄 13화 정규화 — ✅ 해소(2026-09-18)**: 11화 PASS, 남은 것은 1권 11·12화 복원포인트 사본 2점(스냅숏 · 지침 대상 아님).
- **6권 6-4(제65화) 집필** → 6-14(제75화)까지. 파이프라인·검증은 62~64화와 동일(게이트 `gate_common.py` 20항목 · DAV · 후보 매핑 `candidates.tsv`). 조사 캐시·검증 도구 참조 = `ws_tmp/ep64-research/`.
- **무진님 대기 — 검토·확정·발행**: 62·63·64화 산출물 3종(01·02·도판의뢰서) · **73화(6-12)도 산출물 3종 완비·도판 7자리 확정 → 검토·확정·발행 대상**. 발행분은 **제1~37화(ids 12~59)** — 다만 **사이트 미반영 22화**(의문형 마침표·`심리학계에`)의 `--update` 재발행은 off-peak 무진님 트리거 대기(위 세션 블록 ④). 62·63화 실사 1순위 배치의 승인·교체 판단도 대기(후보 21종 = `ws_tmp/ep63-research/figures/raw/`).
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
- **⚠️ 30KB 구조 한계 (2026-09-25 · 46차 13차 실측):** 활성 로그가 **최근 5세션 유지 상태로도 35,689B** 가 되어 자동 아카이브(optimize-handover.ps1 · sessionsToKeep=5)가 스킵되는 상태가 발생 → **최오래 세션을 수동으로 `handover-progress-archive.zip` 에 아카이브**해 게이트 PASS 를 맞췄다. 세션이 길면 재발하므로 근본 해소(보관 세션 수 하향 또는 상태 섹션 분리)는 **무진님 판단 대기**.
