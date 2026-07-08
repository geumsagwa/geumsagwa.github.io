$ErrorActionPreference = "Stop"
$url = "https://qswzutgxtiuigrocqcmc.supabase.co/rest/v1/members?select=count&limit=1"
$anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzd3p1dGd4dGl1aWdyb2NxY21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NzkxMjksImV4cCI6MjA3OTM1NTEyOX0.FezD3WM7YMhh45t6pYrUoi2yNWK8e1MQXPzzk6EjK8M"

try {
    $resp = Invoke-WebRequest -Uri $url -Method Get -Headers @{
        "apikey" = $anonKey
        "Authorization" = "Bearer $anonKey"
        "Accept" = "application/json"
    } -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    Write-Host "[supabase-keepalive] OK — $($resp.StatusCode)"
} catch {
    $sc = $_.Exception.Response.StatusCode.value__
    # 401/406는 인증 없이 접근 시 정상 (익명 사용자). DB가 살아있다는 의미.
    if ($sc -eq 401 -or $sc -eq 406 -or $sc -eq 404) {
        Write-Host "[supabase-keepalive] OK — DB 활성 (HTTP $sc)"
    } else {
        Write-Warning "[supabase-keepalive] 이상 응답: $sc — $($_.Exception.Message)"
    }
}
