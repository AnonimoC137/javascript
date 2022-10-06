# outerHTML, innerHTML, innerText #

propriedades que retornam uma string contendo o html ou texto, é possivel atribuir um novo valor para as mesmas.

## element.innerText = 'novo texto' ###

@exemplo
```bash
const menu = document.querySelector('.menu');

menu.outerHTML; //todo o html do elemento
menu.innerHTML; //html interno
menu.innerText; //texto, sem tags

menu.innerText = '<p>Texto</p>'; //a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; //a tag é renderizada
```

# Transversing #

como navegar pelo DOM, utilizando suas propriedades e métodos.

OBS: lista.querySelector('li'); é só uma forma adicional de puxar as li

@exemplo
```bash
const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // ultimo filho

lista.querySelector('li'); // todas as li
lista.querySelector('li:last-child'); // ultimo filho
```

# Element vc Node #

Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentario, quebra de linha e mais.

OBS: geralmente estamos atrás de um elemento e não de qualquer node em si

@exemplo
```bash
const lista = document.querySelector('.animais-lista');

lista.previousElementSibling; //elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

```
# Manipulando Elementos #

É possivel mover elementos no dom (por exemplo mover um h1 ou um p para outro local) com métodos de Node.

OBS: lembrando que essas const são um exemplo, podendo variar de acordo com seu projeto atual!

OBS: titulo é filho direto de contato, por isso pode ser movido para lá a lista, caso contrario não

OBS: replaceChild(lista, titulo) o primeiro substitui, o segundo é substituido.

@exemplo
```bash
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); //move lista para dentro de contato só que no final na parte de baixo
contato.insertBefore(lista, titulo); //lista é o que vai ser movido para dentro de contato,e acima do titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); //substitui titulo por lista
```

# Novos Elementos #

podemos criar novos elementos com o método createElement()

@exemplo 
```bash
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText  = 'Novo Titulo';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

```







