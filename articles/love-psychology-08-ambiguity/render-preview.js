const path = require('path');
const { chromium } = require('playwright');

const root = __dirname;
const htmlPath = path.join(root, 'index.html');
const assetsPath = path.join(root, 'assets');
const previewPath = path.join(root, 'preview');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage({ viewport: { width: 677, height: 900 } });

  await page.route('https://raw.githubusercontent.com/**', async (route) => {
    const filename = decodeURIComponent(new URL(route.request().url()).pathname.split('/').pop());
    await route.fulfill({ path: path.join(assetsPath, filename), contentType: 'image/png' });
  });

  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(previewPath, 'full-page-preview.png'), fullPage: true });

  const desktop = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
    headings: document.querySelectorAll('h1,h2,h3,h4,h5,h6').length,
    tables: document.querySelectorAll('table').length,
    editableTextLength: document.body.innerText.replace(/\s/g, '').length,
    images: [...document.images].map((img) => ({ alt: img.alt, loaded: img.complete && img.naturalWidth > 0 })),
  }));

  await page.setViewportSize({ width: 360, height: 800 });
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(previewPath, 'mobile-360-preview.png'), fullPage: true });
  const mobile = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
  }));

  console.log(JSON.stringify({ desktop, mobile }, null, 2));
  await browser.close();
})();
