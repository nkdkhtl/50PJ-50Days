const switchModeButton = document.querySelector(".toggle");
const html = document.querySelector("html")
switchModeButton.onclick = (e) => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark mode"
    } else {
        html.classList.add("dark")
        e.target.innerHTML = "Light mode"
    }
}


const secondsHand = document.querySelector(".second-hand")
const minutesHand = document.querySelector(".minute-hand")
const hoursHand = document.querySelector(".hour-hand")
const timePanel = document.querySelector(".time-clock")
const datePanel = document.querySelector(".date")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function updateClock(hours,minutes,seconds) {
    secondsHand.style.transform = `rotate(${6*seconds}deg)`
    minutesHand.style.transform = `rotate(${6*minutes}deg)`
    hoursHand.style.transform = `rotate(${30*hours}deg)`
    if (hours >=12) {
        timePanel.innerHTML = `${hours}:${minutes} PM`
    } else {
        timePanel.innerHTML = `${hours}:${minutes} AM`
    }
    let isPM = hours >= 12 ? "PM" : "AM"
    let isGreaterThan10 = minutes < 10 ? "0": ""
    timePanel.innerHTML = `${hours}:${isGreaterThan10}${minutes} ${isPM}`
    
}    


function updateTime() {
    let date = new Date()
    let hoursNow = date.getHours()
    let minutesNow = date.getMinutes()
    let secondsNow = date.getSeconds()
    let dayNow = date.getDay()
    let dateNow = date.getDate()
    let monthNow = date.getMonth()
    datePanel.innerHTML = `${days[dayNow].toUpperCase()} , ${months[monthNow].toUpperCase()} <span class="circle">${dateNow}</span>`
    updateClock(hoursNow,minutesNow,secondsNow)



} 
updateTime()
setInterval(updateTime,1000)


