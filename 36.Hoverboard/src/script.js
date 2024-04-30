const squares = document.querySelectorAll(".square");


function getRandomColor() {
    var colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    return colors[Math.floor(Math.random()*colors.length)];
}

squares.forEach(square => {
    square.onmouseover = () => {
        let colorGlowing = getRandomColor();
        square.style.backgroundColor = `${colorGlowing}`
        square.style.boxShadow = `0 0 2px ${colorGlowing}, 0 0 10px ${colorGlowing}`
    }
    
    square.onmouseout = () => {
        square.style.backgroundColor = "#1d1d1d";
        square.style.boxShadow = '0 0 2px #000';
        
    }
})
