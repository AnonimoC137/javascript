function verificar() { 
   var data = new Date()
   var ano = data.getFullYear() //FullYear para pegar os 4 digitos do ano 2021
   var fano = window.document.getElementById('txtano') //fano e formulario do ano
   var res = window.document.querySelector('div#res') // outra forma de puxar o elemento so pra treinar
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('verifique seus dados e tente novamente [ERRO]')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img') //para por a imagem
       img.setAttribute('id', 'foto') //o caminho para puxar a foto no js
       if (fsex[0].checked) {
         gênero = 'homem'
         if (idade >=0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'imagens/menino.png')
         } else if (idade < 21) {
           //jovem
           img.setAttribute('src', 'imagens/homem-jovem.png')
         } else if (idade < 51) {
           //adulto
           img.setAttribute('src', 'imagens/homem-adulto.png')
         } else {
           //idoso
           img.setAttribute('src', 'imagens/homem-velho.png')
         }
         
       } else if (fsex[1].checked) {
         gênero = 'mulher'
         if (idade >=0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'imagens/menina.png')
         } else if (idade < 21) {
           //jovem
           img.setAttribute('src', 'imagens/mulher-jovem.png')
         } else if (idade < 51) {
           //adulto
           img.setAttribute('src', 'imagens/mulher-adulta.png')
         } else {
           //idoso
           img.setAttribute('src', 'imagens/mulher-velha.png')
         }
       
       }
       res.style.display = 'block'
       res.style.textAlign = 'center' //serve para alinhar o texto com style atraves do js.
       res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img) //serve para mostrar a imagem na tela. 
         
         
     }
     
   
}
 