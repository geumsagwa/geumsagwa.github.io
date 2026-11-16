# =====================================================================
# Supabase Free Tier 7일 무활동 자동 중단(pause) 방지용 keepalive
# - anon 키로 공개 테이블(library) 읽기 쿼리를 실행해 활동을 유발
# - HTTP 2xx 응답 = DB 활성 + 활동 기록 확정 (206: Prefer count=exact)
# - 실행 결과는 로그 파일에 기록 (homepage/scripts/supabase-keepalive.log)
# - 예약 작업: SupabaseKeepalive (5일 간격, 매일 10:00 트리거 기준)
# =====================================================================
$ErrorActionPreference = "Stop"

# 사이트가 쓰는 설정에서 URL·키를 읽는다(키 교체 시 keepalive가 낡아 401로 죽는 문제 방지)
$ConfigFile = Join-Path (Split-Path $PSScriptRoot -Parent) "supabase-config.js"
$cfgText = Get-Content -LiteralPath $ConfigFile -Raw
$baseUrl = [regex]::Match($cfgText, 'https://[a-z0-9]+\.supabase\.co').Value
$keyMatches = [regex]::Matches($cfgText, "SUPABASE_ANON_KEY[^\r\n]*'([^'\r\n]{20,})'")
$anonKey = if ($keyMatches.Count -gt 0) { $keyMatches[$keyMatches.Count - 1].Groups[1].Value } else { "" }
if (-not $baseUrl -or -not $anonKey) { Write-Warning "[supabase-keepalive] 설정 파싱 실패: $ConfigFile"; exit 2 }
$url = "$baseUrl/rest/v1/library?select=count&limit=1"
$LogFile = Join-Path $PSScriptRoot "supabase-keepalive.log"
$ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

function Write-KeepaliveLog {
    param([string]$Message)
    Add-Content -LiteralPath $LogFile -Value "[$ts] $Message" -Encoding UTF8
}

try {
    $resp = Invoke-WebRequest -Uri $url -Method Get -Headers @{
        "apikey" = $anonKey
        "Authorization" = "Bearer $anonKey"
        "Accept" = "application/json"
        "Prefer" = "count=exact"
    } -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    $sc = [int]$resp.StatusCode
    if ($sc -ge 200 -and $sc -lt 300) {
        Write-Host "[supabase-keepalive] OK — HTTP $sc (활동 유발 확인)"
        Write-KeepaliveLog "OK — HTTP $sc (읽기 쿼리 성공, 활동 유발)"
        exit 0
    } else {
        Write-Warning "[supabase-keepalive] 예상 외 응답: HTTP $sc"
        Write-KeepaliveLog "WARN — HTTP $sc (2xx 아님)"
        exit 1
    }
} catch {
    $sc = $_.Exception.Response.StatusCode.value__
    if ($null -eq $sc) {
        Write-Warning "[supabase-keepalive] 네트워크/타임아웃 오류 — $($_.Exception.Message)"
        Write-KeepaliveLog "FAIL — 네트워크 오류: $($_.Exception.Message)"
        exit 2
    }
    # 401/403 등 인증 차단: 활동으로 인정되지 않으므로 성공으로 보지 않는다(2026-08~11 401 방치 사고)
    Write-Warning "[supabase-keepalive] FAIL — HTTP $sc (인증 실패: 키 불일치 가능)"
    Write-KeepaliveLog "FAIL — HTTP $sc (인증 실패, 활동 미인정)"
    exit 1
}
