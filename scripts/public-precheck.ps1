param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Add-Result {
    param(
        [System.Collections.Generic.List[object]]$List,
        [string]$Level,
        [string]$Item,
        [string]$Status,
        [string]$Detail
    )
    $List.Add([PSCustomObject]@{
        Level = $Level
        Item = $Item
        Status = $Status
        Detail = $Detail
    }) | Out-Null
}

function Get-TextFiles {
    param([string]$TargetRoot)
    Get-ChildItem -Path $TargetRoot -Recurse -File | Where-Object {
        $_.FullName -notmatch '\\node_modules\\' -and
        $_.FullName -notmatch '\\epub\\' -and
        $_.Extension -in @('.js', '.mjs', '.cjs', '.html', '.css', '.sql', '.md', '.txt', '.json', '.env')
    }
}

$results = New-Object 'System.Collections.Generic.List[object]'
$now = Get-Date
$reportDir = Join-Path $Root 'reports'
if (!(Test-Path $reportDir)) {
    New-Item -ItemType Directory -Path $reportDir | Out-Null
}
$reportPath = Join-Path $reportDir ("public_precheck_{0}.md" -f $now.ToString('yyyyMMdd_HHmmss'))

# 1) required files
$requiredFiles = @(
    '.env.example',
    'setup_members.sql',
    'setup_members_seed_admin.sql',
    'setup_members_transfer_admin.sql',
    'setup_members_revoke_admin.sql',
    'WORKSPEC_MAINTENANCE_MAP.md'
)
foreach ($rf in $requiredFiles) {
    $full = Join-Path $Root $rf
    if (Test-Path $full) {
        Add-Result -List $results -Level 'INFO' -Item "required file: $rf" -Status 'PASS' -Detail 'found'
    } else {
        Add-Result -List $results -Level 'HIGH' -Item "required file: $rf" -Status 'FAIL' -Detail 'missing'
    }
}

# 2) csp coverage
$allHtml = Get-ChildItem -Path $Root -Recurse -File -Filter '*.html' | Where-Object { $_.FullName -notmatch '\\node_modules\\' }
$cspHtml = @()
foreach ($h in $allHtml) {
    if (Select-String -Path $h.FullName -Pattern 'Content-Security-Policy' -SimpleMatch -Quiet) {
        $cspHtml += $h
    }
}
if (@($allHtml).Count -eq 0) {
    Add-Result -List $results -Level 'MEDIUM' -Item 'csp coverage' -Status 'WARN' -Detail 'no html files'
} elseif (@($cspHtml).Count -eq @($allHtml).Count) {
    Add-Result -List $results -Level 'INFO' -Item 'csp coverage' -Status 'PASS' -Detail "$(@($cspHtml).Count)/$(@($allHtml).Count)"
} else {
    Add-Result -List $results -Level 'MEDIUM' -Item 'csp coverage' -Status 'WARN' -Detail "$(@($cspHtml).Count)/$(@($allHtml).Count)"
}

# 3) .gitignore env patterns
$gitignorePath = Join-Path $Root '.gitignore'
if (Test-Path $gitignorePath) {
    $gitignoreLines = Get-Content -Path $gitignorePath | ForEach-Object { $_.Trim() }
    $ok = ($gitignoreLines -contains '.env') -and ($gitignoreLines -contains '.env.*')
    if ($ok) {
        Add-Result -List $results -Level 'INFO' -Item '.gitignore env patterns' -Status 'PASS' -Detail '.env/.env.* found'
    } else {
        Add-Result -List $results -Level 'MEDIUM' -Item '.gitignore env patterns' -Status 'WARN' -Detail 'partial missing'
    }
} else {
    Add-Result -List $results -Level 'HIGH' -Item '.gitignore env patterns' -Status 'FAIL' -Detail '.gitignore missing'
}

# 4) secret scan
$secretDefs = @(
    @{ Name = 'hardcoded SERVICE_ROLE_KEY assignment'; Pattern = 'SERVICE_ROLE_KEY\s*=\s*[''"]' },
    @{ Name = 'private key block'; Pattern = '-----BEGIN .*PRIVATE KEY-----' },
    @{ Name = 'github token'; Pattern = 'ghp_[A-Za-z0-9]{20,}' },
    @{ Name = 'slack token'; Pattern = 'xox[baprs]-[A-Za-z0-9-]{10,}' },
    @{ Name = 'openai key'; Pattern = 'sk-[A-Za-z0-9]{20,}' },
    @{ Name = 'aws access key'; Pattern = 'AKIA[0-9A-Z]{16}' }
)

$secretHits = @()
$files = Get-TextFiles -TargetRoot $Root
foreach ($f in $files) {
    foreach ($sd in $secretDefs) {
        $hits = Select-String -Path $f.FullName -Pattern $sd.Pattern -AllMatches
        foreach ($hit in $hits) {
            $secretHits += [PSCustomObject]@{
                Name = $sd.Name
                File = $f.FullName.Replace($Root + '\', '')
                Line = $hit.LineNumber
                Text = $hit.Line.Trim()
            }
        }
    }
}

if (@($secretHits).Count -eq 0) {
    Add-Result -List $results -Level 'INFO' -Item 'secret scan' -Status 'PASS' -Detail 'no high-risk patterns'
} else {
    Add-Result -List $results -Level 'HIGH' -Item 'secret scan' -Status 'FAIL' -Detail "hits: $(@($secretHits).Count)"
}

$highFails = @($results | Where-Object { $_.Level -eq 'HIGH' -and $_.Status -eq 'FAIL' }).Count
$mediumWarns = @($results | Where-Object { $_.Level -eq 'MEDIUM' -and $_.Status -in @('WARN', 'FAIL') }).Count

$summary = 'READY'
if ($highFails -gt 0) { $summary = 'BLOCK' }
elseif ($mediumWarns -gt 0) { $summary = 'CONDITIONAL' }

$md = @()
$md += '# Public precheck report'
$md += ''
$md += "- timestamp: $($now.ToString('yyyy-MM-dd HH:mm:ss'))"
$md += "- target: $Root"
$md += "- summary: **$summary**"
$md += ''
$md += '## Check results'
$md += ''
foreach ($r in $results) {
    $md += "- [$($r.Level)] $($r.Item) - $($r.Status) - $($r.Detail)"
}
$md += ''
$md += '## Secret hits (max 50)'
if (@($secretHits).Count -eq 0) {
    $md += '- none'
} else {
    foreach ($h in ($secretHits | Select-Object -First 50)) {
        $md += "- $($h.Name) / $($h.File):$($h.Line)"
    }
}
$md += ''
$md += '## Manual checks'
$md += '- [ ] setup_members.sql applied'
$md += '- [ ] setup_members_seed_admin.sql applied'
$md += '- [ ] admin account can access admin.html'
$md += '- [ ] non-admin account is blocked from admin.html'
$md += '- [ ] GitHub branch protection configured'

Set-Content -Path $reportPath -Value ($md -join "`r`n") -Encoding UTF8
Write-Host "[OK] report: $reportPath"
Write-Host "[OK] summary: $summary"

if ($summary -eq 'BLOCK') { exit 2 }
if ($summary -eq 'CONDITIONAL') { exit 1 }
exit 0
