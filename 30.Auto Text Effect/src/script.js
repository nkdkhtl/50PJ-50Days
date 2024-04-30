const textBox = document.querySelector(".running__text");
const speedController = document.querySelector("input");
const texts = 'We Love Programming!';
let i = 0;
let speed = 1000;

textRunning();

speedController.oninput = e => {
    speed = 300/e.target.value;
}

function textRunning() {
    textBox.innerHTML += texts[i++];
    if (i > texts.length) {
        textBox.innerHTML = "";
        i = 0;
    }
    setTimeout(textRunning,speed)
}







