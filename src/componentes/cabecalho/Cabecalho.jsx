import React from 'react';

import "./Cabecalho.css";

function Cabecalho(props) {

  const {nome, cargo, foto} = props.informacoes;

    return (

      <header>
    
        <img src={foto} alt="Foto Pessoal" />
        <h1 id="nome perfil">{nome}</h1>
        <h1 id="eventoSubtitulo">{cargo}</h1>
  
      </header >

    )


}

export default Cabecalho;