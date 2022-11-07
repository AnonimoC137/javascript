# Dataset #

dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo  DOMStringMap, dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-

@exemplo no html
```bash
<div data-cor="azul" data-width="500"> uma div </div>
<span data-anime="left" data-tempo="2000"> um span </span>
```
@exemplo no javascript

```bash
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;

//DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'

div.dataset.tempo = 1000;
//DOMStringMap {cor: "azul", width: "500", tempo: "1000"}
```

# Data Atributes #

Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS

@exemplo html
```bash
<div data-anima="left" data-tempo="1000">Div 1 <div>
<div data-anima="right" data-tempo="2000">Div 2 <div>
```

@exemplo javascript
```bash
const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) =>{
    div.classList.add(div.dataset.anima);
});

//adiciona em cada div
//uma classe com o mesmo nome
//que o valor de data
```

# data vs class #

A vantagem de se utilizar data atributes é que torna mais facil evitarmos conflitos com o estilo CSS. além de deixar a estrutura da tag mais organizada.

@exemplo
```bash
<div data-anima="left" data-tempo="1000"> div 1 <div>
<div class= anima-left tempo-1000> div 2 <div>
```

# nomenclatura  #

Por padrão o Javascript não aceita - (traço) como caracterr válido para nomear propriedades, entao qualquer traço será removido e a letra seguinte transformada em maiuscula.

@exemplo html
```bash
<div data-anima-scroll="left">div 1 <div>
```
@exemplo javascript
```bash
const div = document.querySelector('[data-anima-scroll]');
div.dataset;

//{animaScroll: 'left'}

div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;

//na div vira data-tempo-total="1000"


delete div.dataset.animaScroll; // remove o atributo
```