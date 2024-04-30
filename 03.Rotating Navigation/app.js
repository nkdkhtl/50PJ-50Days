const openBut = document.getElementById("open")
const closeBut = document.getElementById("close")
const circleCont = document.querySelector(".circle-container")
const container = document.querySelector(".container")
openBut.onclick = () => {
    container.style.transformOrigin = "top left"
    circleCont.style.transform = "rotate(-70deg)"
    container.style.transform = "rotate(-20deg)"
    container.classList.add("show-nav")

}

closeBut.onclick = () => {
    container.style.transform = "none"
    circleCont.style.transform = "none"
    container.classList.remove("show-nav")


}
