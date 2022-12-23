// const button = {
//     get element() {
//         return this._element;
//     },
//     set element(tipo) {
//         this._element = document.Element(tipo)
//     }
// }

// button.element = 'button'; //set
// button.element; //get (<button></button>)

// const matematica = {
//     get PI() {
//         return 3.14;
//     }
// }

// matematica.PI // get (3.14)
// matematica.PI = 20; // nada acontece

const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

frutas.nova = 'banana'
frutas.nova = 'morango'
frutas.lista; // ['banana', 'morango']

class Button {
    constructor(text, color) {
        this.text = text
        this.color = color
    }
    get element() {
        const elementButton = document.createElement('button');
        elementButton.innerText = this.text;
        elementButton.style.color = this.color;
        

        return elementButton;
    }
}

const blueButton = new Button('comprar', 'blue');
blueButton.element; // retorna o element


class Button {
    constructor(text) {
        this.text = text
    }
    get element() {
        const elementType = this._elementType || 'button';
        const buttonElement = document.createElement(elementType);
        buttonElement.innerText = this.text
        return buttonElement;
    }
    set element(type) {
        this._elementType = type;
    }
}