# Regexr #

https://regexr.com

# Regular expression #

Regexp ou Regex são expressões utilizadas para realizamos buscas / substituições de prdrões em strings. Os padrões devem ser colocados entre //. Geralmnete vamos utiliza-las nos métodos .replace() e .split()

@exemplo
```bash
// Procura : a

const padraoRegexp = /j/;

const texto = 'Javascript';
const novoTexto = texto.replace(padraoRegexp, 'b');

//Bavascript
```

# Literal #

Utilizar um caracter literal ira realizar uma busca especifica deste caracter.

@exemplo
```bash
// Procurar: J seguido de a, v , a

const regexp = /Java/;

'Javascript'.replace(regex, 'type');

//typescript
```

# Flag: G #

As flags irao modificar como a expressao e interpretada. Uma das mais utilizadas é a G, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padraoi e nao apenas o primeiro. A flag deve ser colocada no final da expressao.

@exemplo
```bash
// Procurar: Todo a

const regexp = /a/g;

'Javascript'.replace(regexp, 'i');

//jiviscript
```

# Flag: I #

Com o i informamos que devem ser ignorados as diferenças entre maiusculas e minusculas. Isso significa que /a/ ira buscar por a, A.

@exemplo
```bash
// Procura: Todo PE, pe, pE, pe

const regexp = /Pe/gi;

'Perdeu perdido'.replace(regexp, 'ba');

//bardeu bardido
```

# Character Class #

Se colocamos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ ira por A ou por B.

@exemplo
```bash
// Procura: todo a, A, I, i

const regexp = /[ai]/gi;

'Javascript'.replace(regexp, 'u');

//juvuscrupt
```

# Character CLass e especiais #

Podemos utilizar caracteres que não são alfabeticos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

@exemplo
```bash
// Porcura: - ou .

const regexp = /[-.]/g;

'111.222-333-44'.replace(regexp, '');

//11122233344
```

# De A-Z #

o traço - dentro de [] pode servir para definirmos um alcance. [A-Z] ira buscar os caracteres de a À z. [0-9] busca de 0 À 9. A tabela UNICODE é utilizada como referencia para definir os caracteres dentro do alcance.

@exemplo
```bash
// Busca por itens de a À z

const regexp = /[a-z]/g;

'JavaScript é a linguagem'.replace(regexp, '0');

//j000s00000 é 0 000000000


//Busca por itens de a À z , A à Z

const regexp = /[a-zA-Z]/g;

'JavaScript é a linguagem'.replace(regexp, '1');

//1111111111 é 1 111111111


// Buscar ppor numeros de 0 à 9;

const regexp = /[0-9]/g

'123.333.333-33'.replace(regexp, 'X');

// XXX.XXX.XXX-XX
```

# Negar #

Utilindo o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]

@exemplo
```bash
// Procura: tudo que não estiver entre a-z

const regexp = /[^a-z]/g

'Brasil é com z: Brazil'.replace(regexp, '  ');

//B    é   : B    
```

# Ponto #

O ponto . ira selecionar qualquer caracter, menos quebras de linha.

OBS: nesse caso ele vai selecionar todos os caracteres.

@exemplo
```bash
// Procura: todos os caracteres menos quebra de linha

const regexp = /./g;

'Javascript é a linguagem'.replace(regexp, '0');

//00000000000000000
```

# Escapar Especiais #

Caracteres especiais como o ponto . podem ser escapados utilizando a barra \, assim este nao tera mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?$\.[]{}()|/

@exemplo
```bash
// Procura: todos os pontos

const regexp = /\./g;
const regexpAlternativa = /[.]/g;

'999.222.222.11'.replace(regexp, '-');

//999-222-222-11
```

# Word #

O \w ira selecionar qualquer caracter alfanumerico e o underline. É a mesma coisa que [A-Za-z0-9_].

@exemplo
```bash
//Procura: todos os alfanumericos

const regexp = /\w/g;

'Guarda-chuva R$ 23,00.'.replace(regexp, '-');

//--------- -$ --,--.
```

# Not Word #

