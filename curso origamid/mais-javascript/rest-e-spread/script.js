// reescreva a função utilizando
//valores iniciais de parametros com ES6

function createButton(background = 'blue', color = 'red') {
    
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color
    return buttonElement;
}

const redButton = createButton();


//Utilize o metodo push para iserir as frutas ao final de comidas.

const frutas = ['banana', 'uva', 'morango'];
const comidas = ['pizza', 'batata'];

comidas.push(...frutas);