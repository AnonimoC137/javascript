# acordion lista do faq #

o acordion serve para clicar nas perguntas e aparecer as respostas, se clicar novamente a resposta vai desaparecer para ficar mais dinamico.

```bash
-foi criada uma function para isolar as aplicaçoes tab
-criada const para puxar a lista das perguntas de FAQ
-criado um forEach para add um evento de click para cada pergunta FAQ
-criada function activeAccordion com this apontando para o item, e com a propriedade para puxar o elemento abaixo e tbm add uma class ativo quando clicado. toggle recomentado para pode clicar e abrir como tbm clicar e fechar.

-assim como no initTabNav que foi isolado por uma function, vai ser criado o initAccirdion para isolar os metodos desse processo das perguntas do FAQ.

--LEMBRANDO sempre no inicio dos processos vai ter uma verificação com if para se certificar que tem as propriedades que estão sendo puxadas nesse caso o accordionList.

-tambem criada uma cont para a palacra ativo, para que no futuro quiser mudar o nome a const não muda.
```