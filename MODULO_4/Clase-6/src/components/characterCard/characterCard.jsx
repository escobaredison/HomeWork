import React from 'react';
import Title from '../title/title';
import Image from '../imagen/image.jsx';
import Details from '../details/details';
import Status from '../status/status.jsx';
import './characterCard.css';

function CharacterCard(props) {
return (
    <div className='card'>      
        <Image url={props.image} />
        <Status status={props.status}/>        
        <Title title={props.name}/>
        <Details genre={props.genre}/>
    </div>
    );
}

export default CharacterCard;