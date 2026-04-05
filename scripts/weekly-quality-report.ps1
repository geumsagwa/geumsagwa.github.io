param(
  [string]$ReportDate = (Get-Date -Format "yyyy-MM-dd")
)

$ErrorActionPreference = "Continue"
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$root = Split-Path -Parent $PSScriptRoot
$reportsDir = Join-Path $root "reports"
if (-not (Test-Path $reportsDir)) {
  New-Item -ItemType Directory -Path $reportsDir | Out-Null
}

$reportPath = Join-Path $reportsDir ("weekly-quality-{0}.md" -f ($ReportDate -replace "-", ""))

function Run-Step([string]$name, [string[]]$commandParts) {
  $exe = $commandParts[0]
  $args = @()
  if ($commandParts.Length -gt 1) {
    $args = $commandParts[1..($commandParts.Length - 1)]
  }
  $output = & $exe @args 2>&1
  $exitCode = $LASTEXITCODE
  return @{
    Name = $name
    ExitCode = $exitCode
    Output = ($output -join "`n")
  }
}

Push-Location $root
try {
  $checkResult = Run-Step "quality-check" @("npm", "run", "check")
  $onboardingResult = Run-Step "onboarding-check" @("npm", "run", "verify:onboarding")
  $branchResult = Run-Step "branch-protection-check" @("npm", "run", "branch-protection:check")
  if ($branchResult.Output -match "blocked by plan \(403\)" -or $branchResult.Output -match "pending \(repo not configured\)" -or $branchResult.Output -match "pending \(repo not found\)") {
    $branchResult.ExitCode = 2
  }
}
finally {
  Pop-Location
}

$statusIcon = {
  param($code)
  if ($code -eq 0) { return "PASS" }
  if ($code -eq 2) { return "PENDING" }
  return "FAIL"
}

$lines = @(
  "# Weekly Quality Report ($ReportDate)",
  "",
  "## Result Summary",
  "",
  "| Item | Status | Exit code |",
  "|---|---|---:|",
  "| quality-check ('npm run check') | $(& $statusIcon $checkResult.ExitCode) | $($checkResult.ExitCode) |",
  "| onboarding-check ('npm run verify:onboarding') | $(& $statusIcon $onboardingResult.ExitCode) | $($onboardingResult.ExitCode) |",
  "| branch-protection-check ('npm run branch-protection:check') | $(& $statusIcon $branchResult.ExitCode) | $($branchResult.ExitCode) |",
  "",
  "## Notes",
  "",
  "- PENDING means external plan/policy blocker (e.g., GitHub 403 or repo config pending).",
  "- For any FAIL, rerun the failed command and attach remediation notes.",
  "",
  "## Raw Output",
  "",
  "### quality-check",
  "~~~text",
  $checkResult.Output,
  "~~~",
  "",
  "### onboarding-check",
  "~~~text",
  $onboardingResult.Output,
  "~~~",
  "",
  "### branch-protection-check",
  "~~~text",
  $branchResult.Output,
  "~~~"
)
$content = $lines -join "`n"

Set-Content -Path $reportPath -Value $content -Encoding UTF8
Write-Host "weekly report generated: $reportPath"

if ($checkResult.ExitCode -ne 0 -or $onboardingResult.ExitCode -ne 0) {
  exit 1
}

exit 0
