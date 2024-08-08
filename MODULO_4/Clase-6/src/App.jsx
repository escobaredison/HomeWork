import React, {useState, useEffect} from 'react';
import CharacterCard from './components/characterCard/characterCard';
import './App.css';

function App() {

  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect( () => {
    const fetchCharacters = async (page) => {
      const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharactersList(data.results);
        setTotalPages(data.info.pages);//Paginas totales
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchCharacters(currentPage);
  }, [currentPage]);  

  const siguiente = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const atras = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className='titulo'>
      <img src="./public/Rick_and_Morty.webp" alt="imagen" />
      </div>
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
        <div className='box-button'>
          <p className='button' onClick={siguiente} disabled={currentPage === 1}>«</p>
          <p className='button' onClick={atras} disabled={currentPage === totalPages}>»</p>
        </div>
      </div>
    </div>
  );
}

export default App;