// 카카오 authorization_code → access_token (client_secret은 서버 전용).
// 배포: supabase secrets set KAKAO_REST_API_KEY=... KAKAO_CLIENT_SECRET=...
//       supabase functions deploy kakao-token --project-ref <ref>
// 자세한 절차: supabase/README.md

const TOKEN_URL = "https://kauth.kakao.com/oauth/token";

// 카카오 REST API 키의 Redirect URI 등록값과 문자 단위 동일해야 함.
// 다른 포트·경로를 쓰면 카카오 콘솔에 등록 후 아래 Set에 동일 문자열 추가 + 재배포.
const ALLOWED_REDIRECT_URIS = new Set([
  "https://geumsagwa.github.io/login.html",
  "http://localhost:5500/login.html",
  "http://127.0.0.1:5500/login.html",
]);

function isAllowedOrigin(origin: string): boolean {
  if (!origin) return false;
  try {
    const u = new URL(origin);
    if (u.origin === "https://geumsagwa.github.io") return true;
    if (u.hostname === "localhost" || u.hostname === "127.0.0.1") return true;
    return false;
  } catch {
    return false;
  }
}

function isAllowedRedirect(redirectUri: string): boolean {
  try {
    const canonical = canonicalRedirectUri(redirectUri);
    return ALLOWED_REDIRECT_URIS.has(canonical);
  } catch {
    return false;
  }
}

/** search·hash 제거 — allowlist·카카오 token 요청 모두 동일 문자열 사용 */
function canonicalRedirectUri(redirectUri: string): string {
  const u = new URL(redirectUri);
  return `${u.origin}${u.pathname}`;
}

function corsHeaders(req: Request): HeadersInit {
  const origin = req.headers.get("origin") ?? "";
  const allow = isAllowedOrigin(origin) ? origin : "https://geumsagwa.github.io";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

function json(body: unknown, req: Request, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(req) },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(req) });
  }

  if (req.method !== "POST") {
    return json({ error: "method_not_allowed" }, req, 405);
  }

  let payload: { code?: string; redirect_uri?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "invalid_json" }, req, 400);
  }

  const code = payload?.code;
  const redirect_uri = payload?.redirect_uri;

  if (!code || typeof code !== "string" || !redirect_uri || typeof redirect_uri !== "string") {
    return json({ error: "code_and_redirect_uri_required" }, req, 400);
  }

  if (!isAllowedRedirect(redirect_uri)) {
    return json({ error: "redirect_uri_not_allowed" }, req, 400);
  }

  const redirectForKakao = canonicalRedirectUri(redirect_uri);

  const clientId = Deno.env.get("KAKAO_REST_API_KEY");
  const clientSecret = Deno.env.get("KAKAO_CLIENT_SECRET");

  if (!clientId || !clientSecret) {
    console.error("kakao-token: missing KAKAO_REST_API_KEY or KAKAO_CLIENT_SECRET");
    return json({ error: "server_misconfiguration" }, req, 500);
  }

  const form = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectForKakao,
    code,
  });

  const kakaoRes = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form,
  });

  const kakaoJson = await kakaoRes.json();

  if (!kakaoRes.ok) {
    const msg = [kakaoJson.error, kakaoJson.error_description]
      .filter(Boolean)
      .join(": ");
    return json({ error: msg || "kakao_token_failed" }, req, 400);
  }

  return json(
    {
      access_token: kakaoJson.access_token,
      expires_in: kakaoJson.expires_in,
      refresh_token: kakaoJson.refresh_token,
    },
    req,
    200,
  );
});
