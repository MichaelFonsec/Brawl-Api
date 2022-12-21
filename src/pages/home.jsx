import React from 'react';
import NavBar from '../nav-bar/index';
import Conteudo from '../conteudo-home';
import Rodape from '../rodape/index';

function Home() {
    return (
        <>
            <NavBar />
            <Conteudo />
            <Rodape />
        </>
    );
}

export default Home;