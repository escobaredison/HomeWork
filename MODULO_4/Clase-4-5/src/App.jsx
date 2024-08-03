import React from 'react';
import './App.css';
import RickAndMortyCharacterCard from './components/rickAndMortyCharacterCard/rickAndMortyCharacterCard';

function App() {

  return (
    <div>
      <div className='titulo'>
        <h1>Personajes de Rick and Morty</h1>
      </div>
      <div className='perfils'>
        <RickAndMortyCharacterCard id={1}/>
        <RickAndMortyCharacterCard id={2}/>
        <RickAndMortyCharacterCard id={154}/>
        <RickAndMortyCharacterCard id={33}/>
      </div>
    </div>
  )
}

export default App;