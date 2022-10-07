# scroll suave e link interno #

```bash
-criada a const para puxar os links internos
-criada uma function scrollToSection para add o método ao forEach
-dentro dessa function foi crido um método de prevenção ao comportamento do link, para que quando clicado no link interno não va mais para a section, assim para podemos conf isso.
-criada const href para puxar o clique e identificar o href dos links internos.
-criada const section para linkar ela com a const href, assim ficando unidas para poder continuar os processos.

--criada const topo para ficar calculando a distancia dos links em relação as sections automaticamente e mandando isso para o método....[ESSA CONST TBM VAI COMO COMENTARIO POIS É UMA FORMA ALTERNATIVA QUE VAI JUNTO COM O MÉTODO COMENTADO]

--criado um metodo de scrollTo com um objeto dentro contendo top com a att da const topo e o behavior com o comportamento 'smooth' que é pra ser suave.(ELE VAI FICAR COMENTADO PARA SERVIR DE FORMA ALTERNATIVA)

--criada o metodo .scrollIntoView() com um objeto dentro, dentro do objeto o behavior com o comportamento 'smooth' que é pra ser suave. além de colocar a propriedade block: 'start' para o scroll terminar de rolar logo quando começa a section.

-criado um forEach para add um evento a cada link interno
-
```

# método window.scrollTo() #

esse método leva dois argumentos, o primeiro é o (eixo x) horizontal, o segundo é o (eixo y) ou seja na vertical

OBS: existe tambem a opção de colocar (options) que seria a oportunidade de criar um objeto contendo comportamento como (behavior: 'smooth') e outros como top, left, right, bottom mas nem todos os browser aceitam.

@exemplo
```bash
window.scrollTo(0, 1000);
```

@exemplo
```bash
window.scrollTo({
    top: 1000,
    behavior: 'smooth',
});
```

# Element.scrollIntoView() #

ele está relacionado ao elemento em si, falando diretamente com ele. passando ele como um objeto tambem podendo colocar comportamento, onde ele deve ir usando block: start, center...

OBS: por padrão esse scroll vai ir quase para o meio da section que voce deseja, caso prefira pode colocar como start na propriedade.

@exemplo
```bash
section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
});
```