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

# [].splice() #

[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parametro (retorna esses itens).

@exemplo
```bash
const carros = ['ford', 'fiat', 'vw', 'honda'];
carros.splice(1, 0, 'kia', 'mustang'); // []
carros; // ['ford','kia', 'mustang', 'fiat', 'vw', 'honda'];


carros.splice(3, 2, 'ferrari'); // ['fiat', 'vw']
carros; // ['ford', 'kia', 'mustang', 'ferrari', 'honda']
```

# [].fill() #

[].fill(valor, inicio, final) preenche a array com o valor, do inicio ate o final.

OBS: podendo deixar bem claro qual posição exatamente vai ser modificada, como tambem colocar de um ponto ate o outro as modificações.

@exemplo
```bash
['item1','item2','item3','item4'].fill('banana');
// ['banana','banana','banana','banana']


['item1','item2','item3','item4',].fill('banana', 2);
// ['item1','item2','banana','banana']


['item1','item2','item3','item4',].fill('banana', 2, 3);
// ['item1','banana','banana','item4']
```

# Métodos de Acesso [].concat() #

Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

@exemplo
```bash
const transporte1 = ['barco', 'aviao'];
const transporte2 = ['carro', 'moto'];
const transportes = transporte1.concat(transporte2);
// ['barco', 'aviao', 'carro', 'moto'];


const maisTransportes = [].concat(transporte1, transporte2, 'van');
// ['barco', 'aviao', 'carro', 'moto', 'van'];
```

# []includes(), indexOf() e []lastIndexOf() #

[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor da array. Já o [].lastIndexOf(valor) retorna o index do ultimo

@exemplo
```bash
const linguegens = ['html', 'css', 'js', 'php', 'python', 'js'];


linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5
```

# [].join() #

[].join(separador) junta todos os valores da array e retorna uma string com eles. Se voce passar um valor como parametro, este será utilizado durante a junção de cada item da array.

@exemplo
```bash
const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(); // 'html,css,php,python'
linguagens.join(' '); // 'html css js php python'




let htmlString = '<h2>Titulo Principal</h2>'

htmlString = htmlString.split('h2');

// ['<', '>Titulo Principal</', '>']

htmlString = htmlString.join('h1');

// <h1>Titulo Principal</h1>
```

# [].slice() #

[].slice(inicio, final) retorna os itens da array começando pelo inicio até o valor final.

@exemplo
```bash
const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
```


    