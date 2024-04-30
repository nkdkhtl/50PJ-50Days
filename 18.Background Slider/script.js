const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".prev")
const bgList = document.querySelectorAll(".slide")
let activeIdx = 0

nextButton.onclick = () => {
    prevActiveIdx = activeIdx;
    activeIdx++;

    if (activeIdx>4) {
        activeIdx = 0;
    }
    changeBG(activeIdx,prevActiveIdx)

}

prevButton.onclick = () => {
    prevActiveIdx = activeIdx;
    activeIdx--;
    if (activeIdx<0) {
        activeIdx = 4;
    }
    changeBG(activeIdx,prevActiveIdx)
}

function changeBG(idx,prevIdx) {
    console.log(idx,prevIdx)
    bgList.forEach(bgItem => {
        bgItem.classList.remove("active")
    })
    bgList[idx].classList.add("active")
    document.body.style.backgroundImage = window.getComputedStyle(bgList[idx]).backgroundImage
}