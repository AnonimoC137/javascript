//retorne no console todas as imagens do site
const retornaImg = document.querySelectorAll('.grid-section img');
console.log(retornaImg);

//retorne no console apenas as imagens que começaram com a palavra imagem

const somenteImg = document.querySelectorAll('img[src^="../imagens/imagem"]');
console.log(somenteImg);

//selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//selecione o primeiro h2 dentro do .animais-descricao

const mostraH2 = document.querySelector('.animais-descricao h2');
console.log(mostraH2);

//selecione o ultimo p do site 

const ultimoP = document.querySelector('.copy p');
console.log(ultimoP);
