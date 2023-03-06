import { card } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(card, data);

//elementos del DOM
const btnAll = document.getElementById('btnAll');


//Funcione que interactúan con el DOM
//card(pokemon)
//Eventos del DOM
btnAll.addEventListener('click',card)

//PRUEBAS
console.log(pokemon)