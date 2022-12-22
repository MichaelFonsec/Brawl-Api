import React from 'react';
import NavBar from '../nav-bar/index.jsx';
import ConteudoBrawlers from '../conteudo-brawlers';
import Rodape from '../rodape/index.jsx';

function Brawlers() {
    return (
        <>
            <NavBar />
            <ConteudoBrawlers />
            <Rodape />
        </>
    );
}

export default Brawlers;