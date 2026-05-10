/* 모바일용 초대 카드 PNG (카톡·문자 공유 등)
 * 실행: cd ...\homepage\.capture-tmp && node ../onse-soldae-invitation/export-mobile-invitation-png.cjs */
const path = require('path');
const { chromium } = require(path.join(__dirname, '..', '.capture-tmp', 'node_modules', 'playwright'));

const htmlPath = path.join(__dirname, 'opening-invitation-mobile.html');
const outPath = path.join(__dirname, 'mobile-invitation-card.png');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 393, height: 1800 },
    deviceScaleFactor: 3,
  });
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);
  const card = await page.locator('article.card');
  await card.screenshot({ path: outPath });
  await browser.close();
  console.log('OK', outPath);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
