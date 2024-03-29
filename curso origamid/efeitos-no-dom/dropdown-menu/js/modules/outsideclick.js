export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    /*evento so ira ocorrer caso não tenha o atributo outside no elemento*/
    if (!element.hasAttribute(outside)) {
        /*para diferentes tipos de evento como o de toque na tela*/
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutsideClick)
        });
        
        element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
        
        if (!element.contains(event.target)) {
            /*server para remover o evento apos ele ocorrer*/ 
            /*remove o atributo outside para resetar o ciclo*/
            element.removeAttribute(outside, '');

            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick)
            });

            callback();
        }
        
    }
}

//esse script em geral serve para quando voce quer clicar fora da janela seja do menu ou outra coisa a janela fechar, como na do modal tbm