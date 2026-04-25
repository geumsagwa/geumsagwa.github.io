/**
 * Live GitHub Pages 메인(index) — 브레이크포인트별 캡처
 * 사용: npx playwright install chromium 후 node scripts/capture-home-live.mjs
 */
import { chromium } from "playwright";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { mkdir } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.OUT_DIR
  ? resolve(process.env.OUT_DIR)
  : join(__dirname, "..");
const url = process.env.CAPTURE_URL || "https://geumsagwa.github.io/";

const jobs = [
  { w: 1920, h: 900, name: "1920" },
  { w: 1280, h: 800, name: "1280" },
  { w: 768, h: 1024, name: "768" },
  { w: 480, h: 900, name: "480" },
  { w: 420, h: 900, name: "420" },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
for (const { w, h, name } of jobs) {
  await page.setViewportSize({ width: w, height: h });
  await page.goto(url, { waitUntil: "networkidle", timeout: 90_000 });
  await new Promise((r) => setTimeout(r, 600));
  const path = join(outDir, `main-live-${name}.png`);
  await page.screenshot({ path, fullPage: true });
  console.log("OK", path, `${w}x${h}`);
}
await browser.close();
console.log("done");
