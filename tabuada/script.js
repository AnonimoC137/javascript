function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
     window.alert('[ERRO] impossivel ler o numero')
  } else {
    let n = Number(num.value)
    let c = 1 
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')//para criar opcpes
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)//para add um elemento filho que e o item
      c++
    }
  }
  
} 