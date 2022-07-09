class contaBancaria {
    constructor(agencia, tipo, saldo, numero) {
        this.agencia = agencia;
        this.tipo = tipo;
        //usa o _saldo para poder manipular o nome no get e set
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'operação negada'
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}
//extends contaBancaria para usar o SUPER ára puxar os dados da classe pai para a filha
class contaCorrente extends contaBancaria {
    constructor (agencia, numero, saldo, cartaoCredito) {
        //pega as propriedades da classe pai logo acima para a que esta usando o super no caso essa.
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;

    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor (agencia, numero, saldo) {
        //pega as propriedades da classe pai logo acima para a que esta usando o super no caso essa.
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
        

    }

}  

class contaUniversitaria extends contaBancaria {
    constructor (agencia, numero, saldo) {
        //pega as propriedades da classe pai logo acima para a que esta usando o super no caso essa.
        super(agencia, numero, saldo);
        this.tipo = 'universitaria';
        

    }

    sacar(valor) {
        if(valor > 500) {
            return 'operação negada';
        }

        this._saldo = this._saldo - valor;
    }

}  