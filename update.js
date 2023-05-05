const { addAudios } = require('./scripts/addAudios')
const { addGenderToHeroes } = require('./scripts/addGenderToHeroes')
const { addHeroes } = require('./scripts/addHeroes')

const update = async () => {
  await addHeroes();
  // addGenderToHeroes('./heroesInfo/heroes.json');
  // await addAudios();
}

update()