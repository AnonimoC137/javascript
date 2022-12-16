# JSON #

Javascript object notation (json) é um formato de organização de dados, composto por um conjunto de chaves e valor. As aspas duplas são obrigatorias, tanto na chave quanto no valor quando este for uma string

@exemplo
```bash
{
  "id": 1,
  "Nome": "andre",
  "Email": "andre@Origamid.com"
}
```

# Valores # 

Os valores podem ser números, strings, boolean, arrays, objetos, e null

@exemplo
```bash
{
  "id": 1,
  "faculdade": true,
  "pertences": [
    "lapis",
    "caneta",
    "caderno"
  ],
  "endereco": {
    "cidade": "rio de janeiro",
    "pais": "brasil"
  },
  "casado": null
}
```

# Arrays e Objetos #

É comum possuirmos arrays com objetos em cada valor da array. Cuidade para não colocar virgula no ultimo item do objeto ou array.

@exemplo
```bash
[
  {
    "id": 1,
    "aula": "Javascript",
    "tempo": "25min"
  },
  {
    "id": 2,
    "aula": "HTML",
    "tempo": "15min"
  },
  {
    "id": 3,
    "aula": "CSS",
    "tempo": "10min"
  }

]
```

# JSON.parse() e JSON.stringify() #

JSON.parse() irá transformar um texto JSON em um objeto Javascript JSON.stringify() irá transformar um objeto javascript em uma string no formato JSON.

@exemplo
```bash
const textoJSON = '{"id": 1, "titulo": "javascript", "tempo": "25min"}'
const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
  cidade: "rio de janeiro",
  rua: "Ali perto",
  pais: "brasil",
  numero: 50,
}

const enderecoJSON = JSON.stringfy(enderecoOBJ)
```

# Exemplo Real #

Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade. E retornar essa string como um objeto.

@exemplo
```bash
const configuracoes = {
  player: "google API",
  tempo: 25.5,
  aula: "2-1 javascript",
  vitalicio: true,
}

localStorage.configuracoes = JSON.stringfy(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
```


