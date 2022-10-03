// adicione a classe ativo a todos os itens do menu
const addClass = document.querySelectorAll('.menu a');

addClass.forEach((item) => {
    item.classList.add('ativo');
});

//Remova a classe ativo de todos os itens do menu e mantenha apenas do primeiro
addClass.forEach((item) => {
    item.classList.remove('ativo');
});

addClass[0].classList.add('ativo');

//verifique se as imagens possuem o atributo alt
const temAlt = document.querySelectorAll('img');

temAlt.forEach((img) => {
    const possuiAlt = img.hasAttribute('alt');
    console.log(possuiAlt);
});

//Modifique o href do link externo no menu 
const link = document.querySelector('a[href^="https"]');
link.setAttribute('href', 'https:www.google.com/');
console.log(link);



