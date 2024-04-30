const progress = document.querySelector(".progress")
let load = 0
let time = 5000

// in ms
let int = setInterval(blurring,time/100)
function blurring() {
    load++
    
    if (load >99) {
        clearInterval(int)
    }

    progress.innerText = `${load}%`
}