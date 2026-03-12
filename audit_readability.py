from playwright.sync_api import sync_playwright
import json

pages = [
    "http://localhost:5500/index.html",
    "http://localhost:5500/library.html",
    "http://localhost:5500/blog.html",
]
viewports = [
    {"name": "360x800", "width": 360, "height": 800},
    {"name": "430x932", "width": 430, "height": 932},
]

js = r"""
() => {
  const isVisible = (el) => {
    if (!el) return false;
    const st = window.getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity || '1') === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  const pick = (selectors) => {
    for (const sel of selectors) {
      const list = Array.from(document.querySelectorAll(sel));
      for (const el of list) {
        if (isVisible(el) && (el.textContent || '').trim()) {
          return { el, selector: sel };
        }
      }
    }
    return null;
  };

  const info = (picked) => {
    if (!picked) return { found: false };
    const el = picked.el;
    const st = window.getComputedStyle(el);
    return {
      found: true,
      selector: picked.selector,
      text: (el.textContent || '').trim().slice(0, 60),
      fontSizePx: parseFloat(st.fontSize || '0'),
      fontWeight: st.fontWeight,
    };
  };

  const logo = pick([
    '#logo-text', '.logo-text',
    'header .logo', '.logo', '[class*="logo"]',
    'header .brand', '.brand', '[class*="brand"]',
    'header h1', 'header a'
  ]);

  const authLogin = pick([
    '#auth-login', '.auth-login',
    '[id*="auth-login"]', '[class*="auth-login"]',
    'button[id*="login"]', 'a[id*="login"]',
    'button[class*="login"]', 'a[class*="login"]'
  ]);

  const themeToggle = pick([
    '#theme-toggle', '.theme-toggle',
    '[id*="theme-toggle"]', '[class*="theme-toggle"]',
    'button[id*="theme"]', 'button[class*="theme"]',
    '[aria-label*="theme" i]'
  ]);

  return {
    logo: info(logo),
    authLogin: info(authLogin),
    themeToggle: info(themeToggle),
  };
}
"""

report = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for page_url in pages:
        for vp in viewports:
            ctx = browser.new_context(viewport={"width": vp["width"], "height": vp["height"]})
            page = ctx.new_page()
            page.goto(page_url, wait_until='networkidle', timeout=30000)
            page.wait_for_timeout(250)
            data = page.evaluate(js)
            report.append({"page": page_url, "viewport": vp["name"], "data": data})
            ctx.close()
    browser.close()

print(json.dumps(report, ensure_ascii=False, indent=2))
