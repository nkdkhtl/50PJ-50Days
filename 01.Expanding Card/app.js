const cards = document.querySelectorAll(".card")
for (let i = 0;i<=cards.length-1;i++) {
    cards[i].onclick = (e) => {
        if(!(e.target.classList[1] == "active")) {
            for (let j = 0;j<=cards.length-1;j++) {
                if (cards[j].classList[1] =="active") {
                        cards[j].classList.remove("active")
                }
            }
            e.target.classList.add("active")
        } 
        
        
    }
    
}