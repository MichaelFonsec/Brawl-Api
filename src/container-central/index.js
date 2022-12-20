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
      <button id="btn_Inicio" onclick="exibirInformacoes()">Sou Novo por Aqui</button>
    </div>
  );
}

export default Conteudo;