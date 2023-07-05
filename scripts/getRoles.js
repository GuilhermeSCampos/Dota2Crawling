require("dotenv").config()
const puppeteer = require('puppeteer')

const URL = "https://api.stratz.com/api/v1/Hero"
const token = process.env.token

const getIds = async () => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  const data = await response.json()
  const teste = Object.values(data)
  const namesAndIds = teste.map((e) => {
    return {
      id: e.id,
      name: e.displayName
    }
  })
  return namesAndIds;
}

const getRoles = async () => {
  const ids = await getIds();
  const browser = await puppeteer.launch({
    headless: false,
    timeout: 50000,
    args: ['--disable-blink-features=AutomationControlled']
  })


  for (let i = 0; i < 124; i++) {

    const page = await browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    await page.waitForTimeout(2000)

    const newUrl = `https://stratz.com/heroes/${ids[i].id}`;
    await page.goto(newUrl, {
      waitUntil: "networkidle2",
    });

    await page.waitForTimeout(3000)
    const robotCheckButtonSelector = 'body > div:nth-child(8) > div.sc-dUbtfd.iOgeiQ > div > div > div > div:nth-child(1) > div > button'
    let button = await page.$(robotCheckButtonSelector)

    if (button) {
      console.log(button)
      await button.click();
      console.log("after click")
    }

    await page.waitForTimeout(7000)

    const spanElement = await page.$('.gNiuat');
    const [parentElement] = await spanElement.$x('..');

    const firstChildInnerText = await parentElement.$eval(':first-child', element => element.innerText);

    ids[i] = {
      ...ids[i],
      role: firstChildInnerText
    }
    console.log(ids[i].name, firstChildInnerText)
  }


  await browser.close()
}
