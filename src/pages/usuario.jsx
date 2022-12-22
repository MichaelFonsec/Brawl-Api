import React from 'react';
import NavBar from '../nav-bar/index';
import Rodape from '../rodape/index';
import ConteudoUsuario from '../Conteudo-usuario';

function Usuario() {
    return (
        <>
            <NavBar />
            <ConteudoUsuario />
            <Rodape />
        </>
    );
}

export default Usuario;