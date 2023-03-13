
// estas funciones son de ejemplo
export const filterTypePoke = (a,selecType) => {
  let filterTypes = [];
  filterTypes = a.filter(pokemonTypes=> pokemonTypes.type.includes(selecType));
  return filterTypes;
};

//Función ordenar

export const filterOrderPoke = (b) => {
  let filterOrder = [];
  // eslint-disable-next-line no-undef
  filterOrder = b.sort((function (a,b) {
    if (a.stats['max-cp'] > b.stats['max-cp']){
      return 1;
    } if (a.stats['max-cp'] < b.stats['max-cp']){
      return -1;
    }
    return 0;
  } ));
  return filterOrder;
};
