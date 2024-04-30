const button = document.querySelector("button")
const navBar = document.querySelector("nav")
button.onclick = () => {
    navBar.classList.toggle("active")
}