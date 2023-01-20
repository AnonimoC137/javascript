# Relembrando parametros #

Nem todos os parametros que definimos sao utilizados quando uma função é executada, devido a falta de argumento. Por isso é importante nos preocuparmos para caso estes argumentos não sejam declarados.

@exemplo
```bash
function perimetroForma(lado, totalLados) {
  return lado * totalLados;
}

perimetroForma(10, 4); // 40
perimetroForma(10); // NaN
```

# Parametro Padrao(Default) ES5 #

Antes do ES6 a forma de definirmos um valor padrao para um parametro, era atraves de uma expressao.

@exemplo
```bash
function perimetroForma(lado, toltalLados) {
  totalLados = totalLados || 4; // se não for definido, sera igual a 4

  return lado * totalLados;
}

perimetroForma(10, 3); // 30
perimetroForma(10); // 40
```

# Arguments #

A palavra chave arguments é um objeto Array-like criado dentro de função. Esse objeto contem os valores dos argumentos.

OBS:  ele não deixou claro, mas o novo jeito de definirmos o valor padrao para o parametro esta aqui nesse exemplo abaixo, alem disso o arguments pega todos os demais valores passados como parametro, caso isso nao tenha ficado claro.

@exemplo
```bash
function perimetroForma(lado, totalLados = 4) {
  console.log(arguments);
  return lado * totalLados;
}

perimetroForma(10);
perimetroForma(10, 4, 20);
```

# Parametro Rest #

É possivel declaramos um parametro utilizando ... na frente do mesmo. Asiim todos os argumentos que passarmos na ativação da função, ficarão dentro do parametro.

@exemplo
```bash
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

anunciarGanhadores('pedro', 'marta', 'maria');
```

# Rest vs Arguments #

Apesar de parecidos o parametro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.

@exemplo
```bash
function anunciarGanhadores(premio, ...ganhadores) {
  console.log(ganhadores);
  console.log(arguments);
}

anunciarGanhadores('carro', 'pedro', 'marta', 'maria');
```

# Operador Spread #

Assim como o rest, o operador Spread tambem utiliza os ... para ser ativado. O spread ira distribuir um item iteravel, um por um.

OBS: usei esse metodo lá no jogo da memoria do rick e morty.

@exemplo
```bash
const frutas = ['banana', 'uva', 'morango'];
const legumes = ['cenoura', 'batata'];

const comidas = [...frutas, 'pizza', ...legumes];
```

# a
