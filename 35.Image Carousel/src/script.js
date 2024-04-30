const imgs = document.querySelectorAll('img')
const slider = document.querySelector(".slider")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let curIdx = 0;
let interval = setInterval(nextSlide,2000);
function slide(idx) {
    if (idx < 0) {
        idx = 3;
        curIdx = 3;
    } 
    if (idx > 3) {
        idx = 0;
        curIdx = 0;
    } 
    return -idx*500
}

function nextSlide() {
    curIdx++;
    slider.style.transform = `translateX(${slide(curIdx)}px)`
}
function prevSlide() {
    curIdx--;
    slider.style.transform = `translateX(${slide(curIdx)}px)`
}
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(nextSlide,2000);
}

prev.onclick = () => {
    prevSlide()
    resetInterval();
}

next.onclick = () => {
    nextSlide()
    resetInterval();
}
