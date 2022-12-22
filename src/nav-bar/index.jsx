import { Nav } from './style';
import React from 'react';
import { Link } from 'react-router-dom';
import brawlLogo from '../assets/wallpapers/brawl-stars-logo.png';

function Navbar() {
  return (
    <>
    <Nav>
        <Link to='/usuario'><h3>Usuario</h3></Link>
        <Link to='/'><img src={brawlLogo} width="50rem"/></Link>
        <Link to='/brawlers'><h3>Brawlers</h3></Link>
    </Nav>
    </>
  );
}

//Vou apagar alguns arquivos desnecessarios

export default Navbar;