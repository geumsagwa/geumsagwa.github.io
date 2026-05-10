// logo.png 가장자리와 연결된 흰색(박스)만 알파로 제거해 리플릿 배경과 자연스럽게 맞춘다.
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "logo.png");
const output = path.join(__dirname, "logo-transparent.png");

function isNearWhite(r, g, b, thr = 248) {
  return r >= thr && g >= thr && b >= thr;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const w = info.width;
const h = info.height;
const stride = 4;
const idx = (x, y) => (y * w + x) * stride;

const visited = new Uint8Array(w * h);
const queue = [];

function trySeed(x, y) {
  if (x < 0 || x >= w || y < 0 || y >= h) return;
  const id = y * w + x;
  if (visited[id]) return;
  const p = idx(x, y);
  if (!isNearWhitedata(data, p)) return;
  visited[id] = 1;
  queue.push([x, y]);
}

function isNearWhitedata(buf, p) {
  return isNearWhite(buf[p], buf[p + 1], buf[p + 2]);
}

for (let x = 0; x < w; x++) {
  trySeed(x, 0);
  trySeed(x, h - 1);
}
for (let y = 0; y < h; y++) {
  trySeed(0, y);
  trySeed(w - 1, y);
}

let qi = 0;
while (qi < queue.length) {
  const [x, y] = queue[qi++];
  const p = idx(x, y);
  data[p + 3] = 0;
  const n = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ];
  for (const [nx, ny] of n) {
    if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
    const id = ny * w + nx;
    if (visited[id]) continue;
    const np = idx(nx, ny);
    if (isNearWhitedata(data, np)) {
      visited[id] = 1;
      queue.push([nx, ny]);
    }
  }
}

await sharp(Buffer.from(data), {
  raw: { width: w, height: h, channels: 4 },
})
  .png({ compressionLevel: 9, effort: 10 })
  .toFile(output);

console.log("저장:", output, `(${w}×${h})`);
