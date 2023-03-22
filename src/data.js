// estas funciones son de ejemplo
export const filterTypePoke = (a,selecType) => {
  let filterTypes = [];
  filterTypes = a.filter(pokemonTypes=> pokemonTypes.type.includes(selecType));
  return filterTypes;
};

//Función ordenar por CP
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
export const filterNamePoke = (a,selectName) => {
  let filterName = [];
  filterName = a.filter(pokemonName=> pokemonName.name.includes(selectName));
  return filterName;
};

//Función calcular porcentaje de pokemones por tipo.
export const calculate = (array) => {
  //numero inicial sea 0
  let porcentaje = 0;
  //contar cantidad elementos del arreglo filterTypePoke
  const numfilterTypePoke = array.length;
  // calcular porcentaje
  porcentaje = Math.round((numfilterTypePoke * 100 )/251);
  return porcentaje
}

