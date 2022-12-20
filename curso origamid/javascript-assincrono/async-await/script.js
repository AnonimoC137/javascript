async function puxarDados() {
    const dadosResponse = await fetch('.dados.json');
    const dadosJSON = await dadosResponse.json();

    document.body.innerText = dadosJSON.titulo;
}

puxarDados()

function iniciarFetch() {
    fetch('./dados.json')
    .thien(dadosResponse => dadosResponse.json())
    .then(dadosJSON => {
        document.body.innerText = dadosJSON.titulo;
    })
}

iniciarFetch()

async function iniciarAsync() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText.titulo;
}

iniciarAsync() 


async function puxarDados() {
    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJSON = await dadosResponse.json();
        document.body.innerText.titulo;
    } catch(erro) {
        console.log(erro);
    }
}

puxarDados();

async function iniciarAsync() {
    const dadosResponse = await fetch('./dados.json');
    const clientesResponse = await fetch('./clientes.json');

    //ele espera o que está dentro da expressao () ocorre primeiro

    const dadosJSON = await (await dadosResponse).json();
    const clientesJSON = await (await clientesResponse).json();
}

iniciarAsync() 


async function asyncSemPromise() {
    //console não ira esperar
    await setTimeout(() => console.log('depois de 1s'), 1000);
    console.log('ACABOU');
}

asyncSemPromise()

async function iniciarAsync() {
    await new Promise(resolve => {
        setTimeout(() => resolve(), 1000)
    })
    console.log('depois de 1s')
}

iniciarAsync()