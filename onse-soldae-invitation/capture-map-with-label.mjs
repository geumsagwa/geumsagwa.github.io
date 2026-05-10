// 오시는 길 지도+시설명 미리보기 HTML을 PNG로 캡처해 leaflet-assets에 저장
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "map-location-print-preview.html");
const url =
  "file:///" + htmlPath.replace(/\\/g, "/").replace(/^\/+/, "");
const outPath = path.join(__dirname, "leaflet-assets", "map-location-with-label.png");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 780, height: 560 },
  deviceScaleFactor: 2,
});
await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
await page.waitForTimeout(2500);

const wrap = page.locator("#wrap");
await wrap.screenshot({ path: outPath, type: "png" });

await browser.close();
console.log("저장:", outPath);
