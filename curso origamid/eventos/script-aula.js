//exemplo 1
const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

img.addEventListener('click', callback);

//exemplo 2
const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}


//animaisLista.addEventListener('click', callbackLista);

//exemplo 3
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    //console.log(event);
    console.log(this); //mesma coisa que o console debaixo
    console.log(event.currentTarget); //mesma coisa que o this
}

linkExterno.addEventListener('click', handleLinkExterno);

//exemplo 4 
function handleKeyboard(event) {
    if (event.key === 'f') {
        document.body.classList.toggle('fullscreen')
    }
}

window.addEventListener('keydown', handleKeyboard);

//exemplo 5 forEach e eventos

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target);
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});



