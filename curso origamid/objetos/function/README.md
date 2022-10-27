# Function #

toda função é criada com o construtor function e por isso herda as suas propriedades e métodos.

OBS: quando se coloca o segundo parametro assim como está no exemplo abaixo, ele serve como retorno da função.

@exemplo
```bash
  function areaQuadrado(lado) {
    return lado * lado;
  }

  const perimetroQuadrado = new Function('lado', 'return lado * 4');
```

# Propriedades #

Function.length retorna o total de argumentos da função.
Function.name retorna uma string com o nome da função.

@exemplo
```bash
function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'
```
# function.call() #

function.call(this, argumento1, argumento2,...) executa a função, sendo possivel passarmos uma nova referencia ao this da mesma.

@exemplo
```bash
const carro = {
  marca: 'ford',
  anos: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // ford 2018
```

# this #

o valor de this referencia ao objeto criado durante a construcao do objeto (constructor function) podemos trocar a referencia do método ao this, utilizando o call()

@exemplo
```bash
const carros = ['ford', 'fiat', 'vw'];

carros.forEach((item) => {
  console.log(item)
}); // log de cada carro


carros.forEach.call(carros, (item) => {
  console.log(item);
});  // log de cada carro


const frutas = ['banana', 'pera', 'uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // log cada fruta

```

# exemplo real #

O objeto atribuido a lista será o substituido pelo primeiro argumento de call().

@exemplo
```bash
function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function (classe) {
  this.element.classList.add('ativar');
};

const lista = new Dom('ul');
lista.ativo('ativar');


console.log(lista)
```

# o objeto deve ser parecido #

O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

@exemplo
```bash
const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');
```

# Array e call #

É comum utilizarmos o call( ) nas funções do prototipo do construtor Araay. Assim podemos estender os métodos de Array á objetos que se parecem com uma array.

@exemplo
```bash
Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutas = ['Uva', 'maça', 'banana'];
frutas.mostreThis(); // ['Uva', 'maça', 'banana'];

Array.prototype.pop.call(frutas); // remove banana
frutas.pop(); // mesma coisa que a função acima
```

# Array-like #
HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array, Por isso conseguimos utilizar os mesmos na substituição do this em call.

@exemplo
```bash
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro;
// retorna os itens que possuem ativo
```