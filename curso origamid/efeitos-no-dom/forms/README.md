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