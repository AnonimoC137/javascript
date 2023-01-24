# Iterable #

São objetos que possuem o método [Symbol.iterator], geralmente no prototipo. É dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Arrays-Like e outros.

@exemplo
```bash
const frutas = ['banana', 'morango', 'uva'];
const frase = 'isso e javascript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));
```
# For...of #

É possivel fazermos um loop por cada iteração do objeto iteravel utilizando o for...of. Alem deste loop podemos tambem utilizar o Spread Operator nos mesmos.

@exemplo
```bash
const frutas = ['banana', 'morango', 'uva'];
const frase = 'isso e javascript';

for(const fruta of frutas) {
  console.log(fruta);
}

for(const char of frase) {
  console.log(char);
}
```

# Spread e for...of #

Com o for loop podemos manipular um dos elementos do objeto iteravel.

@exemplo
```bash
const buttons = document.querySelectorAll('button');

for(const of buttons) {
  btn.style.background = 'blue'
}

console.log(...buttons);
```
# Apenas Iteraveis #

O for...of não ira funcionar em um objeto comum que não seja iteravel.

@exemplo
```bash
const carro = {
  marca: 'honda',
  ano: 2018,
}

//Erro, não é iteravel

for(const propriedade of carro) {
  console.log(propriedade);
}
```
# For...in #

Este loop ira retornar a chave (key) de todas as propriedades enumeraveis (que não sejam simbolos) de um objeto.

@exemplo
```bash
const carro = {
  marca: 'honda',
  ano: 2018,
}

for(const propriedade in carro) {
  console.log(propriedade);
}
```
