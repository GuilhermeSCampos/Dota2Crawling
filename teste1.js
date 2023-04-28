const puppeteer = require('puppeteer')
// const fs = require('fs')

const teste = async () => {
  const browser = await puppeteer.launch({headless: 'false'});
  const page = await browser.newPage();
  await page.goto('https://www.dota2.com/hero/abaddon')
  heroNames = []
  for (let i = 0; i < 122; i++) {
    console.log('entrou')
    const heroInfo = await page.evaluate(() => {
      return document.querySelector('.heropage_HeroName_2IcIu').innerHTML
    })
    console.log(heroInfo, 'heroInfo')
    heroNames.push(heroInfo);
    await page.click(".heropage_TopHeader_3iI6a")
  }

  console.log(heroNames, "array")
  // fs.writeFileSync(__dirname + '/teste.txt', JSON.stringify(heroNames))
  await browser.close()
}

teste()