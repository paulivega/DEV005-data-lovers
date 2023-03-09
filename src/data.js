
// estas funciones son de ejemplo
export const filterBug = (a) => {
  const filterBugs = a.filter(pokemonBug=> pokemonBug.type.includes('bug'));
  return filterBugs;
};

export const anotherExample = () => {
  return 'OMG';
};
