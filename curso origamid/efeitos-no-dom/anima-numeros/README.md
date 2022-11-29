# algumas explicacoes do codigo#

nessa parte vou apenas explicar sobre o observador.
ele vai ser responsavel por ficar observando a section dos numeros, e fazer a mutacao, ou seja o efeito de animar os numeros do zero ate o valor total somente quando a class ativo for add na section, para que o efeito de contagem não ocorra quando o usuario não estiver olhando.

ele funciona interagindo com uma function que vai se chamar nesse caso de handleMutation()

depois de invocar o observador com o new MutationObserver(handleMutation)
precisa passar o "observer.observe" sem as aspas. que é o metodo para observar





