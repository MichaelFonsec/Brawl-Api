import { Boxprincipal } from './style'
import React from 'react'
import { Link } from 'react-router-dom'

function Conteudo() {
  return (
    <Boxprincipal>
      <Link id="informacao">
          <h7>
              Esta ferramenta Tem o intuito de ser utilizada para ver estatisticas de brawlers,
              Podendo Ate mesmo ser utilizada para visualizar as estatisticas de todos os usuarios e amigos.
          </h7>
      </Link>
      <Link id="textInicio">Vamos Construir utilizando Brawl Stars Api</Link>
      <button id="btn_Inicio" onClick={mudarCor}>Sou Novo por Aqui</button>
    </Boxprincipal>
  );
}

let exibir = true;

function mudarCor() {
  const informacao = document.getElementById('informacao');
  const textinicio = document.getElementById('textInicio');

  if (exibir == true){
    informacao.style.display = 'block';
    textinicio.style.display = 'none';
    exibir = false;
  }
  else{
    informacao.style.display = 'none';
    textinicio.style.display = 'block';
    exibir = true;
  }
};

export default Conteudo;