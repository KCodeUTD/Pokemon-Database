function selectPokemon(name, type, number) {
  document.getElementById('pokemon-name').textContent = name;
  document.getElementById('pokemon-details').innerHTML = `Type: ${type}<br>${number}`;
}