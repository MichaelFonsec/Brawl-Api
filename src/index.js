import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './nav-bar/index';
import Conteudo from './container-central/index';
import Rodape from './rodape/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Conteudo />
    <Rodape />
  </React.StrictMode>
);
