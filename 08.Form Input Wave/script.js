const inputField = document.querySelectorAll(".control-form > input")
for (let i = 0; i<=inputField.length-1;i++) {
        let labelLetters = inputField[i].parentElement.querySelectorAll("label > p")
        let time = 0
        for (let j = 0;j<=labelLetters.length-1;j++) {
            labelLetters[j].style.transitionDelay = `${time}ms`
            time = time + 50
        }
}

    
    
