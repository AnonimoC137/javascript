# .forEach() #

.forEach()(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Eça possui tres argumentos. imtemAtual(valor do item da array), index(index do valor da array) e array(array original).

@exemplo
```bash
const carros = ['ford', 'fiat', 'honda'];
carros.forEach(function(item, index, array){
  console.log(item.toUpperCase());
}); 

// com arrow function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});
```

# Arrow Function #

no exemplo a seguir vai ser mostrado uma forma mais simplificada de fazer o arrow, pode ser que algum dia encontre em algum codigo.

@exemplo
```bash
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

// que é a mesma coisa que

li.forEach(function(item){
  item.classList.add('ativa');
});

```
# modificar a array original #

O terceiro argumento do callback é uma referencia direta e se modificado irá tambem modificar a array original.

OBS: é melhor fazer isso com o .map()

@exemplo
```bash
const carros = ['ford', 'fiat', 'honda'];
carros.forEach((item,index,array) => {
  array[index] = 'carro' + item;
});

carros; // ['carro ford', 'carro fiat', 'carro honda'];
```

# .map() #

.map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porem ao inves de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

@exemplo
```bash
const carros = ['ford', 'fiat', 'honda'];
const newCarros = carros.map(item => {
  return 'carro ' + item;
});

carros; // ['ford', 'fiat', 'honda']
newCarros; // ['carro ford', 'carro fiat', 'carro honda']
```

## valor retornado ainda em .map() ##

Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que nao possui return, será undefined.

OBS: IMPORTENTE lembrar que nesses metodos que são exatamente para retornar um valor nao pode exquecer de colocar o return, vamos começar a criar o habito de usar isso, pois todos os metodos a seguir nesse topico vao precisar dele.


@exemplo
```bash
const carros = ['ford', 'fiat', 'honda'];
const newCarros = carros.map((item) => {
  const novoValor 'carro ' + item;
});

newCarros; // [,undefined, undefined, undefined];
```

## arrow function e .map() ##

Uma arrow function de linha única e sem chaves irá retornar o valor após a fat arrow =>.

OBS: Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e voce pode imediatamente iterar novamente sobre estes valores.

@exemplo
```bash
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];
```

# .map() com objetos #

map pode ser muito util para interagirmos com uma array de objetos, onde desejamos isolar um valor unico de cada objeto.


@exemplo
```bash
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 1',
    min: 10
  },
  {
    nome: 'HTML 1',
    min: 20
  },
  {
    nome: 'HTML 1',
    min: 25
  },
]

const tempoAula = aulas.map(aula => aula.min);

const arrayNomeAulas = aulas.map((aula) => {
  return aula.nome;
});

console.log(tempoAulas);
console.log(arrayNomeAulas);
```

# .reduce() #

.reduce(callback(acumulador, valorAtual, index, array) valorInicial) executa a função de callback para cada item da array. um valor especial existe nessa função de callback, ele é chamado de acumulador. mas é na verdade apenas o retorno da iteração anterior.

OBS: esse primeiro parametro que é chamado de acumulador se voce colocar um valor de 100 poe exemplo ele vai somar 100 ao primeiro valor da sua array, e pode ir somando todos os outros valores, pois no fim ele so retorna um unico valor.

OBS: se não for definido um valor para o acumulador que e aquele numero que vai antes do ultimo ) ele simplesmente nao vai acumular o primeiro valor. 

```bash
const aulas = [10, 25, 30];
const total1  =aulas.reduce((acumulador, atual) => {
  return acumulador + atual; 
});

total1; // 65
```

@exemplo 2
```bash
const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index, array)
}, 0);
```

@exemplo 3
```bash
const reduceAulas = aulas.reduce((acumulador, item) => {
  return acumulador + item;
}, 33);
```

@exemplo 4
```bash
aulas.reduce((0, 10) => {
  return 0 + 10;
},0);

//retorno 10

aulas.reduce((10, 25) => {
  return 10 + 25;
},0);

//retorno 35
```

# maior valor com .reduce() #

pode ser feita uma condicao com o .reduce() para ele puxar o maior valor de uma array.

OBS: ou seja ele passa por cada numero na seguencia comparando seus valores comecando com 10 vs 25, como 25 e maior ele continua para ser comparado com o proximo numero e ai por diante, até que chegue no maior que é o 54 nesse caso.

@exemplo
```bash
const numeros = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior
  } else {
    return atual
  }
});

maiorNumero; // 54

```

# .reduceRight() #

Existe tambem o método .reduceRight() a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para direita.

@exemplo 
```bash
const frutas = ['banana', 'pera', 'uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);

frutasRight; // uva pera banana
```

# .some() #

.some(), se pelo menos um return da iteração for true, ele retorna true.

@exemplo
```bash
const frutas = ['banana', 'pera', 'uva'];

const temUva = frutas.some((fruta) => {
  return fruta === 'uva';
});

//true
```

@exemplo 2
```bash
function maiorQue100(numero) {
  return numero > 100;
}

const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100);

//true
```

# .every() #

.every(), se todos os returns das iterações forem true, o método irá retornar true. Se pelo menos um for false, ele irá retornar false

@exemplo
```bash
const frutas = ['banana', 'pera', 'uva' ''];

//false pois pelo menos uma fruta
//está vazio '', o que é um valor false

const arrayCheias = frutas.every((fruta) => {
  return fruta; // false
});

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x> 3); // true
```

# .find() e .indIndex() #

.find() retorna o valor atual da primeira iteração que retornar o valor true, Já o .findIndex() ao inves de retornar o valor, retorna o index deste valor na array.

OBS: Oou seja um find ele vai mostra o primeiro numero que atende a condicao, pois e o primeiro valor true que deu, ja o findIndex e a mesma coisa so que o valor rewtornado vai ser o do index do valor da sua array.

@exemplo 
```bash
const frutas = ['banana', 'pera', 'uva', 'maca'];
const buscaUva = fruntas.findIndex((frunta) => {
  return fruta === 'uva';
}); // 2

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88
```
# filter #

.filter() retorna uma array com a lista de valores que durante a sua iteração retornaram um valor true.

OBS: ou seja e bom para pegar varios itens de uma lista que atendam as suas condicoes.

@exemplo
```bash
const frutas = ['banana', undefined, null, '', 'uva', 0, 'maca'];
const arrayLimpa = frunta.filter((fruta) => {
  return fruta;
}); // ['banana', 'uva', 'maca']

const numeros = [6, 43, 22, 88, 101, 29];

const buscaMaior45 = numeros.filter(x => x > 45); //[88, 101]

OU

const buscaMaior45 = numeros.filter((x) => {
  return x > 45;
});
```
comportamento do .filter() em um objeto

@exemplo 2
```bash
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 1',
    min: 10
  },
  {
    nome: 'HTML 1',
    min: 20
  },
  {
    nome: 'HTML 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15
});

//{nome: 'css 1', min: 20}
  {nome: 'js 1', min: 25}

```



