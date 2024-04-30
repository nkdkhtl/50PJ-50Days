const img = document.querySelector(".img");
const paragraph = document.querySelector("p");

let clickCount = 0;
let clickTime = 0;

dbclickCount();
function dbclickCount() {
    paragraph.innerText = `You liked it ${clickCount} times`;
    clickCount++;

}

function createHeart(e) {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    let xCursor = e.clientX
    let yCursor = e.clientY
    let buttonTop = e.target.offsetTop
    let buttonLeft = e.target.offsetLeft
    let xPos = xCursor - buttonLeft;
    let yPos = yCursor - buttonTop;
    heart.style.color = "red";
    heart.style.left = xPos + "px";
    heart.style.top = yPos + 'px';
    img.appendChild(heart);
    setTimeout(() => {
        img.innerHTML  = "";
    },800)
}

img.onclick = (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else if ((new Date().getTime() -  clickTime) < 800) {
        dbclickCount()
        createHeart(e)
        clickTime = 0;

    }
}


