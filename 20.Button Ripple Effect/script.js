const button = document.querySelector("button");

button.onclick = (e) => {
    let xCursor = e.clientX
    let yCursor = e.clientY
    let buttonTop = e.target.offsetTop
    let buttonLeft = e.target.offsetLeft


    // Don't forget to minus half the height and width of element
    
    let xPosition = xCursor - buttonLeft - 50
    let yPosition = yCursor - buttonTop- 50
    console.log(xPosition,yPosition)
    const circleChild = document.createElement("span")
    circleChild.classList.add("circle")
    circleChild.style.left = `${xPosition}px`
    circleChild.style.top = `${yPosition}px`
    
    button.appendChild(circleChild)
    setTimeout(() => circleChild.remove(),1000)
}