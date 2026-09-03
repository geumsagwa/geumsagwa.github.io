# Progress — website (geumsagwa.github.io)

**인계:** 동일 맥락 사본 `C:\Users\pass6\Desktop\Harness\progress.md`·`handover-progress.md`와 **주요 사실(Git tip·브랜치·워킹트리·다음 액션)** 을 맞춘다. 작업·세션 종료 시 **원본(본 파일)** 먼저 갱신한 뒤 **Desktop\Harness** 두 파일을 동기.

**⚠️ 자동 아카이브 하드 룰 (2026-08-01):** `handover-progress.md`가 **30KB 초과**이거나 읽을 때 컨텍스트가 잘리면, **별도 지시 없이 즉시** `C:\Users\pass6\project\harness\scripts\optimize-handover.ps1` 실행 → 최근 5개 세션만 유지, 나머지는 `handover-progress-archive.md`로 아카이브. (진행 중 세션 최신 반영 후 실행, UTF-8 BOM 유지)

**⚙️ 브리핑 자동 발행 하드 룰 (2026-08-13):** 인계문서를 읽은 **즉시** `harness\scripts\publish-briefing.ps1`을 자동 실행한다 (게발이 브리핑 자동 발행). 오늘 브리핑이 이미 발행(원격 반영)된 경우 스크립트가 자동 스킵한다. 실패 시 세션에서 즉시 조치·세션 요약에 반영.

**📖 인계 읽기 가이드 (2026-08-06):** 이 파일·`handover-progress.md`는 **항상 전체를 읽지 않는다.** 항상 읽을 구간 = 상단 규칙 + `## 마지막 갱신` 최근 2~3건 + `## 다음에 할 일` + `## 하네스 메모`. 이전 기록은 `progress-archive.md`·`handover-progress-archive.md` 참조. (세션 종료 시 원본 먼저 갱신 후 Desktop\Harness 두 파일 동기)

## 마지막 갱신

