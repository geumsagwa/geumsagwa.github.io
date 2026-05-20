param([string]$BriefingFile="",[string]$OutputDir="C:\Users\pass6\project\homepage\admin\cardnews")
if (-not $BriefingFile) {
  $latest = Get-ChildItem "C:\Users\pass6\project\openclaw-local-mvp\data\output\briefing-*.md" | Sort-Object Name -Descending | Select-Object -First 1
  if (-not $latest) { Write-Error "No briefing file found"; exit 1 }
  $BriefingFile = $latest.FullName
}

$ds = [System.IO.Path]::GetFileNameWithoutExtension($BriefingFile) -replace "briefing-", ""
$y = $ds.Substring(0,4)
$m = $ds.Substring(5,2)
$d = $ds.Substring(8,2)
$wd = (Get-Date "$y-$m-$d").DayOfWeek.ToString().Substring(0,3)

$content = Get-Content $BriefingFile -Encoding UTF8 -Raw

$sec = @{}
$order = @()
$cur = ""
$buf = @()

foreach ($line in $content -split "`n") {
  $tline = $line.TrimStart()
  if ($tline -match "^###\s+(.+)") {
    if ($cur -and $buf.Count -gt 0) { $sec[$cur] = $buf.Clone() }
    $cur = $matches[1].Trim()
    $order += $cur
    $buf = @()
  }
  elseif ($tline -match "^- \[(.+?)\]\(.+?\)\s*—\s*(.+)$") { $title = $matches[1]; $desc = $matches[2]; $buf += @{t=$title; d=$desc} }
  elseif ($tline -match "^- \[(.+?)\]\(.+?\)\s*[-–]\s*(.+)$") { $title = $matches[1]; $desc = $matches[2]; $buf += @{t=$title; d=$desc} }
  elseif ($tline -match "^- \[(.+?)\]\(.+?\)(.+)$") { $title = $matches[1]; $desc = $matches[2].Trim(); $buf += @{t=$title; d=$desc} }
  elseif ($tline -match "^- \[(.+?)\]\(.+?\)") { $title = $matches[1]; $buf += @{t=$title} }
  elseif ($tline -match "^- \[(.+?)\]") { $buf += @{t=$matches[1]} }
}
if ($cur -and $buf.Count -gt 0) { $sec[$cur] = $buf.Clone() }

$sched = "Work"
if ($content -match "\(종일\):\s*(.+?)$") { $sched = $matches[1].Trim() }

$ec = @{}; $cl = @{}
$ec["Politics"] = ""; $cl["Politics"] = "#e74c3c"
$ec["Economy"] = ""; $cl["Economy"] = "#2ecc71"
$ec["Society"] = ""; $cl["Society"] = "#f39c12"
$ec["World"] = ""; $cl["World"] = "#3498db"
$ec["Culture"] = ""; $cl["Culture"] = "#9b59b6"
$ec["Son"] = ""; $cl["Son"] = "#e67e22"
$ec["AIIT"] = ""; $cl["AIIT"] = "#1abc9c"

function GetKey($v) {
  $map = @{}
  $map["정치"] = "Politics"; $map["경제"] = "Economy"; $map["사회"] = "Society"
  $map["세계"] = "World"; $map["문화"] = "Culture"; $map["손흥민"] = "Son"
  $map["AI/IT"] = "AIIT"; $map["IT"] = "AIIT"
  if ($map.ContainsKey($v)) { return $map[$v] }
  return $null
}

