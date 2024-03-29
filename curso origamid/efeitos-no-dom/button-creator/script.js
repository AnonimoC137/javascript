const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    }
    
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    //usado para acessar o objeto pelo seu nome, e passar o valor
    //como parametro
    handleStyle[name](value);
    saveValue(name, value);
    showCss();
    console.log(localStorage[name])
}

function saveValue(name, value) {
    //para salva as alterações no armazenamento do browser
    localStorage[name] = value;
}

function preencheAuto() {
    const propriedades = Object.keys(localStorage);
    propriedades.forEach((propriedade) => {
        handleStyle[propriedade](localStorage[propriedade]);
        controles.elements[propriedade].value = localStorage[propriedade];
    });
    showCss();
}

preencheAuto();
 
function showCss() {
    //é necessario esses dois span no join pois
    //se não so o primeiro fica certo e os outros
    //css não
    cssText.innerHTML = '<span>' + btn.style.cssText.split(';').join(';</span><span>');
}


