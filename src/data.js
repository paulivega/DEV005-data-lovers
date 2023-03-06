
// estas funciones son de ejemplo
export const card = () => {
  // crea una section
  const card = document.createElement('section');
  // entrego class a la section
  card.className = 'card';
  // y añade contenido
  const numero = document.createTextNode('Nº');
  //añade texto al section creado.
  card.appendChild(numero); 
  // añade el elemento creado y su contenido al DOM
  const cardFrame = document.getElementById('section');
  document.getElementById('root').insertBefore(card, cardFrame);

  //crea section image
  const image = document.createElement('section');
  //clase
  image.className = 'image';
  const cardImage = document.getElementById('section');
  //inserto image adentro de card
  card.insertBefore(image,cardImage)
  //cardImage.appendChild(cardFrame)

  //crea section Name
  const name = document.createElement('section');
  //clase
  name.className = 'pokeName'
  //crear texto
  const nameText = document.createTextNode('PokeName = ');
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
  const valorHP = document.createTextNode('HP =');
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
  const valorCP = document.createTextNode('CP =');
  //agregar text a section
  combat.appendChild(valorCP);
  console.log(combat);
  //section aparezca DOM
  const combatPoints = document.getElementById('section');
  card.insertBefore(combat,combatPoints);


  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
