# animação de scroll #

começamos colocando a class js-scroll nas sections de FAQ, CONTATOS e ANIMAIS.

# No codigo JS linha a linha #

```bash
- criada const para puxar a class criada js-scroll

-criada const para pegar exatamente 60% do total da tela do usuario para ocorrer a animação
quando passar disso.

-criada uma function que vai disparar a animação.

-dentro dessa function vai ser criado um forEath para falar com cada
elemento na lista para saber sua distancia do top, para isso vai ser criada
uma const chamada sectionTop com o método descrito abaixo. getBoundingClientRect().top

-criada uma const isSectionVisible que vai receber o valor da sectionTop - windowMetade
que é a const que vai medir os 60% da tela < 0. já fazendo a primeira condição
para otimizar o codigo

-criado um if para fazer uma condição, quando o valor de isSectionVisible for true 
vai ser adicionado uma class que vai conter a animação.

-criado um evento partindo do window, com evento scroll

-por ultimo colocado um animaScroll() , para que a primeira animação ocorra
sempre ao iniciar a pagina, no primeiro elemento section.
```

# metodo getBoundingClientRect()

mostra todas as interações do elemento apontado como width, height, top, left e por ai vai 

OBS: bom para usar para medir distancias dos elementos.