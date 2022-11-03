# object #

Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

@exemplo
```bash
const carro = {
  marca: 'ford',
  anos: 2018,
}

const pessoa = new Object({
  nome: 'andre',
  idade: 28,
});
```

# Métodos de object #

object.create(obj, defineProperties) retorna um novo objeto que terá como prototipo o objeto do primeiro argumento.

```bash
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = object.create(carro);
honda.init('honda').acelerar();
```

# object.assign() #

Object.assign(alvo, obj1, obj2) adicionaao alvo as propriedades e métodos enumeraveis dos demais objetos. O assign irá modificar o objeto alvo.

@exemplo
```bash
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  }
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);
```

# Object.defineProperties() #

Object.defineProperties(alvo, propriedades) adiciona ao alvo novoas propriedades. A diferença aqui é a possibilidade de serem definidas as caracteristicas dessas propriedades.

@exemplo
```bash
const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false // impede deletar e mudança de valor
    enumerable: true, // torna enumeravel
  },
  capacete: {
     value: true,
    configurable: true,
    enumerable: false, // impede a mudança de valor
  },
  
});
```

# get e set #

É  possivel definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos obj.propriedade = 'valor' a função de set é ativada.

@exemplo
```bash
const moto = {}
Objecto.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
    this._velocidade = 'velocidade' + valor;
  }
  },
  
})

moto.velocidade = 200;

```

# Object.getOwnPropertyDescriptors(obj) #

Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

OBS: muito bom para usar no console do navegador e no parametro colocar o que voce tem duvida para ver os métodos existentes.

@exemplo
```bash
Object.getOwnPropertyDescriptors(Array);
// lista com métodos e propriedades de Array

Object.getOwnPropertyDescriptors(Array.prototype);
//Lista com métodos e propriedades do prototipo de Array

Object.getOwnPropertyDescriptors(window, 'innerHeight');
//puxa de uma unica propriedade
```

# Object.keys(obj), Object.values(obj) Object.entries(obj) #

Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e unumeraveis do objeto.
Object.values(obj) retorna uma array com os valores do objeto.
Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

@exemplo
```bash
Objecto.keys(Array);
// [] vazia, pois não possui propriedades enumaraveis

const carro = {
  marca: 'ford',
  ano: 2018,
}

Object.keys(carro);
// ['marca', 'ano'];

Object.values(carro);
//['ford', 2018]

Object.entries(carro);
//[['marca', 'ford'], ['ano', 2018]]
```