//duplique o menu e adicione ele em copy
const copy = document.querySelector('.copy');
const menu = document.querySelector('.menu');

const novoMenu = menu.cloneNode(true);
copy.appendChild(novoMenu);







//selecione o primeiro dt da dl de faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt')
console.log(primeiroDt);





//selecione o dd referente ao primeiro dt
const primeiroDD  = primeiroDt.nextElementSibling;
console.log(primeiroDD);





//substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;






