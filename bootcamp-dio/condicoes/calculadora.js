function calculadora() {
    const operacao = Number(prompt('Digite o numero da operação\n1- soma(+)\n2- subtrair(-)\n3- multiplicar(*)\n4- divisãoReal(/)\n5- restoDaDivisão(%)\n6- potenciação(**)'));
    //verifica se é uma string ou maior que o numero 7
    if (!operacao || operacao >= 7) {
        alert('ERRO');
        calculadora();
    } else {
        //pede ao usuario dois valores para as operações
        let n1 = Number(prompt('Digite um valor:'));
        let n2 = Number(prompt('Digite outro valor:'));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }

        function subtrair() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }

        function multiplicar() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }

        function restoDaDivisao() {
            resultado = n1 % n2;
            alert(`${n1} % ${n2} = ${resultado}`)
            novaOperacao();
        }

        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} ** ${n2} = ${resultado}`)
            novaOperacao();
        }
        //depois de fazer os calculos pergunta se deseja fazer outra operação ou sair
        function novaOperacao() {
            let opcao = Number(prompt('Deseja fazer uma nova operação?\n1- sim\n2- não'));
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais');
            } else {
                alert('erro');
            }

        }

        
        //compara a opção que o usuario pediu e chama a funcao criada para os operadores, que estao logo acima
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtrair();
            
        } else if (operacao == 3) {
            multiplicar();
            
        } else if (operacao == 4) {
            divisaoReal();
            
        } else if (operacao == 5) {
            restoDaDivisao();
            
        } else if (operacao == 6) {
            potenciacao();
        }
            
            
        
    }
    

}
//inicializa o função principal
calculadora();