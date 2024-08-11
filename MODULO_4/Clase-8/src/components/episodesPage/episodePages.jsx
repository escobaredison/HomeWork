import React from 'react';
import './episodePages.css';
import Nombre from './nombre';
import Temporada from './temporada';
import Creacion from './creacion';

function EpisodePages(props) {
    
return (
    <div className='episode'>
        <div className='card-episode'>
            <Nombre name={props.name} />
            <Temporada episode={props.episode}/>        
            <Creacion air_date={props.air_date}/>
        </div>
    </div>
    );
}

export default EpisodePages;