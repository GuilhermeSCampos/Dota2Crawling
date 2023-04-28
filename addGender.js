const fs = require('fs');

const maleHeroes = [
    'Abaddon', 'Alchemist', 'Anti-Mage', 'Axe',
    'Batrider', 'Beastmaster', 'Bloodseeker', 'Bounty Hunter', 'Brewmaster', 'Bristleback',
    'Centaur Warrunner', 'Chaos Knight', 'Chen', 'Clinkz', 'Clockwerk', 'Dark Seer',
    'Dazzle', 'Disruptor', 'Doom', 'Dragon Knight', 'Earth Spirit', 'Earthshaker',
    'Elder Titan', 'Ember Spirit', 'Faceless Void', 'Grimstroke',
    'Gyrocopter', 'Huskar', 'Invoker', 'Jakiro', 'Juggernaut', 'Keeper of the Light',
    'Kunkka', 'Leshrac', 'Lich', 'Lifestealer', 'Lion', 'Lone Druid', 'Lycan',
    'Magnus', 'Mars', 'Meepo', 'Monkey King', 'Nature\'s Prophet', 'Necrophos',
    'Night Stalker', 'Nyx Assassin', 'Ogre Magi', 'Omniknight', 'Oracle', 'Outworld Destroyer',
    'Pangolier', 'Phantom Lancer', 'Pudge', 'Pugna', 'Razor', 'Riki', 'Rubick', 'Sand King',
    'Shadow Demon', 'Shadow Fiend', 'Shadow Shaman', 'Silencer', 'Skywrath Mage', 'Slardar',
    'Slark', 'Sniper', 'Spirit Breaker', 'Storm Spirit', 'Sven', 'Techies',
    'Terrorblade', 'Tidehunter', 'Timbersaw', 'Tinker', 'Tiny', 'Treant Protector',
    'Troll Warlord', 'Tusk', 'Underlord', 'Undying', 'Ursa', 'Venomancer', 'Viper',
    'Visage', 'Void Spirit', 'Warlock', 'Weaver', 'Witch Doctor', 'Wraith King', 'Zeus',
    'Primal Beast'
]

const femaleHeroes = [
    'Crystal Maiden', 'Dark Willow', 'Drow Ranger', 'Enchantress', 'Lina',
    'Medusa', 'Mirana', 'Naga Siren', 'Queen of Pain', 'Templar Assassin',
    'Vengeful Spirit', 'Windranger', 'Winter Wyvern', 'Phantom Assassin', 'Spectre',
    'Broodmother', 'Death Prophet', 'Legion Commander', 'Luna', 'Muerta',
    'Snapfire', 'Marci', 'Hoodwink', 'Dawnbreaker', 'Queen of Pain'
]

const unknownHeroes = [
    'Ancient Apparition', 'Arc Warden', 'Bane', 'Enigma', 'Io', 'Phoenix', 'Morphling', 'Puck'
]


const addGenderToHeroes = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const heroes = JSON.parse(data);
      const updatedHeroes = heroes.map(hero => {
        if (maleHeroes.includes(hero.name)) {
          hero.gender = 'Male';
        } else if (femaleHeroes.includes(hero.name)) {
          hero.gender = 'Female';
        } else if (unknownHeroes.includes(hero.name)) {
          hero.gender = 'Unknown';
        }
        return hero;
      });
      fs.writeFile(filePath, JSON.stringify(updatedHeroes), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Genders added to heroes!');
      });
    });
  };

addGenderToHeroes('./teste.json');