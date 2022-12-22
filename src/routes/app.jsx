import React from "react";
import Navbar from "../nav-bar/index";
import Rodape from "../rodape/index";
import { BrowserRouter, Route , Routes} from 'react-router-dom';

import Conteudo from "../conteudo-home/index";
import ConteudoBrawlers from "../conteudo-brawlers/index";
import ConteudoUsuario from "../Conteudo-usuario/index";

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact element={ <Conteudo />} />
            <Route path="/usuario" element={ <ConteudoUsuario />} />
            <Route path="/brawlers" element={ <ConteudoBrawlers />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    );
  }
  
  export default App;