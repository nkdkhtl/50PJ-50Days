const searchBar = document.querySelector("input")
const usersList = document.querySelector(".users-list")
searchBar.oninput = (e) => {
    let userInput = e.target.value
    filterUser(userInput)
}
getInfo()
async function getInfo() {
    const data = await fetch("https://randomuser.me/api?results=50")
    const { results } = await data.json()
    results.forEach(user => {
        const box = document.createElement("div");
        box.innerHTML = `
        <div class="user flex items-center">
            <div class="img">
                <img src="${user.picture.thumbnail}" alt="">
            </div>
            <div class="infor ml-3">
                <h3 class="name">${user.name.first + " " + user.name.last}</h3>
                <p class="adrress m-0">${user.location.city+","+user.location.country}</p>
            </div>
      </div>
        `
        usersList.appendChild(box)
    });
}

function filterUser(input) {
   const list = document.querySelectorAll(".user");
    list.forEach(user => {
        if (user.innerText.toLowerCase().includes(input.toLowerCase())) {
            user.classList.remove("hide");
        } else {
            user.classList.add("hide")
        }
    })
}