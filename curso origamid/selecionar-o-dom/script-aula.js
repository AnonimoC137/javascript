const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);


//nesse metodo o getElementsByClassName está atualizando ao vivo, mostrando as mudanças que podem ocorrer ao longo do codigo

const gridSectionHTML = document.getElementsByClassName('grid-section');

//nesse metodo o querySelectorAll  não está atualizando ao vivo, e não  mostra as mudanças que podem ocorrer ao longo do codigo

const gridSectionNode = document.querySelectorAll('.grid-section');

//add uma class grid-section para ver os resultados ao vivo, relativos aos dois metodos acima utilizados.
primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

