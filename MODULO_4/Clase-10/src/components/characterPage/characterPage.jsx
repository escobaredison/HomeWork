import React, { useState, useEffect } from 'react';
import './characterPage.css';
import CharacterCard from '../characterCard/characterCard';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function CharacterPage() {
    const [charactersList, setCharactersList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const urlData = useLocation();
    const queryParams = new URLSearchParams(urlData.search)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/?character=${query}`);
        } else {
            navigate(`/`);
        }
    }

    useEffect(() => {
        const fetchCharacters = async (page) => {
            if (queryParams.get('character')) {
                const url = `https://rickandmortyapi.com/api/character/?name=${queryParams.get('character')}`;
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setCharactersList(data.results);
                    setTotalPages(data.info.pages);//Paginas totales
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            } else {
                const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setCharactersList(data.results);
                    setTotalPages(data.info.pages);//Paginas totales
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }
        };
        fetchCharacters(currentPage);
    }, [queryParams, currentPage]);

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

    // Lógica de filtrado de busqueda
    const filteredCharacters = charactersList.filter(character =>
        query === '' || character.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <div className='titulo'>
                <img src="./Rick_and_Morty.webp" alt="imagen" />
            </div>
            <div className='box-enlaces'>
                <Link className='enlaces' to="/">
                    Home
                </Link>
                <div> | </div>
                <Link className='enlaces' to="/characters">
                    Character
                </Link>
                <div> | </div>
                <Link className='enlaces' to="/episodes">
                    Episode
                </Link>
            </div>
            <div className='search-name'>
                <div >
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Ingresa el nombre'
                            value={query} onChange={(e => setQuery(e.target.value))}
                        />
                        <button type='submit'>BUSCAR</button>
                    </form>
                </div>
            </div>
            {

            }
            <div className='list-card'>
                {filteredCharacters.length > 0 && filteredCharacters.map((characters) => {
                    return (
                        <CharacterCard
                            id={characters.id}
                            page="/characters"
                            image={characters.image}
                            status={characters.status}
                            name={characters.name}
                            genre={characters.species}
                        />
                    )
                })}
            </div>
            <div>
                <div className='box-button'>
                    <p className='button' onClick={siguiente} disabled={currentPage === 1}>«</p>
                    <p className='button' onClick={atras} disabled={currentPage === totalPages}>»</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterPage;