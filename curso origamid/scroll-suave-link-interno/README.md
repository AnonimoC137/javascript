# scroll suave e link interno #

```bash
-criada a const para puxar os links internos
-criada uma function scrollToSection para add o método ao forEach
-dentro dessa function foi crido um método de prevenção ao comportamento do link, para que quando clicado no link interno não va mais para a section, assim para podemos conf isso.
-criada const href para puxar o clique e identificar o href dos links internos.
-criada const section para linkar ela com a const href, assim ficando unidas para poder continuar os processos.
-criada const topo para ficar calculando a distancia dos links em relação as sections automaticamente e mandando isso para o método.

-criado um metodo de scrollTo com um objeto dentro contendo top com a att da const topo e o behavior com o conportamento 'smooth' que é pra ser suave.(ELE VAI FICAR COMENTADO PARA SERVIR DE FORMA ALTERNATIVA)

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