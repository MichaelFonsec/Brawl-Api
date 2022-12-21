import React from 'react';
import NavBar from '../nav-bar/index';
import ConteudoBrawlers from '../conteudo-brawlers';
import Rodape from '../rodape/index';

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