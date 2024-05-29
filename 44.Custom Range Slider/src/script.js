const valLabel  = document.querySelector(".value");
const container = document.querySelector(".container");
const input = document.querySelector("input");

input.oninput = (e) => {
    const inputWidth = +e.target.clientWidth;
    console.log(inputWidth)
    let inputValue = +e.target.value;
    let value =  inputValue * (300 / 100) - valLabel.getBoundingClientRect().width / 2 + scale(inputValue,0,100,10,-10);
    valLabel.style.left = `${value}px`
    valLabel.style.transform = `translateX(0)`
    valLabel.innerText = `${inputValue}`
    console.log(valLabel.getBoundingClientRect().left);
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}