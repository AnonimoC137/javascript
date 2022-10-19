//Crie uma função construtora de pessoas
//Deve conter nome, sobrenome. e idade
//crie um método no protótipo que retorne
//o nome completo da pessoa

function Pessoa(nome, sobreNome, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade; 
    
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobreNome}` 
}

const andre = new Pessoa('andre', 'silva', 20);

//Lista os métodos acessados por
//dados criados com NodeList,
//HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

//Liste os construtores dos dados abaixo
const li = document.querySelector('li');

//nesse caso vai ser usado li.constructor.name 
//para saber o nome do construtor dele e assim usar
//no nome do construtor um .prototype para ver todas as
//propriedades e metodos disponiveis para o prototype

//o mesmo vale para todos os exemplos abaixo

li; // HTMLLIElement
li.click; // Function
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; //

