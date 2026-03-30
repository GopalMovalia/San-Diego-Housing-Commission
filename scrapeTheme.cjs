const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://sdhc.org', { waitUntil: 'networkidle2' });

  // Extract color themes from document style or by inspecting main elements
  const colors = await page.evaluate(() => {
    const getComputedProps = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const styles = window.getComputedStyle(el);
      return {
        bgColor: styles.backgroundColor,
        color: styles.color,
        fontFamily: styles.fontFamily
      };
    };

    return {
      body: getComputedProps('body'),
      header: getComputedProps('header'),
      primaryButton: getComputedProps('a.button') || getComputedProps('.btn') || getComputedProps('button'),
      headings: getComputedProps('h1, h2, h3')
    };
  });

  console.log(JSON.stringify(colors, null, 2));
  await browser.close();
})();
