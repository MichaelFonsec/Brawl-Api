import './index.css';
import React from 'react';
import brawlLogo from '../assets/brawl-stars-logo.png';

function Navbar() {
  return (
    <div class="nav-bar">
        <h3><a class="link-enconder" href="">Usuario</a></h3>
        <img src={brawlLogo} width="50rem"/>
        <h3><a class="link-enconder" href="">Brawlers</a></h3>
    </div>
  );
}

//Vou apagar alguns arquivos desnecessarios

export default Navbar;