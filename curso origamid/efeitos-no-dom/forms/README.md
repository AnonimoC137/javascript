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

A propriedade value retorna o valor do elemento no formulario. Se adicionarmos um callback ao 'keyup'(sem as aspas) (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. 'change' (SEM AS ASPAS) dispara quando houver mudanças.

#exemplo
```bash

```