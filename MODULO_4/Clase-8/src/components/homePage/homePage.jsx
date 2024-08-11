import React, { useState, useEffect } from 'react';
import './homePage.css';
import CharacterCard from '../characterCard/characterCard';
import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <div className='home-centrar'>
            <div className='titulo'>
                <img src="./public/Rick_and_Morty.webp" alt="imagen" />
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
            </div >
            <div className='conteiner'>
                <table>
                    <tr>
                        <td><img className='perfil-1' src="./public/morty.png" alt="" /></td>
                        <td><img className='perfil-2' src="./public/rick.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td><img className='perfil-3' src="./public/jerry1.png" alt="" /></td>
                        <td><img className='perfil-4' src="./public/Beth.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td><img className='perfil-5' src="./public/portal.png" alt="" /></td>
                        <td><img className='perfil-6' src="./public/Summer.png" alt="" /></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default HomePage;