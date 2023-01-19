const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const handleInput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {// passado '' pois precisa de um segundo parametro obrigatorio
        button.setAttribute('disabled', '')
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    //serve para guardar o valor do input na chave player na memoria do browser
    localStorage.getItem('player', input.value);


    //serve para redirecionar o usuario para outra page
    // no caso a do game
    window.location = 'pages/game.html';
}

input.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);