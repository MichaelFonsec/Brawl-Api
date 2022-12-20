import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './nav-bar/index';
import Conteudo from './container-central';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Conteudo />
  </React.StrictMode>
);
