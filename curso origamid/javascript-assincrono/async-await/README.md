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
