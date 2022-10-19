function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function () {
    return 'pessoa andou'
}

const andre = new Pessoa('andre', 20);

//console.log(Pessoa.prototype);
//console.log(andre.prototype);


