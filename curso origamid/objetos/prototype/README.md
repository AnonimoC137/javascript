# prototype # 

A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

@exemplo
```bash
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const andre = new Pessoa('andre', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined
```

# funcao.prototype #

É possivel adicionar novas propriedades e métodos ao objeto prototype

@exemplo
```bash
Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}

console.log(Pessoa.prototype); // retorna o objeto
```

# acesso ao protótipo #

O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

@exemplo
```bash
const andre = new Pessoa('andre', 28);

andre.nome;
andre.idade;
andre.andar();
andre.nadar();
```

# proto #
O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente

@exemplo
```bash
//acessam o mesmo método
//mas __proto__ não terá
//acesso ao this.nome
andre.andar();
andre.__proto__.andar();
```

# Herança de protótipo #

O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsavel por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do potótipo de object.

@exemplo
```bash
object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();

```

# Construtores Nativos #

Objetos, funções, números , Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

@exemplo
```bash
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // b
cidade.charAt(0); // r

String.prototype;
```

# É possivel acessar a função do protótipo #

É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor array.

OBS: existe o método Array.from()

@exemplo
```bash
const lista = document.querySelectorAll('li');

# transforma em uma array
const listaArray = array.prototype.slice.call(lista);
```

# Método do objeto vs Protótipo #

Nos objetos nativos existem métodos linkados diretamente ao objeto e outros linkados ao protótipo

OBS: dado.constructor.name retorna o nome do construtor. no cado dado é um exemplo de nome somente vai do que voce busca no momento

@exemplo 
```bash
Array.prototype.slice.call(lista);
Array.from(lista);

# Retorna uma lista com os métodos / propriedades
object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);
```
# entenda o que está sendo retornado #

Os métodos e propriedades acessando o . são referentes ao tipo de dado que é retornado antes desse .

@exemplo
```bash
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // function
Carro.acelerar() // boolean
Carro.marca.charAt // Function
```

