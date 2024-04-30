const navTab = document.querySelector(".heading");


window.onscroll = () => {
    if (window.scrollY > navTab.offsetHeight+150) {
        navTab.classList.add("active")
    } else {
        navTab.classList.remove("active")
    }
}