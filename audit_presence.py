from playwright.sync_api import sync_playwright
import json

pages = ["index.html", "library.html", "blog.html"]
viewports = [(360,800),(430,932)]

js = r"""
() => {
  const out = {};
  const sels = {
    logo: ['.logo-text', '#logo-text', '.logo', '[class*="logo"]'],
    auth: ['#auth-login', '.auth-login', '[class*="auth-login"]', 'button[id*="login"]'],
    theme: ['#theme-toggle', '.theme-toggle', '[class*="theme-toggle"]', 'button[id*="theme"]']
  };
  for (const [k, arr] of Object.entries(sels)) {
    out[k] = { found:false };
    for (const sel of arr) {
      const el = document.querySelector(sel);
      if (el) {
        const st = getComputedStyle(el);
        out[k] = {
          found: true,
          selector: sel,
          text: (el.textContent || '').trim(),
          fontSizePx: parseFloat(st.fontSize || '0'),
          display: st.display,
          visibility: st.visibility
        };
        break;
      }
    }
  }
  return out;
}
"""

rows=[]
with sync_playwright() as p:
  b = p.chromium.launch(headless=True)
  for pth in pages:
    for w,h in viewports:
      c = b.new_context(viewport={"width":w,"height":h})
      page = c.new_page()
      page.goto(f"http://localhost:5500/{pth}", wait_until='networkidle')
      page.wait_for_timeout(200)
      rows.append({"page":pth,"vp":f"{w}x{h}","els":page.evaluate(js)})
      c.close()
  b.close()
print(json.dumps(rows, ensure_ascii=False, indent=2))
