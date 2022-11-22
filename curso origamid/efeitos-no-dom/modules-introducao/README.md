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
# valores do export #

Podemos exportar objetos, funções, números, strings e mais.

@exemplo 1
```bash
// arquivo configuracao.js

export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'ford'};
export const str = 'frase';
export class Carro {};

```

@exemplo2 
```bash
import * as conf from './configuracao.js';

conf.str;
conf.obj;
conf.ano;
```

# Caracteristicas do modules #

STRICT MODE = 'use strict' por padrao em todos os arquivos

VARIAVEIS FICAM NO MODULE APENAS =  não vazam para o global

THIS FORA DE UM OBJETO FAZ REFERENCIA A UNDEFINED = ao inves do window

ASSINCRONO = vai carregando o que der, ate todos carregarem.

# use strict #

O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará  neste modo.

OBS: por padrao todo module está no modo estrito.

@exemplo
```bash
'use strict'

nome = 'ford'; // erro, variavel global

delete Araay.prototype; // erro, não deletavel

window.top = 200; // erro, não pode mudar

const argumets = 3.14; // escrever em palavra reservada
```


