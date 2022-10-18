# Objetos #

Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}, Mas e se precisarmos criar um novo objeto, com as mesmas caracteristicas do anterior?

```bash
const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;
```

# constructor functions #

Para isso existe as constructor Functions, ou seja, funções construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

OBS: a palavra chave NEW é muito importante para isso.

OBS: usa-se o pascal case ou seja a primeira letra é MAIUSCULA depois o resto minusculo pois isso ajuda a identificar que é uma function construtora.

OBS: this sempre vai apontar para o objeto, nesse caso o Carro().

OBS: os valores podem ser passados dentro do proprio () como new Carro('ford', 1000);

```bash
function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;
```

# new keyword #

A palavra chave NEW é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

```bash
const honda= new Carro();

##  1 cria um novo objeto
honda = {};

## 2 define o protótipo
honda.prototype = Carro.prototype;

## 3 aponta a variável this para o objeto
this = honda;

## 4 executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

## 5 retorna o novo objeto 
return honda = {
  marca: 'Marca',
  preco: 0, 
}
```

# this keyword #

o THIS faz referência ao próprio objeto construido com a constructor function.

OBS: só bai aparecer nos objetos que usarem o construtor as referencias que estiverem com o this apontando, nesse caso a marca e o preço.

```bash
function Carro(marca, procoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda new Carro('Honda', 2000);
```

# Exemplo real #

quando mudamos a propriedade seletor, o objeto DOM irá passar a selecionar o novo seletor em seus métodos.

OBS: Nesse caso o element esta fazendo o papel de achar o seletor, ja o ativo, vai ativar algo, fazer algo, no caso add o class 'ativo' ao elemento selecionado.

OBS: Quando usar o querySelector não é necessario passar com '' o nome do elemento junto com o this.

```bash
const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo');
  },
}

Dom.ativo(); //adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo();//adiciona ativo ao ul
```

# constructor function real #

um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor

```bash
function Dom() {
  this.seletor = 'li';
  const element = document.querySelector(this.seletor);
  this.ativo = function() {
    element.classList.add('ativo');
  };
}

const lista = new Dom();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = 'li:last-child';
lastLi.ativo();
```

# LEMBRE-SE de usar parâmetros #

```bash
function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom('ul');
lista.ativo('ativo');

const lastLi = new Dom('li:last-child');
lastLi.ativo('ativo');
```