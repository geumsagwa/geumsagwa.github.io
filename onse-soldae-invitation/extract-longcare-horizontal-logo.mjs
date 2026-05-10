// 장기요양보험 로고 PDF 추출 후, 가장자리와 이어진 흰 배경만 투명 처리해 PNG 저장
import { execFileSync } from "child_process";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const py = path.join(__dirname, "extract-longcare-horizontal-logo.py");
const png = path.join(__dirname, "leaflet-assets", "longcare-insurance-logo-horizontal.png");

execFileSync("python", [py], { stdio: "inherit", cwd: __dirname });

const THRESH = 248;

/** 시트 가장자리에서만 닿는 밝은 픽셀을 투명 처리(로고 내부 흰색 테두리는 유지) */
function transparentizeEdgeConnectedWhite(data, width, height) {
  const idx = (x, y) => y * width + x;
  const isLight = (ix) => {
    const i = ix * 4;
    return (
      data[i] >= THRESH &&
      data[i + 1] >= THRESH &&
      data[i + 2] >= THRESH
    );
  };
  const seen = new Uint8Array(width * height);
  const q = [];
  const enqueue = (ix) => {
    if (seen[ix] || !isLight(ix)) return;
    seen[ix] = 1;
    q.push(ix);
  };
  for (let x = 0; x < width; x++) {
    enqueue(idx(x, 0));
    enqueue(idx(x, height - 1));
  }
  for (let y = 0; y < height; y++) {
    enqueue(idx(0, y));
    enqueue(idx(width - 1, y));
  }
  while (q.length) {
    const ix = q.shift();
    const i = ix * 4;
    data[i + 3] = 0;
    const x = ix % width;
    const y = (ix / width) | 0;
    if (x + 1 < width) enqueue(ix + 1);
    if (x > 0) enqueue(ix - 1);
    if (y + 1 < height) enqueue(ix + width);
    if (y > 0) enqueue(ix - width);
  }
}

const { data, info } = await sharp(png)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

transparentizeEdgeConnectedWhite(data, info.width, info.height);

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toFile(png);

console.log("투명 배경 저장:", png);
