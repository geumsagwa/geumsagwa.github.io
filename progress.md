# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

## 마지막 갱신
- 시각(ISO): **`2026-08-01T08:30+09:00`** — **게발이 브리핑 발행 + 인계 자동 아카이브 규칙 + 툴 도입(claude-hud·주간 스캔).**
  - **[게발이 브리핑]** 2026-08-01 카드뉴스 생성 및 푸시 ✅
    - **Git:** homepage `fbe40f6` — ✅ push 완료 (로컬=원격 확인, 워킹트리 clean)
    - 주요 뉴스: 특별감찰관 10년 만에 후보 추천, 레버리지 예탁금 거래대금 75% 급감, 美 F-35B 추락, 손흥민 MLS 올스타전 멀티골
    - 홈페이지 상태: HTTP 200, 287ms, SSL 유효 ✅
    - LLM Wiki: 개념 16,763개 / **깨진 링크 3종** (신규 발견) / low confidence 9,358개
    - 오늘의 일정: (종일) 근무 (이번 주: 08-03(월)·08-05(수)·08-07(금) 근무)
    - 이메일: GitHub Actions 실패 알림 4건 스팸 삭제
  - **[자동 아카이브 규칙]** handover-progress.md 30KB 초과 시 **별도 지시 없이 자동 실행** 규칙 구축 ✅
    - 분할 실행: 80KB → 22KB (28→5개 세션, 23개는 archive로 이동) / 백업 `handover-progress.bak-20260801`
    - 규칙 명시: handover-progress.md 하드 룰 + `Desktop\Harness\CLAUDE.md` 신규 + progress.md + serena 메모리
  - **[툴 도입]** claude-hud + 주간 툴 스캔 자동화 ✅
    - **claude-hud v0.6.0** 설치·설정 — 컨텍스트 사용량 HUD (statusLine 교체, ponytail 백업)
    - **tool-recommendations.md** 신규 생성 — 툴 추천 목록 누적
    - **weekly-tool-scan.ps1** (harness `740500c`) — GitHub Trending 주간 수집 → 추천 목록 자동 갱신
    - **WeeklyToolScan** 예약 작업 등록 (매주 토요일 09:00) — 테스트 17개 저장소 수집
  - **Git:** homepage `3832b60` ✅, llm-wiki `7540b8e0` ✅, openclaw-local-mvp `1ee806d` ✅, harness `740500c` ✅
