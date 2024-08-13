import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import EpisodePages from './episodePages.jsx';
import './episodesPage.css';

function EpisodesPage() {

    const [charactersList, setCharactersList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchCharacters = async (id) => {
            const url = `https://rickandmortyapi.com/api/episode?page=${id}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCharactersList(data.results);
                setTotalPages(data.info.pages);
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
                <img src="./public/Rick_and_Morty.jpg" alt="imagen" />
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
            <div>
                <div className='list-epi'>
                    {
                        charactersList.map((characters) => (
                            <EpisodePages
                                name={characters.name}
                                episode={characters.episode}
                                air_date={characters.air_date}
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

export default EpisodesPage;