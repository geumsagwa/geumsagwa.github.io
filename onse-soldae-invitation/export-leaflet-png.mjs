/**
 * 리플릿 HTML → PNG (앞·뒤 각 1장)
 * file:// 로 열면 CSP(img-src 'self') 때문에 같은 폴더 PNG/SVG가 안 보일 수 있어,
 * 프로젝트 루트를 짧게 띄운 http://127.0.0.1 로 연다.
 * 실행: npx playwright install chromium  (최초 1회)
 *       node export-leaflet-png.mjs
 */
import { chromium } from "playwright";
import http from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname);

const out1 = path.join(__dirname, "leaflet-앞면.png");
const out2 = path.join(__dirname, "leaflet-뒷면.png");
const out1en = path.join(__dirname, "leaflet-front.png");
const out2en = path.join(__dirname, "leaflet-back.png");

function mimeType(ext) {
  const m = {
    ".html": "text/html; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".pdf": "application/pdf",
  };
  return m[ext.toLowerCase()] || "application/octet-stream";
}

function createExportStaticServer(rootDir) {
  const resolvedRoot = path.resolve(rootDir);
  return http.createServer((req, res) => {
    let pathname = "/";
    try {
      pathname = new URL(req.url || "/", "http://127.0.0.1").pathname;
    } catch {
      res.writeHead(400);
      res.end();
      return;
    }
    let rel = decodeURIComponent(pathname.replace(/^\//, ""));
    if (!rel || rel.endsWith("/")) {
      rel = "leaflet-trifold.html";
    }
    const filePath = path.resolve(resolvedRoot, rel);
    const relToRoot = path.relative(resolvedRoot, filePath);
    if (relToRoot.startsWith("..") || path.isAbsolute(relToRoot)) {
      res.writeHead(403);
      res.end();
      return;
    }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404);
      res.end();
      return;
    }
    try {
      const buf = fs.readFileSync(filePath);
      res.writeHead(200, { "Content-Type": mimeType(path.extname(filePath)) });
      res.end(buf);
    } catch {
      res.writeHead(500);
      res.end();
    }
  });
}

const server = createExportStaticServer(ROOT);
await new Promise((resolve, reject) => {
  server.once("error", reject);
  server.listen(0, "127.0.0.1", () => resolve());
});
const { port } = server.address();
const baseUrl = `http://127.0.0.1:${port}`;

const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({
    deviceScaleFactor: 3,
    colorScheme: "light",
  });
  const page = await context.newPage();

  await page.goto(`${baseUrl}/leaflet-trifold.html`, {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.addStyleTag({
    content: `
    .screen-hint { display: none !important; }
    .sheet-label { display: none !important; }
    body { background: #fff !important; }
  `,
  });
  await page.evaluate(() => document.fonts?.ready);
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener("load", () => res(), { once: true });
              img.addEventListener("error", () => res(), { once: true });
            })
      )
    );
    await Promise.all(
      imgs.map((img) => img.decode?.().catch(() => {}) ?? Promise.resolve())
    );
  });

  const sheets = page.locator(".sheet");
  const n = await sheets.count();
  if (n < 2) {
    throw new Error(".sheet 요소가 2개 미만입니다.");
  }

  await sheets.nth(0).screenshot({ path: out1en, type: "png" });
  await sheets.nth(1).screenshot({ path: out2en, type: "png" });
  fs.copyFileSync(out1en, out1);
  fs.copyFileSync(out2en, out2);

  console.log("저장:", out1, "/", out1en);
  console.log("저장:", out2, "/", out2en);
} finally {
  await browser.close().catch(() => {});
  await new Promise((resolve) => server.close(() => resolve()));
}
