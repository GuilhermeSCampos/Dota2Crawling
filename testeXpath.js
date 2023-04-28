const puppeteer = require('puppeteer')


const URL = 'https://www.dota2.com/hero/abaddon'

const teste = async () => {
  const heroes = []
  const browser = await puppeteer.launch({
    headless: "new",
    timeout: 50000
  })
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page.goto(URL, {
    waitUntil: "networkidle2",
    
  })

  const skills = []

  const divChildren = await page.$('.heropage_AbilitySelector_1vjw5')

  for(let i = 0; i < 4; i++) {
    const child = await divChildren.$(`div:nth-child(${i+1})`)
    await child.click()
    let SkillImg = await page.evaluate(() => {
      return document.querySelector('.heropage_AbilityImage_171zq')?.src
    })
  
    let skillName = await page.evaluate(() => {
      return document.querySelector('.heropage_AbilityName_1rBGH')?.innerText
    })

    skills.push({
      SkillImg,
      skillName
    })
  }

  console.log(skills)

  await page.screenshot({ path: `./abaddon_homepage.jpg`, fullPage: true });

  browser.close()
}

teste()
