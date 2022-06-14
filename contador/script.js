function contar() {
  let ini = window.document.getElementById('txti')
  let fim = window.document.getElementById('txtf')
  let passo = window.document.getElementById('txtp')
  let res = document.getElementById('res')
  
  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
     window.alert('impossivel contar')
    
  } else { 
    res.innerHTML = 'contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    //esse cod serve para por o emoji
    if (p <=0) {
      window.alert('passo invalido! considerando passo 1')
      p = 1
    }
    if (i < f) {
      for (let c = i;c <= f;c += p) {
        res.innerHTML += `\u{1F449}${c}`
      }   
    } else {
       for (let c = i;c >= f;c -= p) {
          res.innerHTML += `\u{1F449}${c}`
       }
      
    }
    res.innerHTML += `\u{1F3C1}`
   
   
   
  }  
    
  
    
  
  
}

  

   
 
 
 