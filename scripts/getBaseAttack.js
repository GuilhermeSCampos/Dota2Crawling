const fs = require('fs')

const getAttack = () => {
  const data = JSON.parse(fs.readFileSync('/home/guilherme/projetoDota/crawling/heroesInfo/heroes.json', 'utf-8'));
  data.map((e) => console.log(e.baseAttack))
} 

getAttack()