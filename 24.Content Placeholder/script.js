const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const avatar = document.getElementById("avatar")
const nameAuthor = document.getElementById("name")
const date = document.getElementById("date")


const animatedBgs = document.querySelectorAll(".animated-bg")
const animatedBgTexts = document.querySelectorAll(".animated-bg-text")
setTimeout(getData, 3000);

function getData() {
    header.innerHTML =
    '<img src="./982770.png" alt="">'
    title.innerHTML =
    'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, magni similique deserunt iure fugiat dolor, eos excepturi illum ab beatae voluptatum et veritatis eaque facilis, perspiciatis cum. Amet, corrupti ipsam.'
    avatar.innerHTML = 
    '<img src="./982770.png" alt="">'
    nameAuthor.innerHTML =
    'Nam Khuc'
    date.innerHTML = 
    'Nov 22, 2023'

    animatedBgTexts.forEach(bgText => bgText.classList.remove("animated-bg-text"))
    animatedBgs.forEach(bg => bg.classList.remove("animated-bg"))
}