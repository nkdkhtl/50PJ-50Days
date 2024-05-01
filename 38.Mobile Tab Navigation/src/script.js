const navbuts = document.querySelectorAll(".navbut")

const imgs = document.querySelectorAll("img");

function toggleActive(idx) {
    for (let i = 0;i<navbuts.length;i++) {
        navbuts[i].classList.remove("active")
    }
    navbuts[idx].classList.add("active")
}


function changeImg(idx) {
    for (let i = 0;i<imgs.length;i++) {
        imgs[i].style.opacity = "0";
    }
    imgs[idx].style.opacity = "1";
}
navbuts.forEach((navbut,curIdx) => {
    navbut.onclick = () => {
        toggleActive(curIdx);
        changeImg(curIdx);
    }

})

