<h2 align="start">
  Dota 2 Crawling
</h3>

<h4 align="start">Repositório contendo scripts de raspagem de dados utilizados para a criação do site Dota2Guess</h4>
<br/>

### Sites utilizados para raspagem
  - [Site Oficial do Dota 2](https://www.dota2.com)
  - [Dota2Wiki](https://dota2.fandom.com/wiki/Dota_2_Wiki)

<br/>

###  Tecnologias utilizadas


- JavaScript
- [Puppeteer](https://pptr.dev/)

<br/>

### Como utilizar

**Clone o projeto e acesse o diretório**

```bash
 git clone git@github.com:GuilhermeSCampos/Dota2Crawling.git && cd Dota2Crawling
```

**Agora basta rodar o script e aguardar alguns minutos para obter os dados de todos os campeões assim como suas falas da tela de seleção de heróis. Os dados estarão armazenados na pasta heroesInfo.**

```bash
# Instale as Dependências
 npm install

# Rode o script
 node update.js
```
