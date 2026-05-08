#Requires -Version 5.1
<#
  Supabase Edge Secrets: KAKAO_REST_API_KEY, KAKAO_CLIENT_SECRET
  사전 조건:
    1) supabase/.secrets.env 파일 (이 폴더의 .secrets.env.example 참고)
    2) PAT: $env:SUPABASE_ACCESS_TOKEN 또는 supabase/.access-token (한 줄 sbp_...)

  사용 (homepage 저장소 루트에서):
    .\supabase\set-kakao-secrets.ps1

  secrets + 배포 한 번에:
    .\supabase\push-kakao-edge.ps1
#>
$ErrorActionPreference = 'Stop'

$scriptDir = $PSScriptRoot
$repoRoot = Split-Path -Parent $scriptDir
$envFile = Join-Path $scriptDir '.secrets.env'

. (Join-Path $scriptDir 'Ensure-SupabaseToken.ps1')

if (-not (Test-Path -LiteralPath $envFile)) {
  Write-Error "Create supabase/.secrets.env first (see .secrets.env.example)."
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
