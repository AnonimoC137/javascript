# native, host e user #
# native #

Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host

@exemplo
```bash
# construtores de objetos nativos
Obeject
String
Array
Function
```

# Host #

Objetos do host são aquels implementados pelo próprio ambiente por exemplo no browser possuimos objetos do DOM, como DomList, HMLCollection e outros. Em Node.js os objetos do Host sãop diferentes, já que não estamos em um ambiente do browser.

@exemplo
```bash
# Objetos do Browser
NodeList
HTMLColection
Element
```

# user #

Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, objeto que voce criar ou que importar de alguma biblioteca externa.

@exemplo
```bash
const Pessoa = {
    nome: 'Andre';
}
```
# verificar se existe #

O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefinid quer dizer que existe.

@exemplo
```bash
if (typeof Araay.from !== 'undefined');
if (typeof NodeList !== 'indefined');
```



