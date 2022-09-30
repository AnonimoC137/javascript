const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('azul');
} else {
    menu.classList.add('nao-possui-azul');
}
//console.log(menu);





const animais = document.querySelector('.animais');
//console.log(animais.attributes[1]);






const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');

console.log(img.getAttribute('src'));
//console.log(img.getAttribute('alt')); ou
console.log(srcImg);

img.setAttribute('alt', 'e uma raposa');

const possuiImg = img.hasAttribute('alt');
console.log(possuiImg);

