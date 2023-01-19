const grid = document.querySelector('.grid');

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


//funcao que cria os cards
//dentro dela tem o codigo para as imagens aleatorias
const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${character}.png')`;

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

loadGame()


