//selecione cada curso e retorne uma array
//com objetos contendo o titulo, descrição
//aulas e horas de cada curso

const sections = document.querySelectorAll('.curso');

const newArray = Array.from(sections);

const sectionCursos = newArray.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
});
console.log(sectionCursos);

//retorne uma lista com os 
//numeros maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33];

const newNumeros = numeros.filter((item) => {
    return item > 100
});

console.log(newNumeros);

//verifique se baixo faz parte
//da lista de instrumentos e retorne true

const instrumentos = ['guitarra', 'baixo', 'bateria', 'teclado'];

const newInstrumentos = instrumentos.some((item) =>{
    return item === 'baixo'
});

console.log(newInstrumentos);

//retorne o valor total das compras

const compras = [
    {
        item: 'banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'queijo',
        preco: 'R$ 10,60'
    },
]

const newCompras = compras.reduce((acumulador, item) => {
     const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
     return acumulador + precoLimpo;
}, 0);

console.log(newCompras);




