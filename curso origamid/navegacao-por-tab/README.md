# criando uma relação entre imagens e textos #

serve para clicar nos links internos do menu e ir direto para sessão correspondente, tornando a navegação mais simples e direta no site.

```bash
-foi criada duas const tabMenu e tabContent para linkar esses dois locais

-criado um if para verificar se na pagina tem a section solicitada para rodar de fato o codigo, isso é para casos de sites com multiplas paginas por exemplo.

-criado um paramentro para add a class ativo na raposa para iniciar
 aparecendo o conteudo

-criada função para fazer a ativação dos textos com as imgs 
chamada activeTAB

-criado um forEach para remover a class ativo constantemente

-essa function vai se basear no index para incluir a class ativo ao item.

-criado outro forEach fora da function para adicionar um 
evento a cada img

-dentro do evento foi criado uma function para poder passar o callback 
com o index para não dar erro

-criado em css a conf do tabcontent section com display: none;

-criado em css a conf do tabcontent section.ativo com display: block; para que suma o conteudo dos texto e apareça somente quando tiver a class ativo nele
```