import { Boxprincipal } from './style';
import { useState } from 'react';

const Conteudo = () =>{
  const [exibir, setExibir] = useState(false);
  
  const mudarCor = ()=>{
    setExibir(exibir === false);
  };

  return (
    <Boxprincipal>
      <div style={{maxWidth: "500px"}}>
        {
          exibir === false ? 
          <h7>
            Esta ferramenta Tem o intuito de ser utilizada para ver estatisticas de brawlers,
            Podendo Ate mesmo ser utilizada para visualizar as estatisticas de todos os usuarios e amigos.
          </h7>
          :
          <p>Vamos Construir utilizando Brawl Stars Api</p>
        }
      </div>
      <button onClick={mudarCor}>Sou Novo por Aqui</button>
    </Boxprincipal>
  );
}

export default Conteudo;