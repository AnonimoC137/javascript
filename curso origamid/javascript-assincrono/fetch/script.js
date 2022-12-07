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