import React from 'react';
import pokemons from '../data';

class PokemonDetails extends React.Component {
  constructor() {
    super();
    this.updateFavoriteStatus = this.updateFavoriteStatus.bind(this);
  }

  updateFavoriteStatus() {
    const { pokemonId } = this.props.match.params;
    const { saveFavouritedPokemons, actualFavorites } = this.props;
    if (actualFavorites.includes(pokemonId)) {
      saveFavouritedPokemons(pokemonId,'remove');
    } else {
      saveFavouritedPokemons(pokemonId,'add');
    }
  }

  render() {
    const { pokemonId } = this.props.match.params;
    const { actualFavorites } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(pokemonId));
    const { name, type, image, summary, averageWeight: { value, measurementUnit }, foundAt} = pokemon;
    const locationName = foundAt.map((location) => location.location); 
    const locationMap = foundAt.map((location) => location.map); 
    const favoriteStatus = actualFavorites.includes(pokemonId);
    let favoriteStar = favoriteStatus ? <img src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-star-icon-png-image_956428.jpg" alt="" /> : <span></span>
  

    return(
      <div>
        <h1>{name}</h1>
        {favoriteStar}
        <button onClick={this.updateFavoriteStatus}>Alterar favorito</button>
        <h1>{type}</h1>
        <img src={image} alt="" />
        <h1>{`Peso: ${value}${measurementUnit}`}</h1>
        <h1>{summary}</h1>
        <h1>{`Localização: ${locationName}`}</h1>
        {locationMap.map((location) =><img key={location} src={location} alt="" />)}
        {console.log(foundAt[0].map)}
      </div>
    );
  }
}

export default PokemonDetails;