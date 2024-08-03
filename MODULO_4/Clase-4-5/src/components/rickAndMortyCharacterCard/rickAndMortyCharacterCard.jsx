import React, {useState, useEffect} from 'react';
import CharacterCard from '../characterCard/characterCard';

const RickAndMortyCharacterCard = (props) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
    
    const rickAndMortyCharacterId = props.id;

    useEffect( () => {
        const url = "https://rickandmortyapi.com/api/character/";
        
        fetch(url + rickAndMortyCharacterId)
        .then(response => response.json())
        .then((data) => {
            console.log(data,'data'); 
            setName(data.name);
            setImage(data.image);
            setGenre(data.species);
            setStatus(data.status);
        }).catch((error) => {
            console.error("Error ferching data: ", error);
        })
    }, []) 

    return (
        <CharacterCard
            image={image}
            status={status} 
            name={name}
            genre={genre}
        />
    );
}

export default RickAndMortyCharacterCard;