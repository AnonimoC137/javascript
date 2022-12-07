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