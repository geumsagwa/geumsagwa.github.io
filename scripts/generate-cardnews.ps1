param([string]$BriefingFile="",[string]$OutputDir="C:\Users\pass6\project\homepage\admin\cardnews")
if (-not $BriefingFile) {
  $latest = Get-ChildItem "C:\Users\pass6\project\openclaw-local-mvp\data\output\briefing-*.md" |
    Sort-Object Name -Descending | Select-Object -First 1
  if (-not $latest) { Write-Error "No briefing file found"; exit 1 }
  $BriefingFile = $latest.FullName
}

$ds = [System.IO.Path]::GetFileNameWithoutExtension($BriefingFile) -replace "briefing-", ""
$y = $ds.Substring(0,4); $mn = $ds.Substring(5,2)
$dd = $ds.Substring(8,2)
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
  # ## 레벨 헤더(오늘의 일정, 이메일 요약, 홈페이지 상태)를 만나면 현재 섹션 마감
  elseif ($t -match "^##\s+\d+\.\s+(.+)") {
    if ($cur -and $buf.Count -gt 0) { $sec[$cur] = $buf.Clone() }
    $cur = ""; $buf = @()
  }
  elseif ($t -match "^- \[(.+?)\]\((.+?)\)") {
    $title = $matches[1]; $url = $matches[2]
    $rest = $t -replace "^- \[.+?\]\(.+?\)\s*",""
    $desc = if ($rest) { $rest } else { "" }
    $buf += @{t=$title; u=$url; d=$desc}
  }
  elseif ($t -match "^- \[(.+?)\]") { $buf += @{t=$matches[1]} }
}
if ($cur -and $buf.Count -gt 0) { $sec[$cur] = $buf.Clone() }

# --- 검증: 뉴스 항목에 실제 URL이 있는지 확인 ---
$newsSections = $order | Where-Object { $_ -notin @("오늘의 일정", "이메일 요약", "홈페이지 상태") }
$validItems = 0
foreach ($sk in $newsSections) {
  $items = $sec[$sk]
  if ($items) {
    $validItems += @($items | Where-Object { $_.u -and $_.u -ne "" }).Count
  }
}
if ($validItems -eq 0) {
  Write-Error "검증 실패: 브리핑 파일에 실제 뉴스 링크(URL)가 없습니다. 생성 중단: $BriefingFile"
  exit 2
}

function Get-Src($url) {
  $h = ($url -replace "https?://(www\.)?","") -split "/" | Select-Object -First 1
  $m = @{"hani.co.kr"="한겨레";"khan.co.kr"="경향신문";"donga.com"="동아일보"
         "mk.co.kr"="매일경제";"hankyung.com"="한국경제";"yna.co.kr"="연합뉴스"
         "joongang.co.kr"="중앙일보";"chosun.com"="조선일보";"sedaily.com"="서울경제"
         "news1.kr"="뉴스1";"newsis.com"="뉴시스";"espn.com"="ESPN"
         "github.com"="GitHub";"google.com"="Google";"autonocion.com"="Autonocion"
         "scientificamerican.com"="Scientific American";"apollo.com"="Apollo"
         "tomshardware.com"="Tom's Hardware";"theguardian.com"="The Guardian"
         "bloter.com"="Bloter";"zdnet.co.kr"="ZDNet Korea"}
  if ($m.ContainsKey($h)) { return $m[$h] }
  return $h
}

$sched = ""
$schedExtra = @()
$hasSchedule = $false
foreach ($line in $content -split "`n") {
  if ($line -match "\(종일\):\s*(.+)") {
    $sched = $matches[1].Trim()
    $hasSchedule = $true
  }
  # "이번 주:" 일정 줄 (괄호로 감싸진 줄)
  elseif ($line -match "^\s*\((.+)\)\s*$" -and $matches[1] -match "이번 주:\s*(.+)") {
    $weekRaw = $matches[1]  # "이번 주:" 이후 내용
    $weekItems = $weekRaw -split "\s*/\s*"
    foreach ($item in $weekItems) {
      $item = $item.Trim()
      if ($item) { $schedExtra += ($item -replace "\(undefined\)","" -replace "undefined","").Trim() }
    }
  }
}
# 오늘 일정이 없으면 "등록된 일정 없음"으로 표시
if (-not $hasSchedule) {
  $sched = "등록된 일정 없음"
}

