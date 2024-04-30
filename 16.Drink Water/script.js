const waterGlasses = document.querySelectorAll(".small-glass")
const percentage = document.querySelector(".filled-percentage")
const litersRemaining = document.querySelector(".desc > h3")
waterGlasses.forEach((waterGlass,idx) => {
    waterGlass.onclick = () => {
        highlightGlasses(idx) 
    }       
})

function highlightGlasses(idx) {
    if ((waterGlasses[idx].classList.contains("filled") && 
        String(waterGlasses[idx+1]) == "undefined") ||
        (waterGlasses[idx].classList.contains("filled") && 
        !waterGlasses[idx+1].classList.contains("filled"))) {
            idx--
    }
    updateGlasses(idx)
    waterGlasses.forEach((glass,idx2) => {
        if (idx2 <= idx) {
            glass.classList.add("filled")
        } else {
            glass.classList.remove("filled")
        }
        
    })
}

function updateGlasses(idx) {
    let scale = (idx+1)*(100/8)
    percentage.style.height = `${scale}%`
    percentage.innerText = `${scale}%`
    litersRemaining.innerText = `${2-(scale*2/100)}L`

    if (scale == 0) {
        percentage.innerText = ""
    } else {
        percentage.style.visibility = "visible"
    }
    if (scale == 100) {
        percentage.previousElementSibling.style.height = "0"
        percentage.previousElementSibling.style.visibility = "hidden"
    } else {
        percentage.previousElementSibling.style.visibility = "visible"
    }
}