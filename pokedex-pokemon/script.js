const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {

    const apiResponse =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (apiResponse.status === 200) {
        const data = await apiResponse.json();
        return data;
    }
    
}

const renderPokemon = async (pokemon) => {
    
    pokemonName.innerHTML = 'loading...'

    const data = await fetchPokemon(pokemon);

        if (data) {
         pokemonImage.style.display = 'block';   
         pokemonName.innerHTML = data.name;
         pokemonNumber.innerHTML = data.id;
         pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
         input.value = '';
         searchPokemon = data.id;//para o botao acompanha a pesquisa manual da onde parou e não do 1.
        } else {
            pokemonImage.style.display = 'none';
            pokemonName.innerHTML = 'Não encontrado';
            pokemonNumber.innerHTML = '';
        }
}

form.addEventListener('submit',(event) => {

    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
    
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1 ) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);






//****INSTRUÇÕES PARA O USO DO CODIGO, LINHA A LINHA****



//LINHA - criado um let para passar como paramentro inicial para aparecer o primeiro pokemon na tele, como tbm para usar como incremento e decremento para os buttons.

//LINHA - criada const FETCHPOKEMON para procurar os dados dos pokemons na API, passando o valor async para virar uma fuinção assincrona para usar o WAIT  na const abaixo. 

//LINHA - criada const APIRESPONSE para capturar a resposta da API passando o paramentro pokemon dentro do ${}., mas o fetch não passa o resultado de imediato por isso vai ser usado o AWAIT para ele só passar o valor quando realmente estiver pronto

//LINHA - criado um IF APIRESPONSE.STATUS (STATUS) é muito importante para puxar realmente a informação para validar o resultado do input, alem de mexer no style colocando display block para a img voltar a aparecer depois de dar NÃO ENCONTRADO, quando é encontrado o pokemon na API o valor vem como 200 se o usuario digitar errado vem 404 erro, somente ira renderizar se a msg da API chegar como 200.

//LINHA - criada a const data para os dados, pegando a resposta da API, usando o metodo JSON para extrair os dados em JSON da resposta da API, usando um AWAIT tbm para esperar a resposta antes de envia-la, por fim um RETURN data para usar esses dados.  

//LINHA - criada const RENDERPOKEMON que vai renderizar os dados na tela da pokedex, recebendo o paramentro POKEMON,const DATA novamente para recuperar os dados passado na função anterior.

//LINHA - criado um IF para validar se, existir dados, mostrar nome, id e renderizar a IMG, caso contrario mensagem de não encontrado aparece e é alterado o style da IMG para ela não aparecer mais.

//LINHA - POKEMONNAME vai receber os dados do data.name para capturar somente o nome do pokemon nesse momento, mesma coisa para o pokemonNumber.

//LINHA - já o POKEMONIMAGE vai ser passado um SRC com o caminho completo dos arquivos da API COM [] PARA NÃO DAR ERRO, lembrando que tudo isso é para pegar as animações dos pokemons.

//LINHA - criado um evento em form do formulario, com submit, que é quando o form for enviado pelo usuario, passando o parametro (EVENT) para pegar o proprio evento

//LINHA - event.preventDefault() para prevenir comportamentos padrao do formulario no html, o renderPokemon(input.value.toLowerCase) vai receber o valor do que foi escrito no formulario para puxar na API e renderizar o pokemon e seus dados alem do TOLOWERCASE fazer qualquer palavra digitada pelo usuario ficar minuscula, INPUT.VALUE = '' para que quando pesquisado o item o campo limpe automatico.

//LINHA - criado o evento do botão PREV, com um IF para ver se o contador searchPokemon está igual ou maior que 2 para só ai ele poder voltar para o pokemon anterior com o codigo de decremento e invocando a função de renderizar no fim.

//LINHA - o botão NEXT é o mais simples apenas colocando o codigo de incremento no contador searchPokemon.



