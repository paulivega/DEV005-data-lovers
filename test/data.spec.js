import { sortOrderPoke, filterTypePoke, filterNamePoke } from '../src/data.js';
//Array 4 elements
const Pokis = [
  { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
  { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
  { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
  { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }];
//Array 1 element
const Pokis1 = [
  { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } }]

//Test para función filter Poke  
describe('filterTypePoke', () => {
  //a. función exista
  it('exist', () => {
    expect(filterTypePoke).toBeTruthy();
  });
  //b.función sea una función
  it('is a function', () => {
    expect(typeof filterTypePoke).toBe('function');
  });
  //c.función filtre un pokemon por categoría
  //c.1 crear arreglo de prueba
  //c.2 Lo que hará  la función
  it('filter Pokemon by Type (grass)', () => {
    //c3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(filterTypePoke(Pokis, 'grass')).toEqual(
      [{ "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } }]);
  });
  it('filter Pokemon by Type (flying)', () => {
    //c3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(filterTypePoke(Pokis, 'flying')).toEqual(
      [{ "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } }]);
  });
  it('filter Pokemon, the array has 1 element', () => {
    expect(filterTypePoke(Pokis1, 'poison')).toEqual(
      [{ "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } }])
  })
});

describe('sortOrderPoke', () => {
  //a. función exista
  it('sortOrderPoke exist', () => {
    expect(sortOrderPoke).toBeTruthy();
  });
  //b.función sea una función
  it('is a function', () => {
    expect(typeof sortOrderPoke).toBe('function');
  });
  //c.función filtre un pokemon por categoría
  //c.1 crear arreglo de prueba
  //c.2 Lo que hará  la función, ordenar los pokemos por cp.
  it('Order Pokemons by CP', () => {
    //c.3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(sortOrderPoke(Pokis, 'max-cp')).toEqual([
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
      { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
      { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }]);
  });
  //d.2 Lo que hará  la función, ordenar los pokemos por hp.
  it('Order Pokemons by HP', () => {
    //d.3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(sortOrderPoke(Pokis, 'max-hp')).toEqual([
      { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
      { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }
    ]);
  });
  //d.1 crear el arreglo de prueba
  // d.2 Lo que hará  la función, si el arreglo tiene un elemento.
  it('Order Pokemons if the array has 1 element', () => {
    //d.3función, entonces devolverá ese elemento.
    expect(sortOrderPoke(Pokis1, 'max-hp')).toEqual([
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } }
    ]);
  });
});

describe('Función de Búsqueda', () => {
  it('exist', () => {
    expect(filterNamePoke).toBeTruthy();
  });
  //b.función sea una función
  it('is a function', () => {
    expect(typeof filterNamePoke).toBe('function');
  });
  //c. Respuesta correcta
  //c.1 Crear el arreglo a testear
  //c.2 Lo que hará  la función, filtrar pokémon por nombre.
  it('Filtrar pokémon por nombre', () => {
    expect(filterNamePoke(Pokis, "spearow")).toEqual([
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } }])
  })
  it('Filtrar pokémones al dejar campo vacío', () => {
    expect(filterNamePoke(Pokis, '')).toBeNull([
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
      { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
      { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }])
  })
});
