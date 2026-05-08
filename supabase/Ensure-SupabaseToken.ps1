#Requires -Version 5.1
# Dot-source only. Sets $env:SUPABASE_ACCESS_TOKEN from env or supabase/.access-token
$ErrorActionPreference = 'Stop'
$sdir = Split-Path -Parent $MyInvocation.MyCommand.Path

function Read-TokenFromFile {
  param([string]$Path)
  foreach ($line in Get-Content -LiteralPath $Path) {
    $t = $line.Trim()
    if (-not $t -or $t.StartsWith('#')) { continue }
    if ($t -match '^sbp_\S+') { return $Matches[0] }
  }
  return $null
}

$existing = $env:SUPABASE_ACCESS_TOKEN
if ($existing) {
  $env:SUPABASE_ACCESS_TOKEN = $existing.Trim()
  if ($env:SUPABASE_ACCESS_TOKEN -match '^sbp_\S+') { return }
}

$tf = Join-Path $sdir '.access-token'
if (Test-Path -LiteralPath $tf) {
  $tok = Read-TokenFromFile $tf
  if ($tok -and $tok -match '^sbp_\S+') {
    $env:SUPABASE_ACCESS_TOKEN = $tok
    return
  }
}

Write-Error @'
Supabase Personal Access Token missing (required for CLI secrets/deploy).

Create a token: https://supabase.com/dashboard/account/tokens
Then either:
  $Env:SUPABASE_ACCESS_TOKEN = 'sbp_...'
Or create supabase/.access-token with sbp_... on the first line (see .access-token.example).

Then run: .\supabase\push-kakao-edge.ps1
'@
