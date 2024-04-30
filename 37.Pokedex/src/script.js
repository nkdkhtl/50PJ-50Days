const pokeDex = document.querySelector(".pokedex");
const pokemonCount = 100;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const types = Object.keys(colors);

async function fetchPokemon() {
    for (let i = 1;i<=pokemonCount;i++) {
        await getPokemon(i) // duyet id tung pokemon
    }
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}` //Lay data tung con pokemon
    const resolve = await fetch(url); //goi api
    const data = await resolve.json()
    createPokemonCard(data);
}

function createPokemonCard(pokemon) {
    console.log(pokemon)
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3,'0');

    const pokemonType = pokemon.types.map(type => type.type.name);
    const type = types.find(type => pokemonType.indexOf(type) > -1)
    const color = colors[type]
    pokeDex.innerHTML += `
    <div class="pokemon flex flex-col justify-center items-center" style="background-color:${color};">
      <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
      </div>
      <div class="info flex flex-col justify-center items-center">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <span class="type">
          Type:<span>${type}</span>
        </span>
      </div>
    </div>
    `
}

fetchPokemon()





