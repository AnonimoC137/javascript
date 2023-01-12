# rever function declaration #

São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamando de Function Declaration.

@exemplo
```bash
function somar(a, b) {
  return a + b;
}

somar(4, 2) // 6
```

# Function Expression #

É criada a partir de declaração de uma variavel, na qual assinalamos uma função, Esta função pode ser anonima ou nomeada. A mesma poderá ser ativada atraves da variavel assinalada.

@exemplo
```bash
consr somar = function(a, b) {
  return a + b;
}

somar(4, 5); // 9
```

# Hoisting #

Function Declarations são completamente definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importancia.

@exemplo
```bash
somar(4, 2); // 6
dividir(4, 2); // Erro

function somar(a, b) {
  return a + b;
}

const dividir = function(a, b) {
  return a / b;
}
```

# Arrow Function #

Podemos criar utilizando arrow functions.

@exemplo
```bash
const somar = (a, b) => a + b;
somar(4, 2); // 6

const quadrado = a => a * a;
quadrado(4); // 16
```

# Estrutura / Preferencia #

Geralmente o uso entre expression / declaration é uma questão de preferencia.
Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um codigo mais estruturado.

@exemplo
```bash
//Declarasa como método de window
//vaza o escopo de bloco, como se
//fosse criada utilizando var

function somar(a, b) {
  return a + b
}

const dividir = (a, b) => a / b;

somar(4, 2);
dividir(4,2);

```

# IIfe #

Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum para isolarmos o escopo de um código Javascript era atraves das chamadas IIFES

@exemplo
```bash
var instrumento = 'violao'

(function() {
  //codigo isolado do escopo global
  var instrumento = 'guitarra';
  console.log(instrumento); // guitarra
})();

console.log(instrumento); // violao
```
