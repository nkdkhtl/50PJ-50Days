const contentBoxes = document.querySelectorAll(".content-box")

window.onscroll = () => {
    let windowHeight = window.innerHeight
    for ( let i = 0;i<=contentBoxes.length-1;i++) {
        let boxPosition = contentBoxes[i].getBoundingClientRect()
        if (boxPosition.y >= windowHeight*0.8) {
            if (i%2 == 0) {
                contentBoxes[i].classList.add("hidden-even")
            } else {
                contentBoxes[i].classList.add("hidden-odd")
            }   
        }
        else {
            if (i%2 == 0) {
                contentBoxes[i].classList.remove("hidden-even")
            } else {
                contentBoxes[i].classList.remove("hidden-odd")
            }   
        }
    }
}