let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k++;
  soma += k;
}

console.log(soma);

// Solicita um número ao usuário
const numero = parseInt(prompt("Digite um número aqui:"));

// Define as variáveis iniciais da sequência de Fibonacci
let fibonacciPrimeiro = 0;
let fibonacciSegundo = 1;

// Verifica se o número é 0 ou 1, que já fazem parte da sequência
if (numero === 0) {
  console.log("O número digitado pertence à sequência de Fibonacci.");
} else if (numero === 1) {
  console.log("O número digitado pertence à sequência de Fibonacci.");
} else {
  // Calcula a sequência de Fibonacci até que o próximo valor seja maior que o número fornecido pelo usuário
  while (fibonacciSegundo <= numero) {
    const fibonacciTemp = fibonacciSegundo;
    fibonacciSegundo += fibonacciPrimeiro;
    fibonacciPrimeiro = fibonacciTemp;
  }

  // Verifica se o número pertence à sequência de Fibonacci
  if (fibonacciPrimeiro === numero) {
    console.log("O número que voce  digitou pertence à sequência de Fibonacci.");
  } else {
    console.log(" Não pertence à sequência de Fibonacci.");
  }
}

// 3) Descubra a lógica e complete o próximo elemento:



// a) 1, 3, 5, 7, 9

// b) 2, 4, 8, 16, 32, 64, 128

// c) 0, 1, 4, 9, 16, 25, 36, 49

// d) 4, 16, 36, 64, 100

// e) 1, 1, 2, 3, 5, 8, 13

// f) 2,10, 12, 16, 17, 18, 19, 20

// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?



// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.

//RESPOSTA 

// carro está mais próximo da cidade de Ribeirão Preto

// Imagine que temos um carro saindo da cidade de Ribeirão Preto em direção a Franca e um caminhão saindo de Franca em direção a Ribeirão Preto. Eles vão se cruzar em algum lugar no meio da estrada.

// O carro está viajando a 110 km/h e o caminhão está viajando a 80 km/h. Sabemos que a distância entre as cidades de Ribeirão Preto e Franca é de 100 km. Quando eles se cruzarem, vamos olhar para onde cada um deles está em relação a Ribeirão Preto.

// Descobrimos que quando eles se cruzarem, o carro estará exatamente em Franca, porque é onde ele terá viajado por tempo suficiente para encontrá-lo. Já o caminhão estará mais perto de Ribeirão Preto quando eles se cruzarem. Isso ocorre porque o caminhão está se movendo mais devagar e levou mais tempo para chegar ao ponto de cruzamento.

// Com isso, concluímos que o carro está mais próximo de Ribeirão Preto do que o caminhão quando eles se cruzam na estrada.

let frase = 'Quero ser contratato por favor';

function mudaTudo(frase) {
    let novaFrase = '';
    for (let i = frase.length - 1; i >= 0; i--) {
      novaFrase += frase[i];
    }
    return novaFrase;
  }

  console.log(mudaTudo(frase));