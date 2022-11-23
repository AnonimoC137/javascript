function espera(texto) {
    console.log('passou 0');
}

setTimeout(() => {
    console.log('testando')
}, 1000);

for(let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i)
    }, 300);
}

const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick(event) {
    setTimeout(function() {
        this.classList.add('active');
    }, 1000);
}


function loop(texto) {
    console.log(texto)
}

setInterval(loop, 1000, 'passou 1s');

//exemplo

let i = 0;
setInterval(() => {
    console.log(i++)
}, 1000);


//exemplo
const contarAte10 = setInterval(callback, 1000);

/*let i = 0;
function callback() {
    console.log(i++);
    if (i > 10) {
        clearInterval(contarAte10);
    }
}*/


//um dos exemplos
/*let i = 0;
const meuLoop = setInterval(() => {
    console.log(i++)
    if(i > 20) {
        clearInterval(meuLoop)
    }
}, 1000);*/