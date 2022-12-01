# forms #

É comum utilizarmos inputs de formularios para criarmos uma interface entre funções de JavaScript e o usuário final do site. para isso precisamos aprender como pegar os valores dos formulários.

OBS: podendo ser utilizado tambem criando uma const e usando o querySelector normalmente para puxar o form.

@exemplo no html
```bash
    <form name="contato" id="contato">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <label for="mensagem">mensagem</label>
        <textarea name="mensagem" id="mensagem"></textarea>
    </form>
```

@exemplo no javascript
```bash
document.forms; // lista com os formularios
document.forms.contato; // form com o nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro
```

# Value #

A propriedade value retorna o valor do elemento no formulario. Se adicionarmos um callback ao 'keyup' (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. 'change' dispara quando houver mudanças.

OBS: essa e uma opnião minha, mas o metodo change me parece ser melhor, pois caso ocorra comandos de voz somente esse metodo capta o que foi escrito no input.

#exemplo
```bash
const form = document.getElementById('contato');
        function handleKeyUp(event) {
            console.log(event.target.value);
        }

        form.addEventListener('keyup', handleKeyUp);
```

# validação #

O método checkValidity verifica se um input com o atributo required é valido ou não. A propriedade validationMessenge oossui a mensagem padrao de erro do browser. É possivel modificar com setCustomValidity('').

OBS: pode se usar esse recurso com em conjunto com o css para quando add a class invalido lá no css deixar as bordas do input em vermelho por exemplo.

@exemplo no html
```bash
<input type="email" name="email" id="email" required>
<span class= "erro"> </span>
```

@exemplo no js
```bash
const form = document.getElementById('contato');
        function handleChance(event) {
            const target = event.target;
            if(!target.checkValidity()) {
                target.classList.add('invalido');
                target.nextElementSibling.innerText = target.validationMessage
            } else {
                target.classList.remove('invalido')
            }
        }
```

# Select #

esse exemplo abaixo faz com que ocorra uma mudança na cor do background pelo javascript, o value precisa conter o nome da com em ingles para que de certo.

OBS: esse select está dentro do contato para que seja puxado corretamente.

@exemplo html
```bash
<select name="cores" id="cores">
        <option value="black">preto</option>
        <option value="white">branco</option>
        <option value="blue">azul</option>
    </select>
    <input type="color">
```
@exemplo js
```bash
const form = document.getElementById('contato');
        function handleChange(event) {
            document.body.style.backgroundColor = event.target.value;
        }

        form.addEventListener('change', handleChange);
```

# Diferentes Inputs #

atraves das propriedades event.target.value, ou seja o evento no local onde esta ocorrendo vai puxar o valor do ocorrido, da cor, data, barra de rolamento lateral, e senha de cada input, sendo mostrado no console.

@exemplo no html
```bash
        <input type="color">
        <input type="date">
        <input type="number">
        <input type="range">
        <input type="password">
```
@exemplo no js
```bash
const form = document.getElementById('contato');
        function handleChange(event) {
            console.log(event.target.value);
        }

        form.addEventListener('change', handleChange);
```

# Checkbox & Radio #

Retorna o valor de value, se estiver checada ou não, checked retorna true ou false.

Adiferença entre radio e checkbox é que radio aceita apenas uma seleção por grupo. Radio é agrupado pelo atributo name.

OBS: ou seja no radio se tu ja selecionou um instrumento não pode selecionar outro ja que eles estao ligados pelo grupo que é o name, nesse caso instrumentos.

@exemplo no html- checkbox
```bash
    <label for="identidade"> Possui identidade?</label>
    <input type="checkbox" value="identidade" id="identidade">
    <label for="casado">Casado?</label>
    <input type="checkbox" value="casado" id="casado">
```
@exemplo no html - Radio
```bash
    <input type="radio" id="guitarra" value="guitarra" name="instrumento" >
    <label for="guitarra">guitarra</label>

    <input type="radio" id="violao" value="violao" name="instrumento" >
    <label for="violao">violao</label>

```

@exemplo no js 
```bash
const form = document.getElementById('contato');
        function handleChange(event) {
            if(event.target.checked) {
                console.log(event.target.value);
            }
            
        }

        form.addEventListener('change', handleChange);
```

# Pegando todos os valores #

Ao inves de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuario colocar no formulario.

OBS: explicando mais detalhadamente o exemplo em js abaixo, foi criada uma const em forma de objeto, ai utilizamos o nome dado seguido de [event.target.name] que vai mostra exatamente se é nome, email e mensagem, e vamos atribuir a ele o event.target.value, que por sua vez mais mostrar o conteudo que esta sendo digitado nos campos, e tudo isso vai ser colocado dentro do objeto, com nome: email: e mensagem:, já com o seu valor que foi preenchido anteriormente e capturado com o event.target.value



@exemplo no html
```bash
    <form name="contato" id="contato">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <label for="mensagem">mensagem</label>
        <textarea name="mensagem" id="mensagem"></textarea>
    </form>
```

@exemplo no js 
```bash
cont contato = document.querySelector('#contato');
const dados = {};

function handleChange(event) {
  dados[event.target.name] = event.target.value
}
```