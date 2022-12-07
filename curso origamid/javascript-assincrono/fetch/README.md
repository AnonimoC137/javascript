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