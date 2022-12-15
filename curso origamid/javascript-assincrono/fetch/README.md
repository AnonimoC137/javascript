# fetch API #

Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos entçao utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

@exemplo
```bash
fetch('./arquivo.txt').then((response) => {
  console.log(response); // Response HTTP (Objeto)
});
```

# Response #

O objeto Response, possui um corpo com o conteudo dsa resposta.Esse corpo pode ser transformado utilizando métodos do prototipo do objeto Response. Estes retornam outras promises.

OBS: os metodos abaixo vão ser metodos do response que esta ligado ainda ao fetch.

@exemplo
```bash
fetch('./arquivo.txt').then((response) => {
  return response.text();
}).then((corpo) => {
  console.log(corpo);
});

```

# .json() #

Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), oelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js, .json() transforma um corpo em json em um objeto JavaScript.

@exemplo
```bash
fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => response.json())
.then(cep => {
  console.log(cep.bairro, cep.logradouro);
})
```

# .text() #

Podemos utilizar o .text() para diferentes formatos como txt, json, html, js e mais.

@exemplo
```bash
const styleElement = document.createElement('style');

fetch('./style.css')
.then(response => response.text())
.then(style => {
  styleElement.innerHTML = style;
  document.body.appendChild(styleElement);
});
```

# HTML e .text() #

Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML, A partir dai podemos manipular esses dados como um DOM qualquer.

@exemplo
```bash
const div = document.createElement('div');

fetch('./sobre.html')
.then(response => response.text())
.then(htmlBody => {
  div.innerHTML = htmlBody;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
});
```

# .blob() #

Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transdormarmos requisições de imagens por exemplo. O blob gera um URL unico.

@exemplo
```bash
const div = document.createElement('div');

fetch('./imagem.png')
.then(response => response.blob())
.then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob);
  console.log(blobUrl)
});
```

# .clone() #

Ao utilizamos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso necessite transformar uma resposta em diferentes valores.

@exemplo
```bash
const div1 = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json)
  });
  cloneResponse.text().then(text => {
    console.log(text)
  });
});
```

# .headers #

É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.

@exemplo
```bash
const div2 = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
response.headers.forEach(console.log)
});
```
# .status e .ok #

Retorna o status da requisição. Se for 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

@exemplo
```bash
const div3 = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('pagina nao encontrada');
  }
});
```

# .url e .type #

.url retorna o url da requisição .type retorna o tipo da resposta.

@exemplo
```bash
const div3 = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.type, response.url);
});

//types
//basic: feito na mesma origem
//cors: feito em url body pode estar disponivel
//error: erro de conexçao
//opaque: no-cors, não permite acesso de outros sites
```