param([string]$BriefingFile="",[string]$OutputDir="C:\Users\pass6\project\homepage\admin\cardnews")
if (-not $BriefingFile) {
  $latest = Get-ChildItem "C:\Users\pass6\project\openclaw-local-mvp\data\output\briefing-*.md" |
    Sort-Object Name -Descending | Select-Object -First 1
  if (-not $latest) { Write-Error "No briefing file found"; exit 1 }
  $BriefingFile = $latest.FullName
}

$ds = [System.IO.Path]::GetFileNameWithoutExtension($BriefingFile) -replace "briefing-", ""
$y = $ds.Substring(0,4); $mn = [int]$ds.Substring(5,2); $dd = [int]$ds.Substring(8,2)
$dt = Get-Date "$y-$mn-$dd"
$wdk = @{"Monday"="월";"Tuesday"="화";"Wednesday"="수";"Thursday"="목";"Friday"="금";"Saturday"="토";"Sunday"="일"}
$wk = $wdk[$dt.DayOfWeek.ToString()]

$content = Get-Content $BriefingFile -Encoding UTF8 -Raw

$sec = @{}; $order = @(); $cur = ""; $buf = @()
foreach ($line in $content -split "`n") {
  $t = $line.TrimStart()
  if ($t -match "^###\s+(.+)") {
    if ($cur -and $buf.Count -gt 0) { $sec[$cur] = $buf.Clone() }
    $cur = $matches[1].Trim(); $order += $cur; $buf = @()
  }
  elseif ($t -match "^- \[(.+?)\]\((.+?)\)") {
    $title = $matches[1]; $url = ($matches[2] -split "\?")[0]
    $rest = $t -replace "^- \[.+?\]\(.+?\)\s*",""
    $desc = if ($rest) { $rest } else { "" }
    $buf += @{t=$title; u=$url; d=$desc}
  }
  elseif ($t -match "^- \[(.+?)\]") { $buf += @{t=$matches[1]} }
}
if ($cur -and $buf.Count -gt 0) { $sec[$cur] = $buf.Clone() }

function Get-Src($url) {
  $h = ($url -replace "https?://(www\.)?","") -split "/" | Select-Object -First 1
  $m = @{"hani.co.kr"="한겨레";"khan.co.kr"="경향신문";"donga.com"="동아일보"
         "mk.co.kr"="매일경제";"hankyung.com"="한국경제";"yna.co.kr"="연합뉴스"
         "joongang.co.kr"="중앙일보";"chosun.com"="조선일보";"sedaily.com"="서울경제"
         "news1.kr"="뉴스1";"newsis.com"="뉴시스";"espn.com"="ESPN"
         "github.com"="GitHub";"google.com"="Google";"autonocion.com"="Autonocion"
         "scientificamerican.com"="Scientific American"}
  if ($m.ContainsKey($h)) { return $m[$h] }
  return $h
}

$sched = "근무"
$schedExtra = @()
foreach ($line in $content -split "`n") {
  if ($line -match "\(종일\):\s*(.+)") {
    $sched = $matches[1].Trim()
  }
  # "이번 주:" 일정 줄 (괄호로 감싸진 줄)
  elseif ($line -match "^\s*\((.+)\)\s*$" -and $matches[1] -match "이번 주:\s*(.+)") {
    $weekRaw = $matches[1]  # "이번 주:" 이후 내용
    $weekItems = $weekRaw -split "\s*/\s*"
    foreach ($item in $weekItems) {
      $item = $item.Trim()
      if ($item -and $item -notmatch "undefined") { $schedExtra += $item }
    }
  }
}

$ej = @{"정치"="🗳️";"경제"="💰";"사회"="🚨";"세계"="🌍";"문화"="🎭";"손흥민"="⚽";"AI/IT"="🤖"}
$cl = @{"정치"="#e74c3c";"경제"="#2ecc71";"사회"="#f39c12";"세계"="#3498db";"문화"="#9b59b6";"손흥민"="#e67e22";"AI/IT"="#1abc9c"}

