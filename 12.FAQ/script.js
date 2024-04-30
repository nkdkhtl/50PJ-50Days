const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.onclick = () => {
        let question = button.parentElement
        question.classList.toggle("active")
    }
});