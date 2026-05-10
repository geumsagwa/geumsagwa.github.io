/* 카톡용 그림 카드 PNG 내보내기
 * 실행(작은 카드): cd ...\homepage\.capture-tmp && node ../onse-soldae-invitation/export-kakao-png.cjs → kakaotalk-invitation.png
 * 모바일 카드: node ../onse-soldae-invitation/export-mobile-invitation-png.cjs → mobile-invitation-card.png
 */
const path = require('path');
const { chromium } = require(path.join(__dirname, '..', '.capture-tmp', 'node_modules', 'playwright'));

const htmlPath = path.join(__dirname, 'opening-invitation-card.html');
const outPath = path.join(__dirname, 'kakaotalk-invitation.png');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 320, height: 1200 },
    deviceScaleFactor: 3,
  });
  await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);
  const card = await page.locator('article.card');
  await card.screenshot({ path: outPath });
  await browser.close();
  console.log('OK', outPath);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
