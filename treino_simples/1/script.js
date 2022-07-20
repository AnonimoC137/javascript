let primeiro = document.getElementById('primeiro');
let segundo = document.getElementById('segundo');
let terceiro = document.getElementById('terceiro');


primeiro.addEventListener('click', clicar);
segundo.addEventListener('click', pressionar);
terceiro.addEventListener('click', apertar);
primeiro.addEventListener('mouseout', remover);

function clicar() {
    primeiro.style.background = 'red'
}

function pressionar() {
    segundo.style.background = 'yellow'
}

function apertar() {
    terceiro.style.background = 'green'
}



function remover() {
    primeiro.style.backgroud = 'blueviolet'
}