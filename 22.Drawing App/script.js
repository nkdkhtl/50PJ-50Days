const sizeReducing = document.querySelector(".size--reducing")
const sizeIncreasing = document.querySelector(".size--increasing")
const sizeDisplaying = document.querySelector(".size-displaying")

const clearBut = document.querySelector(".canvas-deleted")
const pickColor = document.querySelector("input")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let sizeNow = Number(sizeDisplaying.innerHTML)
let isPressed = false
let color = "black"
let x
let y

canvas.onmousedown = () => {
    isPressed = true
  
}

canvas.onmouseup = () => {
    isPressed = false

    x = undefined;
    y = undefined;
}

canvas.onmousemove = (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2)

        x = x2
        y = y2
    }
}

function drawCircle(x,y) {
    ctx.beginPath()
    ctx.arc(x,y,sizeNow,0,Math.PI*2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(preX,preY,curX,curY) {
    ctx.beginPath()
    ctx.moveTo(preX,preY)
    ctx.lineTo(curX,curY)
    ctx.strokeStyle = color
    ctx.lineWidth = sizeNow*2
    ctx.stroke()
}


sizeIncreasing.onclick = () => {
    if (sizeNow<50) {
        sizeNow+=5;
        changeSize()
    }
}
sizeReducing.onclick = () => {
    if (sizeNow>5) {
        sizeNow-=5;
        changeSize()
    }
}

function changeSize() {
    sizeDisplaying.innerHTML = `${sizeNow}`
}


pickColor.onchange = (e) => {
    color = e.target.value
}

clearBut.onclick = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}