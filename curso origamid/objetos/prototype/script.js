//Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
         console.log(nome + ' andou');
    }
}

//crie 3 pessoas, joão - 20 anos,
//Maria - 25 anos, Bruno - 15anos

const pessoa1 = new Pessoa('joão', 20);


const pessoa2 = new Pessoa('Maria', 25);


const pessoa3 = new Pessoa('Bruno', 15);


//crie uma Constructor Function (Dom) para manipulação
//de listas de elementos do dom. Deve conter as seguites
//propriedades e métodos:

//elements, retorna NodeList com os elementos selecionados
//addClass(classe), e removeClass(classe) 

function Dom(seletor) {
    const elementsList = document.querySelectorAll(seletor);
    this.elements = elementsList;
    console.log(elementsList);
    this.addClass = function(classe) {
        elementsList.forEach((element) => {
            element.classList.add(classe)
        });
    }
    this.removeClass = function(classe) {
        elementsList.forEach((element) => {
            element.classList.remove(classe);
        });
    }
}

const listaItens = new Dom('li');

listaItens.addClass('ativar');