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
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))
```

# HEAD #

HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body.

@exemplo
```bash
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});
```

# HEADERS #

CACHE-CONTROL = Tempo que o arquivo deve ficar em cache em segundos. Ex:
 public, max-agr=3600

CONTENT-TYPE = Tipo de conteudo. Ex: text/html:  charset=-utf-8. Indicar o tipo de arquivo principalmente em métodos POST e PUT.

# CORS #

cROSS-oRIGIN rESOURCE sHARING, gerencia como deve ser o compartilhamento de recursos entre diferentes origens.

É definido no servidor se é permitido ou não acesso dos recursos através de scripts por outros sites. Utilizando o Acess-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possivel passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor Ele serve para dar certa proteção ao browser, mas não é inviolável.

@exemplo
```bash
const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const div = document.createElement('div');

fetch(url)
.then(r => r.text())
.then(r => {
  div.innerHTML = div
})
```