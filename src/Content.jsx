import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import pokemons from './data';
import PokemonDetails from './pages/PokemonDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';


class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favouritedPokemons: [],
    }
    this.saveFavouritedPokemons = this.saveFavouritedPokemons.bind(this);
  }

  saveFavouritedPokemons(pokemonId, action) {
      if(action === 'add') {
        this.setState((previousState) => ({
          favouritedPokemons: [...previousState.favouritedPokemons, pokemonId],
        }))
      } else {
        this.setState((previousState) => ({
          favouritedPokemons: previousState.favouritedPokemons.filter((pokemon) => pokemon !== pokemonId),
        }))

      }
      console.log(this.state.favouritedPokemons)
  }

  render() {
    return (
      <main>
        <Switch>
      <Route exact path='/' render={() => <Pokedex pokemons={pokemons} />} />
      <Route path='/about' component={About} />
      <Route path='/pokemons/:pokemonId' 
        render={(props) => <PokemonDetails {...props} 
        saveFavouritedPokemons = {this.saveFavouritedPokemons}
        actualFavorites = {this.state.favouritedPokemons}
      /> }  />
      <Route path='/favorites' render={() => <Favorites favouritedPokemons={this.state.favouritedPokemons} />} />
      <Route path='/:any' component={NotFound}/>
      </Switch>
      </main>
    )
  }
}

export default Content;