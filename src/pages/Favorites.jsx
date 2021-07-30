import React from 'react';
import pokemons from '../data';

class Favorites extends React.Component {
  render() {
    const { favouritedPokemons } = this.props;
    const favoriteList = (favouritedPokemons.length > 0) ? favouritedPokemons.map((pokemonid) => <li key={pokemonid}>{pokemons.find((pokemon) => pokemon.id === Number(pokemonid)).name}</li>) : <h1>Não tem pokemon favoritado</h1>
    return (
      <div>
        <h1>Pokemons salvos:</h1>
        <ul>
          {favoriteList}
        </ul>
      </div>
    )
  }
}

export default Favorites