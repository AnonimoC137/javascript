# forEach #
 Constantemente vamos selecionar uma lista de itens do dom. a melhor forma para interagirmos com os mesmos é utilizando o metodo FOREACH
 
 //OU SEJA o forEach é bom para verificar varios elementos e listas do seu site por exemplo.
 
@exemplo
```bash
 const imgs = document.querySelectorAll('img');

 imgs.forEach(function(){
     console.log(item);  
 });
```


# parametros do forEach #
o primeiro parametro é o callback, ou seja, a funçaõ que está ativada a cada item, essa função pode receber trem parametros
## valorAtual, index, array; 

@exemplo
```bash
 const imgs = document.querySelectorAll('img');

 imgs.forEach(function(valorAtual, index, array){
   console.log(item);   //o item atual no loop
   console.log(index);  //o numero do index
   console.log(array);   // a array completa
 });
```



# forEach e array #
forEach é um metodo de array, alguns objetos array-like possuem este metodo. Caso não possua, o ideal é transforma-los em uma array

//OBS: array-like parece um array mas não é.
//no exemplo abaixo mostra como fazer um array-like virar um array.

@exemplo
```bash
  const titulos = document.getElementsByClassName('titulo');
  const titulosArray = Array.from(titulos);

  titulosArray.forEach(function(item){
    console.log(item, index, array);
  });
```



# Arrow Function #

sintaxe curta em relação a FUNCTION EXPRESSION. basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

@exemplo
```bash
 const imgs = document.querySelector('img');

 imgs.forEach((item) => {
   console.log(item);
 });
```

///////////////////////////////////////////////////////////////

# argumentos e Parenteses #

argumento unico não precisa de parenteses

@exemplo
```bash

 imgs.forEach(item => {
   console.log(item);
 });
```
multiplos argumentos precisam de parenteses
@exemplo
```bash 

 imgs.forEach((item, index) => {
    console.log(item, index);
 });
```

sem argumentos precis dos parenteses, mesmo vazio
@exemplo
```bash

 let i = 0;
 imgs.forEach(() => {
   console.log(i++); 
 });
```
//A DICA É SEMPRE COLOCAR OS PARENTESES PARA NÃO DAR PROBLEMA!








