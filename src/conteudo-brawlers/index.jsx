import React from 'react';
import { BoxBrawl } from './style';

function ConteudoBrawlers() {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ0NjU5M2QyLTI4MTktNDY2YS1iMzU5LTBiNzFkOTJhZTExYiIsImlhdCI6MTY3NDgzNTA2MCwic3ViIjoiZGV2ZWxvcGVyLzFiNTZmNTJiLWQ3ZDQtYjZlMi1jNGZmLWIzN2RlMjdhYjM0MyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTA3LjAuMC4xIl0sInR5cGUiOiJjbGllbnQifV19.TKCe0k2EhTGRUkVsfey4fALfKTH23Li5noRZe_DBAfreztbil2xdbUv5V-jRacHZrvYkM5FOk4Pd8jY9xZOufw';

  const Procurar = async () =>{
    try{
      const supercell = require('supercell-api');
      const api = new supercell.BrawlStars(`Bearer ${token}`);
      const brawlersData = await api.getPlayer('#PQL822QC');
      /*
      const brawlersData = await axios.get(`https://api.brawlstars.com/v1/event`
      ,{
        'headers': {
          'Accept':`application/json`,
          'Authorization': `Bearer ${token}`
        },
        'config': {
          'method': 'get'
        }
      }
      );*/
      console.log(brawlersData);
    }
    catch{
      console.log("Error");
    }
  }

  return (
    <BoxBrawl>
      <div id="box">
        Brawlers
        <button onClick={Procurar}>Pesquisar</button>
      </div>
    </BoxBrawl>
  );
}

export default ConteudoBrawlers;