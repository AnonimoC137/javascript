# async / await #

A palavra chave async indica a função possui partes assincronas e que voce pretende esperar a resolução da mesma antes de continuar. O await ira indicar a promise que devemos esperar. Faz parte do ES8.

@exemplo
```bash
async function puxarDados() {
    const dadosResponse = await fetch('.dados.json');
    const dadosJSON = await dadosResponse.json();

    document.body.innerText = dadosJSON.titulo;
}

puxarDados()
```

# then / async #

A diferença é uma sintaxe mais limpa 

@exemplo 
```bash
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
```
# try / catch #

Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

@exemplo
```bash
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
```

#  iniciar Fetch ao mesmo tempo #

Não precisamos esperar um fetch para começarmos outro. Porem precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.

@exemplo
```bash
async function iniciarAsync() {
    const dadosResponse = await fetch('./dados.json');
    const clientesResponse = await fetch('./clientes.json');

    //ele espera o que está dentro da expressao () ocorre primeiro

    const dadosJSON = await (await dadosResponse).json();
    const clientesJSON = await (await clientesResponse).json();
}

iniciarAsync() 
```

# Promise #

O resultado da expressão á frente de await tem que ser uma promise. E o retorno do wait será sempre o resultado desta promise.

@exemplo
```bash
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
```
