# classList #
Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contem.

@exemplo
```bash
 menu.className; // string
 menu.classList; // lista de classes
 menu.classList.add('ativo'); // adiciona uma classe
 menu.classList.add('ativo', 'mobile'); // adiciona duas classes
 menu.classList.remove('ativo'); // remove uma classe
 menu.classList.toggle('ativo'); // se já tem remove, se não tem adiciona
 menu.classList.contains('ativo'); // retorna true ou false podendo ser usado com if
 menu.classList.replace('ativo', 'inativo'); // substitui a primeira classe pela segunda

 menu.className = 'uma-classe-qualquer' // era assim que antigamente se add classes
```
# remove observação #

ele pode ser usado para remover elementos da pagina tbm, não somente para as classes,
nesse exemplo a const está selecionando tudo no site apartir do body, o e.target.remove() mostra o local exato do clique e remove o elemento.

@exemplo
```bash
const todoElementos = document.querySelectorAll('body *');

function handleElemento(e) {
    e.target.remove();
}

todoElementos.forEach((e) => {
    e.addEventListener('click', handleElemento);
});
```
# attributes #

Retorna uma array-like com os atributos do elemento

@exemplo
```bash
 const animais = document.querySelector('.animais');
 animais.attributes;  // retorna todos os atributos
 animais.attributes[0];  // retorna o primeiro atributo
 animais.attributes.id;  // podendo ter variações diversas como id, class e outros 
 animais.attributes['data-texto'];  // data-texto e um tipo de dado tbm
```

//////////////////////////////////////////////////////////////

# getAttribute e setAttribute #

(VAI SER OS DOIS METODOS MAIS USADOS)
Metodos que retornam ou definem de acordo com o atributo selecionado

OBS: o getAttribute MOSTRA varios atributos, src, alt e outros
OBS: o setAttribute MUDA/ADICIONA atributos, src, alt, e outros

@exemplo
```bash
 const img = document.querySelector('img');

 img.getAttribute('src'); // MOSTRA valor do src que e usado para puxa link, font etc... 
 img.setAttribute('alt', 'Texto Alternativo');//ele cria ou atualiza o atributo 'texto alternativo'

 img.hasAttribute('id');  //  retorna true ou false bom para usar com if ou condições
 img.removeAttribute('alt');  // remove o alt 

 img.hasAttributes();  // true ou false se tem algum atributo
```

////////////////////////////////////////////////////////////////