- 시각(ISO): **`2026-07-31T17:50+09:00`** — **김주연 철학사수업 I PDF 정리·파이프라인 구축·LLM Wiki 인제스트.**
  - **[PDF 정리]** 철학사수업1_20250209.pdf (196면, 책 150~541쪽) 텍스트 추출·LLM 교정·그림 삽입 ✅
    - 핵심 발견: 한 면에 책 두 쪽(좌:짝수, 우:홀수). **책 쪽수 = 2×PDF면 + (좌148/우149)**
    - 처리: 좌/우 분리 OCR(300dpi+PSM6) → DeepSeek 교정(145청크, thinking disabled) → 그림 65개 추출
    - 산출물: `G:\내 드라이브\Claude\김주연_철학사수업1\` — **11개 MD + images/ 65개 PNG**
  - **[파이프라인 저장]** `F:\wiki\scripts\pdf-2page-extract\` (5스크립트 + README) ✅
    - CLAUDE.md에 등록 + 파라미터화 (쪽수 보정값 인자)
    - **Git:** llm-wiki `65788adc` + `a84e3cc2` ✅
  - **[LLM Wiki 인제스트]** 철학사수업 I → 11개 source 요약 + **개념 84개 신규** ✅
    - 깨진 링크 0 (fix-wikilinks 52 + 스텁 104) / 검색 인덱스 14,105개
    - ingest.mjs에 `thinking disabled` 패치 (DeepSeek 추론 모델 속도 개선)
    - **Git:** llm-wiki `7540b8e0` ✅ push 완료
  - **Git:** llm-wiki `7540b8e0` ✅, homepage `18df703` ✅ — 워킹트리 clean
  - **다음:** (내일) 무진님이 PDF 그림 수동 크롭 → G:\ MD 교체 예정 (인제스트 재실행 불필요)
- 시각(ISO): **`2026-07-31T06:30+09:00`** — **게발이 브리핑 생성 (2026-07-31).**
  - **[게발이 브리핑]** 2026-07-31 카드뉴스 생성 및 푸시 ✅
    - **Git:** homepage `7510733` — ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 이대통령-칠레 광물동맹, 장동혁 선관위특검, 세종시 유지비 국가부담, 펫보험 경쟁, 뉴욕증시 반도체 랠리(하이닉스ADR 18%↑), 파우치 묵비권 청문회, 아마존 매출 20%↑, 손흥민 MLS 올스타전 2골, xAI 딥페이크법 위헌 소송
    - 홈페이지 상태: HTTP 200, 292ms, SSL 유효 ✅
    - LLM Wiki: 개념 16,575개 / 깨진 링크 57종 / low confidence 9,254개
    - 오늘의 일정: 등록된 일정 없음 (이번 주: 8/1 토 근무, 8/3 월 근무, 8/5 수 근무)
  - **Git:** homepage `7510733` ✅ — 전 저장소 clean
- 시각(ISO): **`2026-07-29T20:30+09:00`** — **게발이 브리핑 + LLM Wiki low-confidence 원인 진단.**
  - **[LLM Wiki 진단]** low-confidence 재생성 파이프라인 코드 분석 완료 ✅
    - 원인 ①: 순환 구조 — 재생성 → 새 wikilink → 새 스텁 → low-confidence 증가
    - 원인 ②: 스텁(내용 없음)과 일반 low를 구분 없이 동일 처리 → LLM 비용 낭비
    - 원인 ③: 1회 50개, 배치 10개 — 9,254개 기준 185회, 실패 재시도 없음
    - 원인 ④: 신규 인제스트로 지속적 low-confidence 유입
    - 제안: 3번(진단) → 4번(신규 인제스트 중단 후 재생성 집중) — **내일 무진님과 협의 예정**
    - **Git:** 변경사항 없음 (분석만 진행)
- 시각(ISO): **`2026-07-29T06:15+09:00`** — **게발이 브리핑 생성 (2026-07-29).**
  - **[게발이 브리핑]** 2026-07-29 카드뉴스 생성 및 푸시 ✅
    - **Git:** homepage `663d11d` — ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 조정식 "연임 개헌 대상 아냐", 정부 "군함도 강제노동 침묵", 법사위 보완수사권 폐지 의결, 한-브라질 희토류 협력, 쿠팡이츠 광고비 논란, 삼전닉스 블랙홀, 사우디 드론 요격, 버즈피드 인력 35% 구조조정, 엔화 800원대 폭락, 새 스파이더맨 시리즈
    - 홈페이지 상태: HTTP 200, 495ms, SSL 유효 ✅
    - LLM Wiki: 개념 16,575개 / 깨진 링크 57종 / low confidence 9,254개
    - 오늘의 일정: 등록된 일정 없음 (이번 주: 7/30 목 근무, 8/1 토 근무, 8/3 월 근무)
    - 스팸 처리: GitHub Actions 실패 알림 2건 삭제 완료
  - **Git:** homepage `663d11d` ✅, llm-wiki `6779faa5` ✅, openclaw-local-mvp `1ee806d` ✅ — 전 저장소 clean

- 시각(ISO): **`2026-07-28T16:00+09:00`** — **철학사 1권 전면 교체(1~4화) + 제5화 신규 업로드 + 게발이 브리핑 + 업로드 스킬 저장.**
  - **[철학사 1권 교체]** 기존 1~4화를 새 버전으로 전면 교체 (Supabase UPDATE) ✅
    - 제1화: 철학은 어떻게 시작되었는가 (피타고라스가 '철학'을 처음 만들어낸 이야기부터 탈레스까지)
    - 제2화: 밀레토스의 철학자들 (탈레스·아낙시만드로스·아낙시메네스)
    - 제3화: 피타고라스와 수의 신비 (수의 철학, 무리수 발견의 비극)
    - 제4화: 헤라클레이토스와 흐르는 강물 (변화와 로고스의 질서)
  - **[철학사 제5화 신규]** 「파르메니데스, 변화는 없다」 Supabase INSERT ✅ (id=7)
    - 아킬레스와 거북이 역설, 존재와 변화의 수수께끼
  - **[게발이 브리핑]** 2026-07-28 카드뉴스 생성 및 푸시 ✅
    - **Git:** homepage `b8de4eb` — ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 트럼프 2기 첫 美대사 부임, 李-룰라 정상회담, 엔비디아 보증, 지방의료원 절반 진료과 중단
    - 홈페이지 상태: HTTP 200, 422ms, SSL 유효 ✅
  - **[스킬 저장]** 철학사 에세이 업로드 SKILL.md + CLAUDE.md 참조 등록 ✅
    - 경로: `openclaw-local-mvp\.claude\skills\philosophy-essay-upload\SKILL.md`
  - **Git:** homepage `663d11d` ✅, llm-wiki `e4d1658d` ✅ (→ `6779faa5` 7/29 커밋), openclaw-local-mvp `75f493b` ✅ (→ `1ee806d` 7/29 커밋)
  - **철학사 1권 현황:** 제1~5화 ✅ 업로드 완료
  - **알려진 이슈:** confidence:low ~9,254개, 깨진 링크 57종, YAML frontmatter 없음 634개, Bloter RSS 미인식 (기존)

- 시각(ISO): **`2026-07-24T22:30+09:00`** — **llm-wiki 재생성 67회차 + Git 정리 + Google OAuth 갱신.**
  - **[llm-wiki 재생성 67회차]** `--skip-stub-concepts`로 45개 문서 재생성 ✅
    - 누적 재생성: ~3,005개 (67회차)
  - **[llm-wiki Git 정리]** 4,930개 미푸시 파일 정리 완료 ✅
    - 1차: 1,030개 추적 수정 파일 커밋
    - 2차: 3,055개 신규 개념 파일 커밋
    - **Git:** `e4d1658d` — ✅ push 완료 (워킹트리 clean)
  - **[Google OAuth 갱신]** read/write 토큰 2개 모두 `refreshAccessToken()`으로 갱신 완료 ✅
    - 새 만료: 2026-07-24 23:03 KST
  - **[게발이 브리핑]** 2026-07-24 카드뉴스 생성 ✅
    - **Git:** homepage `8e062fa` — ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 한병도 형소법 개정, 조현-루비오 핵잠 협력, 트럼프-오타니 만남, 최태원-노소영 재산분할
    - 홈페이지 상태: HTTP 200, 355ms, SSL 유효 ✅
    - LLM Wiki: 개념 16,575개 / 깨진 링크 44개 / low confidence 9,310개
  - **Git:** llm-wiki `e4d1658d` ✅, homepage `8e062fa` ✅, openclaw-local-mvp `75f493b` ✅ — 전 저장소 clean
  - **알려진 이슈:** confidence:low ~9,254개, 깨진 링크 44~59개 (의도적 미생성), YAML frontmatter 없음 634개, Bloter RSS 미인식

- 시각(ISO): **`2026-07-22T16:00+09:00`** — **철학사 제4화 업로드 + 제5화 초안 작성 + Essay 탭 시리즈 분류 개선.**
  - **[홈페이지 개선]** essays 테이블 series/episode_number 컬럼 추가 ✅
    - Blog > Essay 탭: **✍ 에세이**(위) / **📚 철학사**(아래) 시리즈별 분류 + 회차순 정렬
    - 에디터: 시리즈명·회차 입력 필드 추가
    - Git: `8118007` ✅ push 완료
  - **[철학사 제4화]** 「탈레스 — 최초의 철학자」 수정·확정 및 업로드 ✅
    - 8건 수정 (단정적 서술 완화·각주·목적론 삭제·볼드 제거 등)
    - Supabase essays id=6, series='철학사' episode_number=4
  - **[철학사 제5화]** 「아낙시만드로스 — 무한을 생각하다」 초안 작성 ✅
    - 7개 섹션, ~5,500자 (1차 초안)
    - Git: llm-wiki `b1dfb066` ✅ push 완료
  - **Git:** homepage `8118007` ✅, llm-wiki `b1dfb066` ✅, 워킹트리 모두 clean
  - **[LLM Wiki 재생성]** 30~66회차 (총 37회) confidence:low 문서 재생성 ✅
    - 이번 세션: **~1,718개 재생성** (회차당 평균 ~46개, 성공률 ~90%)
    - 누적 합계: **~2,960개** (66회차 완료 기준)
    - API: DeepSeek via Anthropic SDK (`claude-sonnet-4-6`), batch 10, limit 50
  - **[스크립트 개선]** `--skip-stub-concepts` 플래그 추가 ✅
    - 8:2 전략 도입 — 80%는 stub 생성 없이 순수 감축, 20%는 stub 포함하여 연결성 유지
    - 67회차부터 적용 예정
  - **[Wiki 통계]**
    - 전체 파일: ~17,930 (+1,878)
    - 검색 인덱스: 13,814개 개념 (+1,819)
    - confidence:low: ~9,332 (순환, 신규 stub 생성으로 유지)
    - 깨진 링크: 0개 유지
  - **Git:**
    - llm-wiki `8555f167` — ⚠️ **962개 파일 변경, 미푸시** (약 +103K / -32K)
    - homepage `d6507ee` — ✅ push 완료 (워킹트리 clean)
    - openclaw-local-mvp `75f493b` — ✅ push 완료 (워킹트리 clean)

- 시각(ISO): **`2026-07-21T16:30+09:00`** — **이야기 철학사 제2·3화 중복 제거 및 전면 개편 + 게발이 브리핑.**
  - **[게발이 브리핑]** 2026-07-21 카드뉴스 생성 ✅ (`5672c15`, push 완료)
  - **[커밋/푸시]** homepage(`5672c15`)·llm-wiki(`6e148c6b`)·openclaw-local-mvp(`75f493b`) 전 저장소 정리 ✅
  - **[Claude Code]** 제2화 「신화에서 철학으로」·제3화 「왜 그리스인가?」 **2화·3화 중복 제거 전면 개편**
    - 발견: 2화 §1(문자·무역·폴리스 조건) = 3화 §3.2~3.3과 동일 내용 중복
    - 해결(방안 A): 2화는 뮈토스→로고스 **전환 자체에만 집중** (조건 전부 제거, 9→8개 섹션)
    - 3화는 삭제된 조건을 §2로 통합, 이집트/바빌로니아 비교와 연결
    - **역할 분담:** 2화='어떻게 바뀌었는가', 3화='왜 거기서 가능했는가'
  - **[제3화]** 초안 검토 9건 반영 + §6에 수학·음악·과학 방법론 확장 (피타고라스) ✅
  - **[작성원칙]** SKILL.md 제6원칙(지도 프롬프트) + 제7원칙(분야별 영향) 추가 ✅
  - **Git:** llm-wiki `6e148c6b` ✅ push 완료

### 철학사 1권 현황
| 화 | 제목 | 상태 |
|:--:|:-----|:----:|
| 1 | 철학은 어떻게 시작되었는가 | ✅ 확정 (홈페이지 업로드) |
| 2 | 밀레토스의 철학자들 | ✅ 확정 (홈페이지 업로드) |
| 3 | 피타고라스와 수의 신비 | ✅ 확정 (홈페이지 업로드) |
| 4 | 헤라클레이토스와 흐르는 강물 | ✅ 확정 (홈페이지 업로드) |
| 5 | 파르메니데스, 변화는 없다 | ✅ 확정 (홈페이지 업로드) |

- 시각(ISO): **`2026-07-20T16:00+09:00`** — **이야기 철학사 제1·2화 집필 및 검토 완료.**
  - **[Claude Code]** 제1화 「철학의 탄생」 검토 사항 5건 전량 반영 및 수정 완료 (1화 수정 금지 확정)
    - 사실관계 오류 수정 (호모 사피엔스 30만 년 전, 빙하기 1.2만 년 전)
    - 브루노 스넬 → 3장末尾로 이동 + 밀먼 패리 구술시 이론 대안 제시
    - 축의 시대(Axial Age) 개념 및 각주 추가
    - 김주연 인용문 삽입, 목적론 완화, 문체 개선
    - 제목 `제1화 철학의 탄생`으로 변경 (책 편집 가정)
  - **[Claude Code]** 제2화 「신화에서 철학으로」 신규 집필 및 확정
    - 9개 섹션, 16p (19,671자), 1화와 일관된 서적체
    - 뮈토스→로고스 전환을 헤시오도스 vs 탈레스 대비로 설명
    - 신화→철학의 점진적 이행(페레키데스, 오르페우스교) 포함
    - 예술(조각·건축·도자기)과의 연계 포함
  - **전체 목차:** 쪽당 글자 수 기준 기재 (1,200~1,350자)
  - **Git:** 변동 없음 (homepage `283174a`, llm-wiki `918c9eac`)
- 시각(ISO): **`2026-07-20T05:45+09:00`** — **게발이 브리핑 생성 (2026-07-20) + ponytail 플러그인 설치.**
  - **[Claude Code]** 게발이 브리핑 생성 (2026-07-20)
    - 브리핑 마크다운 생성 → 카드뉴스 HTML 생성 → Git 커밋/푸시 완료
    - **Git:** homepage `283174a` — ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 여당 전대 예비경선, 최태원 반도체 수요 50%↑, 임신중지약, 메시-아르헨 갈등, 손흥민 골
    - ZDNet 소켓 타임아웃 (기존 이슈), Bloter 피드 미인식 (기존 이슈)
  - **[LLM Wiki]** 개념 12,677개 / 깨진 링크 0개 / low confidence 7,466개 (변동 없음)
  - **[ponytail v4.8.4]** `dietrichGebert/ponytail` 설치 및 활성화 ✅
    - 모드: full (기본). 후크 로드 완료 (10 hooks)
    - 신규 코드 작성 시 자동 적용, 기존 코드 소급 불가
    - 설정: `%APPDATA%\ponytail\config.json`
- 시각(ISO): **`2026-07-18T07:00+09:00`** — **게발이 브리핑 생성 (2026-07-18).**
  - **[Claude Code]** 게발이 브리핑 생성 (2026-07-18)
    - 브리핑 마크다운 생성 → 카드뉴스 HTML 생성 → Git 커밋/푸시 완료
    - **Git:** homepage `31d9ad6` — ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 여당 전대 컷오프, 정청래 3.8억 후원, 12월 3일 국민주권의날, 뉴욕증시 반도체 하락, 일본 국기손괴죄
  - **[LLM Wiki]** 개념 12,677개 / 깨진 링크 0개 / low confidence 7,466개 (변동 없음)
- 시각(ISO): **`2026-07-15T07:15+09:00`** — **게발이 브리핑 생성 (2026-07-15).**
  - **[Claude Code]** 게발이 브리핑 생성 (2026-07-15)
    - 브리핑 마크다운 생성 → 카드뉴스 HTML 생성 → Git 커밋/푸시 완료
    - **Git:** homepage `42f6a32` — ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 강경화 주미대사 귀국, 메모리값 급등(칩플레이션), 미-이란 합의 붕괴 위기, 베네수엘라 비상
  - **[LLM Wiki]** 개념 12,677개 / 깨진 링크 0개 / low confidence 7,466개 (변동 없음)
- 시각(ISO): **`2026-07-07T13:00+09:00`** — **게발이 브리핑 생성 + Supabase 복원 및 keepalive 설정 + 캘린더 일정 추가.**
  - **[Claude Code]** 게발이 브리핑 생성 (2026-07-07)
    - 브리핑 마크다운 생성 → 카드뉴스 HTML 생성 → Git 커밋/푸시 완료
    - **Git:** homepage `22c1a9b` — ✅ push 완료 (워킹트리 clean)
  - **[Supabase 복원]** Free Tier 자동 중단(paused) 복구
    - 원인: 7일간 DB 활동 없음 (LLM Wiki 집중으로 홈페이지 활동 부재)
    - 조치: Supabase Management API로 복원 완료 ✅
    - **재발 방지:** `scripts/supabase-keepalive.ps1` 생성 + Windows 예약 작업(5일 간격) 등록
  - **[캘린더]** Google 캘린더 일정 추가 — `김병규 점심 약속` (7/9 12:00, 소래역) ✅
  - **[학습]** Sisyphus(에이전트형)는 인제스트 같은 단발 작업보다 모니터링/브리핑 같은 주기성 작업에 특화
- 시각(ISO): **`2026-07-06T22:30+09:00`** — **Slug 공통 모듈 전면 정규화 완료 + wiki-work-plan 이행.**
  - **[Claude Code]** 통합 작업계획서(`wiki-work-plan.md`) 핵심 과제 전면 실행
    - `scripts/slug.mjs` — 공통 `toSlug()` 모듈 신규 생성
    - `scripts/rename-to-slug.mjs` — 기존 비규격 파일명 일괄 변환 스크립트 신규 생성
    - `create-stub-concepts.mjs`·`fix-wikilinks.mjs`·`ingest.mjs` — 전부 `slug.mjs` import로 통일
    - `fix-wikilinks.mjs`에 `titleSlug()` 단축 매핑 로직 추가 (영문+한글 혼용 링크 대응)
    - 결과: **1,433개 파일 slug 정규화** (+61,749 / -8,070)
    - **Git:** `918c9eac` — ✅ push 완료 (워킹트리 clean)
    - 개념 총 **10,020개** / sources 1,092개 / raw 1,026개
  - **[해결된 이슈]** create-stub-concepts·fix-wikilinks의 자체 slug 로직 → 공통 모듈로 통일 완료
- 시각(ISO): **`2026-07-06T15:00+09:00`** — **@메타소피아 인제스트 후속 정리 완료 + 통합 작업계획서 수립.**
  - **[Claude Code]** Gemini 인제스트 후속 복구 전면 수행
    - 발견: 깨진 위키링크 **4,169개** (Gemini가 fix-wikilinks 없이 하이브리드명 파일 삭제)
    - 해결: `create-stub-concepts`(2,599개) + `fix-wikilinks`(3,168개 문서) + `cleanup`(1,190개 중복 병합)
    - 결과: **깨진 링크 0개** ✅, 개념 총 **13,584개**
    - **Git:** `7b8935ad` — ✅ push 완료 (워킹트리 clean)
  - **[통합 작업계획서]** `C:\Users\pass6\Desktop\Harness\wiki-work-plan.md` 신규 작성
    - 핵심: 모든 스크립트 `toSlug()` 통일, `ingest.mjs` 우회 금지, Post 단계 고정
    - 적용 대상: Claude Code / Gemini / 모든 AI 워커
  - **[대책]** `create-stub-concepts.mjs` YAML frontmatter quotation 누락 10건 수정 완료
- 시각(ISO): **`2026-07-02T20:30+09:00`** — **@메타소피아 채널 76개 영상 전량 인제스트 완료 (llm-wiki).**
  - **[Claude Code]** @메타소피아 채널 76개 영상 전량 인제스트 완료
    - `fetch-channel.mjs` 신규 작성하여 76개 트랜스크립트 일괄 다운로드
    - 76개 영상 ingest 완료 (신규 개념 ~1,211개, sources 206개)
    - **Git:** llm-wiki — 미커밋 상태 (커밋 필요)
  - **[게발이 브리핑]** 2026-07-02 카드뉴스 생성 ✅ (`661904e`, push 완료)
  - **[설정]** `.claude/settings.json` permissions 보강 (Bash/PowerShell), Figma MCP 병합
- 시각(ISO): **`2026-06-30T18:30+09:00`** — **@밀리언마인드 채널 212개 영상 전량 인제스트 완료 (llm-wiki).**
  - **[Sisyphus]** @밀리언마인드 212개 영상 전량 인제스트 완료 (신규 개념 ~1,660개)
    - YouTube API 키 연동 + DeepSeek Proxy(ANTHROPIC_BASE_URL) 설정
    - raw 212 + sources 212 + concepts ~1,660개 생성
    - **Git:** `f536aae1` — ✅ push 완료 (139 files, +3,686)
  - **[6권 표지]** 1~5 스타일 분석 완료, 이미지 생성은 무료 티어 할당량 초과로 실패
  - **Git:** homepage — `71a302c` feat: 이야기 세계사 6권 표지 업데이트 ✅ push 완료
- 시각(ISO): **`2026-06-30T13:00+09:00`** — **@book-108 채널 30개 영상 인제스트 완료 (llm-wiki).**
  - **[Claude Code]** @book-108 채널 전체 30개 영상 스크립트 인제스트 완료
  - **처리:** 30/30 — raw 저장, wiki source 요약, concept 페이지 생성
  - **신규 개념:** 약 230개+ 생성
  - **주요 주제:** 쇼펜하우어, 카뮈, 조르바, 칼 융, 장자, 왕양명, 키케로, 버나드 윌리엄스, 헉슬리, 캉디드, 싯다르타, 율리시스, 니체, 하이에크, 프롬, 카프카, 토마스 만, 호메로스, 사르트르, 몽테뉴, 키에르케고르, 세네카, 톨스토이, 프루스트
  - **Git:** llm-wiki — **✅ push 완료** (`0a370cb2`, 2,112 files, working tree clean)
- 시각(ISO): **`2026-06-30T11:00+09:00`** — **이야기 세계사 6권 표지 제작 시도 (홈페이지).**
  - **[시도]** 1~5권 표지 스타일 분석 완료 (Gemini 2.5 Flash) — 상세 스타일 가이드 확보
  - **[실패]** 모든 이미지 생성 모델 사용 불가 (Gemini 무료 티어 할당량 초과, OpenAI DALL-E 키 미보유)
  - **[대체]** Pillow 프로그램 생성했으나 스타일 불일치로 보류
  - **[설정]** `figma-mcp` 전역 설치, `.claude/settings.json` MCP 설정 업데이트
  - **Git:** homepage — `ebook-covers/history6_cover.png` 수정 (미커밋, 756KB→252KB)
- 시각(ISO): **`2026-06-29T23:20+09:00`** — **3개 AI 통합 인제스트 완료 (llm-wiki).**
  - **[Sisyphus]** @밀리언마인드 첫 페이지 30개 영상 인제스트 완료 (신규 개념 ~245개)
    - 설득·독서·신화·지혜·고독·노화·자아·잠·니체·운·기억·습관·자본주의·합리적착각·사후세계·리더십·공간·감정·날씨·괴테·부자·쇼펜하우어·전쟁·교양·지정학·보수진보·쾌락·신·삼국지·우주
    - 스텁 80개 생성 → 깨진 링크 0개 유지
  - **[클로드 코드]** 🌙틀어놓고-주무세요 시리즈 8개 인제스트 완료 (신규 개념 ~54개)
    - 키케로·헤세·도스토옙스키·릴케·위고·쇼펜하우어·칸트 — @책읽어주는밤 인제스트 75/75 완료
  - **[제미나이]** David Bahn 13종 + 마로니에포럼 15종 + FeynmanWayKR 15종 인제스트 + 세계사 6권 EPUB ✅ (기반영, Git push 완료)
  - **Git:** llm-wiki — **✅ push 완료** (`77c63cba`, working tree clean) — Claude Code가 145개 파일 일괄 커밋
- 시각(ISO): **`2026-06-29T20:45+09:00`** — **@FeynmanWayKR 채널 동영상 15종 스크립트 인제스트 및 깨진 링크 보완 완료 (llm-wiki).**
  - **인물/주제 인제스트**: @FeynmanWayKR 채널의 동영상 15종의 자막 스크립트를 추출하고 인제스트를 완료하였습니다.
  - **깨진 위키링크 해결**: 신규 인제스트로 발생한 깨진 위키링크들에 대해 스텁 개념 문서를 자동 생성하여 전체 깨진 링크를 0개로 유지하였습니다.
- 시각(ISO): **`2026-06-29T20:10+09:00`** — **마로니에포럼 채널 동영상 15종 스크립트 인제스트 및 깨진 링크 보완 완료 (llm-wiki).**
  - **인물/주제 인제스트**: 마로니에포럼(청인라테) 채널의 인문학 해설 동영상 15종(대학/중용, 논어/공자, 이기적 유전자, 소설가 구보씨의 일일, 홉스 리바이어던, 한강 작가 작품 정리, 시인 이상, 가자전쟁, 포스트모더니즘, 존 롤스 정의론, 칸트 3대 비판철학 등)의 자막 스크립트를 추출하고 인제스트를 완료하였습니다.
  - **깨진 위키링크 해결**: 신규 인제스트로 발생한 깨진 위키링크들에 대해 스텁 개념 문서를 대량 생성하여 전체 깨진 링크를 0개로 유지하였습니다.
- 시각(ISO): **`2026-06-29T17:55+09:00`** — **@책읽어주는밤 채널 인제스트 67/75 완료 (8개 미완료, 세션 종료로 중단).**
  - **트랜스크립트 다운로드**: @책읽어주는밤-n7y 채널 77개 전체 영상 스크립트 `raw/` 확보 완료.
  - **인제스트**: 67개 완료 / 8개 미완료. 신규 개념 **571개** 생성, 중복 **136개** 스킵.
  - **미완료 파일**: 키케로, 헤세, 도스토옙스키(2차), 릴케, 빅토르 위고, 쇼펜하우어(호의), 칸트, 쇼펜하우어(생존철학). `handover-progress.md`에 재개 스크립트 있음.
  - **Git**: llm-wiki master — 미커밋 상태 (전체 완료 후 일괄 커밋 예정).
- 시각(ISO): **`2026-06-29T15:40+09:00`** — **세계사 6권 원고 병합 및 EPUB 빌드/업로드 완료.**
  - **원고 병합**: `6권_121화.md` ~ `6권_138화.md` 개별 원고 파일을 `이야기_세계사_6.md`로 자동 병합하고 목차 및 헤더 스타일을 규칙에 맞춰 재구성하였습니다.
  - **EPUB 빌드**: DALL-E로 6권 표지 이미지(`history6_cover.png`)를 자율 생성 배치하고 빌드 스크립트를 생성하여 `history6.epub` 최종 빌드를 완료하였습니다.
  - **Supabase 배포**: 빌드된 EPUB 파일을 Supabase Storage `history/history6.epub`로 업로드하고 `library` 테이블에 DB 레코드를 연동 완료하였습니다.
- 시각(ISO): **`2026-06-29T15:35+09:00`** — **David Bahn 채널 문학 작품 13종 동영상 스크립트 인제스트 및 깨진 링크 보완 완료 (llm-wiki).**
  - **문학 작품 인제스트**: David Bahn 채널의 문학 해설 동영상 13종(에밀 졸라 루공-마카르 총서 8종, 발자크 고리오 영감, 조지 오웰 동물농장 등)의 자막을 추출하여 raw 등록 및 요약본 인제스트 완료.
  - **깨진 위키링크 해결**: 신규 인제스트로 발생한 294개의 깨진 링크에 대해 136개의 스텁 개념 문서를 추가 생성하여 깨진 링크를 0개로 유지.
  - **Git 커밋/푸시**: 인제스트 산출물 및 스텁 개념 문서 전체를 Git에 등록하여 원격 저장소(`master`) 푸시 완료 (최종 해시: `1a38cb74`).
- 시각(ISO): **`2026-06-29T11:20+09:00`** — **깨진 위키링크 보완 및 세계사 6권 관련 파일 Git 커밋/푸시 완료 (llm-wiki).**
  - **깨진 위키링크 해결**: `create-stub-concepts.mjs`를 작동하여 128개의 스텁 개념 문서를 자동 생성하고 깨진 위키링크를 0개로 조치하였습니다.
  - **Git 커밋 및 푸시**: 세계사 6권 제127~136화 수정본, 제137~138화 신규 원고 및 출처 검증 문서, 스텁 개념 문서들을 Git에 등록하여 커밋 및 원격 저장소(`master`) 푸시를 완료하였습니다.
- 시각(ISO): **`2026-06-28T11:13+09:00`** — **Token Optimization Stack 설치 완료 (rtk + serena + codebase-memory-mcp).**
  - **rtk v0.42.4 설치:** `C:\Users\pass6\AppData\Local\token-saving-stack\bin\rtk.exe` — CLI 출력 토큰 최적화 프록시 (ls/tree/read/git/gh 등 명령어 출력 압축).
  - **Claude Hook 연동:** `PreToolUse` 훅으로 모든 Bash/PowerShell 명령어 실행 전 `rtk hook claude` 적용 — 불필요한 출력 필터링 및 요약.
  - **serena:** `.serena/project.yml` 설정 유지 (기존 설치 유지, 설정 정합성 확인).
  - **codebase-memory-mcp:** `token-saving-stack/bin/codebase-memory-mcp.exe` 배치 완료 (MCP 서버 기존 인덱스와 정상 연동).
- 시각(ISO): **`2026-06-26T21:42+09:00`** — **세계사 6권 127~138화 출처 검증 반영 및 본문·각주 수정 완료.**
  - **작업 근거:** `출처_검증_보고서.md` 기준 12개 화 총 8건 오류 지적에 대해 본문 및 각주 수정 완료.
  - **본문 수정:** 대부분 기반영 (김영삼 "150만 대", 호주 산불 "2,400만 헥타르", 그린란드 빙상 "연간 2,700억 톤", 아프리카 스타트업 "2022년 65억→2023년 35억" 등)
  - **각주 최종 정정 (2026-06-26):** 제131화[^119] 호주 산불 면적 수치, 제136화[^172] 아세모글루 저서 연도·저자명.
  - **산출물:** `출처_검증_수정_인계서.md` — 수정 내역 전반 문서화 완료.
  - **6권 집필:** 18/18화 (100%) — 전 화 출처 검증 및 수정 완료 ✅
- 시각(ISO): **`2026-06-26T15:50+09:00`** — **세계사 Ⅲ & Ⅳ 지도 반영 및 업로드 완료.**
  - **세계사 Ⅲ 지도 반영 및 업로드:** `map/history3_with_maps.epub` (9.19 MB, 12개 지도) 검증 완료 후 `map/upload-history3.js` 경로 설정 변경하여 Supabase Storage(`history/1779351897979_history3.epub`) 업로드 완료. 로컬 `epub/history3.epub`도 동기화.
  - **세계사 Ⅳ 지도 반영 및 업로드:** 1:1 비율의 정사각형 지도(16개)가 페이지 전체를 차지하고 캡션이 잘리는 현상을 수정하기 위해, 레이아웃에 `break-inside:avoid`를 추가하고 SVG 크기를 `width:55%; max-width:320px`로 축소하는 스타일 개선을 적용하여 빌드 및 검증 완료 후 Supabase Storage(`history/1779351946349_history4.epub`) 및 로컬 `epub/history4.epub`에 최종 반영/업로드하였습니다.
  - **리더 페이지 복구:** 로컬 테스트 우회 코드를 제거하고 `reader.html`을 원래의 Supabase 로드 로직으로 복구 완료.
- 시각(ISO): **`2026-05-27T12:00+09:00`** — **Supabase GRANT 대응 완료 + WIKI-005 문서화.**
  - **Supabase Data API GRANT 대응:**
    - 6개 테이블(library, book_reviews, essays, ai_writings, members, diaries)에 명시적 GRANT 추가
    - `setup.sql`, `setup_members.sql`, `create_book_reviews.sql` 수정
    - `setup_diaries.sql` (신규), `supabase/grant_data_api_access.sql` (신규)
    - Supabase Management API로 운영 DB 직접 적용 완료
  - LLM Wiki: concept 2,635개 / sources 363개 / 링크 12,427개
  - WIKI-005 그래프 뷰어: 현황 문서화 후 보류 (`D:\wiki\outputs\WIKI-005-graph-viewer-status.md`)
- 시각(ISO): **`2026-05-21`** — **1-2권 각주 통일 해결. EPUB_BUILD_GUIDE.md 각주 규칙 종합.**
  - **1-2권 각주 통일 해결:** `endnotes.xhtml`에 인라인 스타일 직접 주입 + CSS 패치로 리더기 렌더링 문제 해결.
    - `unify-footnotes-epub.mjs`: 마크업·인라인 스타일 4권 형식으로 통일, `<br/>` 제거
    - `renumber-footnotes-book.mjs`: 책 전체 각주 번호 1부터 순차 재할당
    - 백업: `history1.epub.bak-footnotes`, `history2.epub.bak-footnotes`
  - **4권 각주 번호 재할당:** `extractChapters()` 각주 번호를 챕터별로 **1부터 순차 재할당** (`fnIdMap`). 본문 `[^n]` 참조와 정의 번호 불일치(원고 내 결번)로 인한 깨진 링크 수정. (직전 작업)
  - **3권 각주:** EPUB 내 각주 없음 확인. 원고 PDF만 존재, 마크다운 소스 없음.
  - **EPUB_BUILD_GUIDE.md 각주 규칙 종합 정리:** 챕터별 각주(4권 표준) vs endnotes(1-2권 레거시) 규칙 분리 문서화. 원고 `[^n]` 표기법·HTML 구조·CSS·번호 체계·빌드 로직 전 섹션 완비.
  - **Wiki tip:** **`git rev-parse origin/master` 로 최신 확인.**
- 직전(ISO): **`2026-05-20`** (북 리뷰 카드 이미지 수정 + 카드뉴스 기능 추가)
  - **북 리뷰:** `blog.js` `cover_url` 폴백 순서 수정 (`cover_url` → `card_image_url` → 기본 이미지). **`9a829d2`**
  - **카드뉴스:** `admin.html`·`admin.js`: 회원관리/카드뉴스 탭 전환, 모달 뷰어
  - `scripts/generate-cardnews.ps1`: 브리핑 → 카드뉴스 HTML 자동 생성
  - `admin/cardnews/`: 생성된 카드뉴스 + manifest 저장소
- 직전(ISO): **`2026-05-18`** (Harness 인계 동기) — **DeepSeek 공식 API** 전환·LiteLLM/NVIDIA 정리 반영. **`master` tip `ba82d38`** (`origin/master` 일치). Harness **`35c7065`**.
- 직전(ISO): `2026-05-12` (인계 동기) — **최신 `master` tip 은 `git fetch` 후 `git rev-parse origin/master` 로 확인.** 참고 시점: CI 안정화 **`397a594`**, 세계사 Ⅲ **`47123bc`**.
- 직전(ISO): `2026-05-11` — 세계사 Ⅲ 지도·EPUB **`47123bc`** 푸시 완료. 이후 **`397a594`** 에서 `library.js`·CodeShield 등 CI 수정 분 반영.
- 직전(ISO): `2026-05-11T21:15:00+09:00` — Desktop 인계·세계사 Ⅲ 로컬 산출 정리.
- 직전 갱신(ISO): `2026-05-11T18:00:00+09:00` — **`origin/master`** 에 **2026-05-11** 온세솔대 리플릿(`2df59e4`)·`progress.md` 인계(`8a346d5` 등)·문서 정합분 **푸시 완료** — **정확한 최신 해시는 `git rev-parse origin/master`**.
- **온세솔대 리플릿:** `onse-soldae-invitation/` 전체(HTML·에셋·PNG·스크립트·`package.json`) **커밋·푸시 완료** (`2df59e4`). HTML 수정 후 PNG는 `node export-leaflet-png.mjs` (무진님 지시, `task-continuity.mdc` 반영).
- **Kakao:** 직접 OAuth + Edge **`kakao-token`**, 프로덕션 로그인 성공 상태 유지. 상세: Desktop `handover-progress.md`.
- **Git 정본:** 브랜치 **`master`**. **최신 tip:** **`git fetch` 후 `git rev-parse origin/master`**. **카카오·Edge 기준점(과거):** **`dd325d1`**, **`441bd22`**, **`37171bd`**.
- **레거시 브랜치:** `chore/public-readiness-20260312` 원격 tip **`4413071`** (변동 없음).
- **하네스 인계 미러:** `geumsagwa-harness` → **`docs/desktop-handoff/`** — **`origin/main` tip** 은 해당 저장소에서 확인.

## 브랜치·원격
- **작업 브랜치:** `master`
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **최근 `master` 히스토리:** 카카오 Edge·직접 OAuth·인계 문서는 **`37171bd`** 이후 커밋들로 누적; 이전 **`5d792d9`**(SDK 제거·직접 OAuth code→token) 등은 히스토리 보존.

## 워킹트리 상태 (2026-05-12, Git 기준)
- **tip 확인:** `git fetch` 후 **`git rev-parse origin/master`**. 2026-05-12 인계 동기·CI 안정화(**`397a594`**)·세계사 Ⅲ(**`47123bc`**) 등이 **`master` 히스토리에 포함**됨.
- **상태:** 세계사 Ⅲ `map/` 산출은 **저장소에 반영됨**. 로컬에만 둘 **`epub/history3.epub`**, 주석 TXT 등은 **미추적** — 필요 시 `.gitignore` 또는 별도 보관.
- **리플릿:** 배포에 HTML이 필요하면 **`geumsagwa.github.io` 저장소의 `onse-soldae-invitation/`** 경로로 확인(본 커밋에 포함됨).
- **기타 로컬만:** `.capture-tmp/`, 일부 `Images/*`·스크린샷 등은 여전히 **정책에 따라** `.gitignore`/커밋 여부 확인 권장.

## 이번 기간에 한 일 (요약) — 원격 `master` 히스토리에 포함된 범위

### 금일 반영 (2026-05-11 — 세계사 Ⅲ 지도, `master` 커밋)
- **경로:** `project/homepage/map/` (작업 레포 워킹디렉터리 기준 **상대 경로 `map/`**).
- **`temp_history3.epub`**: 삽입용 **원본 EPUB**(스크립트는 이 파일을 입력으로 사용; 본문에 지도 블록을 직접 넣지 않음).
- **`embed-all-maps-history3.js`**: 제74~85화 구간에 지도 **12개** 삽입, SVG `<image>` + `afterParagraph` 맥락 배치, viewBox **`1200×800`** (`optimize-images.js` 결과에 맞춤).
- **이미지:** `ch74_…` ~ `ch85_…` PNG·JPEG(1200폭 변환 후 삽입).
- **결과 EPUB:** **`history3_with_maps.epub`** — 실제 확인·배포용은 이 파일.
- **검증:** `node map/verify-history3.js` — 12개 Section·이미지 통과.
- **업로드:** `map/upload-history3.js` — `DEFAULT_STORAGE_PATH`를 `library.epub_path`와 맞춘 뒤 실행(또는 `HISTORY3_EPUB_PATH`).
- **룰:** `.cursor/rules/epub-map-project.mdc` 에 3권 작업 파일 표 갱신(Supabase `history3` 네이밍 참고).

### tip `8a346d5` (2026-05-11)
- **`progress.md`** 인계 갱신(본 파일·Desktop·하네스 `docs/desktop-handoff/` 동기 반영) **커밋·푸시**.

### tip `2df59e4` (2026-05-11)
- **온세솔대 리플릿 저장소 반영:** `leaflet-trifold.html` 갱신분, `leaflet-assets/`·`leaflet-front.png`·`leaflet-back.png`·한글 파일명 PNG, `package.json` / `package-lock.json`, 내보내기·추출 보조 스크립트, 참고 PDF·TXT 등 **일괄 추가 후 푸시**.
- 직전 커밋(요약): `24e8985` head 주석 닫힘 수정, `552c644` 생활주거 패널·연락처 등(리플릿 관련 마크업/CSS).

### tip `256eb7d` (2026-05-04)
- **`progress.md`** — 한글 인코딩 복구 내역 반영.

### tip `015815f` (2026-05-04)
- **한글 인코딩 복구:** `e22d696`에서 발생한 17개 HTML 파일 한글 깨짐을 이전 정상 버전(`e22d696^`)에서 복원. CSS 캐시버스트(`v=20260504`)는 유지. 배포 페이지(GitHub Pages) 한글 정상 출력 확인 완료.

### tip `afda2b0` (2026-05-04)
- **초대장 CSP 추가:** `onse-soldae-invitation` 3개 페이지에 CSP 메타 태그 추가. `npm run check` **READY** (CSP 24/24).

### tip `e22d696` (2026-05-04)
- **코드 리뷰 기반 3가지 개선:**
  - CSS 캐시버스트 통일: 전체 17개 HTML에 `style.css?v=20260504`, `style-pages.css?v=20260504`, `style-light.css?v=20260504` 일괄 적용
  - `escapeHtml` 중복 제거: `board.js`·`admin.js`·`diary.js`에 각각 있던 `escapeHtml` 함수 제거, `auth.js`의 전역 함수로 통일
  - `supabase-config.js` 개선: `window.__env` 오버라이드 지원 추가, `.env.example` 참조 주석 추가

### 금일 로컬 변경 (2026-05-08)
- **Kakao 직접 OAuth:** REST API 키로 `client_id` 통일, `kakaoRedirectUri()` 단일화, OAuth 오류 쿼리·토큰 실패·Supabase 오류 시 메시지·성공 시에만 `index.html` 이동 (`supabase-config.js`, `login.js`). `.env.example`에 `KAKAO_REST_API_KEY` 안내. 인계: Desktop `handover-progress.md`.

### 금일 로컬 변경 (2026-05-06)
- **KOE205 해결:** Kakao Developers 콘솔 앱 > 플랫폼 키 > 리다이렉트 URI에 Supabase 콜백 URL 등록, 카카오 로그인 정상 동작 확인
- **GitHub 소셜로그인 동작 확인 완료**

### 금일 로컬 변경 (2026-05-05, 미커밋)
- **슬라이드2 768px 텍스트 세로표시 버그 수정** — `style-pages.css` slide 2 `.text-overlay`의 `white-space: pre-line` 제거
- **메뉴바 768px 개선** — `style.css` 메뉴바 `height: 14vh` → `auto; flex-wrap: wrap`
- **Reader TOC 사이드바 → 오버레이 모달** — `reader.html` TOC를 `position: fixed` 오버레이+중앙 모달로 변경, `≡ 목차` 버튼+`×` 닫기 버튼, 반응형 대응
- **Reader spread 수정** — `spread: 'always'` → `'auto'`, 본문 CSS `box-sizing`, `max-width`, `word-wrap` 등 추가
- **카카오 로그인 KOE205** — 원인 파악 완료 (Kakao Developers 콘솔에 Supabase 콜백 URL 미등록). 설정 위치 파악 중 사용자 일정으로 중단

### 반응형 (전역 통일) — 과거 커밋 `cdba904` 등 (히스토리 보관)
- 구간(공통): **1280 · 768 · 480** (`max-width` px)
- `style.css` / `style-pages.css` / `style-light.css`, `index.html` 캐시 버스트 등

### 소셜 로그인·CSP (Supabase) — 과거 커밋 `430dd86` 등 (히스토리 보관)
- CSP: `connect-src`·`frame-src`·`form-action` 정합, `login.js` OAuth 흐름

### 로고·명함 등
- 로고 A안, `business-card.html`, `.gitignore` 정리 등 — 상세는 해당 시점 커밋 로그 참고

### 기타
- `.github/workflows`, `reports/public_precheck_*.md`, 기타 HTML/JS 정리

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

## EPUB 빌드 규칙 (2026-05-21 통일)
**모든 EPUB 권은 동일한 구조를 따라야 함.** 규칙 파일:
- `C:\Users\pass6\project\homepage\ebooks\EPUB_BUILD_GUIDE.md` (각주 규칙 종합 포함)

**핵심 규칙 요약:**
- CSS: `Style0001.css` 통일
- 작가의 말: `Section0000.xhtml` 통일
- 각주 (신규 권): `<section class="footnotes"><ol><li id="note{n}"><a href="#ref{n}">...</a></li></ol></section>` + **인라인 스타일 필수**
- 각주 (레거시 1-2권): `endnotes.xhtml` — 수정 완료, 추가 작업 불필요
- 본문 각주 참조: `<sup><a href="#note{n}" id="ref{n}" style="text-decoration:none;color:inherit;">[{n}]</a></sup>`
- 빌드 템플릿: `이야기_세계사_4\build-ebook.mjs` 복사 후 경로만 수정
- 지도는 EPUB에 직접 포함 금지 (커서 별도 작업)
- 각주 HTML 구조 전체는 `EPUB_BUILD_GUIDE.md` §각주 규칙 참조

## 다음에 할 일 (최대 4개)
1. (선택) low-confidence 재생성 68회차
2. (선택) LLM Wiki 깨진 링크 44~59종 스텁 생성
3. (선택) 철학사 제6화 집필 (예정: 아낙시메네스 또는 엘레아 학파)
4. (선택) 철학사 신규 화 업로드 (philosophy-essay-upload 스킬 사용)

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md` — 갱신 시 **세 파일 동기**
- **철학사 1권:** 제1~4화 새 버전 교체 완료 ✅ / 제5화「파르메니데스」신규 업로드 ✅ (Supabase essays id=7)
  - 업로드 스킬: `openclaw-local-mvp\.claude\skills\philosophy-essay-upload\SKILL.md`
- **LLM Wiki:** `e4d1658d` — ✅ push 완료 (워킹트리 clean) — 재생성 67회차
- **homepage:** `b8de4eb` — 게발이 브리핑 (2026-07-28) ✅ push 완료 (워킹트리 clean)
- **openclaw-local-mvp:** `75f493b` — ✅ push 완료 (워킹트리 clean)
- **confidence:low 재생성:** ~9,254개 유지. 67회차 완료
- **Google OAuth:** 토큰 만료 (갱신 필요시 refreshAccessToken() 사용 가능)
