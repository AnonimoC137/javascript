# API #

Application, Programming e Interface

em resumo quase toda resposta que voce vai receber de uma API vai ser dada em arquivo JSON.

algumas API vão ter acesso liberado para se utilizar, já outras vai precisar seguir o passo a passo na ducumentação da API para conseguirmos usa-la.

# HTTP #

HyperText Transfer Protocolo utilizado para enviarmos/recebermos arquivos e dados na web.

@exemplo
```bash
fetch('https://pokeapi.com/api/v2/pokemon/')
.then(r => r,json())
.then(pokemon => {
  console.log(pokemon);
});
```

# url e method #

Uma requisição HTTP  é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE e HEADER.

@exemplo
```bash
const url = 'https://jsonplaceholder.typicode.com/posts/';

const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '"aula": "Javascript"';
}

fetch(url, options)
.then(response => response.json())
.then(json => {
  console.log(json);
});

```

# method #

GET = Puxa informação, utilizado para pegar posts, usuarios e etc..

POST = Utilizado para criar posts, usuarios e etc...

PUT = Geralmente utilizado para atualizar informações.

DELETE = Deleta uma informação.

HEAD = Puxa apenas os headers.

# GET #

Get irá puxar as informações da URL. Não é necessario informar que o método é GET, pois este é padrão.

@exemplo
```bash
const
```