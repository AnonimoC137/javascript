//Retorne um numero aleatorio entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

console.log(aleatorio);

// Retorne o maior numero da lista abaixo

const numeros = '4, 5, 20, 27, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);

console.log(numeroMaximo);

//crie uma função para limpar os precos
//e retornar os numeros com centavos arredondados
//depois retorne a soma total

const listaPrecos = ['R$ 59,99', 'R$100,222', 'R$ 230  ', 'r$ 200'];


let soma = 0
listaPrecos.forEach((item) => {
     item = +item.toLocaleUpperCase().replace('R$', '').trim().replace(',', '.');
     item = +item.toFixed(2);
    soma = soma + item; 

});

console.log(soma);