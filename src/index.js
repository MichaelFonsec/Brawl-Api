import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Brawlers from './pages/brawlers';
import Home from './pages/home';
import Usuario from './pages/usuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Usuario />
    <Brawlers />
  </React.StrictMode>
);