$ej = @{"정치"="🗳️";"경제"="💰";"사회"="🚨";"세계"="🌍";"문화"="🎭";"손흥민"="⚽";"AI/IT"="🤖"}
$cl = @{"정치"="#e74c3c";"경제"="#2ecc71";"사회"="#f39c12";"세계"="#3498db";"문화"="#9b59b6";"손흥민"="#e67e22";"AI/IT"="#1abc9c"}

$css = @"
*{margin:0;padding:0;box-sizing:border-box}
body{word-break:keep-all;overflow-wrap:break-word;font-family:'GyeonggiBatang','Malgun Gothic',sans-serif;background:#f5f0e8;padding:40px 16px;display:flex;flex-direction:column;align-items:center}
.wrap{max-width:420px;width:100%;display:flex;flex-direction:column;gap:14px}
.header{background:linear-gradient(135deg,#2a2520,#3d3530);color:#f5f0e8;border-radius:20px;padding:36px 24px;text-align:center;box-shadow:0 8px 24px rgba(42,37,32,.2)}
.header .date{font-size:13px;opacity:.6;margin-bottom:6px;letter-spacing:1px}
.header h1{font-size:24px;font-weight:700;line-height:1.4;margin-bottom:4px}
.header .sub{font-size:13px;opacity:.5}
.card{background:#faf6f0;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(42,37,32,.08)}
.card .st{padding:14px 20px 12px;font-size:13px;font-weight:700;letter-spacing:1px;border-bottom:2px solid #ede6dc}
.item{padding:12px 20px;border-bottom:1px solid #ede6dc;display:flex;flex-wrap:wrap;gap:4px 8px;align-items:flex-start}
.item:last-child{border-bottom:none}
.num{display:inline-flex;width:20px;height:20px;background:#ede6dc;border-radius:50%;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#7a7060;flex-shrink:0;margin-top:1px}
.tle{font-size:14px;font-weight:500;line-height:1.5;color:#2a2520;flex:1;word-break:keep-all;overflow-wrap:break-word}
.tle a{color:#2a2520;text-decoration:none}
.tle a:hover{color:#8f7d60;text-decoration:underline}
.src{font-size:11px;color:#7a7060;flex:0 0 100%;padding-left:28px;margin-top:-4px}
.sc{padding:12px 20px}
.si{display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid #ede6dc}
.si:last-child{border-bottom:none}
.dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}
.stx{font-size:14px;color:#2a2520;line-height:1.5}
.ec{padding:12px 20px}
.ei{display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid #ede6dc;font-size:13px;color:#2a2520}
.ei:last-child{border-bottom:none}
.el{display:inline-block;padding:1px 7px;border-radius:4px;font-size:10px;font-weight:600;margin-right:4px;flex-shrink:0}
.el.imp{background:#f5e6d3;color:#8f5a3a}
.el.spam{background:#ede6dc;color:#7a7060}
.stat{padding:12px 20px;display:flex;align-items:center;gap:14px;border-bottom:1px solid #ede6dc}
.stat .ico{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;background:#e8e0d4;flex-shrink:0}
.stat .st1{font-size:13px;color:#7a7060}
.stat .st2{font-size:14px;font-weight:600;color:#2a2520}
.ft{text-align:center;padding:24px 20px;color:#b5a898;font-size:11px;font-family:'Malgun Gothic',sans-serif}
"@

$html = "<!DOCTYPE html>
<html lang=""ko"">
<head>
<meta charset=""UTF-8"">
<meta http-equiv=""Content-Security-Policy"" content=""default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; frame-ancestors 'none'; base-uri 'self'"">
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
    # AI/IT 섹션에서 메일 링크 제외
    if ($sk -eq "AI/IT" -and $item.u -match "mail\.google\.com") { continue }
    $t = $item.t -replace "&(?!(?:#\d+|#x[0-9a-fA-F]+|amp|lt|gt);)","&amp;" -replace "<","&lt;" -replace ">","&gt;"
    $url = $item.u
    $src = if ($url) { Get-Src $url } else { "" }
    if ($url) {
      $html += "<div class=""item""><span class=""num"">$ri</span><div class=""tle""><a href=""$url"" target=""_blank"" rel=""noopener noreferrer"">$t</a></div>"
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
  $html += "<div class=""si""><div class=""dot"" style=""background:#f39c12""></div><div class=""stx"" style=""color:#7a7060"">$extraEsc</div></div>`n"
}
$html += "</div></div>
"

# 이메일 요약 — 항상 표시 (메일/스팸 없어도 "없음" 표시)
$emailHtml = "<div class=""card""><div class=""st"" style=""color:#e74c3c"">📧 이메일 요약</div><div class=""ec"">`n"
$hasImportantMail = $false; $spamLabel = "스팸 없음"
if ($content -match "(?s)## 3\. 이메일 요약\s*\n(.*?)(?=\n##|\z)") {
  $et = $matches[1]
  foreach ($l in $et -split "`n") {
    if ($l -match "^- \[(.+?)\]") {
      $mt = $matches[1] -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
      $lb = if ($mt -match "Cursor|결제") { "<span class=""el imp"">중요</span>" } else { "" }
      if ($lb) {
        $emailHtml += "<div class=""ei"">$lb$mt</div>`n"; $hasImportantMail = $true
      } else {
        $emailHtml += "<div class=""ei""><span>$mt</span></div>`n"; $hasImportantMail = $true
      }
    } elseif ($l -match "스팸 처리 결과:\s*(.+)") {
      $spamLabel = $matches[1].Trim()
    } elseif ($l -match "\[(\d+)\]건 처리 완료\s*(.*)") {
      $spamLabel = "[$($matches[1])]건 처리 완료 $($matches[2])".Trim()
    }
  }
}
if (-not $hasImportantMail) {
  $emailHtml += "<div class=""ei""><span style=""color:#7a7060"">중요 메일 없음</span></div>`n"
}
$spamEsc = $spamLabel -replace "&","&amp;" -replace "<","&lt;" -replace ">","&gt;"
if ($spamLabel -and $spamLabel -ne "스팸 없음") {
  $emailHtml += "<div style=""margin-top:10px;padding-top:10px;border-top:1px solid #ede6dc"">`n"
  $emailHtml += "<div class=""ei""><span class=""el spam"">스팸</span>$spamEsc</div>`n"
  $emailHtml += "</div>`n"
} else {
  $emailHtml += "<div class=""ei""><span style=""color:#7a7060"">스팸 없음</span></div>`n"
}
$emailHtml += "</div></div>`n"
$html += $emailHtml

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
"

# LLM Wiki 상태 섹션 (## 5.)
$wikiSectionStart = $content.IndexOf("## 5. LLM Wiki")
if ($wikiSectionStart -ge 0) {
  $wikiSectionEnd = $content.IndexOf("`n## ", $wikiSectionStart + 10)
  if ($wikiSectionEnd -lt 0) { $wikiSectionEnd = $content.Length }
  $wikiBlock = $content.Substring($wikiSectionStart, $wikiSectionEnd - $wikiSectionStart)
  $wc = ""; $wb = ""; $ww = ""; $wl = ""
  foreach ($line in $wikiBlock -split "`n") {
    $t = $line.Trim()
    if ($t -match "^개념:\s*(\d+)") { $wc = $matches[1] }
    elseif ($t -match "^깨진 링크:\s*(\d+)") { $wb = $matches[1] }
    elseif ($t -match "^현재 작업:\s*(.+)") { $ww = $matches[1].Trim() }
    elseif ($t -match "^low confidence:\s*(\d+)") { $wl = $matches[1] }
  }
  if ($wc) {
    $wd = "개념 ${wc}개"
    if ($wb) { $wd += " / 깨진링크 $wb" }
    if ($wl) { $wd += " / low:$wl" }
    $wp = if ($ww) { $ww } else { "LLM Wiki" }
    $html += "<div class=""card""><div class=""st"" style=""color:#8e44ad"">📚 LLM Wiki</div>
<div class=""stat"">
<div class=""ico"">📖</div>
<div><div class=""st1"">$wp</div><div class=""st2"">$wd</div></div>
</div></div>
"
  }
}

$html += "<div class=""ft"">게발이 브리핑 · $ds 자동 생성<br>생각을 잇다</div>

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
