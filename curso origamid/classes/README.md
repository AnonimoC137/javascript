# revendo Constructor Function #

Funções responsaveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes.

@exemplo
```bash
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

const blueButton = new Button('comprar', 'blue');
```

# Class #

O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos continua utilizando o sistema de prototipos de uma função construtora para criar a classe.

@exemplo
```bash
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
```

# Class vs Construtor Function #

@exemplo
```bash
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
```
# Constructor #

O metodo constructor(args) {} é um metodo especial de uma classe. Nele voce ira definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.

@exemplo
```bash
class Button {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
}

const BlueeButton = new Button('clique', 'blue', 'white')
//Button {text: 'clique', background: 'blue', color: 'white'}
```

# this #

Assim como em uma função construtora, this faz referencia ao objeto criado com new. Voce pode acessar as propriedades e metodos da classe utilizando o this.

@exemplo
```bash
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
```

# Propriedades #

Podemos passar qualquer valor dentro de uma propriedade.

@exemplo
```bash
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
```

# Static vs Prototipe #

Por padrao todos os metodos craidos dentro de classe irao para o prototipo da mesma. Porem podemos criar metodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um metodo de uma array e Array.from() é um metodo do construtor Array.

@exemplo
```bash
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

const blueButton = Button.create('blue');
```
# Static #

Voce pode utilizar o metodo static para retornar a propria classe com propriedades ja pre definidas.

@exemplo
```bash
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
```
