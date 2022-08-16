const inputElement = document.querySelector('.new-task-input');
const button = document.querySelector('.new-task-button');

const validateInput = () => {
    return inputElement.value.trim().length > 0;
}

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add('error');
    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.remove('error');
    }
};

button.addEventListener('click', () => handleAddTask());
inputElement.addEventListener('change', () => handleInputChange());
























//                     INSTRUÇÕES PARA O CODIGO

//LINHA - criada as const do INPUT e do BUTTON

//LINHA - criada const que valida se o input está vazio ou não, dentro dela tem um inputElement.value.trim().length > 0 o trim é para não contar os espaços se o usuario colocar, essa linha vai servir para validar sem precisar colocar um IF

//LINHA - criada const hundleAddTask que vai fazer as tarefas serem add. na lista de tarefas, alem disso vai ter uma const inputIsValid que vai receber o valor retornado de VALIDATEINPUT(), que por sua vez contem se o input está vazio ou tem algo escrito, inputIsValid tbm vai estar em um IF para validar se de fato o input está com algum conteudo caso contrario, ele vai add uma class de erro, para estilizar uma msg no futuro.

//LINHA - criado a const handleInputChange que vai fazer o processo de validação de quando o input é renovado, para tirar as marcações em vermelho da class erro add na function anterior, para isso vamos usar a const inputIsValid novamente para receber o valor retornado da VALIDATEINPUT() (novamente) e tbm um IF, praticamente tudo igual a function anterior só que dessa vez removendo a class com .remove('error')

//LINHA - criado um evento ao button de click, com uma arrow function chamando o hundleAddTask, arrow functions não necessariamente precisam ser abertas com {}

//LINHA - criado um evento para o input chamado change (significa mudança), com uma function apontando para o handleInputChange.



