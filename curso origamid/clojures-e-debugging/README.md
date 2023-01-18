# Escopo #

Quando criamos uma função. A mesma possui acesso a todas as variaveis criadas em seu escopo e tambem ao escopo pai. A  mesma coisa acontece para funções dentro de funções.

@exemplo
```bash
let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
  }
}

//func1, possui acesso a 
//item1 e item2

//func2, possui acesso a
//item1, item2, e item3
```

# Clojures #

A funcao2 possui 4 escopos. O primeiro escopo é o local, com acesso ao item3. O segundo escopo da acesso ao item2, esse escopo é chamado de clojure (funcao1) (escopo de função dentro de função). O terceiro escopo é o script com acesso ao item1 e o quarto escopo é o Global/Window.

@exemplo
```bash
let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2()
}
```

# Caso Classico #

Um dos casos mais classicos para a demonstração de clojures é atraves da criacao de uma função de incremento. É como se a função incrementar carregasse uma mochila chamada contagem, onde uma referencia para as suas variaveis então contidas na mesma.

@exemplo
```bash
function contagem() {
  let total = 0;
  return function incrementar() {
    total++;
    console.log(total);
  }
}

const ativarIncrementar = contagem();
ativarIncrementar(); // 1
ativarIncrementar(); // 2
ativarIncrementar(); // 3
```

# Clojures na Real #

Todas as funções internas da Factory Function possuem uma closure de $$. As mesmas contem uma referencia a variavel elements declarada dentro do escopo da função.

OBS: isso é sobre o topico anterior sobre factory function, e como elas conseguem acessar o escopo do pai por conta do que carregam em sua mochila ou o clojure.

@exemplo
```bash
function $$(elementosSelecionados) {
  const elements = document.querySelectorAll(elementosSelecionados);

  function hide() {...}
  function show() {...}
  function on() {...}
  function addClass() {...}
  function removeClass() {...}

  return {hide, show, on, addClass, removeClass}
}
```