# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

## 마지막 갱신
- 시각(ISO): **`2026-08-11T22:40+09:00`** — **08-11 작업: 게발이 브리핑 발행 + 철학사수업1 10·11부 교정 반영 + 4개 PDF(피그마·예일대지성사강의·AI Agent·듀얼브레인) 전체 파이프라인 완료·인제스트.**
  - **[게발이 브리핑]** 2026-08-11 카드뉴스 생성·푸시 ✅ — homepage `3a2b3bd` "자동: 카드뉴스 갱신 (2026-08-11)" push 완료
  - **[철학사수업1 10·11부 교정 반영]** 10부(이전 세션)에 이어 **11부 교정본 동기화 완료** ✅
    - 11부 교정본(G: `f9df283d…`) → `F:\wiki\raw\` MD5 일치 검증 후 커밋 · **llm-wiki `de65a7e4`** "chore(raw): 철학사수업1 11부 교정본 동기화" push ✅
    - 이미지 매칭 재검증: 참조 59 / 폴더 59 — 누락·고아 없음 · 11부 교정 중 참조 제거된 **`책513쪽-2.png` 고아 → `F:\backup\철학사수업1-orphan-images-20260811\`** 이동 (기존 4개 + 1개 = 5개)
  - **[4개 PDF 전체 파이프라인 완료]** 2페이지/면 스캔 PDF 4종 — OCR → LLM 교정 → 그림 감지/필터링 → 조립 → 인제스트 ✅
    - 피그마_완벽 활용서.pdf (0~669쪽) → **21부** · 예일대지성사강의_20250225.pdf (1~451쪽) → **16부** · AI Agent_20251106.pdf → **9부** · 듀얼브레인_20251106.pdf → **9부** — 총 55부
    - 그림: 피그마 541 · 예일대 12 · AI Agent 120 · 듀얼브레인 60 — 전부 이미지 참조 매칭 완료 (누락·고아 0)
    - 출력: `G:\내 드라이브\Claude\피그마`·`예일대지성사강의`·`AI Agent`·`듀얼브레인` (MD + images/) · **llm-wiki `4d0e48c1`** "feat(wiki): …PDF 인제스트 — 소스 55건, 개념 466건 신규" push ✅
    - 후처리: 깨진 링크 0 · low 2개(원자료 직접 언급 없는 추론형 개념 — 정상) · 개념 high 395 / medium 68 / low 2
  - **[스크립트 개선]** `extract-figures.py`·`filter-figures.py` 그림 OFFSET CLI 인자화 (기본 148/149) · **llm-wiki `3447faff`** push ✅
  - Git: homepage `3a2b3bd` · llm-wiki `4d0e48c1` · harness `74d3523` · openclaw `bd52797` — 전부 clean, 로컬=원격

- 시각(ISO): **`2026-08-10T21:10+09:00`** — **08-10 작업: 게발이 브리핑 발행 + 철학사수업1 그림 수동 교정 마무리(1~9부).**
  - **[게발이 브리핑]** 2026-08-10 카드뉴스 생성·푸시 ✅ — homepage `e33ddc5`(카드뉴스)+`f12f0c3`(인덱스) push 완료 · 배포 확인 (HTTP 200, ~70초)
    - 주요 뉴스: 與 경선 2주차 1위 탈환(金), 민주 세제개편안 당·정 조율, 젤렌스키 "북한군 3~5만 명" 방공 지원 요청, 삼프로TV 개인정보 46만 건 유출, YTN 감사 결론, 후티 모카항 타격, 이스라엘 中 청두 총영사관 폐쇄, 블랙핑크 사과 — 손흥민 없음
    - 일정: 등록 없음 — 08-11(화)·08-13(목)·08-15(토) 근무, 08-12 명재 저녁약속 · 이메일 중요 없음/스팸 없음 · 홈페이지 200, 281ms, SSL 유효
  - **[철학사수업1 마무리]** 1~9부 교정 완료 → wiki raw/ 동기화·커밋 ✅
    - 무링크 고아 PNG 1~8부 17개 정리 → `F:\backup\철학사수업1-orphan-images-20260810\` · images 62개 = MD 참조 전부 매칭
    - 교정본 1~9부 MD5 동기화 (5부 중복 텍스트 ~100줄 제거 포함) · **llm-wiki `de3bfa7a`** push ✅ (10~11부 무변)
  - Git: homepage `f12f0c3` · llm-wiki `de3bfa7a` · harness `74d3523` · openclaw `bd52797` — 전부 clean, 로컬=원격

- 시각(ISO): **`2026-08-08T18:20+09:00`** — **08-08 작업: 브리핑 발행 + quality-gate 해소 + 아리스토텔레스 인제스트 + HWP→TXT 파이프라인.**
  - **[게발이 브리핑]** 2026-08-08 카드뉴스 생성·푸시 ✅ — homepage `02515ce` "자동: 카드뉴스 갱신 (2026-08-08)" push 완료 · 배포 확인 (HTTP 200)
    - 주요 뉴스: 李 "ISA·주가누르기 방지 개편안 전면 재검토", 美 중·러 견제 단거리 전술핵전략, 카카오 노사 임금협상(연봉 6.3%↑), S&P500 사상최고치, 태국 총기난사 7명, 마크롱 가짜뉴스 — 손흥민 없음 · 이메일 중요 없음/스팸 2건
  - **[quality-gate 해소]** Supabase 키 하드코딩 제거 — `publish-philosophy-episodes.mjs` → `.env` 기반(`SUPABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY` 검증), legacy 키 파일 삭제, SKILL.md 갱신 · homepage `f609734` "secret scan 통과" ✅ — **기존 전 커밋 BLOCK 해결**
  - **[아리스토텔레스 형이상학 인제스트]** PDF(228p) → md → wiki ingest ✅ — llm-wiki `e03180b7` (ingest.mjs PDF 추출 버그 수정 포함) · 전헌상 2차 연구서로 source 등록, 활동·질료인·목적인 전체 작성(high)
  - **[HWP→TXT 파이프라인]** pyhwp 0.1b15(hwp5txt.exe) 설치 · `이야기 철학사` hwp **32개 전부** 추출 완료 → `F:\wiki\tmp\hwp-extract\*.txt` · 재사용 스크립트 `harness\scripts\convert-hwp-to-txt.ps1` harness `74d3523` push ✅ (main)
  - **[이야기 철학사 대량 인제스트]** HWP 32개(30 신규 + 2 기존 소스 스킵) + PDF 2개(계보로_서양철학사01, 형이상학_읽기02) 인제스트 완료 ✅
    - 소스 **32개 신규** · 개념 **315개 신규**(인제스트 + 깨진 링크 스텁 92 포함) · 중복 raw 1개 제거
    - 후처리: low-confidence 4개 승격 + 스텁 92개 승격 + 괄호 영문 링크→슬러그 정식 이름 정리 → **깨진 링크 0 / low 0** ✅
    - 검색 인덱스 14,759개 · **Git:** llm-wiki `1b449aac` — "feat(wiki): 이야기 철학사 32건 + 철학사 PDF 2건 인제스트" ✅ push 완료
  - **[harness]** `74d3523` · [homepage] `f609734` · [llm-wiki] `1b449aac` — 전부 clean, 로컬=원격
- 시각(ISO): **`2026-08-07T07:05+09:00`** — **게발이 브리핑 발행 (2026-08-07).**
  - **[게발이 브리핑]** 2026-08-07 카드뉴스 생성·푸시 ✅
    - **Git:** homepage `8ad7fb4` — "자동: 카드뉴스 갱신 (2026-08-07)" ✅ push 완료 (로컬=원격)
    - 카드뉴스 배포 확인 (**HTTP 200**) · 원본 `briefing-2026-08-07.md` (7.9KB)
    - 주요 뉴스: 북 단거리 탄도미사일 발사, 민주 8일 인천 전대, 국힘 윤리위 7인체제 첫 회의, 예담대 7조원, 美 폴리실리콘 15% 관세, 포스코퓨처엠 LFP 양극재 19만톤, 음성 공장 화재·대구 38도 폭염, 미·중 첨단기술 공방 — 손흥민: LAFC 래리 버그 MLS 커미셔너 선출(08-06 중복 건)
    - 일정: (종일) 근무 — 08-09(일)·08-11(화)·08-13(목) 근무, 08-12 명재 저녁약속
    - 이메일: DeepSeek API 요금 인상 안내(중요) / 스팸 2건 처리 · 홈페이지 HTTP 200, 286ms, SSL 유효
    - 참고: Google OAuth 재인증 완료 · quality-gate 실패(기존 이슈)
- 시각(ISO): **`2026-08-06T06:34+09:00`** — **게발이 브리핑 발행 (2026-08-06).**
  - **[게발이 브리핑]** 2026-08-06 카드뉴스 생성·푸시 ✅
    - **Git:** homepage `e3da2ad` — "자동: 카드뉴스 갱신 (2026-08-06)" ✅ push 완료 (로컬=원격)
    - 카드뉴스 배포 확인 (**HTTP 200**) · 원본 `briefing-2026-08-06.md` (8.5KB)
    - 주요 뉴스: 법제처장 "檢수사권 한시 조치", 전대 선관위 제소 기각, 코인원·카뱅 제휴 연장, '슈퍼곰팡이' 칸디다 오리스(90일 사망률 46%), 美 경합주 진보 바람, 스페이스X 로켓 잔해 달 충돌 — 손흥민: LAFC 래리 버그 MLS 커미셔너 선출
    - 일정: 등록 없음 — 08-07(금)·08-09(일)·08-11(화) 근무, 08-12 명재 저녁약속
    - 이메일: 중요 없음 / 스팸 없음 · 홈페이지 HTTP 200 · quality-gate 실패(기존 이슈)
- 시각(ISO): **`2026-08-06T00:00+09:00`** — **인계 서류 최적화 + C 드라이브 60~70GB 유지 자동화.**
  - **[인계 최적화]** 무진님 지적(인계 읽기 컨텍스트 22%) → 두 인계 파일 최대 축소
    - progress.md **55.1KiB → 8.3KiB** (마지막 갱신 최근 5건 + 핵심 요약부만 유지)
    - handover-progress.md **26.4KiB → 6.3KiB** (최근 2개 세션만 유지, 이전 5개 archive)
    - 오래된 기록 → `progress-archive.md`(신규 46.8KiB)·`handover-progress-archive.md`로 이동 (**전체 보존**)
    - **읽기 가이드** 양 파일 상단 추가 — 항상 읽을 구간 vs 필요 시 읽을 구간 구분
    - 백업 `progress.bak-20260806a`·`handover-progress.bak-20260806a` · 인코딩·줄바꿈 원본 유지
  - **[C 드라이브 유지 자동화]** C: 여유 60-70GB 유지 (무진님 지시) — 새 파일은 F:로 이동
    - 스크립트 `harness\scripts\maintain-c-drive.ps1` (백업 `F:\backup\`) — 3단계: ≥70GB 조치 없음 / 60~70GB Downloads→F 이동 / <60GB 임시+대용량 정리
    - **예약 작업 `MaintainCDrive` 등록** (로그온 시 자동 실행, UAC 승인으로 등록·테스트 결과 0) · 로그 `F:\backup\c-drive-maintain.log`
    - 현재 C: 여유 **68.8GB** · F: 여유 684.2GB
    - **Git:** homepage `1d76bf5`(인계 동기) · harness `59f3ea3`(스크립트) ✅ push 완료
- 시각(ISO): **`2026-08-05T16:43+09:00`** — **참고용 자료 정리: 영상 분석 + supanova-design-skill 분석·등록.**
  - **[영상 분석]** Builder Josh "클로드 코드로 디자인을 가장 잘하는 방법" (`2sNQ0Nvngdc`, 15:40) — AI Slop 극복 랜딩페이지 워크플로우 (재미나이 히어로 영상·webp·스크롤 애니메이션·Netlify Drop 배포)
  - **[스킬 분석]** uxjoseph/supanova-design-skill — 4종 SKILL.md(taste·redesign·soft·output) 분석. 한국어 퍼스트 프리미엄 랜딩페이지 생성 규칙 (단일 HTML+Tailwind CDN+Pretendard+Iconify)
  - **[등록]** `tool-recommendations.md` ⭐1순위 (2026-08-05) — 이후 랜딩페이지 작업 시 참고
  - **참고 자료:** `Desktop\Harness\video-notes\` (영상·스킬 분석 2건) · 스킬 클론 `F:\backup\supanova-design-skill` · 자막 `F:\backup\video_2sNQ0Nvngdc.ko.srt`
- 시각(ISO): **`2026-08-05T06:44+09:00`** — **게발이 브리핑 발행 (2026-08-05).**
  - **[게발이 브리핑]** 2026-08-05 카드뉴스 생성·푸시 ✅
    - **Git:** homepage `e59048e` — "자동: 카드뉴스 갱신 (2026-08-05)" ✅ push 완료 (워킹트리 clean)
    - 주요 뉴스: 민주 세제개편안 정교화, 쿠팡 상반기 적자 1조2000억·국세청 3000억 과세예고, 부울경 폭염 33~35도, 호르무즈 합의 임박, 스페이스X 분기 매출 92%↑, 무신사 日강진 위로 — 손흥민: LAFC 공동구단주 MLS 커미셔너 임명
    - 일정: (종일) 근무 — 이번 주: 08-07(금)·08-09(일)·08-11(화) 근무
    - 이메일: 중요 없음 / 스팸 19건 처리 (GitHub Actions 실패 17건 등)
    - 홈페이지: HTTP 200, 295ms, SSL 유효 / 카드뉴스 배포 확인 (200)
    - LLM Wiki: 개념 17,096 / 깨진 링크 0 / low confidence 0
- 시각(ISO): **`2026-08-05T06:38+09:00`** — **재부팅(06:18) 후 pagefile 8~16GB(8192 16384) 반영 검증 완료.**
  - **[검증]** `PagingFiles` = `C:\pagefile.sys 8192 16384` + AutomaticManagedPagefile=0 반영 · 실제 pagefile **8GB 할당**(CurrentUsage 798MB, 정상) · FreeVirtualMemory **5.3GB**(소진 위험 해소) · C: 여유 **70.7GB**(pagefile ~8GB 성장분 차감, 정상)
  - **[아카이브 판정]** handover-progress.md 23,454B(22.9KiB) → 30KB 한도 내, optimize-handover.ps1 스킵
  - **Git:** homepage `9d98a38`(06:27 progress.md 동기 커밋, repo↔Desktop MD5 일치) / llm-wiki `f5224700`(F:\wiki) / harness `740500c` / openclaw-local-mvp `781ed63` — 전부 clean
- 시각(ISO): **`2026-08-05T06:26+09:00`** — **재부팅(06:18) 후 pagefile 검증 → 8~16MB 오류 발견·수정(8192 16384, 8~16GB) → 재부팅 대기.**
  - **[검증]** 재부팅(06:18) 후: 레지스트리 `C:\pagefile.sys 8 16` + AutomaticManagedPagefile=0 반영 확인 · `F:\pagefile.sys` 없음(정상) · C: 여유 **78.5GB**(인계 61.5GB → +17GB, DISM 완료 효과)
  - **[⚠️ 오류 발견]** `PagingFiles` 크기 단위가 **MB** → 실제 `C:\pagefile.sys` = **16,777,216B(16MB)** · CurrentUsage 15MB(거의 꽉 참) · FreeVirtual 0.45GB(가상 메모리 소진 위험) — 의도(8~16GB)와 불일치
  - **[수정]** 관리자 권한(UAC)으로 `PagingFiles` → **`C:\pagefile.sys 8192 16384`(8GB~16GB)** + AutomaticManagedPagefile=0 유지 (로그 `F:\backup\pagefile-set.log` 2026-08-05 06:25:59) — **재부팅 후 반영**
  - **Git:** 변동 없음 (homepage `c6698b1` / llm-wiki `f5224700` / harness `740500c` / openclaw-local-mvp `781ed63`)
- 시각(ISO): **`2026-08-04T19:30+09:00`** — **재시작 후 검증 + pagefile 정책 수정 (F:→C:).**
  - **[검증]** 재시작(19:17) 후: DISM 완료(exit 0) / 시작 프로그램 제거 반영(KakaoTalk·Figma·Chrome/Edge/Copilot·wizvera 제거 확인) / WSL 기본 사용자 pass6 정상
  - **[pagefile 이전 실패 발견]** 설정 `F:\pagefile.sys 8 16` vs 실제 `C:\pagefile.sys` 17,408MB 사용 중 · `F:\pagefile.sys` 없음 — **F:가 USB 외장(ASMT 2115, 931GB)이라 부팅 시 늦게 인식되어 C: 자동 폴백**
  - **[정책 수정]** pagefile **C: 명시 전환** (`C:\pagefile.sys 8 16` + AutomaticManagedPagefile=0, 관리자 레지스트리 변경, 로그 `F:\backup\pagefile-set.log`) — **재부팅 후 반영** / USB pagefile은 분리·절전 시 블루스크린 위험 / C: 여유 61.5GB로 충분
## 브랜치·원격
- **작업 브랜치:** `master`
- 원격: `https://github.com/geumsagwa/geumsagwa.github.io.git`
- **최근 `master` 히스토리:** 카카오 Edge·직접 OAuth·인계 문서는 **`37171bd`** 이후 커밋들로 누적; 이전 **`5d792d9`**(SDK 제거·직접 OAuth code→token) 등은 히스토리 보존.

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
1. (선택) 철학사 제6화 집필 (예정: 아낙시메네스 또는 엘레아 학파)
2. (선택) 철학사 신규 화 업로드 (philosophy-essay-upload 스킬 사용)
3. (선택) 인제스트된 스텁 443개 중 주요 개념 내용 보강 (medium 승격됨, 내용 보강 시 high로)
4. (참고) 철학사여행_20250312.pdf — 푸터 미확인으로 보류 (2면/쪽 파이프라인 재적용 시 쪽수 공식 판별부터)

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md` — 갱신 시 **세 파일 동기**
- **게발이 브리핑 자동 발행 (2026-08-13 등록):** `harness\scripts\publish-briefing.ps1` — 인계문서를 읽은 즉시 자동 실행 (멱등: 이미 발행 시 스킵). 파이프라인: openclaw `npm run dev`(오늘 md 없을 때만) → `generate-cardnews.ps1` → homepage 커밋·푸시(admin/cardnews 범위) → GitHub Pages HTTP 200 확인 · 로그 `F:\backup\briefing-YYYY-MM-DD.log` · `-Date yyyy-MM-dd`/`-Force` 옵션
- **철학사 1권:** 제1~5화 업로드 완료 ✅ (Supabase essays) — 제6화 집필 대기
  - 업로드 스킬: `openclaw-local-mvp\.claude\skills\philosophy-essay-upload\SKILL.md`
- **LLM Wiki:** `dc49e1fa` — ✅ push 완료 (clean) — 4개 PDF 인제스트(4d0e48c1) + 후처리(dc49e1fa: 스텁 443 승격, 링크 정규화, 깨진 링크 0/low 0) (이전 `de3bfa7a`: 철학사수업1 1~9부)
- **homepage:** `3a2b3bd` — 08-11 브리핑 ✅ push 완료 (clean, 로컬=원격)
- **4개 PDF 파이프라인 완료 (2026-08-11):** 피그마(21부)·예일대지성사강의(16부)·AI Agent(9부)·듀얼브레인(9부) — 2면/쪽 스캔 PDF 전체 처리 완료 · 출력 `G:\내 드라이브\Claude\피그마`·`예일대지성사강의`·`AI Agent`·`듀얼브레인` (MD + images/) · 파이프라인 `F:\wiki\scripts\pdf-2page-extract\`
- **철학사수업1 교정 (2026-08-11 완료):** 1~9부(08-10)+10부+11부 전부 교정 완료 → `F:\wiki\raw\` 동기화·커밋(`2c2f0775`·`de65a7e4`) · 고아 이미지 5개 → `F:\backup\철학사수업1-orphan-images-20260811\` · 교정본 소스 `G:\내 드라이브\Claude\김주연_철학사수업1\` · 참조 59/폴더 59 매칭
- **HWP→TXT 변환 루틴 (2026-08-08 등록):** pyhwp(hwp5txt.exe) 설치됨 — `C:\Users\pass6\AppData\Roaming\Python\Python313\Scripts\hwp5txt.exe`. 재사용 스크립트 `harness\scripts\convert-hwp-to-txt.ps1` (옵션: `-SourceDir`/`-OutputDir`/`-Force`). 변환 결과는 `F:\wiki\tmp\hwp-extract\`에 보관, wiki `raw/` ingest 여부 미결정
- **게발이 브리핑 발행 루틴 (2026-08-08 등록):** ① `openclaw-local-mvp`에서 `npm run dev` → `data/output/briefing-YYYY-MM-DD.md` 생성 (로그 `F:\backup\briefing-YYYY-MM-DD.log`) ② `homepage\scripts\generate-cardnews.ps1` 실행 → `admin/cardnews/YYYY-MM-DD.html` 생성 ③ homepage 커밋·푸시 "자동: 카드뉴스 갱신" ④ GitHub Pages 배포 확인 (HTTP 200) — **경로 탐색 없이 즉시 실행**
- **카드뉴스 DESIGN.md:** `homepage\admin\cardnews\DESIGN.md` — 카드뉴스 디자인 토큰 단일 소스 (19색/16컴포넌트, lint 클린). 변경 시 `designmd export --format css-vars` → `generate-cardnews.ps1` `:root` 반영 후 재생성
- **홈페이지 DESIGN.md 1~3단계 완료:** `DESIGN.md`(토큰 문서화) → `style.css :root`(CSS 변수, 기존 코드 유지) → `CLAUDE.md`(디자인 기준 등록, 클로드 자동 인지)
- **openclaw-local-mvp:** `1ee806d` — ✅ push 완료 (워킹트리 clean)
- **confidence:low:** **0개** ✅ / 깨진 링크 **0개** ✅ / 개념 15,668 (검색 인덱스 기준)
- **Google OAuth:** 토큰 만료 (갱신 필요시 refreshAccessToken() 사용 가능)
