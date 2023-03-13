// estas funciones son de ejemplo
export const filterTypePoke = (a,selecType) => {
  let filterTypes = [];
  filterTypes = a.filter(pokemonTypes=> pokemonTypes.type.includes(selecType));
  return filterTypes;
};

//Función ordenar por CP

export const filterOrderPoke = (b,selectOrder) => {
  let filterOrder = [];
  filterOrder = b.sort((function (a,b) {
    if (parseInt(a.stats[selectOrder]) > parseInt(b.stats[selectOrder])){
      return 1;
    } if (parseInt(a.stats[selectOrder]) < parseInt(b.stats[selectOrder])){
      return -1;
    }
    return 0;
  } ));
  return filterOrder;
};
export const filterNamePoke = (a,selectName) => {
  let filterName = [];
  filterName = a.filter(pokemonName=> pokemonName.name.includes(selectName));
  return filterName;
};


