const statistics  = document.querySelectorAll(".stat-item")
statistics.forEach(stat => {
    const data = stat.querySelector(".counter-stat")
    const numberData = data.getAttribute("data-target")
    IncreasingNum(numberData,data)
})

function IncreasingNum(num,stat) {
    let time = 0 
    const scale = num/100
    let looping = setInterval(() => {
        if (time < num) {
            time+=scale
            console.log(time)
        } else {
            clearInterval(looping)
        }
        
        stat.innerText = time
    }, 10);
    
}