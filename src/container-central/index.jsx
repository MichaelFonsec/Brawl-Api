import './index.css';
import React from 'react';

function Conteudo() {
  return (
    <div class="box-principal">
      <a id="informacao">
          <h7>
              Esta ferramenta Tem o intuito de ser utilizada para ver estatisticas de brawlers,
              Podendo Ate mesmo ser utilizada para visualizar as estatisticas de todos os usuarios e amigos.
          </h7>
      </a>
      <a id="textInicio">Vamos Construir utilizando Brawl Stars Api</a>
      <button id="btn_Inicio" onClick={mudarCor}>Sou Novo por Aqui</button>
    </div>
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