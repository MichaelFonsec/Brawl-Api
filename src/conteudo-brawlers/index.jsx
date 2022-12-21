import { BoxBrawl } from './style';
import React from 'react';

function ConteudoBrawlers() {
  return (
    <BoxBrawl>
      adwdwna
    </BoxBrawl>
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

export default ConteudoBrawlers;