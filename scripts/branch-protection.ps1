param(
  [ValidateSet("Check", "Apply")]
  [string]$Mode = "Check",
  [string]$Repo = "",
  [string]$Branch = "",
  [string[]]$Contexts = @("semgrep", "quality-gate (20.x)", "quality-gate (22.x)")
)

$ErrorActionPreference = "Continue"

function Invoke-GhApi([string[]]$Arguments) {
  $output = & gh @Arguments 2>&1
  $exitCode = $LASTEXITCODE
  return @{
    Output = ($output -join "`n")
    ExitCode = $exitCode
  }
}

function Resolve-RepoFromGitRemote {
  if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    return $null
  }

  $remote = & git config --get remote.origin.url 2>$null
  if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($remote)) {
    return $null
  }

  $normalized = $remote.Trim()
  if ($normalized -match '^https://github\.com/(?<owner>[^/]+)/(?<name>[^/]+?)(\.git)?$') {
    return "$($matches.owner)/$($matches.name)"
  }
  if ($normalized -match '^git@github\.com:(?<owner>[^/]+)/(?<name>[^/]+?)(\.git)?$') {
    return "$($matches.owner)/$($matches.name)"
  }
  return $null
}

function Resolve-DefaultBranch([string]$RepoName) {
  if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    return $null
  }

  $defaultBranch = & gh repo view $RepoName --json defaultBranchRef --jq .defaultBranchRef.name 2>$null
  if ($LASTEXITCODE -eq 0 -and -not [string]::IsNullOrWhiteSpace($defaultBranch)) {
    return $defaultBranch.Trim()
  }
  return $null
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error "gh CLI가 필요합니다. 먼저 GitHub CLI를 설치하세요."
  exit 1
}

$effectiveRepo = $Repo
if ([string]::IsNullOrWhiteSpace($effectiveRepo)) {
  $effectiveRepo = $env:CODE_SHIELD_REPO
}
if ([string]::IsNullOrWhiteSpace($effectiveRepo)) {
  $effectiveRepo = Resolve-RepoFromGitRemote
}

if ([string]::IsNullOrWhiteSpace($effectiveRepo)) {
  Write-Host "branch protection: pending (repo not configured)"
  Write-Host "repo를 확인할 수 없습니다. -Repo owner/name 인자를 지정하거나 origin remote를 설정하세요."
  exit 2
}

$effectiveBranch = $Branch
if ([string]::IsNullOrWhiteSpace($effectiveBranch)) {
  $effectiveBranch = Resolve-DefaultBranch -RepoName $effectiveRepo
}
if ([string]::IsNullOrWhiteSpace($effectiveBranch)) {
  $effectiveBranch = "main"
}

if ($Mode -eq "Check") {
  $result = Invoke-GhApi -Arguments @("api", "repos/$effectiveRepo/branches/$effectiveBranch/protection")
  if ($result.ExitCode -eq 0) {
    Write-Host "branch protection: enabled ($effectiveRepo/$effectiveBranch)"
    exit 0
  }

  if ($result.Output -match "HTTP 403" -or $result.Output -match "Upgrade to GitHub Pro") {
    Write-Host "branch protection: blocked by plan (403)"
    Write-Host $result.Output
    exit 2
  }
  if ($result.Output -match "HTTP 404" -or $result.Output -match "Not Found") {
    Write-Host "branch protection: pending (repo not found)"
    Write-Host $result.Output
    exit 2
  }

  Write-Error "branch protection 상태 확인 실패 ($effectiveRepo/$effectiveBranch)"
  Write-Host $result.Output
  exit 1
}

$payload = @{
  required_status_checks = @{
    strict = $true
    contexts = $Contexts
  }
  enforce_admins = $true
  required_pull_request_reviews = @{
    required_approving_review_count = 1
  }
  restrictions = $null
} | ConvertTo-Json -Depth 5

$tmpFile = Join-Path $env:TEMP "branch-protection-payload.json"
Set-Content -Path $tmpFile -Value $payload -Encoding UTF8

try {
  $result = Invoke-GhApi -Arguments @(
    "api",
    "repos/$effectiveRepo/branches/$effectiveBranch/protection",
    "--method",
    "PUT",
    "--input",
    $tmpFile
  )

  if ($result.ExitCode -eq 0) {
    Write-Host "branch protection: applied ($effectiveRepo/$effectiveBranch)"
    exit 0
  }

  if ($result.Output -match "HTTP 403" -or $result.Output -match "Upgrade to GitHub Pro") {
    Write-Host "branch protection apply blocked by plan (403)"
    Write-Host $result.Output
    exit 2
  }
  if ($result.Output -match "HTTP 404" -or $result.Output -match "Not Found") {
    Write-Host "branch protection apply pending (repo not found)"
    Write-Host $result.Output
    exit 2
  }

  Write-Error "branch protection 적용 실패 ($effectiveRepo/$effectiveBranch)"
  Write-Host $result.Output
  exit 1
}
finally {
  if (Test-Path $tmpFile) {
    Remove-Item $tmpFile -Force
  }
}
