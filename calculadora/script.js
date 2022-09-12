function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } 

}

calcular();

























//LINHA 1 - INSERT vai puxar o valor do numero clicado.

//LINHA 2 - let numero para guardar o primeiro numero e não excluir da tela quando clicar em outro.

//LINHA 3 - para ir concatenando os numeros na tela sem os substituir pelo proximo clicado.

//LINHA 6 - CLEAN() é um metodo do html cm javascript para limpar o visor.

//LINHA 7 - criado o caminho para o visor 'resultado' no final '' para fazer um efeito visual de limpar a tela da calculadora.

//LINHA 10 - o back() vai ser para apagar um numero de cada vez caso não seja o numero certo pressionado.

//LINHA 11 - foi criada um let de resultado com o caminho ate o visor.

//LINHA 12 - o caminho do visor recebe  o resultado.substring(0, resultado.length -1) esse substring que vai remover um numero por vez no indice 0, do tamanho total do resultado e o -1 para remover um digito.

//LINHA 15 - o sinal de = vai ser chamado calcular() e vai conter um if para validar se tem resultado para ser calculado ou não.

//LINHA 18 - EVAL() é um recurso incrivel do javascript que já vai identificar todas as operacoes que estão dentro do seu parametro que é resultado EVAL(RESULTADO).