import React, {useState, useEffect} from 'react';
import CharacterCard from './components/characterCard/characterCard';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const [charactersList, setCharactersList] = useState([]);

  useEffect( () => {
    const url = "https://rickandmortyapi.com/api/character/?page=1";
    fetch(url + CharacterCard)
    .then((response) => response.json())
    .then((data) => {
      console.log(data,'data'); 
      setCharactersList(data.results);
    }).catch((error) => {
      console.error("Error ferching data: ", error);
  });
  }, []);  

  return (
    <div>
      <h1 className='titulo'>Personajes de Rick and morty</h1>
      <div>
        <div className='list-card'>
          {
            charactersList.map((characters) => (
              <CharacterCard
              image={characters.image}
              status={characters.status} 
              name={characters.name}
              genre={characters.species}
              />
            ))
          }
        </div>
        <div className='bos-button'>
          <button>«</button>
          <button>1</button>
          <button>2</button>
          <button>»</button>
        </div>
      </div>
    </div>
  );
}

export default App;