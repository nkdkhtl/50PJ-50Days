const lowCase = "abcdefghijklmnopqrstuvxyz";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const numbers = "0123456789";
const specialChar = "£$&()*+[]@#^-_!?";
const charCategories = 4;


let haveLowCase = true;
let haveUpCase = true;
let haveNumbers = true;
let haveSpecialChar = true;
let passwordLength = 0;
let password = [];
let clicked = 0;

const generateButt = document.getElementById("generate")
const copyButt = document.getElementById("clipboard")
let result = document.getElementById("result")

function randomNum(max) {
    let random = Math.floor(Math.random()*max);
    return random
}


function checkSettings(settings) {
    passwordLength = settings[0].value
    haveLowCase = settings[1].checked;
    haveUpCase = settings[2].checked;
    haveNumbers = settings[3].checked;
    haveSpecialChar = settings[4].checked;
}

function createPassword() {
    
    if(haveLowCase) {
        password.push(lowCase[randomNum(lowCase.length)])
    }
    if(haveNumbers) {
        password.push(numbers[randomNum(numbers.length)])
    }
    if(haveUpCase) {
        password.push(upCase[randomNum(upCase.length)])
    }
    if(haveSpecialChar) {
        password.push(specialChar[randomNum(specialChar.length)])
    }
    if (password.length >= passwordLength) {
        
        result.innerHTML = password.join("")
    } else {
        createPassword();
    }
}

generateButt.onclick = () => {
    if (clicked) {
        password = [];
        clicked = 0;
    }
    const settings = document.querySelectorAll('input')
    checkSettings(settings)
    createPassword()
    clicked++
}



copyButt.onclick = () => {
    const textarea = document.createElement('textarea')
    const pw = password.join("")

    if(!password) { return }

    textarea.value = pw
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
   
}