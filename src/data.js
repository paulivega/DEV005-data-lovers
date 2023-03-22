//Función para filtrar tipo de Pokémon
export const filterTypePoke = (a,selecType) => {
  let filterTypes = [];
  filterTypes = a.filter(pokemonTypes=> pokemonTypes.type.includes(selecType));
  return filterTypes;
};
//Función para ordenar Pokémones por Combat points(CP) y Hits points(HP)
export const sortOrderPoke = (b,selectOrder) => {
  let sortOrder = [];
  sortOrder = b.sort((function (a,b) {
    if (parseInt(a.stats[selectOrder]) > parseInt(b.stats[selectOrder])){
      return 1;
    } if (parseInt(a.stats[selectOrder]) < parseInt(b.stats[selectOrder])){
      return -1;
    }
    return 0;
  } ));
  return sortOrder;
};
//Función para filtrar por medio de búsqueda el nombre de un Pokémon
export const filterNamePoke = (a,selectName) => {
  let filterName = [];
  filterName = a.filter(pokemonName=> pokemonName.name.includes(selectName));
  return filterName;
};
//Función para calcular el porcentaje de Pokémones por tipo
export const calculate = (array) => {
  //numero inicial sea 0
  let porcentaje = 0;
  //contar cantidad elementos del arreglo filterTypePoke
  const numfilterTypePoke = array.length;
  // calcular porcentaje
  porcentaje = Math.round((numfilterTypePoke * 100 )/251);
  return porcentaje
}