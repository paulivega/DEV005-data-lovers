
import {filterTypePoke} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

//console.log(card, data);

//elementos del DOM
const btnAll = document.getElementById('btnAll');
const typesPokes = document.getElementById('typesPokemon');
//Variables que interactuan con las funciones
const allPokemons = data.pokemon;
const containerCards = document.getElementById('root');




//Funciones que interactúan con el DOM
//card(pokemon)
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
    console.log(hits)
    //darle clase
    hits.className = 'hitsP';
    console.log(hits)
    //agregar text 
    const valorHP = document.createTextNode('HP = '+ pokes[i].stats['max-hp']);
    //agregar text a la section
    hits.appendChild(valorHP);
    console.log(hits)
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
    console.log(combat);
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
  //document.getElementById("btnAll").disabled = true;
};

//Función para mostrar todos los Pokemons
const showAll=() => {
  card(allPokemons)
}

//Eventos del DOM
btnAll.addEventListener('click',showAll);

//Función evento selección Tipo Pokemon
typesPokes.addEventListener('change', () => {
 
  const pokeFilter = filterTypePoke(allPokemons, typesPokes.value); //Variable que llama a función 'filterTypePoke' con argumentos y filtra según el seleccionado 'typesPokes'
  containerCards.innerHTML = ''; //se creo variable 'containerCards' para capturar 'root'
  card(pokeFilter);
  
});
