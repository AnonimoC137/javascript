# eventos #

# addEventListener #

adiciona uma função ao elemento, esta chamada de CALLBACK, que será ativada assim que certo EVENTO ocorrer neste elemento

OBS: o terceiro parametro é opcional

@exemplo 
```bash
 const img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
 img.addEventListener('click', function() {
   console.log('clicou');
 });

//pode ser usada tambem uma arrow function 
 img.addEventListener('click', () => {
   console.log('clicou');
 });
```
# callback #

é uma boa pratica separar a função de callback do addEventListener, ou seja, deckarar uma função ao invés de passar diretamente uma função anonima

@exemplo
```bash
 const img = document.querySelector('img');

 function callback() {
  console.log('clicou');
}

 img.addEventListener('click', callback);
```

# event #

o primeiro parametro do callback é referente ao evento que ocorreu.

OBS: geralmente utilizam E como nome do parametro.

@exemplo 
```bash
 const img = document.querySelector('img');

 function callback(event) {
  console.log(event);
 }

 img.addEventListener('click', callback);
```
# propriedades do event #

```bash
 const animaisLista = document.querySelector('.animais-lista');

 function executarCallback(event) {
   const currentTarget = event.currentTarget; //alem do elemento os itens que o envolvem
   const target = event.target; // onde foi clicado exatamente
   const type = event.type // tipo de evento
   const path = event.path; //
  console.log(currentTrget, target, type, path);
 }

 animaisLista.addEventListener('click', executarCallback);
```

# event.preventDefault() #

previne o comportamento padrão do evento no browser. no caso de um link externo, por exemplo, irá prevenir que o link seja ativado.

@exemplo
```bash
 const linkExterno = document.querySelector('a[href^="http"]');

 function clickNoLink(event) {
   event.preventDefault();
   console.log(event.currentTarget.href);
}

 linkExterno.addEventListener('click', clickNoLink);
```

# this #

A palavra chave THIS é uma palavra especial de JAVASCRIPT, que pode fazer referencia a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referencia ao elemento em que addEventListener foi adicionado.

OBS: nesse caso o elemento que o THIS vai fazer refencia é o IMG

@exemplo 
```bash
 const img = document.querySelector('img');

 function callback(event) {
   console.log(this); // retorna a imagem
   console.log(this.getAttribute('src'));
}

 img.addEventListener('click', callback);
```

# diferentes eventos # 

existem varios dentre eles o CLICK, MOUSEENTER, SCROLL, RESIZE, KEYDOWN

@EXEMPLO
```bash
 h1.addEventListener('click', callback);
 h1.addEventListener('mouseenter', callback);
 window.addEventListener('scroll', callback);
 window.addEventListener('keydown', callback);
```

# evento keyboard #

voce pode adicionar atalhos para facilitar a navegação no seu site, atraves de eventos de keyboard

@exemplo
```bash
 function handleKeyboard(event) {
   if(event.key === 'a')
     document.body.classList.toggle('azul');
   else if (event.key === 'v')
     document.body.classList.toggle('vermelho');  
}

 window.addEventListener('keydown', callback);
```

# forEach e eventos #

O método addEventListener é adicionado á um unico elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos á cada um deles

@exemplo 
```bash
const imgs = document.querySelector('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

```