$css = @"
*{margin:0;padding:0;box-sizing:border-box}
body{word-break:keep-all;overflow-wrap:break-word;font-family:-apple-system,'Noto Sans KR','Malgun Gothic',sans-serif;background:#f0f2f5;padding:40px 16px;display:flex;flex-direction:column;align-items:center}
.wrap{max-width:420px;width:100%;display:flex;flex-direction:column;gap:16px}
.header{background:linear-gradient(135deg,#1a1a2e,#16213e);color:#fff;border-radius:20px;padding:36px 24px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.15)}
.header .date{font-size:13px;opacity:.6;margin-bottom:6px;letter-spacing:1px}
.header h1{font-size:24px;font-weight:700;line-height:1.4;margin-bottom:4px}
.header .sub{font-size:13px;opacity:.5}
.card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.06)}
.card .st{padding:14px 20px 12px;font-size:13px;font-weight:700;letter-spacing:1px;border-bottom:2px solid #f0f2f5}
.item{padding:12px 20px;border-bottom:1px solid #f5f5f5;display:flex;flex-wrap:wrap;gap:4px 8px;align-items:flex-start}
.item:last-child{border-bottom:none}
.num{display:inline-flex;width:20px;height:20px;background:#e8ecf0;border-radius:50%;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#666;flex-shrink:0;margin-top:1px}
.tle{font-size:14px;font-weight:500;line-height:1.5;color:#222;flex:1;word-break:keep-all;overflow-wrap:break-word}
.tle a{color:#222;text-decoration:none}
.tle a:hover{color:#1a73e8;text-decoration:underline}
.src{font-size:11px;color:#999;flex:0 0 100%;padding-left:28px;margin-top:-4px}
.sc{padding:16px 20px}
.si{display:flex;align-items:center;gap:10px;padding:6px 0}
.dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.stx{font-size:14px;color:#444}
.ec{padding:16px 20px}
.ei{display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13px;color:#444}
.el{display:inline-block;padding:1px 7px;border-radius:4px;font-size:10px;font-weight:600;margin-right:4px}
.el.imp{background:#fab1a0;color:#c0392b}
.el.spam{background:#dfe6e9;color:#636e72}
.stat{padding:16px 20px;display:flex;align-items:center;gap:14px}
.stat .ico{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;background:#d4edda;flex-shrink:0}
.stat .st1{font-size:13px;color:#888}
.stat .st2{font-size:14px;font-weight:600;color:#222}
.ft{text-align:center;padding:24px 20px;color:#bbb;font-size:11px}
"@

$html = "<!DOCTYPE html>
<html lang=""ko"">
<head>
<meta charset=""UTF-8"">
<meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
<title>카드뉴스 - $ds</title>
<style>$css</style>
</head>
<body>
<div class=""wrap"">

<div class=""header"">
<div class=""date"">$y. $mn. $dd ($wk)</div>
<h1>게발이<br>아침 카드뉴스</h1>
<div class=""sub"">AI가 선정한 오늘의 주요 뉴스</div>
</div>

"

foreach ($sk in $order) {
  $items = $sec[$sk]
  if (-not $items -or $items.Count -eq 0) { continue }
  $c = if ($cl.ContainsKey($sk)) { $cl[$sk] } else { "#1a73e8" }
  $e = if ($ej.ContainsKey($sk)) { $ej[$sk] } else { "📰" }
  $html += "<div class=""card""><div class=""st"" style=""color:$c"">$e $sk</div>`n"
  $ri = 1
  foreach ($item in $items) {
    $t = $item.t -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
    $url = $item.u
    $src = if ($url) { Get-Src $url } else { "" }
    if ($url) {
      $html += "<div class=""item""><span class=""num"">$ri</span><div class=""tle""><a href=""$url"" target=""_blank"" rel=""noopener"">$t</a></div>"
    } else {
      $html += "<div class=""item""><span class=""num"">$ri</span><div class=""tle"">$t</div>"
    }
    if ($src) { $html += "<div class=""src"">$src</div>" }
    $html += "</div>`n"
    $ri++
  }
  $html += "</div>`n"
}

$schedEsc = $sched -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
$html += "<div class=""card""><div class=""st"" style=""color:#1a73e8"">📅 오늘의 일정</div>
<div class=""sc"">
<div class=""si""><div class=""dot"" style=""background:#1a73e8""></div><div class=""stx""><strong>$schedEsc</strong></div></div>
"
foreach ($extra in $schedExtra) {
  $extraEsc = $extra -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
  $html += "<div class=""si""><div class=""dot"" style=""background:#f39c12""></div><div class=""stx"" style=""color:#888"">$extraEsc</div></div>`n"
}
$html += "</div></div>
"

if ($content -match "(?s)## 3\. 이메일 요약\s*\n(.*?)(?=\n##|\z)") {
  $et = $matches[1]
  $eh = "<div class=""card""><div class=""st"" style=""color:#e74c3c"">📧 중요 메일</div><div class=""ec"">`n"
  $hc = $false; $spamText = ""
  foreach ($l in $et -split "`n") {
    if ($l -match "^- \[(.+?)\]") {
      $mt = $matches[1] -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
      $lb = if ($mt -match "Cursor|결제") { "<span class=""el imp"">중요</span>" } else { "" }
      if ($lb) {
        $eh += "<div class=""ei"">$lb$mt</div>`n"; $hc = $true
      } else {
        $eh += "<div class=""ei""><span>$mt</span></div>`n"; $hc = $true
      }
    } elseif ($l -match "스팸 처리 결과:\s*(.+)") {
      $spamText = $matches[1].Trim()
    }
  }
  if ($spamText -and $spamText -ne "스팸 없음") {
    $spamEsc = $spamText -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
    $eh += "<div style=""margin-top:10px;padding-top:10px;border-top:1px solid #eee"">`n"
    $eh += "<div class=""ei""><span class=""el spam"">스팸</span>$spamEsc</div>`n"
    $eh += "</div>`n"
  }
  $eh += "</div></div>`n"
  if ($hc) { $html += $eh }
}

$httpCode = "200"; $respTime = ""; $sslOk = ""
if ($content -match "\| HTTP 상태\s*\|\s*(\d+)") { $httpCode = $matches[1] }
if ($content -match "\| 응답 시간\s*\|\s*(.+?)\|") { $respTime = $matches[1].Trim() }
if ($content -match "\| SSL 인증서\s*\|\s*(.+?)\|") { $sslOk = $matches[1].Trim() }
$statusDetail = "HTTP $httpCode"
if ($respTime) { $statusDetail += ", $respTime" }
if ($sslOk -eq "유효") { $statusDetail += ", SSL 유효" }
$html += "<div class=""card""><div class=""st"" style=""color:#2ecc71"">✅ 홈페이지 상태</div>
<div class=""stat"">
<div class=""ico"">✓</div>
<div><div class=""st1"">geumsagwa.github.io</div><div class=""st2"">정상 ($statusDetail)</div></div>
</div></div>

<div class=""ft"">게발이 브리핑 · $ds 자동 생성<br>생각을 잇다</div>

</div>
</body>
</html>
"

if (-not (Test-Path $OutputDir)) { New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null }
$html | Set-Content -Path (Join-Path $OutputDir "$ds.html") -Encoding UTF8

$summaryLines = @(); $i = 0
foreach ($sk in $order) {
  $items = $sec[$sk]
  if (-not $items -or $items.Count -eq 0) { continue }
  if (@("손흥민","오늘의 일정","이메일 요약","홈페이지 상태") -contains $sk) { continue }
  $t = $items[0].t -replace '["""''''"]',''
  $summaryLines += "$sk $t 외 $($items.Count-1)건"
  $i++; if ($i -ge 2) { break }
}
$st = $summaryLines -join " / "

$mf = Join-Path $OutputDir "index.json"
$manifest = @{ items = @() }
if (Test-Path $mf) { try { $manifest = Get-Content $mf -Encoding UTF8 | ConvertFrom-Json } catch {} }
$found = $false
for ($i = 0; $i -lt $manifest.items.Count; $i++) {
  if ($manifest.items[$i].date -eq $ds) { $manifest.items[$i].summary = $st; $found = $true; break }
}
if (-not $found) { $manifest.items = @(@{date=$ds;summary=$st}) + @($manifest.items) }
$manifest | ConvertTo-Json -Depth 3 | Set-Content -Path $mf -Encoding UTF8

Write-Output "OK: $(Join-Path $OutputDir "$ds.html")"
