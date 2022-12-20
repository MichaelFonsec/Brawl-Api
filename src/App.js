import './App.css';
import React from 'react';
import brawlLogo from './assets/brawl-stars-logo.png';

function App() {
  return (
    <div>
      <div class="nav-bar">
          <h3><a class="link-enconder" href="./user-front/user.html">Usuario</a></h3>
          <img src={brawlLogo} width="50rem"/>
          <h3><a class="link-enconder" href="./brawler-front/brawlers.html">Brawlers</a></h3>
      </div>
    </div>
  );
}

//Vou apagar alguns arquivos desnecessarios

export default App;