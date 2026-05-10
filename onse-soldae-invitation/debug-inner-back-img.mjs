// 안쪽 좌·우 패널 상단 이미지 위치 비교
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url =
  "file:///" + path.join(__dirname, "leaflet-trifold.html").replace(/\\/g, "/");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 2200 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

async function dump(sel) {
  const loc = page.locator(sel);
  const info = await loc.first().evaluate((el) => {
    const s = getComputedStyle(el);
    return {
      height: s.height,
      width: s.width,
    };
  });
  const box = await loc.first().boundingBox();
  return { info, box };
}

console.log(
  "left:",
  JSON.stringify(await dump(".sheet--inner section.inner-panel:first-of-type .inner-back-hero"), null, 2),
);
console.log(
  "right:",
  JSON.stringify(await dump(".sheet--inner .inner-panel--dense .inner-back-hero"), null, 2),
);

const sheetInner = await page.locator(".sheet--inner").boundingBox();
console.log("sheet-inner:", JSON.stringify(sheetInner, null, 2));

await browser.close();
