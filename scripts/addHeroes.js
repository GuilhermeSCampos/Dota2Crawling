const puppeteer = require('puppeteer')
const fs = require('fs')

const fiveSkillHeroes = ['Beastmaster', 'Dark Willow',
  'Earth Spirit', 'Ember Spirit', 'Ogre Magi', 'Techies', 'Timbersaw', 'Tinker', 'Tiny', 'Treant Protector', 'Troll Warlord']

const sixSkillHeros = ['Io', 'Keeper of the Light', 'Morphling']

const URL = 'https://www.dota2.com/hero/abaddon'

const addHeroes = async () => {
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
  });

  for (let i = 0; i < 124; i++) {
    let name = await page.evaluate(() => {
      return document.querySelector('.heropage_HeroName_2IcIu')?.innerHTML
    })
    while (!name) {
      name = await page.evaluate(() => {
        return document.querySelector('.heropage_HeroName_2IcIu')?.innerHTML
      })
    }



    let img = await page.evaluate(() => {
      return document.querySelector('.heropage_Portrait_CR-Bb')?.src
    })

    let primaryAttr = await page.evaluate(() => {
      return document.querySelector('.heropage_PrimaryStat_3HGWJ')?.innerHTML
    })

    let attackType = await page.evaluate(() => {
      return document.querySelector('.heropage_Value_3ce-D')?.innerHTML
    })

    let baseHp = await page.evaluate(() => {
      return document.querySelector('.heropage_HealthBar_D6gmc')?.innerText.substring(0, 3)
    })

    let baseMp = await page.evaluate(() => {
      return document.querySelector('.heropage_ManaBar_1aQk6')?.innerText.substring(0, 3)
    })

    let baseAttack = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsStats_22x6X > div.heropage_StatsList_3z1y6 > div:nth-child(1) > div:nth-child(2)')?.innerText
    })

    let baseDefense = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsStats_22x6X > div.heropage_StatsList_3z1y6 > div:nth-child(2) > div:nth-child(2)')?.innerText
    })

    let moveSpeed = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsStats_22x6X > div.heropage_StatsList_3z1y6 > div:nth-child(3) > div:nth-child(2)')?.innerText
    })

    let strength = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsAttributes_SW4jL > div.heropage_TopAttributesSection_3GFuR > div.heropage_AttributesContainer_3rZsO > div:nth-child(1) > div.heropage_AttributeValue_3Gsgg')?.innerText
    })

    let agility = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsAttributes_SW4jL > div.heropage_TopAttributesSection_3GFuR > div.heropage_AttributesContainer_3rZsO > div:nth-child(2) > div.heropage_AttributeValue_3Gsgg')?.innerText
    })

    let intelligence = await page.evaluate(() => {
      return document.querySelector('#dota_react_root > div > div > div.heropage_DetailsBarContainer_2v_HD > div > div.heropage_DetailsAttributes_SW4jL > div.heropage_TopAttributesSection_3GFuR > div.heropage_AttributesContainer_3rZsO > div:nth-child(3) > div.heropage_AttributeValue_3Gsgg')?.innerText
    })



    const skills = []

    const divChildren = await page.$('.heropage_AbilitySelector_1vjw5')

    let numberOfSkills = 4
    let initialSkill = 0;

    if (fiveSkillHeroes.includes(name)) {
      console.log('five skills hero')
      numberOfSkills = 5
    }

    if (sixSkillHeros.includes(name)) {
      console.log('six skills hero')
      numberOfSkills = 6
    }

    if (name === 'Invoker') {
      console.log('invoker')
      initialSkill = 4;
      numberOfSkills = 14
    }

    for (let i = initialSkill; i < numberOfSkills; i++) {
      const child = await divChildren.$(`div:nth-child(${i + 1})`)
      await child.click()
      let skillImg = await page.evaluate(() => {
        return document.querySelector('.heropage_AbilityImage_171zq')?.src
      })

      let skillName = await page.evaluate(() => {
        return document.querySelector('.heropage_AbilityName_1rBGH')?.innerText
      })

      skills.push({
        skillImg,
        skillName
      })
    }

    console.log(name)

    if (primaryAttr === "Universal") {
      let sumAtt = (Number(strength) + Number(agility) + Number(intelligence)) * 0.7;
      const splitedBaseAttack = baseAttack.split("-")
      if (splitedBaseAttack[1] === '3') {
        splitedBaseAttack[0] = Math.round(sumAtt) - 3;
        splitedBaseAttack[1] = Math.round(sumAtt) + 3;
        baseAttack = splitedBaseAttack.join('-');
      } else {
        splitedBaseAttack[0] = Number(splitedBaseAttack[0]) + Math.round(sumAtt);
        splitedBaseAttack[1] = Number(splitedBaseAttack[1]) + Math.round(sumAtt);
        baseAttack = splitedBaseAttack.join('-');
      }
    }

    const newHero = {
      name,
      primaryAttr,
      attackType,
      strength,
      agility,
      intelligence,
      img,
      baseHp,
      baseMp,
      baseAttack,
      baseDefense,
      moveSpeed,
      skills
    }

    heroes.push(newHero)

    const nextHeroSelector = '#dota_react_root > div > div >' +
      'div.heropage_UnderBarSection_HGabF > div.heropage_BottomSection_kmUD- > a:nth-child(3)'

    let button = await page.$(nextHeroSelector)
    while (!button) {
      button = await page.$(nextHeroSelector)
    }
    await page.click(nextHeroSelector)
  }
  await browser.close();
  fs.writeFileSync(__dirname + '/../heroesInfo/heroes.json', JSON.stringify(heroes))
  console.log('Heroes added!')
}

module.exports = {
  addHeroes
}