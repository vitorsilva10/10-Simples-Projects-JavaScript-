const appendSeconds = document.querySelector('#seconds');
const appendTens = document.querySelector('#tens');
const appendMinute = document.querySelector('#minute');
const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');
const btnReset = document.querySelector('#btn-reset');


let second = 00;
let milliseconds = 00;
let minute = 00;
let interval;

function startTime() {
    milliseconds++;

    if (milliseconds == 100) {
        milliseconds = 0;
        second++;

    }

    if (second == 60) {
        second = 0;
        minute++;

    }
    appendTens.innerHTML = milliseconds;
    appendSeconds.innerHTML = second;
    appendMinute.innerHTML = minute;
}


btnStart.addEventListener('click', () => {

    interval = setInterval(startTime, 10);

});


btnStop.addEventListener('click', () => {

    clearInterval(interval);

});


btnReset.addEventListener('click', () => {
    milliseconds = "00";
    second = "00";
    appendTens.innerHTML = milliseconds;
    appendSeconds.innerHTML = second;

});