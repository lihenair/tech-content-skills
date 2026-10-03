import { chromium } from "/tmp/xhs-render/node_modules/playwright/index.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = path.join(__dirname, "slides.html");
const outDir = path.join(__dirname, "..", "images");

const names = [
  "00_cover.png",
  "01.png",
  "02.png",
  "03.png",
  "04.png",
  "05.png",
  "06.png",
  "07.png",
];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1400, height: 2000 },
  deviceScaleFactor: 1,
});
await page.goto(`file://${html}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

for (let i = 0; i < names.length; i++) {
  const el = page.locator(`#s${i + 1}`);
  await el.screenshot({
    path: path.join(outDir, names[i]),
    type: "png",
  });
  const box = await el.boundingBox();
  console.log(names[i], box);
}

await browser.close();
