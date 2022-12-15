const doc = fetch('./doc.txt');

doc.then(resolucao => {
    return resolucao.text();
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
});

const styleElement = document.createElement('style');

fetch('./style.css')
.then(response => response.text())
.then(style => {
  styleElement.innerHTML = style;
  document.body.appendChild(styleElement);
});


const div = document.createElement('div');

fetch('./imagem.png')
.then(response => response.blob())
.then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob);
  console.log(blobUrl)
});

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

const div2 = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
response.headers.forEach(console.log)
});

const div3 = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('pagina nao encontrada');
  }
});
