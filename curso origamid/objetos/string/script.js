//utilizando o fpreach na array abaixo,
//some os valores de taxa e os valores de recebimento
const transacoes = [
    {
        descricao: 'taxa do pao',
        valor: 'r$ 39',
    },
    {
        descricao: 'taxa do mercado',
        valor: 'r$ 129',
    },
    {
        descricao: 'recebimento de cliente',
        valor: 'r$ 99',
    },
    {
        descricao: 'taxa do banco',
        valor: 'r$ 129',
    },
    {
        descricao: 'recebimento de cliente',
        valor: 'r$ 49',
    },
];


let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('r$', ''); // + na frente de item para tornar um tipo numero
    
    if (item.descricao.slice(0, 4) === 'taxa') {
        taxaTotal = taxaTotal + numeroLimpo;
    } else {
        recebimentoTotal = recebimentoTotal + numeroLimpo;
    }
});
console.log(taxaTotal);
console.log(recebimentoTotal);


//retorne um array com a lista abaixo
const transportes = 'Carro;Aviao;Trem;Onibus;Bicicleta'

const novoArray = transportes.split(';');
console.log(novoArray);

//substitua todos os span's por a's

let html = `
<ul>
     <li><span>Sobre</span></li>
     <li><span>Sobre</span></li>
     <li><span>Sobre</span></li>
</ul>

`
html = html.split('span').join('a');

console.log(html)

//retorne o ultimo caracter da frase

const frase = 'melhor do ano!';
const fraseNova = frase.slice(-1);

console.log(fraseNova);

//retorne o total de taxas

const transacoes2 = ['Taxa do banco', '   TAXA DO PAO', '   taxa do mercado', 'deposito Bancario', 'TARIFA especial'];


let numeroDeTaxas = 0;
transacoes2.forEach((item) => {
    item = item.toLowerCase();
    item = item.slice(0, 4);
    item = item.trim();

    if (item === 'taxa') {
        numeroDeTaxas++
    }
});

console.log(transacoes2)
