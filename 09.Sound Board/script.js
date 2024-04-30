const sounds = ["applause", "boo", "gasp", "tada", "wrong", "victory"]

sounds.forEach((sound) => {
    const btn = document.createElement("button")
    btn.innerText = sound

    btn.onclick = () => {
        stopSong()

        document.getElementById(sound).play()
    }

    document.querySelector(".btn").appendChild(btn)
})

function stopSong() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}