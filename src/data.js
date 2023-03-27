//Función para filtrar tipo de Pokémon
export const filterTypePoke = (a,selecType) => {
  let filterTypes = [];
  filterTypes = a.filter(pokemonTypes=> pokemonTypes.type.includes(selecType));
  return filterTypes;
};
//Función para ordenar Pokémones por Combat points(CP) y Hits points(HP)
export const sortOrderPoke = (data,selectOrder) => {
  let sortOrder = [];
  sortOrder = data.sort((function (a,b) {
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
export const filterNamePoke = (data,selectName) => {
  let filterName = [];
  filterName = data.filter(pokemonName=> pokemonName.name.includes(selectName));
  return filterName;
};
//Función para calcular el porcentaje de Pokémones por tipo
export const calculate = (array,data) => {
  //numero inicial sea 0
  let porcentaje = 0;
  //contar cantidad elementos del arreglo filterTypePoke
  const numfilterTypePoke = array.length;
  // calcular porcentaje
  porcentaje = Math.round((numfilterTypePoke * 100 )/data.length);
  return porcentaje
}