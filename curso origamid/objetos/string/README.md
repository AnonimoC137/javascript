# string #

É a cnostrutora de strings, toda string possui as propriedades e métodos do prototype de String

```bash
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new Strig(2018);
```

# str.length #

Propriedade com o total de caracteres da string

@exemplo
```bash
const comida = 'Pizza';
const frase = 'A melhor pizza';

comida.length; // 5
frase.length // 15

comida[0] // P
frase[0] // A
frase[frase.length -1] // a
```

# str.charAt(n) #

Retorna o caracter de acordo com o index de (n)

@exemplo
```bash
const linguagem = 'JavaScrip';

linguagem.charAt(0) // J
linguagem.charAt(2) // v
linguagem.charAt(linguagem.length - 1); // t
``` 

# str.concat(str2, str3, ...) #

Concatena as strings e retorna o resultado.

@exemplo
```bash
const frase = 'Aa melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta  = frase.concat(linguagem, '!!');
```

# str.includes(search, position) #

Procura pelo string exata dentro de outra string. A procura é case sensitive OU SEJA se a busca for por uma palavra com letra maiuscula a palavra tem que conter letra maiuscula, se não da erro.

@exemplo
```bash
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false
```

# str.endsWith(search) e str.startsWith(search) #

Procura pela string exata dentro de outra string. A procura é casa sensitive

OBS: esse método é para achar strings que começam com.. ou terminam com..

@exemplo
```bash
const fruta = 'Banana';

fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na');

```

# str.slice(start, end) #

Corta a string de acordo com os valores de star e end

@exemplo
```bash
const transacao1 = 'Deposito de cliente';
const transacao2 = 'Deposito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // dep
transacao2.slice(0, 3); // dep
transacao3.slice(0, 3); // tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi
```

# str.substring(start, end) #

Corta a string de acordo com os valores de start e end. não funciona com valores negativos como .slice

@exemplo
```bash
const linguagem = 'JavaScript';

linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript
```

# str.indexOf(search) e str.lastIndexOf(search) #

Retorna o indx da string, assim que achar o primeiro resultado ele hjá retorna. No caso do lastIndexOf ele retorna o último resultado.

@exemplo
```bash
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3
```

# str.padStart(n, str) e str.padEnd(n, str) #

Aumenta o tamanho da string para o valor de n . Ou seja, uma string com 8 caracteres, se passarmos n= 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

```bash
const listaPreco = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPreco. forEach((preco) => {
    console.log(preco.padStart(10, '.'))
});

listaPreco[0].padStart(10, '.'); // .....R$ 99
listaPreco[0].padEnd(10, '.'); // R$ 99.....
``` 

# str.repeat(n) #

Repete a string (n) vezes.

```bash
const frase = 'Ta';

frase.repeat(5); // TaTaTaTaTa
```

# str.replace(regexp|substr, newstr|function) #

Troca a parte da stringpor outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele ira trocar apenas o primeiro valor que encontrar.

```bash

listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
```

# str.split(padrao) #

Divide a string de acordo com o padrao passado e retorna uma array.

OBS: join é um método de array.
OBS: o valor que for passado nesse metodo vai ser removido do resultado final por exemplo se colocar uma virgula dentro do split, ele vai retornar um array sem as virgulas. entao cuidado com que for colocar.

@exemplo 
```bash
const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

const htmlText = '<div> O melhor item</div><div> A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

```

# str.toLowerCase() e str.toUpperCase() #

Retorna a string em letras maiusculas ou minusculas. Bom para verificarmos input de usuario.]

@exemplo
```bash
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';


(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

```

# str.trim() str.trimStart() str.trimEnd() #

Remove espaços em branco do inicio ou final de uma string.

```bash
const valor = '  R$ 23,00  '
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00  '
valor.trimEnd(); // '  R$ 23.00'
```









