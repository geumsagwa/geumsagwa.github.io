# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-25T10:40+09:00`** — **(2026-09-25 · 46차 12차) 제73화 도판 마무리 — 무진님 「그림1은 재검증, 그림6은 스펙 정정해서 확정」 집행 · 도판 일곱 자리 전부 확정**: ① **그림1 2차본 재검증 → 확정** — 2026-09-25 10:25 슬롯에 재요청본이 들어와(1312×816 PNG·불투명 · sha256 `ef4dceaea64420bf…` · 사본 `ws_tmp/ep73-research/figures/제작본_20260925/2차_…`) 네 기준을 다시 대조. **4/4 통과** — 1차본의 ④ 위반(이름 이중 인쇄)이 해소되어 제목 하나 + 이정표 이름 다섯이 각각 한 번씩만 인쇄됨을 확인. ② **그림6 스펙 정정 → 확정** — 스펙 '형태'의 "두 선은 서로 만나지 않는다"는 기하학적으로 불가능한 문구였으므로(내려가는 선과 올라가는 선은 반드시 만남) 무진님 지시대로 **"두 선은 가운데에서 한 번 교차한다"로 정정**하고, '나이' 축을 눈금선으로 그린 것도 스펙에 적어 **확정**. ③ **그림1 스펙 보강** — '형태'에 "이름은 이정표 이름표에만 넣고 길 아래에 이름을 따로 늘어놓지 않는다" 문구 추가. ④ **기록** — 도판의뢰서: §0 도판 상태(전부 확정)·§1 표 '상태'(그림1 2차 검증 4/4 확정 · 그림6 스펙 정정 후 확정)·§2 그림1·그림6 '상태' 줄·§2 그림1·그림6 '형태' 스펙·**§2.1 검증 표에 그림1 1차/2차 행 추가·실측값 갱신** / `02 검토내용` 머리말·③·⑥(1)·⑦. ⑤ **검증** = 게이트 73화 **23/23 PASS**(E-basis 14,514 불변·본문 무변경). ⑥ **커밋** llm-wiki **`a890bbcb`**(3건 = 02·도판의뢰서 + 그림1 2차본 PNG) **push** · 인계 = collect → apply --git. **미발행.** **도판 일곱 자리 전부 확정 — 무진님 판단 대기 0건.** 남은 일 = 검토·확정·발행(무진님).
  - [자동수집 · Git] 마지막 세션(2026-09-25T10:06+09:00) 이후:
    · homepage master: HEAD 3ec39f0 / origin 3ec39f0 ·작업트리 변경 5 :: 3ec39f0 진행 기록: 인계 갱신 (update-handover auto) / 43a1fdf 진행 기록: 인계 갱신 (update-handover auto) / 96a33e1 진행 기록: 인계 갱신 (update-handover auto) / 2da4494 진행 기록: 인계 갱신 (update-handover auto) / b087fd7 진행 기록: 인계 갱신 (update-handover auto) / 479b45f 진행 기록: 인계 갱신 (update-handover auto) / 2494951 진행 기록: 인계 갱신 (update-handover auto) / 1d28b8f 진행 기록: 인계 갱신 (update-handover auto) / 5e74a32 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD a890bbcb / origin a890bbcb ·작업트리 변경 166 :: a890bbcb 73화 도판 마무리: 그림1 2차본 재검증·확정 + 그림6 스펙 정정·확정 (도판 7자리 전부 확정) / 343a36a2 73화 도판 확정: 실사 셋 승인 + 도해 제작본 검증(그림4·5 확정 · 그림1 재요청 · 그림6 판단 대기) / 317a7030 6권 73화: 「평생 발달 — 태아기에서 노년기까지」 초고 + 검토내용·도판의뢰서 / cdf512be 6권 72화: 그림3 자체 제작·확정 + 도판 검증 기록 갱신 / d13c73b2 72화 그림3 3차 제작본 검증 — 제목·낮음/높음 해소, 잔여 1건(저울 여섯 개·우호성 중복) / cf610629 72화 그림7 문안 다듬어 확정 + 그림3 2차 제작본 검증(잔여 2건 재요청 권고) / 9ed7cbaf 72화 실사 승인·확정 + 도해 제작본
    · harness  main: HEAD ef905c8 / origin ef905c8 ·작업트리 변경 3 :: ef905c8 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b75b43e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 3935aed docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1af0761 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 679aead docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 466da71 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbb3439 do
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T10:06+09:00`** — **(2026-09-25 · 46차 11차) 제73화 도판 확정 — 무진님 「실사 모두 승인, AI 외주 도판 검증 실행」 집행**: ① **실사 셋 승인·확정** — 접촉 시트로 제시한 그림2(갓 태어난 아기, CC BY 4.0)·그림3(어미 원숭이와 새끼, CC BY-SA 4.0)·그림7(나이 든 얼굴, CC0)을 무진님이 **모두 승인** → 슬롯본 그대로 확정(교체 없음). ② **도해 제작본 4점 검증**(09:54~10:01 슬롯 반영 · 모두 1312×816 PNG·불투명 · 사본 `ws_tmp/ep73-research/figures/제작본_20260925/` · sha256 그림1 `8fd291a4…` 그림4 `c02e9990…` 그림5 `3acd60a0…` 그림6 `4388756f…`) — §2.1 **네 기준** 대조 결과: **그림4·그림5 = 지킴 4/4 → 확정** · **그림6 = 네 기준 다 지킴, '형태' 1건 판단 대기**(스펙 문구 "두 선은 서로 만나지 않는다"와 달리 두 선이 X자 교차 — 내려가는 선과 올라가는 선은 기하학적으로 반드시 만나므로 **스펙 문구 자체가 잘못**이었고 실물이 교과서 도식과 맞음 + '나이' 축이 화살표 아닌 눈금선. 문구를 "가운데에서 한 번 교차한다"로 다듬어 확정 or 재요청 — 무진님 판단) · **그림1 = 기준 ④ 어긋남 → 재요청 권고**(형태·팔레트·그림자는 지켰으나 다섯 이름이 이정표 이름표와 길 아래 줄에 **이중 인쇄** — 72화 그림3과 같은 유형). ③ **팔레트 실측** = 미색 (245~247,241~242,229~230) · 옅은 남색 (131~135,153~155,188~195) · 주황 (208~217,132~133,40~44) · 진한 남색 (34~59,80~89,134~146) — 70·71·72화와 같은 계열(지킴). 채움 프로파일 평평·도형 바깥 4~18px 띠가 먼 배경과 동일(그림1 243.7 대 243.6 · 그림4 247.1 대 247.1) → **그림자 없음** 확인. 배경 알록·반짝임 무늬는 기존 사안대로 넘김. ④ **기록** — 도판의뢰서 **§2.1 검증 표·실측 신설**·§1 표 '상태' 7줄·§2 도해 '상태' 4줄·§3 실사 승인 / `02` 머리말·③·⑥(1)·⑦. ⑤ **검증** = 게이트 73화 **23/23 PASS**(E-basis 14,514 불변·본문 무변경). ⑥ **커밋** llm-wiki **`343a36a2`**(6건) **push**(origin `02a5c478`→`343a36a2` — 미푸시 7건 함께) · 인계 = collect → apply --git. **미발행.** **무진님 판단 대기 2건 — ⓐ 그림1 재요청(권고) ⓑ 그림6 스펙 문구 정합 1건.**
  - [자동수집 · Git] 마지막 세션(2026-09-25T09:40+09:00) 이후:
    · homepage master: HEAD 96a33e1 / origin 96a33e1 ·작업트리 변경 5 :: 96a33e1 진행 기록: 인계 갱신 (update-handover auto) / 2da4494 진행 기록: 인계 갱신 (update-handover auto) / b087fd7 진행 기록: 인계 갱신 (update-handover auto) / 479b45f 진행 기록: 인계 갱신 (update-handover auto) / 2494951 진행 기록: 인계 갱신 (update-handover auto) / 1d28b8f 진행 기록: 인계 갱신 (update-handover auto) / 5e74a32 진행 기록: 인계 갱신 (update-handover auto) / b6276cc 진행 기록: 인계 갱신 (update-handover auto) / 6c8cd35 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD 343a36a2 / origin 343a36a2 ·작업트리 변경 166 :: 343a36a2 73화 도판 확정: 실사 셋 승인 + 도해 제작본 검증(그림4·5 확정 · 그림1 재요청 · 그림6 판단 대기) / 317a7030 6권 73화: 「평생 발달 — 태아기에서 노년기까지」 초고 + 검토내용·도판의뢰서 / cdf512be 6권 72화: 그림3 자체 제작·확정 + 도판 검증 기록 갱신 / d13c73b2 72화 그림3 3차 제작본 검증 — 제목·낮음/높음 해소, 잔여 1건(저울 여섯 개·우호성 중복) / cf610629 72화 그림7 문안 다듬어 확정 + 그림3 2차 제작본 검증(잔여 2건 재요청 권고) / 9ed7cbaf 72화 실사 승인·확정 + 도해 제작본 4점 검증 (그림1·5 확정 · 그림7 판단 대기 · 그림3 재요청) / 62300920 심리학사 6권 제72화 「성격의
    · harness  main: HEAD 3935aed / origin 3935aed ·작업트리 변경 3 :: 3935aed docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 1af0761 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 679aead docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 466da71 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbb3439 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 18990ba docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8df6946 do
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T09:40+09:00`** — **✅ (2026-09-25 · 46차 9차) — 심리학 6권 제73화 「평생 발달 — 태아기에서 노년기까지」 초고 집필 완료**: 무진님 지시(「심리학 제73화 집필을 시작하는데 다음 조건을 잘 지킬것」 · 아홉 조건)로 착수. ① **본문** `6권_73화_01_평생-발달-태아기에서-노년기까지.md` — 12절 · E-basis **14,514자**(목표 14,400~15,200 = 최종목차 6-12의 16쪽) · 각주 24개(전부 en 문서) · 단어코너 둘(발달 §1 · 정체성 §5) · 도판 7자리(실사 3 = 그림2 아기 · 그림3 원숭이 어미와 새끼 · 그림7 나이 든 얼굴 / 도해 4 = 그림1·4·5·6 자리표시 + 5키 스펙). ② **02 검토내용**(머리말+①~⑦ · 교차 링크 후보 4건 = 제50화 피아제 · 제51화 비고츠키 · 제21화 홀과 볼드윈(발행 id=43) · 제36화 정신분석의 확산 · **미삽입 기록**) · **도판의뢰서**(실사 3 확정 · 도해 4 5키 스펙 + §2.1 네 기준). ③ **조사** = `ws_tmp/ep73-research/`(pages 91쪽 en/ja/ko · 실사 후보 13점 전량 내려받기(집필조건 8) → `figures/raw/` · 후보 목록 `figures/README_후보목록.md` · 접촉 시트 `contact_sheet.png`). ④ **검증** = 게이트 **PASS 23/23**(E-basis 14,514 · 해요체 0 · 동어반복 0 내부·교차 · 도판 7/캡션 7/출처 줄 2) · DAV **ok=26 bad=0 nodoc=0**. ⑤ **커밋** llm-wiki **`317a7030`**(산출물 10건). **미발행 유지.** **남은 일 = 도해 넷(그림1·4·5·6) 제작본 수령 → §2.1 네 기준 검증.**
  - [자동수집 · Git] 마지막 세션(2026-09-25T09:00+09:00) 이후:
    · homepage master: HEAD b087fd7 / origin b087fd7 ·작업트리 변경 5 :: b087fd7 진행 기록: 인계 갱신 (update-handover auto) / 479b45f 진행 기록: 인계 갱신 (update-handover auto) / 2494951 진행 기록: 인계 갱신 (update-handover auto) / 1d28b8f 진행 기록: 인계 갱신 (update-handover auto) / 5e74a32 진행 기록: 인계 갱신 (update-handover auto) / b6276cc 진행 기록: 인계 갱신 (update-handover auto) / 6c8cd35 진행 기록: 인계 갱신 (update-handover auto) / f082f60 진행 기록: 인계 갱신 (update-handover auto) / 61ac87c 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD 317a7030 / origin 02a5c478 ·작업트리 변경 166 :: 317a7030 6권 73화: 「평생 발달 — 태아기에서 노년기까지」 초고 + 검토내용·도판의뢰서 / cdf512be 6권 72화: 그림3 자체 제작·확정 + 도판 검증 기록 갱신 / d13c73b2 72화 그림3 3차 제작본 검증 — 제목·낮음/높음 해소, 잔여 1건(저울 여섯 개·우호성 중복) / cf610629 72화 그림7 문안 다듬어 확정 + 그림3 2차 제작본 검증(잔여 2건 재요청 권고) / 9ed7cbaf 72화 실사 승인·확정 + 도해 제작본 4점 검증 (그림1·5 확정 · 그림7 판단 대기 · 그림3 재요청) / 62300920 심리학사 6권 제72화 「성격의 과학 — 빅5와 그 너머」(6-11·18쪽) — 산출물 3종 + 도판 7자리 / 02a5c478 HANDOVER — 46차 8차 후
    · harness  main: HEAD 679aead / origin 679aead ·작업트리 변경 3 :: 679aead docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 466da71 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbb3439 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 18990ba docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8df6946 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 784f8c6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b585a01 do
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T09:00+09:00`** — 6권 72화 「성격의 과학 — 빅5와 그 너머」 도판 7자리 확정. 실사 3점(그림2·4·6) 승인·확정, 도해 4점 중 그림1·5·7은 외주 제작본을 §2.1 네 기준으로 검증해 확정(그림7은 사람 표현 문안 다듬어 확정). 그림3은 외주 1~3차본이 모두 어긋나(저울 여섯 개·'우호성' 중복) 무진님 지시(「그럼 직접 그려서 넣어줘」)로 **집필 담당이 직접 그림 — 다섯 저울·위 '높음'/아래 '낮음'·팔레트 준수·캡션 없음**(1312×816 PNG · sha256 `43e6d881…`)·**확정**. 02 검토내용(머리말·③·⑦)·도판의뢰서(§1·§2·§2.1)에 전 과정 기록. 게이트 PASS 23/23(E-basis 16,257 / 목표 16,200~17,100). 커밋 `cdf512be`(llm-wiki, 명시 경로 3점). **미발행 유지**. 다음 = 무진님 발행 판정 대기(발행 시 §9.2 교차 링크 3건 삽입).
  - [자동수집 · Git] 마지막 세션(2026-09-25T08:56+09:00) 이후:
    · homepage master: HEAD 479b45f / origin 2494951 ·작업트리 변경 5 :: 479b45f 진행 기록: 인계 갱신 (update-handover auto) / 2494951 진행 기록: 인계 갱신 (update-handover auto) / 1d28b8f 진행 기록: 인계 갱신 (update-handover auto) / 5e74a32 진행 기록: 인계 갱신 (update-handover auto) / b6276cc 진행 기록: 인계 갱신 (update-handover auto) / 6c8cd35 진행 기록: 인계 갱신 (update-handover auto) / f082f60 진행 기록: 인계 갱신 (update-handover auto) / 61ac87c 진행 기록: 인계 갱신 (update-handover auto) / 3653252 진행 기록: 인계 갱신 (update-han
    · llm-wiki master: HEAD cdf512be / origin 02a5c478 ·작업트리 변경 159 :: cdf512be 6권 72화: 그림3 자체 제작·확정 + 도판 검증 기록 갱신 / d13c73b2 72화 그림3 3차 제작본 검증 — 제목·낮음/높음 해소, 잔여 1건(저울 여섯 개·우호성 중복) / cf610629 72화 그림7 문안 다듬어 확정 + 그림3 2차 제작본 검증(잔여 2건 재요청 권고) / 9ed7cbaf 72화 실사 승인·확정 + 도해 제작본 4점 검증 (그림1·5 확정 · 그림7 판단 대기 · 그림3 재요청) / 62300920 심리학사 6권 제72화 「성격의 과학 — 빅5와 그 너머」(6-11·18쪽) — 산출물 3종 + 도판 7자리 / 02a5c478 HANDOVER — 46차 8차 후속: 69화 화번호 오기 정정(이월 잔존 0건) / 740cb77a 69화 02 검토내용 화번호 오기 
    · harness  main: HEAD 466da71 / origin cbb3439 ·작업트리 변경 3 :: 466da71 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / cbb3439 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 18990ba docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8df6946 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 784f8c6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b585a01 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / a4cdcf0 do
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-25T08:56+09:00`** — **(2026-09-25 · 46차 12차) 제72화 그림3 3차 제작본 검증 — 무진님 「그림3은 AI가 잘 이해를 못하는 것 같네… 검증」 집행** · **인계 30KB 초과 재아카이브(46차 11차)**: ① **3차 제작본 도착** — 그림3 슬롯이 08:55:24에 새 파일(1,105,587 B · sha256 `2e49b53a02df1cde…` · 사본 `ws_tmp/ep72-research/figures/제작본3_20260925/`)로 바뀌어 §2.1 네 기준으로 대조. ② **해소 3건** = ⓐ 제목이 **따옴표 없이** '다섯 개의 저울'로 인쇄 · ⓑ '낮음'·'높음'이 **저울마다 한 번씩**(왼쪽 낮음·오른쪽 높음) 인쇄되고 저울이 **가로 막대**로 그려져 방향도 맞음 · ⓒ 팔레트(옅은 남색 (131,154,196) · 주황 (216,132,42))·그라데이션·그림자 없음 지킴. ③ **잔여 1건** = **저울이 여섯 개**이고 그 가운데 **'우호성'이 두 번**(개방성·성실성·외향성·우호성 / 우호성·신경증) 나온다 — 다섯이 아니라 여섯. 또 '한 줄 나란히'가 아니라 **두 열 세 줄** 배치. → **재요청(3차) 권고 · 무진님 판단 대기**(요지 = 정확히 다섯 저울, 개방성·성실성·외향성·우호성·신경증 각각 하나씩, 겹치지 않게). ④ **기록** — 도판의뢰서 §2.1에 「그림3 3차 제작본 검증」 항 추가 · §1 표·§2 '상태'·§3 기록 · 02 머리말·③·⑦ 갱신. ⑤ **검증** = 게이트 72화 **23/23 PASS**(E-basis 16,257 불변 · 본문 무변경). ⑥ **커밋** llm-wiki **`d13c73b2`**(3건 = 02·도판의뢰서 + 그림3 3차 PNG) push · 인계 = collect → (30KB 초과 시) 아카이브 → apply --git. **미발행.** **무진님 판단 대기 1건 — 그림3 재요청(3차) 여부.** (46차 11차에서 인계가 33,283B로 다시 30KB를 넘겨 최오래 세션 2건을 아카이브 → **27,273B · 5미러 바이트-동일 PASS** — harness `18990ba` · homepage `1d28b8f`.)
  - [자동수집 · Git] 마지막 세션(2026-09-25T08:52+09:00) 이후:
    · homepage master: HEAD 1d28b8f / origin 5e74a32 ·작업트리 변경 5 :: 1d28b8f 진행 기록: 인계 갱신 (update-handover auto) / 5e74a32 진행 기록: 인계 갱신 (update-handover auto) / b6276cc 진행 기록: 인계 갱신 (update-handover auto) / 6c8cd35 진행 기록: 인계 갱신 (update-handover auto) / f082f60 진행 기록: 인계 갱신 (update-handover auto) / 61ac87c 진행 기록: 인계 갱신 (update-handover auto) / 3653252 진행 기록: 인계 갱신 (update-handover auto) / d9ec8a4 진행 기록: 인계 갱신 (update-handover auto) / 1834dbe 자동: 카드뉴스 갱신 (2026-09-25)
    · llm-wiki master: HEAD d13c73b2 / origin 02a5c478 ·작업트리 변경 159 :: d13c73b2 72화 그림3 3차 제작본 검증 — 제목·낮음/높음 해소, 잔여 1건(저울 여섯 개·우호성 중복) / cf610629 72화 그림7 문안 다듬어 확정 + 그림3 2차 제작본 검증(잔여 2건 재요청 권고) / 9ed7cbaf 72화 실사 승인·확정 + 도해 제작본 4점 검증 (그림1·5 확정 · 그림7 판단 대기 · 그림3 재요청) / 62300920 심리학사 6권 제72화 「성격의 과학 — 빅5와 그 너머」(6-11·18쪽) — 산출물 3종 + 도판 7자리 / 02a5c478 HANDOVER — 46차 8차 후속: 69화 화번호 오기 정정(이월 잔존 0건) / 740cb77a 69화 02 검토내용 화번호 오기 정정 — 교차 링크 §9.2 예시 6권 66화 → 67화 / e1bad8dc HAN
    · harness  main: HEAD 18990ba / origin 8df6946 ·작업트리 변경 3 :: 18990ba docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 8df6946 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 784f8c6 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / b585a01 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / a4cdcf0 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 966506e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 03a400b do
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
