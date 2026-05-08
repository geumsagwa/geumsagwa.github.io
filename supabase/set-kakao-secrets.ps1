#Requires -Version 5.1
<#
  Supabase Edge Secrets: KAKAO_REST_API_KEY, KAKAO_CLIENT_SECRET
  사전 조건:
    1) supabase/.secrets.env 파일 (이 폴더의 .secrets.env.example 참고)
    2) $env:SUPABASE_ACCESS_TOKEN — https://supabase.com/dashboard/account/tokens

  사용 (homepage 저장소 루트에서):
    $env:SUPABASE_ACCESS_TOKEN = "sbp_..."
    .\supabase\set-kakao-secrets.ps1
#>
$ErrorActionPreference = 'Stop'

$scriptDir = $PSScriptRoot
$repoRoot = Split-Path -Parent $scriptDir
$envFile = Join-Path $scriptDir '.secrets.env'

if (-not $env:SUPABASE_ACCESS_TOKEN) {
  Write-Error @'
SUPABASE_ACCESS_TOKEN 이 비어 있습니다.
1) https://supabase.com/dashboard/account/tokens 에서 토큰 생성
2) PowerShell: $env:SUPABASE_ACCESS_TOKEN = "sbp_..."  후 다시 실행
'@
}

if (-not (Test-Path -LiteralPath $envFile)) {
  Write-Error "먼저 supabase/.secrets.env 를 만드세요. 예: Copy-Item supabase/.secrets.env.example supabase/.secrets.env 후 KAKAO_* 값 입력"
}

$projectRef = 'qswzutgxtiuigrocqcmc'

Push-Location $repoRoot
try {
  Write-Host "Setting Edge secrets for project $projectRef ..."
  npx --yes supabase secrets set --project-ref $projectRef --env-file $envFile
  if ($LASTEXITCODE -ne 0) { throw "supabase secrets set failed with exit $LASTEXITCODE" }
  Write-Host "OK. 필요 시: npx supabase functions deploy kakao-token --project-ref $projectRef"
} finally {
  Pop-Location
}
