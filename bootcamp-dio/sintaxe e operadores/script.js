function calcular() {
    let num1 = Number(prompt('Digite um número'));
    let num2 = Number(prompt('Digite um número'));
    let resultado = num1 + num2;

    if (num1 === num2 && resultado > 10 && resultado < 20) {
        alert(`a soma entre os números ${num1} e ${num2} é ${resultado}, os números são iguais, sendo o resultado > 10 e < 20`);
        novaOperacao();
    } else if (num1 != num2 && resultado > 10 && resultado < 20) {
        alert(`a soma entre os números ${num1} e ${num2} é ${resultado}, os números não são iguais, sendo o resultado > 10 e < 20`);
        novaOperacao();
    } else if (num1 != num2 && resultado > 10 && resultado > 20) {
        alert(`a soma entre os números ${num1} e ${num2} é ${resultado}, os números não são iguais, sendo o resultado > 10 e > 20`);
        novaOperacao();
    } else {
        alert(`a soma entre os números ${num1} e ${num2} é ${resultado}, os números não são iguais, sendo o resultado < 10 e < 20`);
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = Number(prompt('Deseja fazer uma nova operação?\n1- sim\n2- não'));
        if (opcao == 1) {
            calcular();
        } else if (opcao == 2) {
            alert('até mais');
        } else {
            alert('[ERRO]');
        }
    }

}

calcular();