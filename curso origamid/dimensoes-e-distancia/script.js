//exemplo 1
const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

//exemplo 2

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;
console.log(h2Left);

//exemplo 3
const rect = primeiroH2.getBoundingClientRect();
console.log(rect.top);

//exemplo 4
console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
);

//exemplo 5
const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
    console.log('usuario mobile');
} else {
    console.log('usuario de pc');
}