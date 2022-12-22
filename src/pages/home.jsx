import React from 'react';

import Conteudo from '../conteudo-home';
import Navbar from '../nav-bar/index';
import Rodape from '../rodape/index.jsx';

function Home() {
    return (
        <>
            <Navbar />
            <Conteudo />
            <Rodape />
        </>
    );
}

export default Home;