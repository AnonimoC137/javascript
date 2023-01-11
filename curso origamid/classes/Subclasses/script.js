class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log('empinou com ' + this.rodas + ' rodas')
    }
}

const honda = new Moto(2);
honda.empinar();



class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    acelerar() {
        console.log('acelerou muito')
    }
}

const honda2 = new Moto(2);
honda.acelerar();