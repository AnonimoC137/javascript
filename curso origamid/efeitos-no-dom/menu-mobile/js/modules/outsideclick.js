export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    /*evento so ira ocorrer caso não tenha o atributo outside no elemento*/
    if (!element.hasAttribute(outside)) {
        /*para diferentes tipos de evento como o de toque na tela*/
        /*vou colocado um set para virar assincrono*/
        events.forEach(userEvent => {
            setTimeout(() => {html.addEventListener(userEvent, handleOutsideClick);})
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
