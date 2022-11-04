//crie uma funão que verifique
//corretamente o tipo de dado
const lista = ['caneta', 'lapis', 'borracha']

function verifica(dado) {
    return Object.prototype.toString.call(dado);
}

console.log(verifica(lista));





// crie um objeto quedrado com 
//a propriedade lados e torne
//ele imutavel

const quadrado = {}
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
    }
});

console.log(quadrado);

//previna qualquer mudança
//no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    backgroud: '#333'
}

Object.freeze(configuracao);

//liste o nome de todos
//as propriedades do
//prototipo de string e array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));