var fetch = require('node-fetch')

function getPokemon(pokemon){
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
  fetch(url)
   .then(res => res.json())
   .then(res => console.log(res.abilities))
}

var test = getPokemon('pikachu')
