const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const moviesList = document.querySelector(".movies__list")
const searchMovies = document.querySelector("form")
const searchInputs = document.querySelector(".navbar__search")


getMovies(API_URL)

async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()

    showMovies(data.results)
}
function showMovies(movies) {
    moviesList.innerHTML = ""
    
    if (movies.length == 0) {
        const resultsNoti = document.createElement("span")
        resultsNoti.innerText = "Not Found"
        resultsNoti.style.fontSize = "3rem"
        moviesList.appendChild(resultsNoti)
    }

    movies.forEach(movie => {
        const {title, vote_average, overview, poster_path} = movie
       
        const movieItem = document.createElement("div")
        
        movieItem.classList.add("movie")

        movieItem.innerHTML = `
            <img src="${IMG_PATH + movie.poster_path}" alt="">
            <div class="movie--info">
                <h3>${movie.title}</h3>
                <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="movie--overview">
                <h3>Overview</h3>
                <span>${movie.overview}</span>
            </div>
        `
        moviesList.appendChild(movieItem)
    });
}

function getClassByRate(rating) {
    if (rating >= 8) {
        return "green"
    } else if (rating >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

searchMovies.onsubmit = (e) => {
    e.preventDefault()

   const searchValues = searchInputs.value
   if (searchValues !== "") {
        getMovies(SEARCH_API + searchValues)
        
        searchInputs.value = ""
   } else {
        window.location.reload()
   }
}