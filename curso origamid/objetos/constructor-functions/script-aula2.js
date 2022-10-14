//const Dom = {
//    seletor: 'li',
//    element() {
//        return document.querySelector(this.seletor);
//    },
//    ativar() {
        // puxando o seletor pelo element() apontado pelo this
//        this.element().classList.add('ativar');
//    }
//}

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor);
    }
    this.ativar = function() {
        // puxando o seletor pelo element() apontado pelo this
        this.element().classList.add('ativar');
    }
}

const li = new Dom('li');
const ul = new Dom('ul');
