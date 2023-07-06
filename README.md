<h2 align="start">
  Dota 2 Crawling
</h3>

<h4 align="start">Repositório contendo scripts de raspagem de dados utilizados para a criação do site Dota2Guess</h4>
<br/>

### - Sites utilizados para raspagem
  - [Site Oficial do Dota 2](https://www.dota2.com)
  - [Dota2Wiki](https://dota2.fandom.com/wiki/Dota_2_Wiki)

<br/>

###  - Tecnologias utilizadas

- [Node](https://nodejs.org/en/about)
- JavaScript
- [Puppeteer](https://pptr.dev/)

<br/>

### - Como utilizar

**Clone o projeto e acesse o diretório**

```bash
 git clone git@github.com:GuilhermeSCampos/Dota2Crawling.git && cd Dota2Crawling
```

Agora basta rodar o script e aguardar alguns minutos para obter os dados de todos os campeões assim como suas falas da tela de seleção de heróis. Os dados estarão armazenados na pasta heroesInfo.

```bash
# Instale as Dependências
 npm install

# Rode o script
 node update.js
```

<br/>

### - Exemplos
Dados do Abaddon:
```json
{
   {
    "name": "Abaddon",
    "primaryAttr": "Universal",
    "attackType": "Melee",
    "strength": "22",
    "agility": "23",
    "intelligence": "18",
    "img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png",
    "baseHp": "604",
    "baseMp": "291",
    "baseAttack": "46-56",
    "baseDefense": "2.8",
    "moveSpeed": "325",
    "skills": [
      {
        "skillImg": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png",
        "skillName": "MIST COIL"
      },
      {
        "skillImg": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png",
        "skillName": "APHOTIC SHIELD"
      },
      {
        "skillImg": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_frostmourne.png",
        "skillName": "CURSE OF AVERNUS"
      },
      {
        "skillImg": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_borrowed_time.png",
        "skillName": "BORROWED TIME"
      }
    ],
    "gender": "Male"
  }
}
```

Audios e Falas do Zeus:
```json
{
    "name": "Zeus",
    "responses": [
      {
        "text": "Link Zeus!",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/10/Vo_zuus_zuus_spawn_01.mp3/revision/latest?cb=20200424162551"
      },
      {
        "text": "Link It's true. I am Zeus.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Vo_zuus_zuus_arc_spawn_01.mp3/revision/latest?cb=20200424162140"
      },
      {
        "text": "Link I am Zeus! You heard me.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Vo_zuus_zuus_spawn_02.mp3/revision/latest?cb=20200424162551"
      },
      {
        "text": "Link Your god has arrived.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Vo_zuus_zuus_arc_spawn_02.mp3/revision/latest?cb=20200424162141"
      },
      {
        "text": "Link Make your offerings. Zeus is here.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a0/Vo_zuus_zuus_spawn_03.mp3/revision/latest?cb=20200424162552"
      },
      {
        "text": "Link Your prayers are answered.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1a/Vo_zuus_zuus_arc_spawn_03.mp3/revision/latest?cb=20200424162142"
      },
      {
        "text": "Link I descend to walk among mortals.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cc/Vo_zuus_zuus_spawn_04.mp3/revision/latest?cb=20200424162553"
      },
      {
        "text": "Link Time to play God.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5f/Vo_zuus_zuus_arc_spawn_04.mp3/revision/latest?cb=20200424162144"
      },
      {
        "text": "Link Your prayer, answered.",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6c/Vo_zuus_zuus_spawn_05.mp3/revision/latest?cb=20200424162555"
      },
      {
        "text": "Link Heaven help you!",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b1/Vo_zuus_zuus_arc_spawn_05.mp3/revision/latest?cb=20200424162146"
      },
      {
        "text": "Link You can't run from Heaven!",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ad/Vo_zuus_zuus_spawn_06.mp3/revision/latest?cb=20200424162556"
      },
      {
        "text": "Link By my whiskers!",
        "audioLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5e/Vo_zuus_zuus_arc_spawn_06.mp3/revision/latest?cb=20200424162147"
      }
    ]
  }
```
