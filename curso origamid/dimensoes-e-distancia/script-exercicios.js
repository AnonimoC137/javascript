//verifique a distancia da primeira imagem
//em relação ao topo da pagina

const primeiraImg = document.querySelector('.animais-lista img');

const imgDistancia = primeiraImg.offsetTop

console.log(imgDistancia);

//retorne a soma da largura de todas as imagens
function somaImagens() {
    const imgsAnimais = document.querySelectorAll('img');
    let soma = 0;

    imgsAnimais.forEach((imagem) => {
        soma = soma + imagem.width
    });
    console.log(soma);
}


//função onload criada como callback para pre-carregar as imgs do exercicio das imagens acima

window.onload = function() {
    somaImagens();
}


//verifique se os links da pagina possuem
//o minimo recomendado para telas utilizadas
//com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth > 48 && linkHeight > 48) {
        console.log(link, 'possui acessibilidade');
    } else {
        console.log(link, 'não possui acessibilidade');
    }
});

//se o browser for menor que 720px
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
} 
