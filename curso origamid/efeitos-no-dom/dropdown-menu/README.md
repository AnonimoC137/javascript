# algumas explicacoes do codigo#

foi criado um forEach dentro de outro para poder usar tanto a opcao de click no menu, como de toque na tela, isso para ficar melhor na versão mobile.

depois que esse evento ocorre e ativada a function handleClick que add a classe active que faz o menu aparecer.
dentro dela vai ficar a inicialização de outra function. outsideClick()

essa function vai ser responsavel por verificar se o usuario clicou fora do menu para que o mesmo feche.

