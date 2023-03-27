//funciones importadas desde .data
import {filterTypePoke} from './data.js';
import {sortOrderPoke} from './data.js';
import { filterNamePoke } from './data.js';
import { calculate } from './data.js';
import data from './data/pokemon/pokemon.js';
//elementos del DOM
const btnAll = document.getElementById('btnAll');
const typesPokes = document.getElementById('typesPokemon');
const orderPokes = document.getElementById('orderBy');
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');
const quantify = document.getElementById('quantify')
//Variables que interactuan con las funciones
const allPokemons = data.pokemon;
const containerCards = document.getElementById('root');
//Funciones que interactúan con el DOM
//Función que crea las cards
const card = (pokes) => {
  for(let i = 0; i<pokes.length; i++){
    // crea una section
    const card = document.createElement('section');
    //entrego class a la section
    card.className = 'card';
    // y añade contenido
    const numero = document.createTextNode(pokes[i].num);
    //añade texto al section creado.
    card.appendChild(numero); 
    // añade el elemento creado y su contenido al DOM
    const cardFrame = document.getElementById('section');
    document.getElementById('root').insertBefore(card, cardFrame);
    //crea section image
    const image = document.createElement('img');
    //clase
    image.className = 'image';
    image.src=pokes[i].img;
    const cardImage = document.getElementById('section');
    //inserto image adentro de card
    card.insertBefore(image,cardImage)
    //cardImage.appendChild(cardFrame)
    //crea section Name
    const name = document.createElement('section');
    //clase
    name.className = 'pokeName'
    //crear texto
    const nameText = document.createTextNode(pokes[i].name);
    //agregar text a section
    name.appendChild(nameText);
    //section al DOM
    const pokeName = document.getElementById('section');
    card.insertBefore(name,pokeName);
    //crea section HP
    const hits = document.createElement('section');
    //darle clase
    hits.className = 'hitsP';
    //agregar text 
    const valorHP = document.createTextNode('HP = '+ pokes[i].stats['max-hp']);
    //agregar text a la section
    hits.appendChild(valorHP);
    //section aparezca Dom
    const hitsPoints = document.getElementById('section');
    card.insertBefore(hits,hitsPoints)
    // crea section CP
    const combat = document.createElement('section');
    //clase
    combat.className = 'combatP';
    //crear texto
    const valorCP = document.createTextNode('CP = '+ pokes[i].stats['max-cp']);
    //agregar text a section
    combat.appendChild(valorCP);
    //section aparezca DOM
    const combatPoints = document.getElementById('section');
    card.insertBefore(combat,combatPoints);
    // Crear section poderes
    const powers = document.createElement('section');
    //Clase
    powers.className = 'powers';
    //Crear texto
    const valorPower = document.createTextNode (pokes[i].type);
    //Agregar texto a Section
    powers.appendChild(valorPower);
    // Section en el DOM
    const powersIcons = document.getElementById('section');
    card.insertBefore (powers, powersIcons);
  }
};
//Función para mostrar todos los Pokemons
const showAll=() => {
  containerCards.innerHTML = '';
  card(allPokemons);
  quantify.style.display = 'none';
}
//Función evento selección Tipo Pokemon
typesPokes.addEventListener('change', () => {
  //Variable que llama a función 'filterTypePoke' con argumentos y filtra según el seleccionado 'typesPokes'
  const pokeFilter = filterTypePoke(allPokemons, typesPokes.value); 
  containerCards.innerHTML = ''; //se creo variable 'containerCards' para capturar 'root'
  card(pokeFilter);
  quantify.innerHTML = ('Pokémones by type '+ typesPokes.value+' = ' + calculate(pokeFilter,allPokemons)+ '%.');
  quantify.style.display = 'block';
});
//Función evento selección Orden por CP Y HP Pokemon
orderPokes.addEventListener('change', () => {
  const pokeOrder = sortOrderPoke(allPokemons, orderPokes.value); //Variable que llama a función 'sortOrderPoke' con argumentos y realiza sort según valores cp y hp.
  containerCards.innerHTML = ''; //se creo variable 'containerCards' para capturar 'root'
  card(pokeOrder);
  quantify.style.display = 'none';
  //quantify.innerHTML = '';
});
//Función evento selección Pokemon nombre
btnSearch.addEventListener('click', () => {
  //Variable que llama a función 'filterTypePoke' con argumentos y filtra según el pokémon que manualmente ingresa el usuario
  const pokeName = filterNamePoke(allPokemons, inputSearch.value.toLowerCase()); 
  //Se deja vacio containerCards que funciona para borrar información anterior
  containerCards.innerHTML = ''; 
  card(pokeName);
  quantify.innerHTML = '';
});
//Eventos del DOM
btnAll.addEventListener('click',showAll); 