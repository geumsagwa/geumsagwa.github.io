# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

## 마지막 갱신

- 시각(ISO): **`2026-09-03T16:40+09:00`** — **09-03: 17화(기능주의·제임스) 동어반복 제거·새 내용 보강 수정 완료 + 18화(의식의 흐름·『심리학 원리』) 초고 완성 — 17·18화 문장 중복·각주·도판·물음표 전수 검증 통과, 무진님 검토 대기.**
  - [17화 수정·보강] 기존 초고의 동어반복(같은 주장을 거듭 반복한 문단)을 통합·제거하고, 새 내용(가족·형제·형이상학 클럽·실용주의 어원·제임스-랑게 실천·감정 피드백 등)으로 보강 — 본문 24,123자(중복 부풀림) → 정리 후 21,415자 → 문장 정리(의문형 물음표·'자체가→은' 등 다수 교정) 최종 **약 19,078자·문장 완전 중복 0**. (백업: research-ep18/ep17_백업_20260903.md)
  - [18화(2-4) 초고 완성] 제목 '의식의 흐름 — 『심리학 원리』'. 17화와 중복을 피해 다섯 가지 성격·실질/이행·가장자리·만남/대한 앎·문학 수용(1918 싱클레어 등) 중심. **본문 21,732자(목표 18p 101%)·12절·각주16·도판3(placeholder)**. 『심리학 원리』(Project Gutenberg #57628) 원문 직접 내려 인용 — SEP/위키 각색 지양.
  - [신규 파일] llm-wiki `2권_4화_01_의식의-흐름-심리학원리.md`·`02_검토내용.md`·그림1~3 placeholder png 3종 — **17화 수정 파일(2권_3화_01, 02)과 함께 이번 커밋 대상**
  - [검증 ✅] 17화: 문장 완전 중복 0 · 각주 16↔16 연속 · 따옴표 짝수 · 전각물음표 0 · 12절 · 도판3+캡션3 / 18화: 각주 정합(16↔16) · 따옴표 짝수 · 의문형 0 · 12절 · 도판3 · 분량 21,732자
  - [자동수집 · Git] 마지막 세션(2026-09-02T07:58+09:00) 이후:
    · homepage master: HEAD 247ed2e / origin 247ed2e(오늘 카드뉴스·브리핑 자동 발행) — 인계 progress.md 미러 동기 대상
    · llm-wiki master: HEAD 80c19a20 / origin 80c19a20 — 이번 커밋: 17화 수정·18화 초고(+검토내용·도판)
    · harness main: HEAD bedb794 / origin bedb794 · 남은 미커밋(내 작업 아님): .cursor/rules/harness-handoff-first.mdc·docs/HARNESS*.md
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a (변경 없음)
  - [다음 작업] 17화·18화 무진님 검토 → 확정 → 도판 제작 → 발행 · 철학사 11화(아리스토텔레스) 집필


- 시각(ISO): **`2026-09-02T07:58+09:00`** — **09-02 마무리: 심리학 16화(2-2 구조주의 — 티치너와 내성법) 무진님 검토 반영·수정 → 전체 재검증 PASS → 확정 → 홈페이지 발행(id=38·ep16) — 15화 중복 재서술 콜백 전환·화 내부 모티프 정리·문체 수정 10건·티치너 초상(실사) 그림1 도입 + 개념 도식 3종 placeholder·목차 2-2 발행 표기·wiki 3커밋 푸시.**
  - [자동수집 · Git] 마지막 세션(2026-09-01T22:16+09:00) 이후:
    · homepage master: HEAD fe904a1 / origin fe904a1 :: fe904a1 자동: 카드뉴스 갱신 (2026-09-02) / 5e3f58a 진행 기록: 인계 갱신 (15화 확정·17화 재작성 반영) / 10cb834 진행 기록: 인계 갱신 (update-handover auto) / 697d79f 진행 기록: 인계 갱신 (15화 보강 반영) / e6a936c 진행 기록: 인계 갱신 (update-handover auto) / 293ba87 자동: 카드뉴스 갱신 (2026-09-01)
    · llm-wiki master: HEAD de7d174b / origin de7d174b ·작업트리 변경 63 :: de7d174b 심리학 16화(구조주의) 발행·목차 갱신 — 홈페이지 업로드(id=38·ep16), 목차 2-2 '초고'→'발행', 개념 도식 placeholder 3종(그림2·3·4) 파일 추가 / ccfd139c 심리학 16화 도판 보완 — 티치너 초상(Public domain, Wikimedia Commons) 그림1로 도입(§8.5 실사 처리·복원포인트), 개념 도식 3종(그림2·3·4) placeholder 유지(추후 일괄 제작)·검토내용 도판 스펙 갱신 / 389dbfe4 심리학 16화(구조주의·티치너) 검토 반영·확정 — 직전화(15화) 중복 재서술 콜백 전환(실험실 풍경·홀/커텔·민족심리학)·화 내부 모티프(통각/의지↔요소) §8 집중·문체 수정 10건(가정교사·할아버지·조용하고·마음에 새기는
    · harness  main: HEAD 4076004 / origin 4076004 ·작업트리 변경 3 :: 4076004 docs(desktop-handoff): 인계 갱신 동기 (15화 확정·17화 재작성 반영) / 9726680 docs(desktop-handoff): 인계 갱신 동기 (update-handover auto) / afbfa9d docs(desktop-handoff): 인계 갱신 동기 (15화 보강 반영) / cabb48e docs(desktop-handoff): 인계 갱신 동기 (update-handover auto)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [브리핑 자동 발행 ✅] publish-briefing: 최초 실행이 2분 타임아웃으로 npm run dev 중단 → stale agent.lock 발생·재실행 'existing lock' 스킵으로 미생성 → lock 제거 후 백그라운드 재실행으로 오늘 브리핑 생성·카드뉴스 푸시(homepage fe904a1)·배포 HTTP 200 확인 (admin/cardnews/2026-09-02.html)
  - [16화 수정·확정 ✅ (무진님 지시 "16화 수정 시작하자")] ①B안(중복+모티프): §3 실험실 풍경·§4 홀/커텔·§8 민족심리학 = 15화 재서술 → "지난 화에서 보았듯" 콜백 압축, 통각/의지↔요소 대비 §8 집중·§3·§5 경량화 ②문체 지적 10건 반영(사립 가정교사→가정교사 · 할아버지의 집→할아버지 · 곱고→조용하고 · 섞여 있었는지도→있는지 · 도장 새기기→마음에 새기는 시간 · §3 도입부 개편[평생의 스승·생물학/실험에 눈 뜬 고전학자·실험대 앞에서 익힘] · 내성(자기관찰법) · 그의 해석으로 다시 씌어진 · 보고 판단할 · 의식으로 좁혔다 · '팽팽'→'그리 격렬X' · 물음표 보완) ③분량 26,883→26,614자 · 전체 재검증 PASS(각주 29 정합·따옴표 짝수·의문형 0·구조 12절)
  - [도판 ✅ (무진님 2026-09-02 정책)] 그림1 티치너 초상(실사·Wikimedia Commons 공개도메인 603px·§8.5 실사 처리·복원포인트) 도입 + 그림2·3·4 개념 도식 placeholder 3종 파일 생성·유지(추후 다른 AI로 일괄 제작) — 검토내용 도판 스펙 갱신·그림 재번호(1~4)
  - [발행 ✅ (Supabase)] essays INSERT **id=38**·심리학사 **ep16** — 본문 전체+도판 4개 base64 인라인(relative 미잔존)·각주 29 보존·공개(anon) 읽기 확인·essay.html?id=38·blog.html HTTP 200·목차 v1 2-2 "초고"→"발행(id=38·26,614자, 2026-09-02)"
  - [Git ✅] llm-wiki 389dbfe4(확정본)→ccfd139c(초상·검토내용)→de7d174b(발행·목차) 푸시 (작업트리 변경 63은 복원포인트·selection 등 비추적 정상) · homepage fe904a1(오늘 브리핑 카드뉴스)
  - [다음 작업] 17화(2-3 기능주의 — 윌리엄 제임스와 미국 심리학) 무진님 검토 → 확정 → 도판 → 발행 · 철학사 11화(아리스토텔레스 — 학문의 제왕) 집필

- 시각(ISO): **`2026-09-01T22:16+09:00`** — **09-01 마무리: 심리학 15화(2-1 분트) 확정·발행(id=37) + 17화(2-3 기능주의·제임스) 전면 재작성 완료(초고) — 15화 전 재검증 PASS·실사 그림1·문체/맞춤법 정리·복원포인트 정리·목차 발행 표기 / 17화 다중 원천 기반 새 서사·새 문장으로 다시 집필(12절·각주16·24,123자) — llm-wiki 커밋·푸시, 16화 수정 시작.**

- 시각(ISO): **`2026-09-01T06:47+09:00`** — **09-01: 심리학 15화(2-1 분트) 보강 완료 — §5 '표상적 종합' 신규 문단·각주 추가(SEP 4.2), §2 경험론·§9 민족심리학·§11 오해·§12 철학체계 재확장, 각주 32→40, 분량 21,153→24,644자(목표 20p 달성) — 검토내용·목차 v1 갱신, wiki 커밋·푸시.**

- 시각(ISO): **`2026-08-31T19:43+09:00`** — **08-31 후속: 인계 아카이브 + 하네스 메모 경량화(51KB→23.8KB, 30KB 미만) + 안전 편집 도구·스킬 구축(progress-file-check.py 게이트 + update-handover.py 원스톱 갱신) — 5개 인계 미러 동기·harness/homepage 커밋 완료.**
  - [자동수집 · Git] 마지막 세션(2026-08-31T17:20+09:00) 이후:
    · homepage master: HEAD 0217e62 / origin 0217e62 :: 0217e62 진행 기록: 하네스 메모 경량화 동기 — Desktop\Harness 아카이브본(23.8KB<30KB) 반영 / f27ad96 진행 기록: 인계 아카이브 동기 — Desktop\Harness 최신본(optimize-handover 반영, 최근 5개 세션·7개 아카이브) 반영 / 5549616 진행 기록: Claude Code 통로 DeepInfra 직결 전환(OpenRouter 대체) — DeepInfra 가입·잔액 ·런처 5종·연결 테스트 성공·VS Code 자동 실행 버그 해결(title 제거+claude.exe 직접 실행) / 7801596 진행 기록: 심리학 15화(분트) 14화 중복 제거 수정 — 도입부·§1 축약·§3·§4 압축·각주 36→32(분량 21,153자 보강 대기) · w
    · llm-wiki master: HEAD 481fa8dc / origin 481fa8dc ·작업트리 변경 64 :: 481fa8dc 심리학 15화(분트) 14화 중복 제거 수정 — 도입부·§1 '다시, 그 방' 축약, §3(칸트의 벽)·§4(반응 시간) 14화 참조로 압축, 각주 36→32 재번호(분량 21,153자 — 목표 20p 보강 대기) / 1908f465 심리학 14화 확정·발행(id=36) + 15화(분트) 초고 + 16화(구조주의 — 티치너와 내성법) 초고 완성 — 14화 무진님 검토 수정 8건 반영·재검증 26항목 통과(분량 24,447자)·1화 교차참조 수정(분트 15화 배정 반영), 15화 본문 24,463자·도판 placeholder 3, 16화 본문 26,883자·12절·각주 29·검토내용 작성·사실 오류 3건 수정(1897 회의 장소 이타카·워시번 두 번째 회장·몰번 입학 연령), 목차 v1 2-1
    · harness  main: HEAD 5408ad3 / origin 5408ad3 ·작업트리 변경 3 :: 5408ad3 feat(scripts): update-handover.py 원스톱 인계 갱신 — collect(4 repo git 사실 초안)/apply(삽입+아카이브+5미러 동기+게이트+커밋); safe-file-edit 스킬에 자동화 연결 / 02b3ce7 feat(skills): safe-file-edit 스킬 + progress-file-check.py 게이트 — 고유 행 앵커·raw 문자열·바이트 무결성 검증 (인계 파일 잘림/제어문자 손상 예방); README 스킬 표 갱신(dav-critic 포함) / eb3729e docs(desktop-handoff): 하네스 메모 경량화 — 5개 세션 유지·꼬리 섹션 보존·Raw 문자열로 백슬래시 정확화 (23.8KB < 30KB) / 163772b doc
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - **[인계 아카이브 ✅ (30KB 하드룰)]** `optimize-handover.ps1`이 현재 문서 형식(`- 시각(ISO):`)을 인식 못 해 0건 스크립트 스킵 ↔ 새 형식 호환 보정(세션 마커·테일 섹션 보존·마지막 세션 절대인덱스 버그·UTF-8 BOM 한국어 리터럴) · 최근 5개 세션만 유지, 오래된 7개(08-30T12:56~08-27T21:35) 아카이브 — `handover-progress-archive.zip`·`progress-archive.zip` 모두 7개 포함(무손실) · 52,640→32,477B
  - **[하네스 메모 경량화 ✅ (<30KB)]** 32,477→**23,789B**(<30KB=30,720) — 상세/이력 항목 압축, 핵심(브리핑·축구일정·회원역할·시리즈·DeepInfra·git tip) 보존 · **버그 2건 겪고 해결**: ①`.find("## 하네스 메모")`가 상단 규칙 속 인라인 언급을 오인해 파일 잘림 → 행 앵커 `^##\s*제목\s*$`로 해결 ②일반 문자열 백슬래시(`\b`·`\a`·`\r`)가 제어문자로 손상 → raw 문자열로 해결(원인: bash heredoc이 `\\`→`\` 축소 + cp949 콘솔 렌더링이 은폐) — git 미러(163772b)로 복원 후 재구성
  - **[도구·스킬화 ✅]** ① `progress-file-check.py` 무결성 게이트(check·anchor·replace·sync — 고유 행 앵커·제어문자·CRLF·미러 동일) ② `safe-file-edit.md` 스킬(절차+함정 기록) ③ `update-handover.py` 원스톱 인계 갱신(collect→4 repo git 사실 초안 / apply→삽입+아카이브+5미러 동기+게이트+커밋) — harness 커밋: `02b3ce7`(도구/스킬)·`5408ad3`(update-handover)
  - **[Git ✅]** 이 세션 변경: harness `0bc7ab5`(optimize 보정)·`163772b`(미러 동기)·`eb3729e`(경량화)·`02b3ce7`(게이트/스킬)·`5408ad3`(update-handover) + homepage `f27ad96`·`0217e62`(진행 동기) — 커밋·푸시 완료 · 남은 미커밋(내 작업 아님): `.cursor/rules/harness-handoff-first.mdc`·`docs/HARNESS*.md`

- 시각(ISO): **`2026-08-31T17:20+09:00`** — **08-31 Claude Code 통로 전환 완료: OpenRouter → DeepInfra 직결 (무진님 지시 "deepseek 직판 api 사용하면서 모델만 deepseekinfra로") — DeepInfra 가입·키 발급·잔액 $5 확인 · 런처 5종 구축 · 연결 테스트 성공 · VS Code 자동 실행 버그 해결(cmd title 제거 + claude.exe 직접 실행) · 무진님 확인("잘했어... 버벅댔지만~").**
  - **[DeepInfra 직결 전환 ✅ (무진님 지시)]** OpenRouter 경유가 느려 DeepInfra 직결로 전환 — **조사 결과**: 'deepseekinfra'는 모델명이 아니라 **DeepInfra(deepinfra.com, 미국 팔로알토, 2022 설립)** 라는 제3자 호스팅 회사 · **회사 신뢰성**: 총 $133M 투자(2026-05 Series B $107M — **NVIDIA·Samsung Next·Supermicro·500 Global·Felicis** 참여), 주간 5조 토큰, SOC2/ISO27001, 90일 가동률 100% → 망할 리스크 낮음 · **비용 비교**: DeepInfra 직결(입력 $0.08/출력 $0.18/캐시 $0.016, 플랫·피크 없음) vs 직판 오프피크($0.22/$0.66/$0.007) vs 직판 피크($0.44/$1.32/$0.014) → **출력 기준 직판 대비 3.7~7.3배 저렴** · 직판 잔액 $1 남짓 → DeepInfra 잔액 **$5.00 충전 확인**(blue6074@gmail.com)
  - **[DeepInfra 설정 구축 ✅]** 새 파일 5종: `start-claude-deepinfra.ps1`(base_url `https://api.deepinfra.com/anthropic`, 모델 sonnet=DeepSeek-V4-Flash-0731/opus=DeepSeek-V4-Pro-0813/haiku=Ling-3.0-flash) · `settings.deepinfra.json`(env 블록 + autoConnectIde/autoInstallIdeExtension false) · `load/save-deepinfra-api-key.ps1` · 수정: `Claude-Code-DeepSeek.cmd` → DeepInfra 런처 호출 · 롤백 보존: OpenRouter 파일 6종 그대로 유지
  - **[연결 테스트 ✅]** `api.deepinfra.com/anthropic/v1/messages` 실호출 → **CONNECTION_OK 응답** (12in/5out 토큰) · 엔드포인트 생존(401→키 인증 성공) · DeepSeek-V4-Flash-0731 모델 페이지 존재 확인($0.08/$0.18/$0.016, 1M 컨텍스트)
  - **[VS Code 자동 실행 버그 해결 ✅ (무진님 증상 — "팝업처럼 켜졌다가 vs code 창만 열어놓고 종료")]** 원인: claude가 시작 시 **cmd 창 제목(title)을 읽어 VS Code에 전달**(Code.exe 명령줄에 "DeepInfra (DeepSeek V4 Flash 0731)" 제목이 인자로 들어감 확인) + claude.cmd 경유 시 VS Code 통합 트리거 → **해결 2건**: ①`Claude-Code-DeepSeek.cmd`에서 `title` 명령 제거 ②`start-claude-deepinfra.ps1`에서 claude.cmd 대신 **claude.exe 직접 실행** · 부수 조치: `CLAUDE_CODE_ENTRYPOINT=cli`·`CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL=1`·`CLAUDE_CODE_AUTO_CONNECT_IDE=false` 사용자 환경변수 영구 등록 · `.claude.json` `tengu_ide_rc_auto_enable=false`·`officialMarketplaceAutoInstalled=false` 초기화(백업 .bak-vscode-fix/.bak-marketplace) · PATH code 스텁(stub-bin) 생성 · **검증**: code-stdin 파일 18→18(새로 안 생김) · VS Code 프로세스 0→0 ✅
  - **[Git ⚠️]** 설정 파일들은 저장소 밖(`~\.claude`, `OneDrive\바탕 화면\AI`)이라 커밋 대상 아님 — 인계 문서만 갱신
  - **[다음 작업]** 무진님: `AI\Claude-Code-DeepSeek.cmd` 더블클릭 → DeepInfra 직결로 클로드 코드 실행 (버벅임 느끼시면 Flex 티어·Priority 티어 옵션 검토 가능) · 심리학 15화 분량 보강 → 검토 → 확정 · 16화 검토 → 확정 · 17화 집필

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
1. **심리학사 16화(2-2 구조주의 — 티치너와 내성법) ✅ 확정·발행(2026-09-02, ep16·id=38)** — 전체 재검증 PASS(26,614자·각주 29)·무진님 지적 10건 반영·15화 중복 콜백 전환·티치너 초상(실사) 그림1 도입+개념 도식 3종 placeholder·목차 2-2 발행 표기
2. **심리학사 17화(2-3 기능주의)·18화(2-4 의식의 흐름) 무진님 검토 → 확정 → 도판 → 발행** — 17화 동어반복 제거·새 내용 보강 수정 완료(2026-09-03, 약 19,078자·문장 중복 0) · 18화 초고 완성(2026-09-03, 21,732자·12절·각주16) — 무진님 검토 대기
3. **철학사 11화(아리스토텔레스 — 학문의 제왕, 1-13) 집필**
4. **✅ DeepInfra 통로 유지(2026-08-31 전환)** — `Claude-Code-DeepSeek.cmd` 실행 → **DeepInfra 직결**(DeepSeek-V4-Flash-0731, api.deepinfra.com/anthropic)로 열림 · 잔액 $5 · 버벅임 시 Flex 티어·Priority 티어·다른 provider(OpenInference $0.03) 검토 가능

## 하네스 메모
- **브리핑 축구 일정 (08-14):** 카테고리 `축구 스타`(손흥민·이강인) · `##7 축구 일정`(LAFC 18966·아틀레티코 1068·한국 451) — ESPN scoreboard `site.api.espn.com/apis/site/v2/sports/soccer/{usa.1|esp.1|fifa.world}/scoreboard?dates=YYYYMMDD-YYYYMMDD`(하이픈 없음·KST=UTC+9·EDT 버킷 URL[오늘-1,오늘+6]→KST 필터) · 카드 `cat-football`+`dot-football`(주황) · TheSportsDB/KFA 보조
- **스킬화·개인화·llm-wiki (08-13):** ① `harness\skills\`(규율+카드: supabase-management-api·github-pages-cache) ② 브리핑 `##6 개인 컨텍스트` — openclaw `buildPersonalSection()`(F:\wiki\wiki\personal\) ③ 개인 위키 `F:\wiki\wiki\personal\` · 카드 `cat-personal`(금색 #c4a87a)
- **회원 4단계 역할 (08-13):** member(0)<staff(1)<manager(2)<admin(3) · `setup_members.sql` 통째 실행(멱등, `to_old` 금지 — pg-meta 미지원) · test3/test4=staff · role변경=admin만 · 회원관리=manager 이상, Diary=admin만
- **인계 사본·아카이브:** `Desktop\Harness\progress.md`·`handover-progress.md`와 `project\homepage\progress.md`·harness `docs\desktop-handoff\` 미러 동기 · 30KB 초과 시 `harness\scripts\optimize-handover.ps1`(ISO 마커·최근 5세션·테일 보존)
- **게발이 브리핑 자동 발행:** `harness\scripts\publish-briefing.ps1` — 인계 읽 즉시 실행(멱등 스킵) · openclaw `npm run dev`→`generate-cardnews.ps1`→homepage 커밋→GH Pages 200 · 로그 `F:\backup\briefing-YYYY-MM-DD.log` · 옵션 `-Date`/`-Force`
- **철학사 1권:** 1~10화 확정·업로드 완료(id 8·15·16·17·18·27·29·30·31·32) · 11화(아리스토텔레스·1-13) 집필 예정 · 업로드 스킬 `openclaw-local-mvp\.claude\skills\philosophy-essay-upload\SKILL.md`
- **심리학사 1권:** 1~14화 확정·업로드 완료(id 12·13·14·19·20·21·22·23·33·34·36) · 집필지침 §6.2 분량표·목차 갱신
- **심리학사 2권:** 15화(2-1 분트) **✅ 확정·발행(2026-09-01, id=37)** · 16화(2-2 구조주의) **✅ 확정·발행(2026-09-02, ep16·id=38)** · 17화(2-3 기능주의) **동어반복 제거·새 내용 보강 수정 완료(2026-09-03, 약 19,078자·문장 중복 0)** · 18화(2-4 의식의 흐름) **초고 완료(2026-09-03, 21,732자·12절·각주16·도판3)** — 17·18화 무진님 검토 대기
- **Claude Code 통로 (DeepInfra 직결, 08-31):** 실행 `OneDrive\바탕 화면\AI\Claude-Code-DeepSeek.cmd` → `api.deepinfra.com/anthropic`(DeepSeek-V4-Flash-0731, $0.08/$0.18/$0.016, 피크 없음) · 키 `~\.claude\deepinfra-api-key.local` · 잔액 $5(blue6074@gmail.com) · `/login` 금지 · VS Code 자동실행 버그해결: cmd title 제거+claude.exe 직접 실행 · 롤백: OpenRouter 6종·딥시크 직판 런처 보존
- **Git tip:** LLM Wiki `origin/master` · homepage `origin/master`(`project\homepage\progress.md` 동기) · harness `origin/main`(`docs\desktop-handoff\` 미러) · openclaw `origin/main` · CRLF `M`은 `git diff HEAD --stat` 확인
- **(완료 참조 — 상세는 아카이브·저장소):** 4개 PDF 파이프라인(피그마·예일대지성사·AI Agent·듀얼브레인 → `G:\내 드라이브\Claude\`) · 철학사수업1 1~11부 교정 → `F:\wiki\raw\`(2c2f0775·de65a7e4) · HWP→TXT `harness\scripts\convert-hwp-to-txt.ps1`(pyhwp) · 카드뉴스·홈페이지 DESIGN.md 1~3단계(`homepage\admin\cardnews\DESIGN.md`→style.css :root→CLAUDE.md) · openclaw-local-mvp(축구/개인 카드) · confidence:low 0 · Google OAuth 토큰 만료(refreshAccessToken)
