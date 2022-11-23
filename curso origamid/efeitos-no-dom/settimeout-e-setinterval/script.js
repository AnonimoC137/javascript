//mude a cor da tela para azul e depois para vermelho a cada 2s
function mudarClasse() {
    //document.body.classList.toggle('active');
}

setInterval(mudarClasse, 2000);

//crie um cronometro utilizando o setInterval, deve ser possivel
//iniciar, pausar e resetar (duplo clique no pausar)
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');



iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);


let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++
    }, 100);
    /*serve para desativar o botao iniciar depois de clicado*/
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    /*serve para reabilitar o botão de iniciar*/
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}

