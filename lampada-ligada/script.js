const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn() {
    lamp.src = 'imagens/ligada.jpg';
}

function lampOff() {
    lamp.src = 'imagens/desligada.jpg';
}

function lampBroken() {
    lamp.src = 'imagens/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);










//LINHA 1 E 2 - para puxar id's os botões de liga e desliga.
//LINHA 3 - para puxar o id da lampada  .
//LINHA 5 - função para trocar a imagem de lapada desl. para ligada.
//LINHA 9 - função para trocar a lampada de ligada para desligada.
//LINHA 13 - função para quebrar a lampada com dois clicks.
//LINHA 17 - conecta o botão ligar com o evento de click que contem a função de mudar a imagem para ligada.
//LINHA 18 - conecta o botão desligar com o evento de click que contem a função de mudar a imagem para desligar.
//LINHA 19 - conecta o id da lampada para o evento de passar o mouse até a função que faz a lampada ligar mudando a imagem.
//LINHA 20 - conecta o id da lampada para o evento de tirar o mouse até a função que faz a lampada desligar mudando a imagem.
//LINHA 21 - conecta o id da lampada para o evento de duplo click até a função que faz a lampada quebrar mudando a imagem.