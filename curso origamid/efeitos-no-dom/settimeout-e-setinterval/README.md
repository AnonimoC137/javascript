# setTimeout() #

setTimeout(callback, tempo, arg1, arg2, ...) método assincrono que ativa o callbackvapós tempo. não existe garantia de que o codigo será executado exatamente apos o tempo, pois o callback entra na fila e espera pelaa call stack estar vazia.

@exemplo
```bash
function espera(texto) {
  console.log(texto)
}

setTimeout(espera, 1000, 'depois de 1s');
```

# imediato #

Se nçao passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na FILA imediatamente para ser executado, podemos passar uuma função diretamente com argumento.

@exemplo
```bash
setTimeout(() => {
  console.log('apos 0s?');
});
```

# Loops e setTimeout #

um loop é executado rapidamente, em milisegundos. se colocarmos um setTimeout dentro do loop, todos eles serão adicionados a web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anteior acabar para iniciar.

@exemplo
```bash
for(let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i)
    }, 300);
}
```

# This e Window #


setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referencia ao seu objeto no caso window.

OBS: Colocando em uma function anonima, o erro no exemplo abaixo nao ira ocorrer


@exemplo
```bash
const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick(event) {
    setTimeout(function() {
        this.classList.add('active');
    }, 1000);
}

//Erro pois window.classList não existe
```

# setInterval #

setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de empo passar.

@exemplo
```bash
function loop(texto) {
    console.log(texto)
}

setInterval(loop, 1000, 'passou 1s');

//loop a cada segundo

let i = 0;
setInterval(() => {
    console.log(i++)
}, 1000);
```

# clearInterval #

clearInterval(var), podemos parar um intervalo com ele, para isso precisamos atribuir o setInterval a uma variavel.

@exemplo
```bash
const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
    console.log(i++);
    if (i > 10) {
        clearInterval(contarAte10);
    }
}
```
