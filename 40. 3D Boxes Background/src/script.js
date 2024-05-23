const backgroundBoxes = document.querySelector(".boxes")
const magicButt = document.querySelector(".magic")

magicButt.onclick = () => {
    backgroundBoxes.classList.toggle("big");
}

for (let y = 0;y<4;y++) {
    for (let x = 0;x<4;x++) {
        const box = document.createElement('div');
        box.classList.add("box")
        box.style.backgroundPosition = `${-x * 125}px ${-y * 125}px`  
        backgroundBoxes.appendChild(box)
    }
}