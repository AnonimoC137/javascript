# Arrays #

Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, number, functions, objetos e mais

@exemplo
```bash
const instrumentos = ['guitarra', 'baixo', 'violao'];
const precos = [49, 99, 69, 89];

const dados = [new String('tipo 1'), ['carro', 'portas', {cor: 'azul', preco: 2000}], function andar(nome) {console.log(nome)}];

dados[2]('ford');
dados[1][2].cor // azul
```

# Construção de Arrays #

Toda array herda os métodos e propriedades do prototipo do construtor Array

OBS: os valores da array não são estáticos, ou seja, podem ser alterados, de modo a reatribuir uma array como no exemplo abaixo na parte final.

@exemplo
```bash
const instrumentos = ['guitarra', 'baixo', 'violao'];
const carros = new Array('corola', 'mustang', 'honda');


carros[1] // mustang
carros[2] = 'ferrari';
carros[10] = 'Parati';
carros.length // 11
```

# Array.from() #

Array.from() é um método utilizado para transformar array-like objectos, em uma array.

OBS: um objeto array-like so pode virar um array se tiver em seu interior o length como no exemplo abaixo.

@exemplo
```bash
let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

const carros = {
  0: 'fiat',
  1: 'honda',
  2: 'ford',
  length: 4,
}

const carrosArray = Array.from(carros);
```

# Array.isArray() #

Verifica se o valor passado é uma array e retorna um valor booleano.

@exemplo
```bash
let li = document.querySelectorAll('li'); // NodeList
Array.isArray(li); //false

li = Array.from(li); // Array
Array.isArray(li); // true
```

# Array.of() Array() e new Array() #

Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave NEW não é necessaria para utilizar o construtor Array.

@exemplo
```bash
Array.of(10); // [10]

Array.of(1,2,3,4); // [1,2,3,4]

new Array(5); // [,,,,]

Array(5); // [,,,,]

Array(1,2,3,4); // [1,2,3,4]
```

# Propriedades e métodos do prototype #

[].length retorna o tamanho da array.

OBS: o nome disso [] é braquete e pode ser usado mais de um em sequencia para acessar mais a fundo os conteudos do array. 

@exemplo
```bash
const frutas = ['banana', 'pera', ['uva roxa', 'uva verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2
```

# Métodos Modificadores [].sort() #

Os proximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original [].sort() organiza a pelo unicode.

OBS: funciona melhor com strings do que com numeros, ja que com numeros não são organizados de forma crescente e sim pelo primeiro digito do mesmo e em seguida pelo segundo digito do numero.

@exemplo
```bash
const instrumentos = ['guitarra', 'baixo', 'violao'];
instrumentos.sort();

instrumentos; // ['baixo', 'guitarra', 'violao']


const idades = [32,21,33,43,1,12,8];
idades.sort();

idades; // [1, 12, 21, 32, 33, 43, 8];
```

# [].unshift() e [].push() #

[].unshift() adiciona elementos ao inicio da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

@exemplo
```bash
const carros = ['ford', 'fiat', 'vw'];
carros.unshift('honda', 'kia'); // 5

carros; // ['honda', 'kia', 'ford', 'fiat', 'vw'];


carros.push('ferrari'); // 6
carros; // ['honda', 'kia', 'ford', 'fiat', 'vw', 'ferrari'];
```

# [].shift() e [].pop() #

[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o ultimo elemento da array e retorna o mesmo.

@exemplo
```bash
const carros = ['ford', 'fiat', 'vw', 'honda'];
const primeiroCarro = carros.shift(); // 'ford'
carros; // ['fiat', 'vw', 'honda'];


const ultimoCarro = carros.pop(); // 'honda'
carros; // ['fiat', 'vw',];
```

# [].reverse() #

[].reverse() inverte os itens da array e retorna a nova array.

@exemplo
```bash
const carros = ['ford', 'fiat', 'vw', 'honda'];
carros.reverse(); // ['honda', 'vw', 'fiat', 'ford'];
```
 