- 시각(ISO): **`2026-09-04T06:47+09:00`** — **09-04: 심리학 17화(2-3 기능주의·윌리엄 제임스) 전체 재검증 → 무진님 "현재 수준 확정, 모두 승인" → 확정 → 발행(id=39·ep17) — 사실 수정 3건+각주 정의 철자 1건(원문 "joined"→"jointed"·Gutenberg #57628 직접 대조, 카를 라게 '독일의'→'덴마크의', 어린 시절 여행지 '취리히·본' 삭제), 도판 3종을 등장 절(§4·§5·§7) 뒤 실제 배치·번호/파일명 재정렬(그림2=마음의 굽이[§5]·그림3=감정과 몸[§7], git mv 03~05), 단어 코너 §5 이동, 검토내용·목차 2-3 발행 표기, 분량 실측 19,235자(목표 22p의 ~71% — 현재 분량 수준 확정, 내용 보강 없음), publish 파이프라인 episode별 dir 확장 — llm-wiki 3커밋·homepage 1커밋 푸시.**
  - [자동수집 · Git] 마지막 세션(2026-09-03T23:00+09:00) 이후:
    · homepage master: HEAD 0f9b20e / origin 0f9b20e(푸시 완료) :: 0f9b20e publish 파이프라인 episode별 dir(권) 오버라이드 지원 + 심리학사 15·16·17화 등록 / 6e58d0f 자동: 카드뉴스 갱신 (2026-09-04 브리핑 — 세션 초 publish-briefing 실행)
    · llm-wiki master: HEAD 198a5af1 / origin 198a5af1(푸시 완료) :: 4a5ad1cb 제17화(기능주의·제임스) 확정 — 사실 수정 3건+도판 배치/재번호+단어 코너 §5 이동+검토내용·목차 확정 표기 / 3f3b71ea 각주 정의부 [^6] 원문 철자 정정(joined→jointed, Gutenberg #57628 명시) / 198a5af1 최종목차 2-3 발행 표기(id=39·19,235자)
    · harness main: HEAD 6d10592 / origin 6d10592(변경 없음 — 아래 미러 동기 커밋 예정)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a(변경 없음)
  - [17화 전체 재검증 → 확정 ✅ (무진님 2026-09-04 "현재 수준 확정, 모두 승인")] §5.1~5.9 게이트 재실행 — 절 12 연속 · 각주 16 마커↔정의 1:1·순서 일치 · 따옴표 짝수(홑 112·겹 6) · 전각 물음표 0 · 문장 수준 중복 0 · 사실 전수 대조(Gutenberg #57628·SEP·en_wp). **분량 실측 19,235자**(공백 포함, 각주 정의·도판 alt·캡션·단어 코너 제외) — 목차 22p(1,200~1,350자/쪽 환산 약 26,400~29,700자) 대비 약 71% → **현재 분량 수준으로 확정**(무진님 지시, 내용 보강 없음)
  - [사실 수정 4건 ✅] ①§4 원문 인용 "It is nothing **joined**; it flows" → Gutenberg #57628(Vol.1, 'The Stream of Thought') 직접 대조로 **"It is nothing jointed; it flows"** 확정, 번역 "마디로 이어진 것이 아니라"로 정정 — 본문만 고치고 **각주 정의부 [^6]에 'joined' 잔존**한 누락을 발견해 3f3b71ea에서 정정·출처 Gutenberg 명시(DB 재업로드까지 반영) ②§7 카를 라게 "독일의"→**"덴마크의"**(SEP "the Danish physiologist Carl Lange"·en_wp) ③§1 어린 시절 여행지 "런던·파리·제네바·취리히·본"→**"런던·파리·제네바"**(취리히·본 근거 없음 — SEP 연표: 제네바·파리·불로뉴에서 수학)
  - [도판·단어 코너 ✅] placeholder 3종(각 2,786B)을 본문 등장 절 뒤 실제 배치 — 그림1(의식의 흐름)§4[L55] · 그림2(마음의 굽이)§5[L79] · 그림3(감정과 몸)§7[L117]. 종전 번호가 등장 순서와 어긋남(그림2=감정과 몸[§7]이 그림3=마음의 굽이[§5]보다 늦은 절에 등장) → **번호·파일명 교환**(git mv: 02_그림1→03_그림1, 04_그림2=마음의-굽이, 05_그림3=감정과-몸) · 단어 코너(기능) 문서 말미 → **§5 뒤(그림 2 다음)로 이동**
  - [발행 ✅ (Supabase)] essays INSERT **id=39**·심리학사 **ep17** — 본문 전체+도판 3개 base64 인라인(각주 16 보존) · wiki 확정본과 대조 검증(jointed·덴마크·Gutenberg 출처·dataURL 3·joined 잔존 0) · 블로그 시리즈 그리드 쿼리 1~17화 포함 확인 · blog.html HTTP 200 · publish-series-episodes.mjs 확장(episode별 `dir` 오버라이드 — 2권(volume2) 경로 지원, 심리학사 15·16·17화 등록, ep17 title/excerpt/card NYC unsplash)
  - [다음 작업] 18화(2-4 의식의 흐름) 무진님 재검토(이상 항 사실 대조·도판 요소/색상 승인) → 확정 → 도판 → 발행 · 17화 도판 placeholder → 개념 도식 AI 제작 시 파일 교체 · 철학사 11화(아리스토텔레스 — 학문의 제왕) 집필

- 시각(ISO): **`2026-09-03T23:00+09:00`** — **09-03 (연속 세션, 16:40 이후): 심리학 17화(기능주의·제임스) 무진님 라인별 검토 반영 — 맞춤법·문장부호(의문형 물음표·나열 쉼표·'나' 따옴표 통일)·문어체→평이어 8건·문장 구성 수정 다수 + 17화 검토내용 도판 스펙 5키 보완(그림1 §4 이동) + 18화(의식의 흐름) §10 이상(李箱)·동아시아 수용 반영(각주 17·22,125자) + 작성지침 §2-11 '수용사 적극 반영' 신설 — 17·18화 무진님 재검토 대기(확정 전), llm-wiki 2a485e17 커밋·푸시.**
  - [자동수집 · Git] 마지막 세션(2026-09-03T16:40+09:00) 이후:
    · homepage master: HEAD bc7cea9 / origin bc7cea9 :: bc7cea9 진행 기록: 인계 갱신 (17화 수정·18화 초고 완성 반영) / 247ed2e 자동: 카드뉴스 갱신 (2026-09-03)
    · llm-wiki master: HEAD 2a485e17 / origin 2a485e17(푸시 완료) ·작업트리 변경 61 :: 2a485e17 심리학 17화 무진님 라인 검토 반영(맞춤법·문어체·문장 구성) + 도판 스펙 5키 보완 + 18화 §10 이상(李箱)·동아시아 수용 반영 / 7f7049f8 17화(기능주의·제임스) 동어반복 제거·새 내용 보강 수정 완료 + 18화(의식의 흐름·심리학 원리) 초고 완성 — 17화 문장 중복 0·약 19,078자, 18화 21,732자·12절·각주16·도판3 placeholder·원문(Project Gutenberg #57628) 인용, 검토내용·도판 placeholder 추가
    · harness  main: HEAD 6d10592 / origin 6d10592 ·작업트리 변경 3 :: 6d10592 docs(desktop-handoff): 인계 갱신 동기 (17화 수정·18화 초고 완성 반영)
    · openclaw main: HEAD 11a8f0a / origin 11a8f0a :: (커밋 없음)
  - [17화 본문 — 무진님 라인 검토 반영] 문장부호: '돈을 벌까? 명예를 지킬까? 욕구를 따를까? 양심을 따를까?' 의문형 나열 물음표로 확정(맞춤법 근거 제시 — '?,' 결합 불가, 각 항 독립 의문이면 항마다 물음표) · '갈까 말까 망설였다'는 긍정·부정 대립쌍이라 쉼표 없음 · "'나는 누구인가?'라는 물음은 '너는 누구인가?'라는 물음과 이어졌다"(물음표 따옴표 안쪽) · §8 개념 '나' 작은따옴표 통일
  - 시제: '이유였다→이유이다'(과거형=일시성 함의, 항구적 성격은 현재형). 문어체→중학생 눈높이 평이어 8건: 폄하→깎아내리다 · 회자→입에 오르내리다 · 규명→밝히다 · 내실→참모습 · 도식→그림 · 붙잡힌다→나온다 · 기운→성향('성형' 오타 지적) 등
  - 문장 구성 수정: 자아 겹 '무게' 서술('거는 무게를 보여 준다'→'무게를 걸고 있음을 보여 준다', 가장 아끼는 '나' 기준 문단 재구성) · '서로를 맑히는 논의'→'서로를 더 또렷하게 만들어 주는 논의'(뭘 맑혀? 지적) · '그의 관심은…심리학자로 시작해'→'그의 여정은…넓어졌고, 그의 그림자는…이르러 있다'(주어·서술 불일치 수정, 무진님 1안 채택) · '받아들이냐/새로 묻느냐?'→'받아들일 것인가, 아니면 미국의 삶에 맞추어 새로운 질문을 스스로 만들어 낼 것인가? 이 물음 앞에서 미국 심리학은…' · '조각→질문' · '낱말들은 멈추지 않았다→주장들은 빈번히 소환되었다' · '실험실의 심리학자에 그치지 않고…' 문두 '그리고' 추가 · '둘레→주변'·'지형→지점' 등
  - [17화 검토내용 — 도판 스펙 5키 보완] 그림1~3 전부 위치(문단 앵커)·형태·요소·색상·캡션·파일 전면 기입 · 그림1 §4('마음은 구슬이 아니라 강물' 문단) 직후로 재배치(기존 도입부 뒤 §1·§2 사이에서 이동) · 요소·색상은 본인 설계 — 무진님 확인 대기
  - [18화 — 무진님 지적 반영(§10 문학 수용 동아시아 확장)] 1930년대 경성 이상(李箱, 1910–1937 — 『날개』·『오감도』·구인회·『율리시스』 일본어 부분 번역 유입) 문단 추가 — '제임스 직접 독서 불명' 단정 회피 서술 · 그림3 요소(경성 이상 『날개』)·색상(동아시아=붉은 계열) 확장 · 각주 16→17([^16] 이상 신설) · 본문 21,732→22,125자(102%) · 검토내용 사실검증 '이상 항 △ 대조 예정(한국문학사)' — 재검토 대기
  - [작성지침] §2-11 '사상의 수용사 적극 반영' 신설(2026-09-03, 무진님 지침 — 18화 이상 수용 서사에서 일반화: 타 학문·대중문화·일상까지, 직접 영향 단정 회피) + 작성 체크리스트 '수용 사례 확인' 항목 추가
  - [통로 메모 정정] 활성 런처 실측 = **DeepSeek 공식 직판 `api.deepseek.com/anthropic`**(deepseek-v4-flash·opus 슬롯 deepseek-v4-pro, 키 deepseek-api-key.local) — 08-31 'DeepInfra 직결' 기록은 구식 → ## 하네스 메모 통로 줄 정정(DeepInfra 런처는 롤백용 보존)
  - [다음 작업] 17화 무진님 재검토(2차 — §8 '몸이라는 나…' 열거 따옴표 통일 여부·도판 요소/색상 승인) → 확정 → 도판 제작 → 발행 · 18화 재검토(이상 항 사실 대조) → 확정 → 도판 → 발행 · 철학사 11화(아리스토텔레스) 집필

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
1. **심리학사 17화(2-3 기능주의 — 윌리엄 제임스) ✅ 확정·발행(2026-09-04, ep17·id=39)** — 전체 재검증(사실 수정 4건·도판 등장순 배치/재번호·단어 코너 §5 이동)·분량 19,235자(목표 22p의 ~71%, **현재 분량 수준 확정** — 무진님 2026-09-04 지시)·검토내용 확정 갱신·목차 2-3 발행 표기
2. **심리학사 18화(2-4 의식의 흐름 — 『심리학 원리』) 무진님 재검토 → 확정 → 도판 → 발행** — 초고 완성(각주 17·22,125자) + **§10 이상(李箱)·동아시아 수용 반영** — 무진님 재검토 대기(확정 전, 이상 항 사실 대조 예정) · 확정 → 도판(개념도식 AI 제작) → 발행
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
- **심리학사 2권:** 15화(2-1 분트) **✅ 확정·발행(2026-09-01, id=37)** · 16화(2-2 구조주의) **✅ 확정·발행(2026-09-02, ep16·id=38)** · 17화(2-3 기능주의) **✅ 확정·발행(2026-09-04, ep17·id=39, 19,235자 — 사실 수정 4건·도판 등장순 재배치/재번호·단어 코너 §5 이동, placeholder 3종)** · 18화(2-4 의식의 흐름) **§10 이상(李箱)·동아시아 수용 반영(각주 17, 22,125자) — 재검토 대기(확정 전)**
- **Claude Code 통로 (DeepSeek 공식 직판 — 최신 실측 2026-09-03):** 실행 `OneDrive\바탕 화면\AI\Claude-Code-DeepSeek.cmd` → `~\.claude\start-claude-deepseek.ps1` → **`api.deepseek.com/anthropic`**(deepseek-v4-flash, opus 슬롯 deepseek-v4-pro) · 키 `~\.claude\deepseek-api-key.local`(sk-...) · `/login` 금지 · VS Code 자동실행 버그해결: cmd title 제거+claude.exe 직접 실행 · **⚠️ 08-31 기록의 'DeepInfra 직결'(start-claude-deepinfra.ps1·api.deepinfra.com/anthropic, 잔액 $5)은 현재 미사용(구식)** — 런처·키는 롤백용 보존
- **Git tip:** LLM Wiki `origin/master` · homepage `origin/master`(`project\homepage\progress.md` 동기) · harness `origin/main`(`docs\desktop-handoff\` 미러) · openclaw `origin/main` · CRLF `M`은 `git diff HEAD --stat` 확인
- **(완료 참조 — 상세는 아카이브·저장소):** 4개 PDF 파이프라인(피그마·예일대지성사·AI Agent·듀얼브레인 → `G:\내 드라이브\Claude\`) · 철학사수업1 1~11부 교정 → `F:\wiki\raw\`(2c2f0775·de65a7e4) · HWP→TXT `harness\scripts\convert-hwp-to-txt.ps1`(pyhwp) · 카드뉴스·홈페이지 DESIGN.md 1~3단계(`homepage\admin\cardnews\DESIGN.md`→style.css :root→CLAUDE.md) · openclaw-local-mvp(축구/개인 카드) · confidence:low 0 · Google OAuth 토큰 만료(refreshAccessToken)
