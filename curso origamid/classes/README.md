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

# Get e Set #

Podemos definir comportamentos diferentes de get e set para um método. 

@exemplo
```bash
const button = {
    get element() {
        return this._element;
    },
    set element(tipo) {
        this._element = document.Element(tipo)
    }
}

button.element = 'button'; //set
button.element; //get (<button></button>)
```

# Valor estatico #

Se definirmos apenas o get de um método, teremos entao um valor estatico que não será possivel mudarmos.

@exemplo
```bash
const matematica = {
    get PI() {
        return 3.14;
    }
}

matematica.PI // get (3.14)
matematica.PI = 20; // nada acontece
```

# Set #

Eu posso ter um método com o set, que modifique outras propriedades do meu objeto. 

@exemplo
```bash
const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

frutas.nova = 'banana'
frutas.nova = 'morango'
frutas.lista; // ['banana', 'morango']
```

# Class #

Assim como em um objeto, as classes podem ter métodos de get e set tambem. 

@exemplo
```bash
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
```

# Set e Class #

Com o set podemos modificar parte do elemento de get. É comum definirmos variaveis privadas, utilizando o underscore _privada.

@exemplo
````bash
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
````
# Subclasses #

É possivel criarmos uma subclasse, esta irá ter acesso aos métodos da classe a qual ela estendeu através do seu prototipo.

@exemplo
```bash
class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log('empinou com ' + this.rodas + ' rodas')
    }
}

const honda = new Moto(2);
honda.empinar();
```
