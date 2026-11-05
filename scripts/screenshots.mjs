// Full-page screenshots of every page at 375 / 768 / 1440 px.
// Usage: start the site (npm run build && npx next start -p 3005), then
//   node scripts/screenshots.mjs [baseUrl]
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = process.argv[2] ?? "http://localhost:3005";
const pages = [
  ["home", "/"],
  ["about", "/about"],
  ["courses", "/courses"],
  ["student-life", "/student-life"],
  ["contact", "/contact"],
];
const widths = [375, 768, 1440];

await mkdir("screenshots", { recursive: true });
const browser = await chromium.launch();

for (const width of widths) {
  // Reduced motion: scroll-reveal content is shown in its final state.
  const context = await browser.newContext({
    viewport: { width, height: width < 768 ? 812 : 900 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(e.message));

  for (const [name, path] of pages) {
    await page.goto(base + path, { waitUntil: "networkidle" });
    // Scroll through so every lazy image loads, then back to the top.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    await page.screenshot({ path: `screenshots/${name}-${width}.png`, fullPage: true });
    console.log(`${name}-${width}${overflow > 0 ? `  ⚠ horizontal overflow ${overflow}px` : ""}`);
  }
  if (errors.length) console.log(`console errors @${width}:`, errors);
  await context.close();
}

await browser.close();
