# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

**🔄 인계 갱신 자동 파이프라인 (위치 고정 — 찾아 헤매지 말 것):** 인계 갱신·아카이브·5개 미러 동기·게이트·커밋·푸시는 원스톱 스크립트 하나로 처리한다 → `python C:\Users\pass6\project\harness\scripts\update-handover.py collect` 후 초안 첫 줄(원고 요약)을 채우고 `apply --git` 실행. 30KB 초과 아카이브(optimize-handover.ps1, no-BOM)·5개 미러 동기·게이트·homepage/harness 커밋이 순서대로 자동 수행된다. **대상 5개 미러:** `Desktop\Harness\` 2개 + `project\harness\docs\desktop-handoff\` 2개 + `project\homepage\progress.md`. **BOM 규약:** 게이트(`progress-file-check.py`)는 'BOM 없음'을 기대 — 아카이브 후 BOM(ef bb bf)이 보이면 제거 후 `check` PASS 확인해야 커밋한다. 상세 매뉴얼: `project\harness\skills\safe-file-edit.md` · `Desktop\Harness\CLAUDE.md`

**🚫 파이프라인 변경 금지 하드 룰 (2026-09-14):** 무진님이 이미 만들어 놓은 파이프라인(`update-handover.py collect → apply --git` — 삽입·아카이브·5미러 동기·게이트·**커밋·푸시**, `publish-briefing.ps1` 브리핑 자동 발행 등)은 **설계된 그대로 끝까지 실행한다**. **단계를 바꾸거나 건너뛰려면 반드시 무진님께 먼저 물어본다.** 에이전트가 자기 규칙 해석으로 파이프라인 단계(예: 커밋·푸시)를 생략하는 것을 금지 — 2026-09-14 이 위반으로 시정됨.

## 마지막 갱신

- 시각(ISO): **`2026-09-17T22:32+09:00`** — **제37화(3-10 「정신분석의 비판 — 증거와 윤리」) 전체 재검증 → 확정 → 검토내용 갱신 → 홈페이지 발행(id=59) → 인계 갱신** — 무진님 지시. 게이트 **19/19 PASS** · DAV 인용 **61/61 byte-exact** · E-basis **17,653** · 각주 33. 재검증에서 잡힌 3건 교정(각주 정의부 빈 줄 31 제거 · 2018 조사 수치 2,326 통일 · 명 표기 띄어쓰기) 후 확정. llm-wiki 커밋 `09a61d0b`.
  - **[37화(3-10) 확정·발행]** 01 본문 sha256 `cf22ebd294a1c50fcfd64151ec6f008f5c37755489751b80ca51c38e68277505` · `candidates.tsv` sha256 `f9bba81d428b7f02a35bc82379617673608b676cc78a72ee9924aca08ace0804`(61행 불일치 0) · 도판 3점(그림1 아이젱크 CC BY 3.0 · 그림2 포퍼 PD · 그림3 로프터스 CC BY-SA 3.0 — 출처 줄 2) base64 인라인 · GATE FAIL `각주 정의부 내부 빈 줄` 해소(정의 33줄 한 블록, 본문 산문 불변). 02 §7 게이트 판정·상태 갱신 + 「전체 재검증·확정 (2026-09-17)」 절 신설.
  - **[홈페이지]** Supabase `essays` id=**59** (series=심리학사, ep=37, card=Unsplash Lady Justice) — `scripts/publish-series-episodes.mjs`에 ep37 엔트리 추가(ep36과 함께 **미커밋**).
  - **[이월]** ① 각주 정의부 내부 빈 줄이 남은 화 13개(1권_8~13화 · 3권_29·30·31·33·38화 + 1권_11·12화 복원포인트 사본) ② homepage ep36·ep37 엔트리 미커밋 ③ `19 건` 띄어쓰기 지침 §5.8 조문화·전수 교정 여부(무진님 판단 대기).
  - [자동수집 · Git] 마지막 세션(2026-09-17T21:29+09:00) 이후:
    · homepage master: HEAD 7e15f45 / origin 7e15f45 ·작업트리 변경 2 :: 7e15f45 진행 기록: 인계 갱신 보정 — 자동수집 Git·세션 서술 압축 + 낡은 섹션(이번 세션 요약·다음 작업·다음에 할 일) 현행화 · 28,890B PASS / 8ac3468 진행 기록: 인계 갱신 (update-handover auto) / d9fe2aa 진행 기록: 인계 갱신 (update-handover auto) / b890b4b 진행 기록: 인계 갱신 보정 — 63화 도해 2점(그림5·6) 제작본 배치 반영 / 4829a5c 진행 기록: 인계 갱신 (update-handover auto) / 62d6a0f 진행 기록: 인계 갱신 보정 — 자동수집 Git 블록 압축(게이트 FAIL 대응) · 27,985B PASS / 854fa8a 진행 기록: 인계 갱신 (update-handover a
    · llm-wiki master: HEAD 09a61d0b / origin 7c40771a ·작업트리 변경 126 :: 09a61d0b 37화 전체 재검증·확정 — 게이트 19/19 PASS · DAV 인용 61/61 byte-exact (무진님 지시) / 7c40771a 37화 §9 '외상 기억' 풀이 추가 (무진님 지시) / 2ac13e40 37화 §9 네덜란드 위원회 문장 풀어쓰기 (무진님 지시) / 08b97b89 37화 문장 다듬기 — 없던 기억을 새로 만드는 일도 가능하게 한다는 (무진님 지시) / f4cef591 37화 표기 교정 — '회복 기억 치료' 인용 부호 (무진님 지시) / 44bb8fcb 37화 기억 관련 표현 통일 (무진님 지시) / 935d4df6 37화 문장 교정 — 기억을 다시 짓는 → 다시 만드는 (무진님 지시) / 3f16daed 37화 문장 교정 — 통계로 줄일 수 없는 → 통계로 풀 수 
    · harness  main: HEAD 6dc5646 / origin 6dc5646 ·작업트리 변경 3 :: 6dc5646 docs(desktop-handoff): 인계 갱신 보정 — 자동수집 Git·세션 서술 압축 + 낡은 섹션 현행화 · 28,890B PASS / 9b2a8a7 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 6551f15 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / 42d58af docs(desktop-handoff): 인계 갱신 보정 — 63화 도해 제작본 배치 반영 / ffbaaa1 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / ed0c498 docs(desktop-handoff): 인계 갱신 보정 — 자동수집 Git 블록 압
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a ·작업트리 변경 5 :: (커밋 없음)
  - [기재 영역] 이번 세션 요약/확정·상태/다음 작업 변경분을 위 원고 요약에. (선택) 이 아래에 상세 bullet 추가 가능

- 시각(ISO): **`2026-09-17T21:29+09:00`** — **6권 6-3(제64화 「인지 신경과학 — 기억·감정·결정」·20쪽) 집필 완성 — E-basis 18,440·각주 35·단어코너 4·도판 6자리·게이트 20/20 PASS·DAV ok=35 bad=0.**
  - [자동수집 · Git] 마지막 세션(2026-09-17T16:00+09:00) 이후:
    · llm-wiki `2a12150f`(volume6 62·63·64화 커밋·푸시 · HANDOVER 9차까지) · homepage `d9fe2aa` · harness `6551f15` · openclaw `11a8f0a`(커밋 없음) — 넷 다 origin 동기 · 작업트리 변경: llm-wiki 125 / homepage 2 / harness 3 / openclaw 5.
  - [제64화(6-3 · 20쪽)] 본문 `6권_64화_01_인지-신경과학-기억-감정-결정.md`(62,634 B · sha256 `b6785f81…`)·검토내용 ②·도판의뢰서 ③ 완비. 12절·112문단. E-basis **18,440**·각주 **35**·단어코너 4(인지·공고화·편도체·도파민)·도판 6/캡션 6/출처 줄 4.
  - [검증 — `ws_tmp/ep64-research/`] 조사 캐시 77문서·`queries64.tsv` 80건(각주 근거 = 영어 위키백과 23종). 게이트 `gate_common.py` **PASS(20/20)** · DAV `_dav64.py` **ok=35 bad=0** · 후보 `_cand64.py` **73행(수치 28+인용 44) 불일치 0·NOPAGE 0** · `_seclen64.py` 18,440.
  - [도판 6자리] 여섯 자리 모두 위키미디어 공용 기존 파일(자작 도해 0) — 해마 위치(CC0·출처 줄 없음)·존 오키프(CC BY 2.0)·브렌다 밀너(CC BY 2.0)·다마지오(CC BY-SA 4.0)·아이오와 도박 과제(PD)·보상 예측 오차(CC BY-SA 4.0). 800px 미만 2자리(그림1·그림5)는 확대 없이 사용. 가자니가 후보(223×251·GFDL) 탈락 → 1절 초상 자리를 §3 오키프로 이동.
  - [커밋 — volume6 미추적 해소] 62·63·64화 산출물 3종·배치 도판 **29파일** 커밋·푸시(llm-wiki `2a12150f`) — 복원포인트 JPG·`_placeholder.png`·도해 손대기 전 `_원본_` 제외(volume5 관례). 9차 노트 예고분 이행.
  - [상태·다음 작업] 심리학사 발행분은 여전히 **제1~36화(ids 12~58)** — 64화 산출물 3종 **미발행**(검토·확정·발행은 무진님 직접). 다음 작업 = **6권 6-4(제65화) 집필** → 6-14(제75화)까지.
  - [⚠️ 보고 — 인계 용량] 세션 블록이 약 4KB로 커져 5세션 보관 시 게이트가 **33,044B로 FAIL** → 자동수집 Git 블록·신규 세션 서술 압축(**30,007B PASS**). 보관 세션 수(`optimize-handover.ps1` 내 `$sessionsToKeep = 5` 하드코딩)를 낮추는 방안은 **파이프라인 변경이라 무진님 판단 대기**.

- 시각(ISO): **`2026-09-17T16:00+09:00`** — **6권 6-2(제63화 「진화 심리학 — 마음은 설계되었다」) 마감** — 도판 7자리(실사 5 + 도해 2) **무진님 확정**, E-basis **18,106**·각주 33·단어코너 4·게이트 **20/20**·DAV **0**. 산출물 3종 완비, **미커밋 유지**.
  - [자동수집 · Git] 마지막 세션(2026-09-17T08:18+09:00) 이후 — homepage `b890b4b` / llm-wiki `204032f6` / harness `42d58af` / openclaw `11a8f0a` (넷 다 origin 동기). 작업트리 변경: homepage 2 / llm-wiki 106(volume6 미추적) / harness 3 / openclaw 5.
  - [제63화(6-2 · 20쪽)] 본문 `6권_63화_01_…md`(59,716 B · sha256 앞16 `25d2dcf0…`)·검토내용 ②·도판의뢰서 ③ 완비. E-basis 18,106(목표 18,000~18,900)·각주 33·단어코너 4(진화·밈·스펜드럴·적응)·도판 7/캡션 7/출처 줄 3.
  - [도판 확정 — 2026-09-17] 실사 다섯 자리(다윈·로렌츠와 틴베르헌·윌슨·성 마르코 성당 천장·공작의 꼬리)는 추천 1순위 그대로 **승인**, 도해 두 점은 **확정**. 경위: 첫 제작본이 그림5·6을 한 장에 합친 1408×768(도해 안에 표제 박힘) → 자리 표시본으로 되돌림 → 한 장씩 재수령 → 그림5는 옅은 별 장식만 제거, 그림6은 맨 위 제목 띠 절단 + 깨진 위줄 규칙 문장(`…역려다 연`) 재작성 → 두 점 모두 62화 도해 규격(비 1.608)에 맞춰 위아래를 배경색으로 늘림(확대·축소 없음). 최종 그림5 1376×856(`0322400d…`)·그림6 1276×794(`d5d8a0e0…`), 손대기 전 원본은 `…_원본_20260917.png`.
  - [검증] 게이트 `gate_common.py` **PASS(20/20)** · E-basis 18,106 · DAV `_dav63.py` **ok=33 bad=0** · 후보 매핑 `candidates.tsv` 83행(미매핑 0).
  - [상태·미커밋] volume6 폴더(62·63화 산출물·도판)는 **미추적·미커밋**. 다음 세션에서 `session-closeout.py --commit "llm-wiki=…volume6…"`로 커밋 예정(복원포인트 JPG·도해 손대기 전 원본 제외 — volume5 관례).
  - [다음 작업] **6권 6-3(제64화) 집필** → 6-14(제75화)까지. 인프라·검증 파이프라인은 62·63화와 동일하게.

- 시각(ISO): **`2026-09-17T08:18+09:00`** — **6권 6-1·6-2(제62화 「신경과학의 도약 — 마음의 지도」·제63화 「진화 심리학 — 마음은 설계되었다」) 집필 완성** — 산출물 3종(01 본문·02 검토내용·도판의뢰서)과 도판 7자리씩 배치까지 마쳤고, 검증 파이프라인을 모두 통과했다. **미커밋·미발행**(무진님 검토·확정 몫).
  - [자동수집 · Git] 마지막 세션(2026-09-17T06:09+09:00) 이후:
    · llm-wiki `503e4061` · homepage `62d6a0f` · harness `ed0c498` · openclaw `11a8f0a`(커밋 없음) — 넷 다 origin 동기 · 작업트리 변경: llm-wiki 106(volume6 62·63화 신규) / homepage 2 / harness 3 / openclaw 5.
- [제62화(6-1 · 18쪽)] E-basis **16,208**(목표 16,200~17,000) · 각주 **35** · 단어코너 3(국소화·뇌파·연결체) · 도판 **7자리**(실사 그림1·2·4·5·7 + 도해 그림3 호문쿨루스·그림6 기본 모드 네트워크 — 무진님 제작본 2026-09-17 배치, 일곱 자리 모두 무진님 승인) · 게이트 **20/20 PASS** · DAV **ok=35 bad=0** · `candidates.tsv` 수치 43+인용 46 불일치 0.
- [제63화(6-2 · 20쪽)] E-basis **18,106**(목표 18,000~18,900) · 각주 **33**(상한 35 이내) · 단어코너 4(진화·밈·스펜드럴·적응, 전부 다체) · 도판 **7자리** — 실사 5점(그림1 다윈 1869·그림2 로렌츠와 틴베르헌 1978·그림3 윌슨 2007·그림4 성 마르코 성당 천장·그림7 공작 꼬리, §8.3 실사 1순위 기본 배치) + 도해 2점(그림5 적응 환경·그림6 왓슨 카드 — 무진님 제작본 배치 완료, 2026-09-17)) · 게이트 **20/20 PASS** · DAV **ok=33 bad=0** · `candidates.tsv` **83행(수치 35 + 인용 48) 불일치 0** · 본문 sha256 `25d2dcf0878d48af1e4022fbbfdbe3308e07aec46eebc9c5bddf0d9f3a4dd418`(59,716B).
- [보정 · 63화 도해 제작본 배치(2026-09-17)] 그림5(적응 환경)·그림6(왓슨 카드) 제작본(각 1312×816 PNG)을 본문 이미지 줄에 배치 — 파일 이름에서 `_placeholder`만 뗀 교체라 본문 글자·캡션 변화 0(59,740B → 59,716B, 24B 감소). 게이트 **20/20 PASS**·DAV **ok=33 bad=0** 재확인, 검토내용 ③·⑦과 도판의뢰서 1·2절 상태도 갱신(자리 표시본 보관).
- [집필조건 준수] ① 자료 조사 충분히 — 62화 `queries62.tsv` 103건·문서 90개, 63화 `queries63.tsv` 110건·문서 105개 ② 중학생 눈높이 문체(어려운 한자어·은유 배제) ③ 집필용 파일 접근 승인 요청 없이 진행 ④ SEP·언어별 위키 의존 않고 서사 뼈대 주체 구성 ⑤ 분량 보강 시 동어반복 회피(게이트 word-12 내부·교차 0) ⑥ 통합집필지침 준수 ⑦ 단어코너 해요체 0 ⑧ **실사 추천 후보 21종 전부 다운로드**(접촉 시트 `contact_sheet_ep63.png`·목록 `figures/README_후보목록.md`) ⑨ 게이트·DAV 파이프라인 통과.
- [대기(무진님)] ① 62·63화 **실사 1순위 배치의 승인·교체 판단**(후보 21종은 `ws_tmp/ep63-research/figures/raw/` 보관) ② 62·63화 검토·확정·발행. (63화 도해 2점은 무진님이 2026-09-17 제작본을 주셔서 배치를 마쳤다 — 임시 그림 0.)
- [상태·미커밋] `manuscripts/psychology/volume6/`(62·63화 산출물·도판)는 **아직 미추적**이다 — 무진님 검토 뒤 커밋 여부를 정하겠다(복원포인트·`ws_tmp` 비추적 유지 규칙은 불변). 심리학사 발행분은 여전히 **제1~36화(ids 12~58)**.
- [다음 작업] **6권 6-3(제64화)** 집필. (`ws_tmp/ep63-research/`에 본문 조사 캐시 105개·검증 도구 `_dav63.py`·`_cand63.py`·`_seclen63.py` 보존)

- 시각(ISO): **`2026-09-17T06:09+09:00`** — **llm-wiki 원고 창: 미커밋·미추적분 8커밋 커밋·푸시(109파일 · `fe9b4c56..7b74b8d1`) + "4·5권 원고·도판 미커밋 유지" 관행 폐지 확정(6차 ⑥ⓐ 해소).**
  - [자동수집 · Git] 마지막 세션(2026-09-16T22:58) 이후 — llm-wiki `fe9b4c56..7b74b8d1`(origin 동일 · 미추적 잔여 다수) · homepage `b2221d8` · harness `9d23167` · openclaw `11a8f0a`(커밋 없음)
  - [미커밋분 커밋·푸시 · 무진님 지시] llm-wiki 저장소의 **미커밋·미추적분을 논리 단위 8커밋(109파일)**으로 커밋·푸시 → `fe9b4c56..7b74b8d1`(origin/master 반영). 내역: 세계사 4권 95~97화 검토내용·본문·전체목차(`46fb725e`) · 심리학사 1·2·3권 02 검토내용·도판의뢰서 정비(캡션라벨 sweep·물음표 통일, `b0102e91`) · 3권 29~38화 도판 16점·도판의뢰서 4종(`729fbeb9`) · 4권 43~47화 도판 14점·47화 산출물 3종(`e1321939`) · 5권 48~58화 도판의뢰서 팔레트 정정+57화 도판 4점 확정(`8904e297`) · 5권 56·59·60화 산출물·도판(`c2045f63`) · 5권 61화 산출물·도판(`800f4fd7`) · 3권 off-peak 노트+작성지침 체크포인트(`7b74b8d1`).
  - [비추적 유지 준수] 하드 룰대로 `ws_tmp/`(3,469건)·`*_복원포인트_*`·`*-selection*`·`_intake_9`·`_tmp_agora`는 커밋 제외. 추가 제외 = 0바이트 junk 2건(`**그림`·`**그림N.**`) · 본문 미참조 중복(철학사 1권 9화 `.png` 2점·3권 38화 `_placeholder.png` 2점) · `3권_34화_그림1_보상의 두 길.zip` · `_add_corners.py`. 푸시분에 비추적-유지 대상 혼입 **0건** 검증(`git diff --name-only`).
  - [관행 폐지 · 무진님 결정] **"4·5권 원고·도판은 대체로 미커밋 유지" 관행을 폐지**한다 — "어차피 수정하면 커밋할 텐데 굳이 되돌릴 필요 있나"는 무진님 판단. 앞으로 화별 수정분은 그때그때 커밋(기존 화별 커밋 관행과 동일). 이로써 6차 노트 ⑥ⓐ(커밋 `64775ba6`에 종전 untracked 8파일이 함께 실린 점 — 미커밋 유지 관행과의 정합성)가 **해소**. 비추적 유지 규칙(`ws_tmp`·복원포인트·selection 원본)은 불변.
  - [상태] 심리학사 발행분은 여전히 **제1~36화(ids 12~58)** — 이번 커밋은 **git 기록일 뿐 검토·발행이 아니다**(4권·5권 전부 미발행 유지, 발행·확정은 무진님 직접). 4권 41~47화·5권 48~61화의 01·02 **전부 추적 완료**(미커밋 잔여 해소).
  - [부수] 브리핑 자동 발행 하드 룰 이행 — 2026-09-17 브리핑 카드뉴스 생성·푸시(커밋 `b2221d8`) · GitHub Pages **HTTP 200** 확인.
  - [다음 작업] **6권 6-1(제62화 「신경과학의 도약 — 마음의 지도」·18p)** 집필(심리학사 5권은 제61화로 마감). `F:\wiki\HANDOVER.md`(llm-wiki 인계문서)의 「주의사항」 미커밋 유지 문구·6차 ⑥ⓐ도 같은 결정으로 정리.

## 이번 세션 요약

- **제64화(6-3 · 20쪽) 집필 완성·검증 통과 + volume6(62·63·64화) 커밋·푸시**: E-basis **18,440**·각주 35·게이트 **20/20 PASS**·DAV **ok=35 bad=0** — 64화 산출물 3종은 **미발행**(검토·확정·발행은 무진님 몫). 상세는 위 「마지막 갱신」 2026-09-17 세션 블록.

## 확정·상태 변경

- 21화(2-7)~26화(2-12): **✅ 확정·발행**(ep21~26·id=43~48, 2026-09-06~07) · 27화(2-13): **✅ 확정·발행(2026-09-08 · ep27 · id=49)** — 그림2·그림3 실사 후보 무진님 확정 대기.
- 심리학사 3권(ep28~): **ep28(3-1 · 프로이트 ① — 무의식의 발견) 확정·발행(2026-09-09 · id=50)이 최신 발행분** — ep29~40은 에피소드 순서대로 확정·발행 진행(무진 지시 2026-09-10).
- 3권 34~37(3-7~3-10): **산출물 완료 — 무진님 검토·도판 확정 대기**(미확정·미발행). ep34·ep36(01/02·도판)·ep37(01/02/의뢰서) 완성 · **ep37만 커밋(2026-09-09 · llm-wiki `ebc6b040`)** · ep35(3-8)는 본문 19,556자 초고(부속·DAV 재실행·커밋 남음). 확정·발행 시 homepage SERIES_MAP·Supabase 업로드(ep34~37).

## 다음 작업
- **6권 6-4(제65화) 집필** → 6-14(제75화)까지. 파이프라인·검증은 62~64화와 동일(게이트 `gate_common.py` 20항목 · DAV · 후보 매핑 `candidates.tsv`). 조사 캐시·검증 도구 참조 = `ws_tmp/ep64-research/`.
- **무진님 대기 — 검토·확정·발행**: 62·63·64화 산출물 3종(01·02·도판의뢰서). 발행분은 여전히 **제1~36화(ids 12~58)**. 62·63화 실사 1순위 배치의 승인·교체 판단도 대기(후보 21종 = `ws_tmp/ep63-research/figures/raw/`).
- **도해 재외주 잔여**: 57화 그림5 · 58화 그림3 · 59화 그림1·2·5 · 60화 그림4 · 61화 그림1·2(팔레트 정정분) → 같은 파일명 교체(프롬프트 `ws_tmp\palette-fix\도해_팔레트_재제작_프롬프트.md`). 59화 실사 교체 판단(그림3 니스벳·그림4 여우와 신 포도)도 대기.

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

1. **62·63·64화 검토·확정·발행** — 무진님 직접(도판 확정·SERIES_MAP 등록·업로드).
2. **6-4(제65화) 집필** — 6권 잔여 6-4~6-14(제65~75화).
3. **도해 재외주 잔여 수령·교체**(57·58·59·60·61화) · **59화 실사 교체 판단**.
4. 이월 과제(3차 재발행·CC 도판 소급·각주 통일·물음표 통일)는 **6차(2026-09-16)에서 전부 완료**.
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
