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
const PokisSameCP =  [
  {"num": "072","name": "tentacool","type": ["water","poison"],"stats": {"max-cp": "1040","max-hp": "106"}},
  {"num": "096","name": "drowzee","type": ["psychic"],"stats": {"max-cp": "1040","max-hp": "134"}}]
//Test para función filter Poke
describe('filterTypePoke', () => {
  //a. función exista
  it('The function exist', () => {
    expect(filterTypePoke).toBeTruthy();
  });
  //b.función sea una función
  it('Is a function', () => {
    expect(typeof filterTypePoke).toBe('function');
  });
  //c.función filtre un pokemon por categoría
  //c.1 crear arreglo de prueba
  //c.2 Lo que hará  la función
  it('Filter by type (grass)', () => {
    //c3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(filterTypePoke(Pokis, 'grass')).toEqual(
      [{ "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } }]);
  });
  it('Filter by type (flying)', () => {
    //c3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(filterTypePoke(Pokis, 'flying')).toEqual(
      [{ "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } }]);
  });
  it('The array has 1 element', () => {
    expect(filterTypePoke(Pokis1, 'poison')).toEqual(Pokis1)
  })
});
describe('sortOrderPoke', () => {
  //a. función exista
  it('The function exist', () => {
    expect(sortOrderPoke).toBeTruthy();
  });
  //b.función sea una función
  it('Is a function', () => {
    expect(typeof sortOrderPoke).toBe('function');
  });
  //c.función filtre un pokemon por categoría
  //c.1 crear arreglo de prueba
  //c.2 Lo que hará  la función, ordenar los pokemos por cp.
  it('Order by CP', () => {
    //c.3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(sortOrderPoke(Pokis, 'max-cp')).toEqual([
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
      { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
      { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }]);
  });
  //d.2 Lo que hará  la función, ordenar los pokemos por hp.
  it('Order by HP', () => {
    //d.3 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(sortOrderPoke(Pokis, 'max-hp')).toEqual([
      { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" } },
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } },
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" } },
      { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" } }
    ]);
  });
  it ('Order by CP with same CP',() => {
    expect(sortOrderPoke(PokisSameCP, 'max-cp')).toEqual( [
      {"num": "072","name": "tentacool","type": ["water","poison"],"stats": {"max-cp": "1040","max-hp": "106"}},
      {"num": "096","name": "drowzee","type": ["psychic"],"stats": {"max-cp": "1040","max-hp": "134"}}]
    )
  })
  //d.1 crear el arreglo de prueba
  // d.2 Lo que hará  la función, si el arreglo tiene un elemento.
  it('The array has 1 element', () => {
    //d.3función, entonces devolverá ese elemento.
    expect(sortOrderPoke(Pokis1, 'max-hp')).toEqual(Pokis1);
  });
});
describe('filterNamePoke', () => {
  it('The function exist', () => {
    expect(filterNamePoke).toBeTruthy();
  });
  //b.función sea una función
  it('Is a function', () => {
    expect(typeof filterNamePoke).toBe('function');
  });
  //c. Respuesta correcta
  //c.1 Crear el arreglo a testear
  //c.2 Lo que hará  la función, filtrar pokémon por nombre.
  it('Filter by Name', () => {
    expect(filterNamePoke(Pokis, "spearow")).toEqual([
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" } }])
  })
  it('Filter with empty input', () => {
    expect(filterNamePoke(Pokis, '')).toEqual(Pokis)
  })
  it('Filter with uppercase character', () => {
    expect(filterNamePoke(Pokis, "SPEAROW")).toEqual([])
  })
});