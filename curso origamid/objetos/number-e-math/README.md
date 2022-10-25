# Number #
É a construtora de números, todo número possui as propriedades e métodos do prototype de Number, Number tambem possui alguns métodos

```bash
const anos = 2018;
const preco = new Number(99);
```

# Number.isNaN() e Number.isInteger();

isNaN() é um método de Number, ou seja, não faz parte do prototipo. isInteger() verifica se é uma integral.

```bash
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false
```

# Number.parseFloat() e Number.parseInt() #

parseFloat() serve para retornarmos um número a partir de uma string. A string deve começar com um número. parseInt recebe tambem um segundo parametro que é Radix, 10 é para decimal.

OBS: float possui decimal, integer não.

@exemplo
```bash
parseFloat('99.50'); // mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.4343433443, 10); // 100
Number.parseInt('100 reais', 10); // 100

```

# n.tofixed(decimais) #

Arredonda o número com base no total de casas decimais do argumento

@exemplo
```bash
const preco = 2.99;
preco.toFixed() // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499
```

# n.toString(radix) #

Transforma o número em uma string com base no Radix, Use o 10 para o sistema decimal

@exemplo
```bash
const preco = 2.99;
preco.toString(10);  // '2.99'
```

# n.toLocaleString(lang, options);

Formata o número de acordo com a lingua e opcoes passadas

```bash
const preco = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'}); // R$ 59.49

```

# Math #

é um bojeto nativo que possui propriedades e métodos de expressoes matematicas comuns.

# Math.abs(), Math.ceil(), Math.floor() e Math.round() #

abs() retorna o valor absoluto, ou seja, transforma negativo em positivo.ceil() arredonda para cima, retornando sempre uma integral e floor para baixo .round() arredonda para o numero integral mais proximo.

@exemplo
```bash
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3) // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
```
# Math.max(), Math.min() e Math.random() #

max() retorna o maior numero de uma lista de argumentos, min() o menor número e random() um numero aleatorio entre 0 e 1.

```bash
Math.max(5,3,10,42,2); // 42 
Math.min(5,3,10,42,2); // 3 

Math.random(); // 0,xxx
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500
```