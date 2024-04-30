const APIURL = 'https://api.github.com/users/'

const search = document.getElementById("search") 
const form = document.querySelector("form")
const card = document.querySelector(".card")


async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch (err) {
        console.log(err)
        if (err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch (err) {
        createErrorCard('Problem fetching repos')
    }
}


function createUserCard(user) {
    const cardContent = 
 `<div class="avatar w-36 h-36">
    <img class="rounded-full border-8 border-purple-950" src="${user.avatar_url}" alt="${user.name}">
  </div>
  <div class="user-info ml-8">
    <h2 class="text-2xl font-semibold mb-5">${user.name}</h2>
    <p>${user.bio}</p>
    <ul class="flex justify-between my-6 ">
      <li>
        ${user.followers} 
        <strong>Followers</strong>
      </li>
      <li>
        ${user.following} 
        <strong>Following</strong>
      </li>
      <li>
        ${user.public_repos} 
        <strong>Repos</strong>
      </li>
    </ul>
    <div class="repos flex"></div>
  </div>`

  card.innerHTML = cardContent

}

function createErrorCard(msg) {
    const cardContent = 
    `<div class="card">
        <h1>${msg}</h1>
    </div>`

    card.innerHTML = cardContent
}

function addReposToCard(repos) {
    const reposElm = document.querySelector(".repos")

    repos.slice(0,5).forEach(repo => {
        const repoElm = document.createElement("a")
        repoElm.className = 'repo p-1 mr-2 mb-4 text-sm bg-indigo-900'
        repoElm.href = repo.html_url
        repoElm.target = "_blank"
        repoElm.innerText = repo.name

        reposElm.appendChild(repoElm)
    });
}

form.onsubmit = (e) => {
    e.preventDefault()
    const user = search.value

    if (user) {
        getUser(user)
        search.value = ""
    }
}