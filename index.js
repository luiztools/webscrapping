const axios = require('axios');
const cheerio = require('cheerio');

const countries = [];

async function scrap() {
    const response = await axios.get("https://www.scrapethissite.com/pages/simple/");
    const $ = cheerio.load(response.data);
    $('.country-name').each((i, item) => countries.push({ name: $(item).text().trim() }));
    $('.country-capital').each((i, item) => countries[i].capital = $(item).text().trim());

    console.log(countries);
}

scrap();