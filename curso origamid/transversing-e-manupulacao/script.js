//EXEMPLO 1 como é mostrado cada um e como alterar tbm
const animaisDescricao = document.querySelector('.animais-descricao');
const h1 = document.querySelector('h1');

//--console.log(animaisDescricao.innerHTML);
//--console.log(animaisDescricao.innerText);

h1.innerHTML = '<p>Novo titulo</p>';


//EXEMPLO 2 - mostrando o pai do elemento selecionado

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);
console.log(lista.children);
console.log(lista.children[0]);
//nesses caso tem que ir o sinal de decremento --
console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.previousSibling);


//exemplo 3 




