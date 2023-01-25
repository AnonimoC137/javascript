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


