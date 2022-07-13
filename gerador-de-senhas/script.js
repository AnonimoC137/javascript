let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
//container-password para manipular o hide para aparecer Clique na senha para copiar
let containerPassword = document.querySelector('#container-password');
//charset vai ser responsavel por armazenar todos os caracteres que vaso ser usados para fazer as senhas
let charset = 'abcdefghijklmnopqrstuvyxzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@'
//nova senha vai servir para o auto-copiar a senha depois
let novaSenha = '';

//vai mostrar o tamanho inicial de caracteres
sizePassword.innerHTML = sliderElement.value;

//mostra em tempo real o tamanho de caracteres que o usuario está arrastando no input
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}
//conectado ao onclick do button no doc. html
function generatePassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        //para os caracteres irem concatenando
        // charAt para pegar a posição do caracter
        //math.floor para numeros interos
        //math,random para numeros aleatorios * a quantidade de caracteres
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }
    //para remover a class que estava ocultando o valor gerado após ela ser gerada.
    containerPassword.classList.remove('hide');
    //para mostrar a senha gerada
    password.innerHTML = pass;
    novaSenha = pass;
}
function copyPassword() {
    alert('Senha copiada com sucesso');
    //serve para copiar a senha
    navigator.clipboard.writeText(novaSenha);
}