//EXEMPLO 1 como é mostrado cada um e como alterar tbm//
const animaisDescricao = document.querySelector('.animais-descricao');
const h1 = document.querySelector('h1');

//--console.log(animaisDescricao.innerHTML);
//--console.log(animaisDescricao.innerText);

h1.innerHTML = '<p>Novo titulo</p>';


//EXEMPLO 2 - mostrando o pai do elemento selecionado//

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);
console.log(lista.children);
console.log(lista.children[0]);

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.previousSibling);


//exemplo 3- manipulando os elementos dentro do site//
const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato'); 
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');


//---animais.appendChild(titulo);
contato.insertBefore(animais, mapa);
contato.replaceChild(lista, titulo);

//exemplo 4 - criando um novo elemento com o js

const novoH1 = document.createElement('h1');

novoH1.innerText = 'novo titulo';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

console.log(novoH1);








