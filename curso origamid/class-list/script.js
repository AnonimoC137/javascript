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

console.log(animais.attributes[1]);
