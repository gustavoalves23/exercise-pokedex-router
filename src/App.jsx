import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Content from './Content';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/favorites'>Pokémon Favorito</Link>
      <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;