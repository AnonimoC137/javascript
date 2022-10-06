//quando o usuário clicar nos links internos do site
//adicione a classe ativo ao item clicado e remova dos
//demais itens caso eles possuam a mesma. previna
//o comportamento padrão desses links
//@@@@CODIGO IMPORTANTE ESSE@@@@@

const linksInternos = document.querySelectorAll('a');

function handleLink(e) {
    e.preventDefault();
    //forEach para fazer um loop de verif. para remov. os class 'ativo'
    linksInternos.forEach((links) => {
        links.classList.remove('ativo');
    });
    //(ou) e.currentTarget.classList.add('ativo');
    // this funciona melhor mas é mesma coisa
    this.classList.add('ativo');
    console.log(e);
}

linksInternos.forEach((e) => {
    e.addEventListener('click', handleLink);
});



//selecione todos os elementos do site começando a partir do body,
//ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(e) {
    //console.log(e.target);
}

todosElementos.forEach((e) => {
    e.addEventListener('click', handleElemento);
});

//utilizando o codigo anterior, ao inves de mostrar no console
//remova o elemento que está sendo clicado

const todoElementos = document.querySelectorAll('body *');

function handleElemento(e) {
    e.target.remove();
}

todoElementos.forEach((e) => {
    e.addEventListener('click', handleElemento);
});

//se o usuario clicar na tecla T, aumente o texto de todo site

const texto = document.querySelectorAll('h1, h2, p');

function mudaTexto(e) {
    if (e.key === 't') {
        texto.forEach((elements) => {
            elements.classList.toggle('big');
        });
    }
}

window.addEventListener('keydown', mudaTexto);





