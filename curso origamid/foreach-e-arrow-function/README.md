## forEach ##
 Constantemente vamos selecionar uma lista de itens do dom. a melhor forma para interagirmos com os mesmos é utilizando o metodo FOREACH
 
 //OU SEJA o forEach é bom para verificar varios elementos e listas do seu site por exemplo.

# const imgs = document.querySelectorAll('img');
# imgs.forEach(function(){
  console.log(item);  
# });
//////////////////////////////////////////////////////////////////

## parametros do forEach ##
o primeiro parametro é o callback, ou seja, a funçaõ que está ativada a cada item, essa função pode receber trem parametros
# valoratual, index, array; #


# const imgs = document.querySelectorAll('img');
# imgs.forEach(function(valorAtual, index, array){
  console.log(item); //o item atual no loop
  console.log(index); //o numero do index
  console.log(array); // a array completa
# });

//////////////////////////////////////////////////////////////////

## forEach e array ##
forEach é um metodo de array, alguns objetos array-like possuem este metodo. Caso não possua, o ideal é transforma-los em uma array

//OBS: array-like parece um array mas não é.

# const titulo = document.getElementsByClassName('titulo');
# const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
# });

/////////////////////////////////////////////////////////////////







