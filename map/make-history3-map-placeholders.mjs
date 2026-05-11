/**
 * 이야기 세계사 3권 삽입용 지도 JPG 자리 채우기 (양피지 색 단색).
 * 실제 지도 PNG 생성 후 optimize-images.js 로 교체해 주세요.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
  'ch74_east_asia_imperialism.jpg',
  'ch75_russia_1905.jpg',
  'ch76_ww1_europe_1914.jpg',
  'ch77_russia_1917.jpg',
  'ch78_versailles_europe.jpg',
  'ch79_italy_fascism.jpg',
  'ch80_great_depression.jpg',
  'ch81_long_march_route.jpg',
  'ch82_nazi_germany.jpg',
  'ch83_manchuria_north_china.jpg',
  'ch84_spain_civil_war.jpg',
  'ch85_ww2_outbreak.jpg',
];

const W = 1200;
const H = 662;
const bg = { r: 244, g: 232, b: 193 };

await Promise.all(
  files.map(async (name) => {
    const out = path.join(__dirname, name);
    await sharp({
      create: {
        width: W,
        height: H,
        channels: 3,
        background: bg,
      },
    })
      .jpeg({ quality: 80 })
      .toFile(out);
    console.log('wrote', name);
  })
);
