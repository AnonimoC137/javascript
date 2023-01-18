#  Factory Function #

São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que o constructor functions / classes.

@exemplo
```bash
function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    element: element,
    text: text,
  }
}

const comprarBtn = createButton('comprar')
```

# Métodos / Variaveis privadas #

Uma das vantagens é a possibilidade de criarmos métodos / variaveis privadas.

@exemplo
```bash
function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  }

}
```

# Ice Factory #

Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas crockford.

@exemplo
```bash
'use strict';

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar,
  });

}
```

# Constructor Function / Factory Function

Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Tmbem é possivel fazer isso com uma Constructor Function.

@exemplo
```bash
function Pessoa(nome) {
  if (!(this instanceof Pessoa)) // ou (!new.target)
  return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`
}

const designer = Pessoa('andre');
```
