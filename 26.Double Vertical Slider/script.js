const prevButt = document.querySelector(".prev")
const nextButt = document.querySelector(".next")
const descCont = document.querySelector(".desc-container");
const picsCont = document.querySelector(".pics-container")
const descList = document.querySelectorAll(".desc")
const picsList = document.querySelectorAll(".image")
let itemPos = 0;
prevButt.onclick = () => {
    checkPos('down')
}

nextButt.onclick = () => {
    checkPos('up')
}

function checkPos(direction) { 
    if (direction == 'down') {
        itemPos--
        if (itemPos < 0) {
            itemPos = descList.length-1
        }
    }
    
    if (direction == 'up') { 
        itemPos++     
        if (itemPos > descList.length-1) {
            itemPos = 0
        }        
    } 
    descCont.style.transform = `translateY(-${itemPos*100}%)`
    picsCont.style.transform = `translateY(${(itemPos - picsList.length+1)*100}%)`

}






