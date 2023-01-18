# Destructuring #

Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades a novas variaveis.

@EXEMPLO
```bash
const carro = {
  marca: 'fiat',
  ano: 2018,
  portas: 4,
}

const {marca, ano} = carro;

console.log(marca); // fiat
console.log(ano); // 2018
```

# Destructuring Objects #

A desestruturação ira facilitar a manipulação de dados. Principalmnete quando temos uma grande profundidade de objetos.

@exemplo
```bash
const cliente = {
  nome: 'andre',
  compras: {
    digitais: {
      livros: ['livro 1', 'livro 2'],
      videos: ['videos js', 'videos html']
    },
    fisicas: {
      cadernos: ['cadernos 1']
    }
  }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

//passa a ser

const {livros, videos} = cliente.compras.digitais

console.log(livros);
console.log(videos);
```
# Nesting #

É possivel aninhar uma desestruturatação dentro da outra

@exemplo
```bash
const {fisica, digitais, digitais: {livros, videos}} = cliente.compras

console.log(fisicas);
console.log(digitais);
console.log(livros);
console.log(videos);
```
# Nome das Variaveis #

É necessario indicar o nome da propriedade que voce deseja desestruturar de um objeto. É  possivel mudar o nome da variavel final com:

@exemplo
```bash
const cliente = {
  nome: 'andre',
  compras: 10,
}

const {nome, compras} = cliente;

// ou

const {nome: nomeCliente, compras: comprasCliente} = cliente
```

# Valor Inicial #

Caso a propriedade não exista o valor padrao dela sera undefined. É  possivel modificar este valor no momento da desestruturação.

@exemplo
```bash
const cliente = {
  nome: 'andre',
  compras: 10,
}

const {nome, compras, email = 'email@gmail.com', cpf} = cliente;

console.log(email); // email@gmail.com
console.log(cpf); // undefined

```

# Destructuring Arrays #

Para desestruturar arrays voce deve colocar as variaveis entre [] colchetes.

@exemplo
```bash
const frutas = ['banana', 'uva', 'morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// com destructuring

const [primeira, segunda, terceira] = frutas;
```

# Declaração de variaveis #

A desestruturação pode servir para reclararmos uma sequencia de variaveis.

OBS: essa tecnica e pouco pratica, mas pode vir a acontecer em alguns codigos.

@exemplo
```bash
const primeiro = 'item 1';
const segundo = 'item 2';
const terceiro = 'item 3';

// ou 

const [primeiro, segundo ,terceiro] = ['item 1', 'item 2', 'item 3'];
```
