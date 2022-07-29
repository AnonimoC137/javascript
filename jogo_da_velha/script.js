const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const winningMessage = document.querySelector('[data-winning-message]');
const restartButton = document.querySelector('[data-restart-button]');

let isCircleTurn;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const startGame = () => {
    isCircleTurn = false;

    for (const cell of cellElements) {
        cell.classList.remove('circle');
        cell.classList.remove('x');
        cell.addEventListener('click', handleclick, {once: true});
    }

    

    removeClass();
    //remove a mensagem de ganhador
    winningMessage.classList.remove('show-winning-message');
}

const endGame = (isDraw) => {
    if(isDraw) {
        winningMessageTextElement.innerHTML = 'Empate!';
    } else {
        winningMessageTextElement.innerHTML = isCircleTurn ? 'Circulo vendeu!' : 'X venceu!';
    }
    winningMessage.classList.add('show-winning-message');

}

const checkForWin = (currentPlayer) => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        } );
    }) ;
       
}

const checkForDraw = () => {
    return [... cellElements].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('circle');
    })
}

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}

const removeClass = () => {
    board.classList.remove('circle');
    board.classList.remove('x');

    if(isCircleTurn) {
        board.classList.add('circle');
    } else {
        board.classList.add('x');
    }
}

const swapTurns = () => {
 isCircleTurn = !isCircleTurn;
 removeClass();
}

const handleclick = (e) => {
    //colocar a marca (X ou circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';

    placeMark(cell, classToAdd);
    //verificar por vitoria 
    //classToAdd poem o x ou circulo, e mostra quem ganho
    const isWin = checkForWin(classToAdd);
    const isDraw = checkForDraw();

    if (isWin) {
        endGame(false);
    } else if (isDraw) { //verifica por empate
        endGame(true);
    } else {
        swapTurns(); //mudar o simbolo
    }
    

    
    
    
}
startGame();
restartButton.addEventListener('click', startGame);






























//LINHA - const com querySelectorAll precisa ter [] com o nome de atributo para selecionar todos.

//LINHA - criada a const para a div da mensagem de ganhador e do paragrafo do ganhador.

//LINHA - variavel que guarda a informação se é a vez do circulo.

//LINHA -const winningCombinations guarda dentro de uma lista as listas de combinações de vitoria, como por exemplo 3 x um do lado do outro, iniciando sempre pelo indice 0.

//LINHA -const winningCombinations a logica por tras da validação é o some(combination) vai entrar nas combinações, e o every vai verificar combinação por combinação e identificar o jogador.

//LINHA -const startGame vai ser usada para iniciar o jogo implementando uma class de entrada, FOR OF para add em todos os elementos um eventlistener de click, chamando o handleclick, once:true para acontecer somente uma vez. (e) é o elemento da celula.

//LINHA -const checkForWin = (currentPlayer) vai checar o vencedor baseando-se no ultimo player a jogar.

//LINHA - const placeMark foi criada para deixar bem separado cara responsabilidade.

//LINHA -

//LINHA - criada a const de mudança de turno do x para o circulo e vise e versa

//LINHA - para remover do tabuleiro o circulo e o x.

//LINHA -criada um if de condição para ver se é a vez do circulo o x e add os mesmo em sua vez

//LINHA - e.target para apontar o cell para o elemento da celular.

//LINHA - classToAdd com a condição ternaria para que se true colocar circle se false colocar x

//LINHA - cell.classList.add(classToAdd) adiciona ao cell o classToAdd que criamos com a condição.

//LINHA -restartButton para criar um evento de quando clicar no botao de reiniciar chama o startgame para começar dnv.
