#Requires -Version 5.1
<#
  Kakao Edge: secrets 업로드 + kakao-token 함수 배포 (한 번에).
  사전: supabase/.secrets.env, 그리고 PAT 는 $Env:SUPABASE_ACCESS_TOKEN 또는 supabase/.access-token

  homepage 저장소 루트에서:
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
  Write-Host "Setting Edge secrets ($projectRef)..."
  npx --yes supabase secrets set --project-ref $projectRef --env-file $envFile
  if ($LASTEXITCODE -ne 0) { throw "supabase secrets set failed (exit $LASTEXITCODE)" }

  Write-Host "Deploying kakao-token..."
  npx --yes supabase functions deploy kakao-token --project-ref $projectRef
  if ($LASTEXITCODE -ne 0) { throw "functions deploy failed (exit $LASTEXITCODE)" }

  Write-Host "OK: secrets updated and kakao-token deployed."
} finally {
  Pop-Location
}