O \W ira selecionar tudo o que nao for caracter alfanumerico e o underline. E a mesma coisa que [^A-Za-z0-9_].

Obs: nesse modo ele vai selecionar os espaços em branco tambem.

@exemplo
```bash
// Porcurar: o que nao for caracter alfanumerico

const regexp = /\W/g;

'Guarda-chuva R$ 23,00.'.replace(regexp, '-');

//Guarda-chuva-R--23-00-
```
# Digit #

O \d ira selecionar qualquer digito. E a mesma coisa que [0-9].

@exemplo
```bash
// Porcurar: todos os digitos

const regexp = /\d/g;

'+55 (21) 2222-2222.'.replace(regexp, 'X');

//+XX (XX) XXXX-XXXX.
```

# Quantificador #

É possivel selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não por carater.

@exemplo
```bash
//Procurar: 4 a seguidos

const regexp = /a{4}/g;

'Vaaaai ali por favor.'replace(regexp, 'a');

//vai ali por favor.
```

# Quantificador Min e Max #

Podemos informar o Min e Max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ ira selecionar quando se repetir duas ou mais vezes.

obs: IMPORTANTE lembrar que quando colocado um min por exemplo 2, quando o criterio e atendido e o item for selecionado, na hora de substituir a seleção de varias caracteres juntos vai ser como se fosse um só. isso vale para o metodo de + e de * logo abaixo.

@exemplo
```bash
//Procura: digitos seguidos de 2 a 3

const regexp = /\d{2,3}/g;

'222.333.222.42'.replace(regexp, 'X');

//X.X.X.X

//Procura: letras seguidas com 1 caracter ou mais

const regexpLetras = /\w{1,}/g

'A melhor linguagem é JavaScript'.replace(regexpLetras, 'X');

//X X X é X
```

# Mais + #

O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrencias.

@exemplo
```bash
//Procurar: digitos em ocorrencia de um ou mais

const regexp = /\d+/

'222.333.222.42'.replace(regexp, 'X');

// X.X.X.X

//Procurar: Começa com d,  seguido por uma ou mais letras

const regexp = /d\w+/g;

'Digitos, dados, desenhos, Dito, d'.replace(regexp, 'X');

// Digitos, X, X, Dito, d
```

# Asterisco * #

O sinal * significa que devemos selecionar quando existe 0 ou mais ocorrencias.

@exemplo
```bash
//Procura: começa com d, seguido por zero ou mais letras.

const regexp = /d\w*/g;

'Digitos, dados, desenhos, Dito, d'.replace(regexp, 'X');

//Digitos, X, X, Dito, X
```

# Opcional ? #

O sinal ? significa que o caracter é opcional, pode ou não existir.
fazendo com que no exemplo abaixo tanto a palavra regex como a regexp sejam selecionadas.

@exemplo
```bash
//Procura: Por regex com p opcional

const regex = /regexp?/g;

'Qual é o certo, regexp ou regex?'.replace(regex, 'Regular Expression');

//Qual é o certo, Regular Expression ou Regular Expression?
```




# Alternado | #

O sinal | ira selecionar um ou outro java|php.

Obs: caso ele acha as duas opções as duas vão ser selecionadas, independente da sua ordem na string. alem de tambem serem selecionadas como bloco sendo contabilizadas como uma unidade por isso no exemplo abaixo ela é substituidade apenas por 1 X.

@exemplo
```bash
//Procura: java ou php (case insensitive)

const regex = /java|php/gi;

'PHP e Java são linguagens diferentes'.replace(regex, 'X');

//X ou X são linguagens diferentes
```


# Word Boundary \b #



O sinal \b ira indicar que pretendemos fazer uma seleção que deve ter inicio e fim de nao caracteres \w.

@exemplo
```bash
Procurar: java (case insensitive)

const regex = /java/gi;

'Java não é JavaScript.'.replace(regex, 'X');

//X não é XScript

//Procura: java (case insensitive)

const regexBoundary = /\bjava\b/gi;

'Java não é JavaScript.'.replace(regex, 'X');

// X não é JavaScript.
```


