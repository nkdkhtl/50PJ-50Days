const steps = document.querySelectorAll(".step")
const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".previous")
const progress = document.querySelector(".progress-bar")
console.log(progress)
nextButton.onclick = () => {
    for (let i=0;i<=steps.length-1;i++) {
        if (!(steps[i].classList[1] == "active")) {
            steps[i].classList.add("active")
            break
        }
    }   
    
    nextClickable()
    prevClickable() 
    update()

}
prevButton.onclick = () => {
    for (let i=steps.length-1;i>=1;i--) {
        if ((steps[i].classList[1] == "active")) {
            steps[i].classList.remove("active")
            break
        }
    }  
    prevClickable()
    nextClickable()
    update()
}

function prevClickable() {
    for (let i=steps.length-1;i>=1;i--) {
        if ((steps[i].classList[1] == "active")) {
            prevButton.classList.add("clickable")
        } else {
            prevButton.classList.remove("clickable")
        }
    }
}

function nextClickable() {
    for (let i=0;i<=steps.length-1;i++) {
        if (!(steps[i].classList[1] == "active")) {
            nextButton.classList.add("clickable")
        } else {
            nextButton.classList.remove("clickable")
        }
    }
}
 function update() {
    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length-1) / (steps.length-1) *100 +"%" 
 }
