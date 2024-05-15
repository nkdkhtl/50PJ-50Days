const password = document.getElementById("password");
const background = document.querySelector(".background")
password.oninput = (e) => {
    let passwordLength = e.target.value.length;
    let blurValue = 20 - passwordLength*2;
    background.style.filter = `blur(${blurValue}px)`
}