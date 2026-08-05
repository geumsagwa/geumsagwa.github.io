# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

## 마지막 갱신
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
1. (진행 중) 철학사수업1 그림 수동 교정 — 무진님이 PDF에서 직접 크롭 후 `G:\내 드라이브\Claude\김주연_철학사수업1\` MD에 교체 작업 중 (교체 후 인제스트 재실행 불필요, `raw/` 재동기화·커밋 선택)
2. (선택) 철학사 제6화 집필 (예정: 아낙시메네스 또는 엘레아 학파)
3. (선택) 철학사 신규 화 업로드 (philosophy-essay-upload 스킬 사용)
4. (선택) 신규 채널 인제스트 시 재발 방지 절차 준수 (promote-stubs + `--skip-stub-concepts` 고정)

## 하네스 메모
- 인계·진행 사본: `C:\Users\pass6\Desktop\Harness\progress.md`, `handover-progress.md` — 갱신 시 **세 파일 동기**
- **철학사 1권:** 제1~5화 업로드 완료 ✅ (Supabase essays) — 제6화 집필 대기
  - 업로드 스킬: `openclaw-local-mvp\.claude\skills\philosophy-essay-upload\SKILL.md`
- **LLM Wiki:** `f5224700` — ✅ push 완료 (워킹트리 clean) — CRLF 버그 수정 + low-confidence 전면 정리
- **homepage:** `916a72a` — 브리핑(`a58a42b`) + 카드뉴스 구조화(`2d212d1`) + 홈페이지 DESIGN.md 1~3단계(`58bbb17`·`916a72a`) ✅ push 완료
- **카드뉴스 DESIGN.md:** `homepage\admin\cardnews\DESIGN.md` — 카드뉴스 디자인 토큰 단일 소스 (19색/16컴포넌트, lint 클린). 변경 시 `designmd export --format css-vars` → `generate-cardnews.ps1` `:root` 반영 후 재생성
- **홈페이지 DESIGN.md 1~3단계 완료:** `DESIGN.md`(토큰 문서화) → `style.css :root`(CSS 변수, 기존 코드 유지) → `CLAUDE.md`(디자인 기준 등록, 클로드 자동 인지)
- **openclaw-local-mvp:** `1ee806d` — ✅ push 완료 (워킹트리 clean)
- **confidence:low:** **0개** ✅ / 깨진 링크 **0개** ✅ / 검색 인덱스 14,438
- **Google OAuth:** 토큰 만료 (갱신 필요시 refreshAccessToken() 사용 가능)
