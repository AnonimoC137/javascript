# promises vantagens #

@CARREGAMENTO NO FUNDO

não trava o script. é possivel utilizar o site enquanto o processamento é realizado no fundo.

@FUNÇÃO AO TERMINO

Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.

@REQUISIÇÕES AO SERVIDOR

Nçao precisamos regarregar a pagina por completo a cada requisição feita ao servidor.

# new Promise() #

Primise é uma função construtora de promessas. Existe dois resultados possiveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativo.

@exemplo
```bash
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: undefined}
```

# resolve() #

Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

@exemplo
```bash
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: "Estou pronto!"}
```

# reject() #

Quando a condição de resolução da promise nçao é atingida, ativamos a função reject para rejeita a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.


@exemplo
```bash
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu'));
  }
});

console.log(promessa); // Promise {<resolved>: Error...}
```

# then() #

O poder das Promises está no método then() do seu prototipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolver.

@exemplo
```bash
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu'));
  }
});

promessa.then(function(resolucao) {
  console.log(resolucao); // 'Estou pronto!'
});
```

# Assincrono #

As promises não fazem sentido quando o código executado dentro da mesma é apenas sincrono. O poder está na execução de código assincrono que executará o resolver() ao final dele.

@exemplo
```bash
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolvida');
  }, 1000);
});

promessa.then(resolucao => {
  console.log(resolucao); // 'Resolvida após 1s'
});
```

# then().then() #

Ométodo then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.

@exemplo
```bash
const promessa = new Promise((resolve, reject) => {
  resolve('Etapa 1')
});

promessa.then(resolucao => {
  console.log(resolucao); // 'Etapa 1'
  return 'Etapa 2'
}).then(resolucao => {
  console.log(resolucao); // 'Etapa 2'
  return 'Etapa 3'
}).then(r => r + 4).then(r => {
  console.log(r); // Etapa 34
});
```
# catch() #

O método catch(), do prototipo de Promise, adiciona um callback a promise que será ativado caso a mesam seja rejeitada.

@exemplo
```bash
const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu'));
  }
});

promessa.then(function(resolucao) {
  console.log(resolucao);
}).cath(reject => {
  console.log(reject);
});
```

# then(resolve, reject) #

Podemos passar a função que será ativada a promise seja rejeitada, direto no método then, como segundo aergumento.

@exemplo
```bash
const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu'));
  }
});

promessa.then(function(resolucao) {
  console.log(resolucao);
}, reject => {
  console.log(reject);
});
```
# finally() #

finally() executará a função anonima assim que a promessa acabar. A diferença do funally é que ele será executado independente do resultado, se for resolvida ou rejeitada.

@exemplo
```bash
const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu'));
  }
});

promessa.then(function(resolucao) {
  console.log(resolucao);
}, reject => {
  console.log(reject);
}).finally(() => {
  console.log('acabou');
});
```

# Promise.all() #

Retornará uma nova promise assim que todas as prmises dentro dela forem resolvidas ou pelo menos uma rejeitada. A resposta é uma array com as respostas de cada promise.

@exemplo
```bash
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('login Efetuado');
  }, 1000);
});

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(resposta => {
  console.log(resposta); // Array com ambas respostas
});
```

#



