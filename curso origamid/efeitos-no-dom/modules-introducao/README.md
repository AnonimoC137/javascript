# módulos #

## manutenção ##

Dividir o código em diferentes arquivos com funções especificas (modulos) facilita a manutenção.

## compartilhamento ##

O compartilhamento de código com outros projetos é facilitado, pois basta voce importar um módulo especifico.

## nativo no ES6+##

Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são nativos.

# modules ES6 #

Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for unico). E import nome from arquivo.js para importar.

@exemplo html
```bash
<script type="module" src="js/script.js"> </script>
```

@exemplo javascript-1
```bash
// arquivo scroll-suave.js
export default function scrollSuave() {
    ...
};
```

@exemplo javascript-2
```bash
// arquivo script.js
import scrollSuave from './scroll-suave.js'

scrollSuave()
```
# Named Exports #

Voce pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

OBS: é recomendado exporta somente um de cada vez, mas a opção existe e pode ser usada, outro detalhe tem que ter um espaço entre a chave inicial e a final da palavra que vai dentro.

@exemplo do arquivo de modulo 
```bash
// arquivo scroll.js
export function scrollSuave() {
    ...
};
export function scrollAnimacao() {
    ...
}
```

@exemplo no arquivo js principal
```bash
// arquivo script.js
import { scrollSuave, scrollAnimacao } from './scroll.js';

scrollSuave();
scrollAnimacao();

```

@exemplo como importa sem saber o nome
```bash
// importe todos os valores em um objeto
import * as scroll from './scroll.js';

scroll.scrollSuave();
scroll.scrollAnimacao();
```