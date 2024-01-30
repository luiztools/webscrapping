const puppeteer = require('puppeteer');

async function scrap() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    await page.waitForNetworkIdle();

    const result = await page.evaluate(() => {
        const books = [];
        document.querySelectorAll('h3 > a').forEach(book => books.push(book.title));
        return books
    });

    browser.close();
    console.log(result);
    return result;
};

scrap();