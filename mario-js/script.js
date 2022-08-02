const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);



document.addEventListener('keydown', jump);






















//LINHA- add a const para o mario

//LINHA- criada uma arrow para add a class jump no mario para fazer ele pular .

//LINHA- evento keydown acontece quando a tecla épressionada e continua acontecendo enquanto mantiver ela pressionada.

//LINHA- const jump vai ser add o setTimeout com uma função anonima e um time, que vai servir para add dentro dele a expressão para remover a class jump do elemento mario.

//LINHA- add const loop com o setInterval usado em um proj. anterior, sendo passado dois parametros (função, tempo) ela vai ficar constantemente sendo chamada para verificar se o mario bateu no tubo.

//LINHA- criada a const pipePosition para pegar a posição do tubo o offsetleft pega isso.

//LINHA- criada a const marioPosition para pegar a poisição do mario, porem não pode existe offserBottom então vamos usar o +window.getComputedStyle(mario).bottom.replace('px', '') para pegar a posição do mario, o replace('px', '') reconfigura os valores recebidos pois a posição do mario em exemplo 180px e precisamos somente de numero por isso dentro do replace tem um '' vazio para passar somente os numeros. 

//LINHA- criado um if para quando o tubo bater no mario ele parar, o style.animation (none) desativa a animação, o style.left com ${} uma o a const pipePosition para manter o tubo no local onde ele parou sem desaparecer.

//LINHA- mesmo if do tubo faz remover a animação do mario e onde ele bater no tubo ele fica, sem voltar ao chao novamente, alem de fazer a troca da imagem gif pela de game over, foi diminuida o tamanho da imagem no proprio js e a margem entre mario e o tubo. 

//LINHA- clearInterval(loop) serve para parar o loop quando o mario bater.



