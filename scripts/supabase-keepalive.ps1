# =====================================================================
# Supabase Free Tier 7일 무활동 자동 중단(pause) 방지용 keepalive
# - anon 키로 공개 테이블(library) 읽기 쿼리를 실행해 활동을 유발
# - HTTP 2xx 응답 = DB 활성 + 활동 기록 확정 (206: Prefer count=exact)
# - 실행 결과는 로그 파일에 기록 (homepage/scripts/supabase-keepalive.log)
# - 예약 작업: SupabaseKeepalive (5일 간격, 매일 10:00 트리거 기준)
# =====================================================================
$ErrorActionPreference = "Stop"

$url = "https://qswzutgxtiuigrocqcmc.supabase.co/rest/v1/library?select=count&limit=1"
$anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzd3p1dGd4dGl1aWdyb2NxY21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NzkxMjksImV4cCI6MjA3OTM1NTEyOX0.FezD3WM7YMhh45t6pYrUoi2yNWK8e1MQXPzzk6EjK8M"
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
    # 401/403/404 등 인증·권한 차단: DB는 살아있으나 2xx가 아니므로 활동 인식 불확실
    Write-Host "[supabase-keepalive] DB 활성 확인 (HTTP $sc) — 단 2xx 아님"
    Write-KeepaliveLog "DB 활성 (HTTP $sc) — 2xx 아님, 활동 인식 불확실"
    exit 2
}
