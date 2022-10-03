//mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
    console.log(item);
});

//mostre o texto dos paragrafos no console

paragrafos.forEach((item) => {
    console.log(item.innerHTML);
});

