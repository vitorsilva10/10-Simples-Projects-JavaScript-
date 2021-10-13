const newYears = "1 jan 2022";


const SetDay = document.querySelector('#days');
const Sethour = document.querySelector('#hours');
const Setminute = document.querySelector('#minutes');
const Setsecund = document.querySelector('#seconds');

const data = document.querySelector('#data').value;

function countdown() {

    const newYearsDate = new Date(newYears);


    const now = new Date().getTime();


    const score = newYearsDate - now;


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

setInterval(countdown, 1000);