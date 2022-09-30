# classList #
Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contem.

@exemplo
```bash
# menu.className; // string
# menu.classList; // lista de classes
# menu.classList.add('ativo'); // adiciona uma classe
# menu.classList.add('ativo', 'mobile'); // adiciona duas classes
# menu.classList.remove('ativo'); // remove uma classe
# menu.classList.toggle('ativo'); // se já tem remove, se não tem adiciona
# menu.classList.contains('ativo'); // retorna true ou false podendo ser usado com if
# menu.classList.replace('ativo', 'inativo'); // substitui a primeira classe pela segunda

# menu.className = 'uma-classe-qualquer' // era assim que antigamente se add classes
```
//////////////////////////////////////////////////////////

# attributes #

Retorna uma array-like com os atributos do elemento

@exemplo
```bash
# const animais = document.querySelector('.animais');
# animais.attributes;  // retorna todos os atributos
# animais.attributes[0];  // retorna o primeiro atributo 
```










