const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'summer',
    'meeseeks',
    'scroopy',
    'rick',
];


//funcao que facilita a criacao de tag e class
//dos cards
const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabens ${spanPlayer.innerHTML}! seu tempo foi ${timer.innerHTML}`);
    }
}

//funcao que compara os atributos
//no final zera a first e a second para poder
//escolher mais duas cards
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter == secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');//add no primeiro filho de card
        secondCard.firstChild.classList.add('disabled-card');//add no primeiro filho de card

        firstCard = '';
        secondCard = ''; //para continuar escolhendo mais duas cards

        checkEndGame()
    } else {

        setTimeout(() => {
            firstCard.classList.remove('revelar-card');
            secondCard.classList.remove('revelar-card');
            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

//parentNode para puxar o 'pai' que é o card
//pois estava puxando o 'back' propriedade filho 
//e add a class de virar o card
//se ja estiver virada nao faz nada
//criada as duas condicoes para comparar os cads
const revelarCard = ({target}) => {
    if(target.parentNode.className.includes('revelar-card')) {
        return;
    }

    if(firstCard == '') {
        target.parentNode.classList.add('revelar-card');
        firstCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('revelar-card');
        secondCard = target.parentNode;
    }

    checkCards();
    
}

//funcao que cria os cards
//dentro dela tem o codigo para as imagens aleatorias
//colocado proprie para inserir atributos
//aos cads com data-character
const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${character}.png')`;

    card.addEventListener('click', revelarCard);
    card.setAttribute('data-character', character)

    card.appendChild(front);
    card.appendChild(back);

    return card;

}

//funcao que carrega o jogo 
//ela tbm add o card ao grid
//coloca cada personagem do array da funcao
//de criar card
//foi criado um array duplicado do original
//contendo dois do mesmo para os cards duplicarem
const loadGame = () => {
    const arrayDuplicado = [...characters, ...characters];
    const misturaArray = arrayDuplicado.sort(() => Math.random() - 0.5);
    misturaArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card)
    });
}

//inicia o relogio
const startTimer = () => {
    this.loop = setInterval(() => {
        const tempoAtual = +timer.innerHTML
        const contagem = tempoAtual + 1
        timer.innerHTML = contagem
    }, 1000)
}


//primeiro vai busca o nome do player
//e carrega o nome no local definido
//depois que a janela do window for carregada
//o load do jogo vai carregar e iniciar o game
window.onload = () => {
    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;
    loadGame()
    startTimer()
}



