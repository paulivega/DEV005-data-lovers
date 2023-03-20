import { sortOrderPoke, filterTypePoke } from '../src/data.js';
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
  const Pokis = [
    { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
    { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
    { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
    { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }];
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
  const Pokis = [
    { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
    { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
    { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
    { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }];
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
  const Pokis1 = [
    { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } }]
  // d.2 Lo que hará  la función, si el arreglo tiene un elemento.
  it('Order Pokemons if the array has 1 element', () => {
    //d.3función, entonces devolverá ese elemento.
    expect(sortOrderPoke(Pokis1, 'max-hp')).toEqual([
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } }
    ]);
  });

  //e.


});



/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/