# explicação do codigo #

1. a function handleChange que esta linkada a um evento change vai acessar o objeto handleStyle, usando [].

2. depois dentro do [], vai ser usado [nome] para assim acessar as propriedade correta dentro do objeto, alem disso no parametro (value), onde vai estar o valor do evento que ocorreu, no caso de uma troca de cor ou borda etc.. 

3. com isso o metodo correspondente ao nome passado vai pegar esse value e vai fazer a alteração. seja de estilo ou de texto.

4. foi criada uma function showCss para puxar o css feito para editar o botao pelo usuario, de forma que ele possa usar isso em seu site, para isso foi usada uma propriedade chamada cssText, que lista todo css contido no elemento em questão, porem ela vai concatenando tudo em uma linha.

5. entao para corrigir isso foi usado um split(;) para separar o css e tornalo mais legivel em forma de array.

6. e para finalizar foi usado o join(; <span></span>) para unir tudo, sem que fique na mesma linha. detalhe, foi utilizado '<span>' antes do caminho do btn para que não ocorra erros com a tag span.

7. por fim e necessario invocar o showCss() dentro da function handleChange()