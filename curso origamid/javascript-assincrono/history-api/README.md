# History #

É possivel acessarmos o historico de acesso do browser em uma sessão especifica atraves do window.history. O objeto history possui diferentes métodos e propriedades.

@exemplo
```bash
window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a proxima
```

# popstate #

O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuario clicar no botão de voltar ou proximo.

@exemplo
```bash
window.addEventListener('popstate', () => {
  fetchPage(window.location.pathname);
});
```

# Fetch e History #

Ao puxarmos dados via fetch api, o url da pagina continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre paginas, sem a necessidade de recarregar da mesma.

@exemplo
```bash
async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  window.history.pushState(null, null, url);
}
```