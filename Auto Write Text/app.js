const text = "Aprendendo Javascript do zero";

const h1 = document.querySelector('#msg')

let index = 0;


function writeText() {

    msg.innerHTML = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }

}


setInterval(writeText, 100);