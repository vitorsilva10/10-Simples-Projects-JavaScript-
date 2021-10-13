const inputStart = document.querySelector('#start')
const inputEnd = document.querySelector('#end')
const button = document.querySelector('button')
const span = document.querySelector('h1 > span')


const SetDay = document.querySelector('#days');
const Sethour = document.querySelector('#hours');
const Setminute = document.querySelector('#minutes');
const Setsecund = document.querySelector('#seconds');

function calcularDif() {

    let start = inputStart.value
    let end = inputEnd.value

    start = new Date(start)
    end = new Date(end)

    let score = Math.abs(end - start);


    const Totalseconds = Math.floor(score / 1000);

    const days = Math.floor(Totalseconds / 3600 / 24);

    const hours = Math.floor(Totalseconds / 3600) % 24;

    const minutes = Math.floor((Totalseconds / 60) % 60, 10)

    const seconds = Math.floor(Totalseconds % 60);


    SetDay.innerHTML = days;
    Sethour.innerHTML = hours;
    Setminute.innerHTML = minutes;
    Setsecund.innerHTML = seconds;


}

setInterval(calcularDif, 1000);
button.addEventListener('click', calcularDif);