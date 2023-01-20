//Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn); //nova tecnic para puxar os proprie

const {backgroundColor, margin, color} = btnStyles

console.log(backgroundColor);
console.log(margin);
console.log(color);

//Troque os valores das variaveis abaixo

let cursoAtivo = 'Javascript';
let cursoInativo = 'html';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

//Corrija o erro abaixo

const cachorro = {
    nome: 'bob',
    raca: 'labrador',
    cor: 'caramelo'
}

const {cor: bobCor} = cachorro;
