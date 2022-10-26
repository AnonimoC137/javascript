// remova o primeiro valor de comidas e coloque em uma variavel
// remova o ultimo valor de comidas e coloque em uma variavel
// adicione 'arroz' ao final da array
// adicione 'peixe' e 'batata' ao inicio da array
const comidas = ['pizza', 'frango', 'carne', 'macarrão'];

const primeiraComida = comidas.shift()
const ultimaComida = comidas.pop()

comidas.push('arroz');
comidas.unshift('peixe', 'batata');


console.log(primeiraComida);
console.log(ultimaComida);
console.log(comidas);


// Arrume os estudantes em ordem alfabetica
// Inverta a ordem dos estudantes
// Verifique se joana faz parte dos estudantes
//verifique se juliana faz parte dos estudantes
const estudantes = ['marcio', 'brenda', 'joana', 'kleber', 'julia'];
estudantes.sort();
estudantes.reverse();

console.log(estudantes);
console.log(estudantes.includes('joana'));
console.log(estudantes.includes('juliana'));



//substitua section por ul e div por li
let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
              <section>`

  html = html.split('section');
  html = html.join('ul');
  html = html.split('div');
  html = html.join('li');
   

console.log(html);

//remova o ultimo carro, mas antes de remover
//salve a array original em outra variavel

const carros = ['ford', 'fiat', 'vw', 'honda'];

const cloneCarros= carros.slice();

carros.pop()

console.log(carros);
console.log(cloneCarros);



