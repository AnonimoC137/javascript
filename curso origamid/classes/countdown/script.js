import Countdown from './countdown.js'

const diasParaONatal = new Countdown('24 december 2023 23:59:59 GMT-0300');

setInterval(() => {
    console.log(diasParaONatal.total);
}, 1000);