$html = "<!DOCTYPE html><html lang=""ko""><head><meta charset=""UTF-8""><meta name=""viewport"" content=""width=device-width,initial-scale=1.0""><title>Card News - $ds</title>"
$html += "<style>*{margin:0;padding:0;box-sizing:border-box}body{word-break:keep-all;overflow-wrap:break-word;font-family:-apple-system,sans-serif;background:#f0f2f5;padding:40px 20px;display:flex;flex-direction:column;align-items:center}.cw{max-width:420px;width:100%;display:flex;flex-direction:column;gap:20px}.ch{background:linear-gradient(135deg,#1a1a2e,#16213e);color:#fff;border-radius:20px;padding:40px 28px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.15)}.ch .dt{font-size:14px;opacity:.7;margin-bottom:8px}.ch h1{font-size:26px;font-weight:700;line-height:1.4;margin-bottom:12px}.cc{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,.08)}.cc .st{padding:18px 24px 14px;font-size:14px;font-weight:700;border-bottom:2px solid #f0f2f5}.ci{padding:14px 24px;border-bottom:1px solid #f5f5f5;display:flex;flex-wrap:wrap;gap:4px 8px;align-items:flex-start}.ci:last-child{border-bottom:none}.ci .rk{display:inline-block;width:22px;height:22px;background:#e8ecf0;border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;color:#666;flex-shrink:0;margin-top:2px}.ci .tl{font-size:15px;font-weight:500;line-height:1.5;color:#222;flex:1;word-break:keep-all;overflow-wrap:break-word}.ci .tl .desc{font-size:13px;font-weight:400;color:#666;line-height:1.4;display:block;margin-top:4px}.cs{padding:20px 24px}.csi{display:flex;align-items:center;gap:12px;padding:8px 0}.cd{width:8px;height:8px;border-radius:50%;background:#1a73e8;flex-shrink:0}.cst{font-size:15px;color:#333}.cf{text-align:center;padding:30px 20px;color:#999;font-size:12px}</style></head><body><div class=""cw""><div class=""ch""><div class=""dt"">$y.$m.$d ($wd)</div><h1>Gaebali<br>Card News</h1></div>"

foreach ($sk in $order) {
  $items = $sec[$sk]
  if (-not $items -or $items.Count -eq 0) { continue }
  $k = GetKey $sk
  $c = if ($k -and $cl.ContainsKey($k)) { $cl[$k] } else { "#1a73e8" }
  $html += "<div class=""cc""><div class=""st"" style=""color:$c"">$sk</div>"
  $ri = 1
  foreach ($item in $items) {
    $t = $item.t -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
    $d = if ($item.d) { $item.d -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;" } else { "" }
    if ($d) { $html += "<div class=""ci""><span class=""rk"">$ri</span><div class=""tl""><strong>$t</strong><br><span class=""desc"">$d</span></div></div>" }
    else { $html += "<div class=""ci""><span class=""rk"">$ri</span><div class=""tl"">$t</div></div>" }
    $ri++
  }
  $html += "</div>"
}

$schedEsc = $sched -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
$html += "<div class=""cc""><div class=""st"" style=""color:#1a73e8"">Schedule: $schedEsc</div></div>"
$html += "<div class=""cc""><div class=""st"" style=""color:#e74c3c"">Email</div></div>"
$html += "<div class=""cc""><div class=""st"" style=""color:#2ecc71"">Site OK</div></div>"
$html += "<div class=""cf"">Gaebali Briefing - $ds</div></div></body></html>"

if (-not (Test-Path $OutputDir)) { New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null }
$outFile = Join-Path $OutputDir "$ds.html"
$html | Set-Content -Path $outFile -Encoding UTF8

$mf = Join-Path $OutputDir "index.json"
# 요약문 생성 (첫 3개 카테고리에서 첫 뉴스 제목 추출)
$summaryLines = @()
$catCount = 0
foreach ($sk in $order) {
  $items = $sec[$sk]
  if (-not $items -or $items.Count -eq 0) { continue }
  $k = GetKey $sk
  if (-not $k -or @("Schedule","Email","Son") -contains $k) { continue }  # 일정/이메일/스포츠는 제외
  $firstTitle = $items[0].t -replace '["""''''"]', ''
  $summaryLines += "$sk $firstTitle 외 $($items.Count-1)건"
  $catCount++
  if ($catCount -ge 2) { break }
}
$summaryText = $summaryLines -join " / "

$manifest = @{ items = @() }
if (Test-Path $mf) {
  try { $manifest = Get-Content $mf -Encoding UTF8 | ConvertFrom-Json } catch {}
}
# 해당 날짜가 이미 있으면 갱신, 없으면 추가
$found = $false
for ($i = 0; $i -lt $manifest.items.Count; $i++) {
  if ($manifest.items[$i].date -eq $ds) {
    $manifest.items[$i].summary = $summaryText
    $found = $true
    break
  }
}
if (-not $found) {
  $manifest.items = @(@{date=$ds;summary=$summaryText}) + @($manifest.items)
}
$manifest | ConvertTo-Json -Depth 3 | Set-Content -Path $mf -Encoding UTF8
Write-Output "OK: $outFile"

