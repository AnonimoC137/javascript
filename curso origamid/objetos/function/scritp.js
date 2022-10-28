//Retorne a soma total de caracteres dos
//paragrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');


const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);

//crie uma função que retorne novos elementos
//html, com os seguintes parametros
//tag, classes e conteudo

function criarElementos(tag, classe, conteudo) {
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    conteudo ? element.innerHTML = conteudo : null;
    return element;
}

console.log(criarElementos('li', 'azul', 'esse é o conteudo'));

//crie uma nova função utilizando a anterior como base
//essa nova função deverá sempre criar h1 com a classe titulo. porem o parametro conteudo continuara dinamico

const h1Titulo = criarElementos.bind(null, 'h1', 'titulo');

console.log(h1Titulo('esse e meu novo texto'));


// *denovo esse null é porque a function anterior não tem nenhuma const guardando. 
//ela por isso nao pode ser puxada, o nome que invoca ele no caso criarElementos 
//e usada no caminho para acessar ela.


