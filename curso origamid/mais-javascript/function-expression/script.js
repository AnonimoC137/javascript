//Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,00');

//Crie uma IIFE e isola o escopo
//de qualquer codigo JS

(function() {
    const nome = 'joao'
})();

//omo podemos utilizar
//a função abaixo.

const active = callback => callback()

active(function() {
    console.log('teste')
})