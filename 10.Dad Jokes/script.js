const joke = document.getElementById("joke")
const jokeBtn = document.getElementById("joke-btn")

jokeBtn.onclick = () => {
    generateJokes()
}
window.onload = () => {
    generateJokes()
}
 function generateJokes() {
    fetch("https://icanhazdadjoke.com",{headers:{Accept:"text/plain"}})
    .then((response) => {
        return response.text()
    })
    .then((text) => {
        joke.innerHTML = text
    })
}
