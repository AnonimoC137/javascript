//Utilizando a API do viacep
//crie um formulario onde o usuario pode digitar o cep
//e o endereço completo e retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}

//Utilizando a API https://blockchain.info/ticker
//retorne no DOM o valor de compra da bitcoin em reais.
//atualize este valor a cada 30s.

const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace(',', '.');
  });

  
}

fetchBtc()

//Utilizando a API https://api.chucknorris.io/jokes/random
//retorne uma piada randomica do chucknorris, toda vez que 
//clicar em proxima

const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  });
}

btnProxima.addEventListener('click', puxarPiada);

puxarPiada();