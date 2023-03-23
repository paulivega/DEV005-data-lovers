import { sortOrderPoke, filterTypePoke, filterNamePoke, calculate } from '../src/data.js';
//Array 4 elements
const Pokis = [
  { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" }},
  { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" }},
  { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99" }},
  { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135" }}];
//Array 1 element
const Pokis1 = [
  { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113"}}]
const PokisSameCP =  [
  {"num": "072", "name": "tentacool","type": ["water","poison"],"stats": {"max-cp": "1040","max-hp": "106"}},
  {"num": "096", "name": "drowzee","type": ["psychic"],"stats": {"max-cp": "1040","max-hp": "134"}}]
const PokisGrass = [
  { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113"}},
  { "num": "003", "name": "venusaur", "type": ["grass","poison"], "stats": {"max-cp": "2720","max-hp": "162"}},
  { "num": "043", "name": "oddish", "type": ["grass","poison"], "stats": {"max-cp": "1228","max-hp": "113"}},
  { "num": "044", "name": "gloom","type": ["grass","poison"], "stats": {"max-cp": "1681","max-hp": "134"}},
  { "num": "114", "name": "tangela", "type": ["grass"], "stats": {"max-cp": "2238","max-hp": "140"}}]
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
  //c.1 Lo que hará  la función filtrar por tipo grass
  it('Filter by type (grass)', () => {
    //c.2 función con sus parámetros, igual a (lo que devolverá cuando se cumpla la condición de la función)
    expect(filterTypePoke(Pokis, 'grass')).toEqual(
      [{ "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113" }}]);
  });
  //d.1 Lo que hará la función filtrar por tipo flying
  it('Filter by type (flying)', () => {
    //d.2 función con sus parámetros, igual a (lo que devolverá cuando se cumpla la condición de la función)
    expect(filterTypePoke(Pokis, 'flying')).toEqual(
      [{ "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106" }}]);
  });
  //e.1 La función tiene un arreglo con un solo elemento
  it('The array has 1 element', () => {
    //e.2 función con sus parámetros, igual a (lo que devolverá cuando se cumpla la condición de la función)
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
  //c.1 Lo que hará  la función, ordenar los pokemos por cp.
  it('Order by CP', () => {
    //c.2 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(sortOrderPoke(Pokis, 'max-cp')).toEqual([
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106"}},
      { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99"}},
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113"}},
      { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135"}}]);
  });
  //d.1 Lo que hará  la función, ordenar los pokemos por hp.
  it('Order by HP', () => {
    //d.2 función con sus parámetros.igual(lo que devolverá cuando se cumpla la condición de la función)
    expect(sortOrderPoke(Pokis, 'max-hp')).toEqual([
      { "num": "025", "name": "pikachu", "type": ["electric"], "stats": { "max-cp": "938", "max-hp": "99"}},
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106"}},
      { "num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": { "max-cp": "1115", "max-hp": "113"}},
      { "num": "148", "name": "dragonair", "type": ["dragon"], "stats": { "max-cp": "1780", "max-hp": "135"}}
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
      { "num": "021", "name": "spearow", "type": ["normal", "flying"], "stats": { "max-cp": "798", "max-hp": "106"}}])
  })
  it('Filter with empty input', () => {
    expect(filterNamePoke(Pokis, '')).toEqual(Pokis)
  })
  it('Filter with uppercase character', () => {
    expect(filterNamePoke(Pokis, "SPEAROW")).toEqual([])
  })
});
//Test función calcular
describe('calculate', () => {
  //Función existe
  it('The function exist', () => {
    expect(calculate).toBeTruthy();
  })
  it('Is a function', () => {
    expect(typeof calculate).toBe('function');
  });
  it('Calculate percentage by type',() => {
    expect(calculate(PokisGrass)).toEqual(2);
  })
})