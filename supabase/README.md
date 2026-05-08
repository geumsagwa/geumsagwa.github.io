# Supabase Edge Functions (홈페이지)

## `kakao-token`

브라우저의 카카오 인가 `code`를 서버에서 `access_token`으로 바꿉니다. **Client secret**은 이 함수의 환경 변수에만 두고, 프론트에는 넣지 않습니다.

### 1) 카카오 콘솔

- [내 애플리케이션](https://developers.kakao.com/console/app) → REST API 키 → **Client secret** 사용(ON) 유지 가능.
- Redirect URI: `https://geumsagwa.github.io/login.html` (REST API 키 쪽에 등록).

### 2) Supabase 시크릿

**자동 (권장):** `supabase/.secrets.env.example` 을 복사해 **`supabase/.secrets.env`** 를 만들고 `KAKAO_REST_API_KEY`, `KAKAO_CLIENT_SECRET` 를 채웁니다. (이 파일은 `.gitignore`에 있음.)

Personal Access Token (`sbp_...`)은 **[Account → Access Tokens](https://supabase.com/dashboard/account/tokens)** 에서만 발급됩니다. 매번 환경 변수에 넣기 귀찮으면 **`supabase/.access-token.example`** 을 참고해 **`supabase/.access-token`** 파일을 만들고 첫 줄에 토큰만 넣으면 됩니다. (이 파일도 gitignore)

```powershell
cd C:\Users\pass6\project\homepage
# PAT: $env:SUPABASE_ACCESS_TOKEN = "sbp_..."  또는 supabase/.access-token
.\supabase\push-kakao-edge.ps1   # secrets 업로드 + kakao-token 배포 한 번에
# 시크릿만 올릴 때: .\supabase\set-kakao-secrets.ps1
```

**수동 (CLI):**

```bash
cd supabase/..   # homepage 루트
supabase login
supabase link --project-ref qswzutgxtiuigrocqcmc
supabase secrets set KAKAO_REST_API_KEY="카카오_REST_API_키" KAKAO_CLIENT_SECRET="카카오_Client_Secret_코드"
```

**수동 (대시보드):** Project Settings → Edge Functions → **Secrets** 에 `KAKAO_REST_API_KEY`, `KAKAO_CLIENT_SECRET` 추가.

(`KAKAO_REST_API_KEY`는 `supabase-config.js`의 공개 REST 키와 동일하면 됩니다.)

### 3) 배포

```bash
supabase functions deploy kakao-token --project-ref qswzutgxtiuigrocqcmc
```

### 4) 로컬 디버그 (선택)

```bash
supabase secrets set --env-file ./supabase/.env.local   # 또는 대시보드 Edge Functions → Secrets
supabase functions serve kakao-token
```

`login.js`는 기본적으로 배포된 프로젝트 URL로 `invoke`합니다. 로컬만 쓸 경우 `SUPABASE_URL`을 로컬 게이트웨이로 바꾸는 방식은 Supabase 문서를 참고하세요.

### Redirect URI allowlist (보안·카카오 정합)

검증 시 **`search`·`hash`는 제거**한 뒤(`origin`+`pathname`) allowlist 및 카카오 `oauth/token`의 `redirect_uri`에 씁니다. 프론트 `kakaoRedirectUri()`가 원래 `search`를 안 붙이더라도, 잘못된 입력에 대비한 정규화입니다.

로컬 예시로 `http://localhost:5500/login.html`, `http://127.0.0.1:5500/login.html`를 넣어 두었습니다. 다른 포트·경로를 쓰면 **카카오에 해당 URI 등록** 후 **같은 문자열을 Set에 추가**하고 함수를 재배포하세요.

### CORS

`https://geumsagwa.github.io` 및 `localhost` / `127.0.0.1` **Origin**만 허용합니다(`isAllowedOrigin`). **Redirect allowlist**와는 별개입니다.
