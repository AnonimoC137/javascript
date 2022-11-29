# new Date() #

O construtor Date cria um objeto contendo valores como mes, dia, ano, horario e mais, A data é baseada no relogio interno do computador.

OBS: o map no exemplo do codigo vai ser usado com o parametro Number para passar pela array e transformar os numeros que estao em formato de string em tipo numeros.

@exemplo
```bash
const agora = new Date();
agora;
// Semana Mes Dia Ano HH:MM:SS GMT

agora.getDate() // dia
agora.getDay() // dia da semama ex 5-fri
agora.getMonth() // numero dia mes
agora.getFullYear() // ano
agora.getHours()  // hora
agora.getMinutes() // minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() -3 // brasilia  
```

# getTime() #

O método getTime() mostra o tempo total em milesegundos desde o dia 1 de janeiro de 1970.

@exemplo
```bash
const agora = new Date();
agora.getTime();


//total de dias desde 1 de janeiro de 1970
const diasPassados = agora.getTime() / (24 * 60 * 60 1000);
```

# Dias até #

Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

@#exemplo
```bash
const agora = new Date();
const promocao = new Date('December 24 2022 23:59');

function converterEmDias(timer) {
    return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora);
const diaPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;
```

