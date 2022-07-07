//sei que tem bastante comentario mas é um treino que é facil de esquecer o que cada coisa faz.

//changeMode muda os modos de light para dark e vice-versa
function changeMode() {
    changeClasses();
    changeText();
}
//changeClasses modifica as classes tirando ou colocando o dark-mode
function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}
//muda os textos quando ativado ou desativado o dark-mode
function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';
//contains verifica se tem o dark-mode no item classList para atender a condicao ou não do if    
    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        //return para sair do if e cair logo abaixo para mudar novamente os textos quando ocorrer um novo click
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';


}
//muda o nome da classe
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
//[0] e para pegar o body sem pegar tudo dele, inicia no indice 0
const body = document.getElementsByTagName('body')[0];
//mesma coisa do body com o footer
const footer = document.getElementsByTagName('footer')[0];
//o cara que inicia o evento
button.addEventListener('click', changeMode);