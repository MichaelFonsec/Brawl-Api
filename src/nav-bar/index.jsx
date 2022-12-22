import { Nav } from './style';
import React from 'react';
import brawlLogo from '../assets/wallpapers/brawl-stars-logo.png';

function Navbar() {
  return (
    <>
    <Nav>
        <h3><Link className="link-enconder" href="">Usuario</Link></h3>
        <img src={brawlLogo} width="50rem"/>
        <h3><Link class="link-enconder" href="">Brawlers</Link></h3>
    </Nav>
    </>
  );
}

//Vou apagar alguns arquivos desnecessarios

export default Navbar;