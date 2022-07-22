let segundos = 0
let minutos = 0
let horas = 0

let interval

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return digit
    }
}

function start() {
    watch()
   interval = setInterval(watch, 1000)
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    segundos = 0
    minutos = 0
    document.getElementById('watch').innerHTML ='00:00:00'

}

function watch() {
    segundos++
    if(segundos === 60) {
        minutos++
        segundos = 0
        if (min === 60) {
            minutos = 0
            horas++
        }
    }
    document.getElementById('watch').innerHTML = twoDigits(horas)+':'+twoDigits(minutos)+':'+ twoDigits(segundos)
}
   









//LINHA 7/11- função que vai verificar o digito, no caso segundos/minutos/horas se for menor que 10 vai incluir um zero na frente para o cronometro ficar bonito.

//LINHA 16 - watch() no começo para clicar e ja iniciar a contagem imediatamente.

//LINHA 17- é uma função do javascript que fica chamando outra função a cada periodo de tempo, perfeita para ficar atualizando a contagem do cronometro, 1000 é 1 segundo. e a variavel interval esta a ela para ser usada no pause tbm.

//LINHA 21- clearInterval vai ser usado para parar o contador usando o interval que está constantemente chamando a função watch.

//LINHA 25/28 - usa o mesmo metodo do pause, mas tambem zera os minutos e segundos alem de de conectar o caminho do contador para o inner modificar para 00:00 novamente.

//LINHA 32- watch vai ser a função responsavel por quase toda logica do cronometro.

//LINHA 33- pega o valor armazenado na variavel segundos e add +1.

//LINHA 34/36- if para quando bater 60s add +1 ao minutos e zerar os segundos. 

//LINHA 37/39- mesma coisa do if anterior só que para zerar os minutos e add +1 as horas.

//LINHA 42- conecta o contador que inicia como 00:00:00 e vai mostrando o valor das horas, minutos e segundos(esta incluido a função twoDigits(horas) minutos ou segundos para que se esses numeros forem < 10 aparecer um zero na frente por questão de estetica).
