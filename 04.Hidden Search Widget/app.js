const button = document.querySelector("button")
const inputBar = document.querySelector("input")

button.onclick = () => {
    inputBar.classList.toggle("active")
}