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
