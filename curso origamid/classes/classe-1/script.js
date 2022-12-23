function GamepadButton(text, background) {
    this.text = text;
    this.background = background;
}

Button.prototype.element = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}

const bluueButton = new Button('comprar', 'blue');


class Button {
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;

        return buttonElement;
    }
}

const blueButton = new Button('comprar', 'blue');

class Button {
    constructor(propriedade) {
        this.propriedade = propriedade
    }
    metodo1() {}   
    metodo2() {}
}

function Button(propriedade) {
    this.propriedade = propriedade
}

Button.prototype.metodo1 = function() {}
Button.prototype.metodo2 = function() {}


class Button {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
}

const BlueeButton = new Button('clique', 'blue', 'white')
//Button {text: 'clique', background: 'blue', color: 'white'}

class Button {
    constructor(text) {
        this.text = text;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        return buttonElement;
    }
    appendElementTo(target) {
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
    }
}

class Button {
    constructor(options) {
        this.options = options
    }
}

const blueOptions = {
    backgroundColor: 'blue',
    color: 'white',
    text: 'clique',
    borderRadius: '4px',
}

const bluuueButton = new Button(blueOptions);

class Button {
    constructor(text) {
        this.text = text
    }
    static create(background) {
        const elementButton = document.createElement('button');
        elementButton.style.background = background;
        elementButton.innerText = 'clique';

        return elementButton;
    }
}

class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element() {
        const elementButton = document.createElement('button');
        elementButton.innerText = this.text;
        elementButton.style.background = this.background;

        return elementButton;
    }
    static createBlue(text) {
        return new Button(text, 'blue');
    }
}