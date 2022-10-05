# dimesões e distancia #

# height e width #

estas são propriedades e metodos dos objetos ELEMENT E HTMLELEMENT, a maioria são read only

@exemplo
```bash
# const section = document.querySlector('.animais');

# section.clientHeight; // height + padding
# section.offsetHeight; // height + padding + border
# section.acrollHeight; // height total, mesmo dentro de scroll
```
OBS: mesma coisa para o WIDTH // clientWidth...

# offsetTop e offsetLeft #

@exemplo
```bash
# const section = document.querySelector('.animais');

# section.offsetTop;  //distancia entre o topo da pagina

# section.offsetLeft;  //distancia entre o canto do elemento              // e o canto esquerdo da pagina 
```

# getBoundingClientRect() #

metodo que retorna um objeto com valores de width, height, distancia do elemento e mais.

@exemplo
```bash 
# const section = document.querySlector('.animais');

# const rect = section.getBoundingClientRact();
# rect.heght; // height do elemento
# rect.width; // width do elemento
# rect.top; // distancia entre o topo do elemento e o scroll
```

# window #

@exemplo
```bash
# window.innerWidth; // width da janela
# window.outerWidth: // soma dev tools tambem
# window.innerHeight; // height da janela
# window.outerHeight; // soma a barra de endereço

# window.pageYoffset; // distancia total do scroll horizontal
# window.pageXoffset; // distancia total do scroll vertical
```
@exemplo
```bash 
# if (window.innerWidth < 600) {
  # console.log('tela menor que 600px');
# }
```
# matchMedia(); #

utilize um media-querie como no CSS para verificar a largura do browser

OBS: opção mais recomentada de se usar

@exemplo
```bash
# const small = window.matchMedia('(max-width: 600px)');
  # if (small.matches) {
    #console.log('tela menor que 600px');
  #} else {
   #console.log('tela maior que 600px);
  #}
```
  
  






