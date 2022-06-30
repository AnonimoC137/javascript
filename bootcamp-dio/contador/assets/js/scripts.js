let contador = document.getElementById("currentNumber");
let contar = 0;

function increment() {
    contar += 1;
    contador.innerHTML = contar;
}

function decrement() {
    contar -= 1;
    contador.innerHTML = contar;
}
