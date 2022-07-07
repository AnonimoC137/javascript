let N = parseInt(prompt());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = prompt();
    jogador2 = prompt();
    		
//TODO: Complete os espaços em branco com uma possível solução para o desafio

    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE") {
        print("Aniquilacao mutua");
    } else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL") {
        print("Ambos venceram");
    } else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA" ) {
        print("Jogador 1 venceu");
    } else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") {
        alert("Jogador 2 venceu");
    } else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL" ) {
        print("Jogador 1 venceu");
    } else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA" ) {
        print("Jogador 2 venceu");
    } else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL" ) {
        print("Jogador 1 venceu");
    } else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE" ) {
        print("Jogador 2 venceu");
    } else {
        print("Sem ganhador");  
    }  
}
if (n <= 10000;        ) 
print(     ); 
else 
print(     );
    