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









