param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$jsFiles = Get-ChildItem -Path $Root -Recurse -File -Include *.js,*.mjs,*.cjs | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and
    $_.FullName -notmatch '\\epub\\'
}

if (@($jsFiles).Count -eq 0) {
    Write-Host "[OK] no js files found"
    exit 0
}

foreach ($f in $jsFiles) {
    Write-Host "[CHECK] $($f.FullName)"
    node --check "$($f.FullName)"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[FAIL] syntax error: $($f.FullName)"
        exit $LASTEXITCODE
    }
}

Write-Host "[OK] syntax check passed: $(@($jsFiles).Count) files"
exit 0
