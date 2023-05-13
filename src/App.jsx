import React from "react";
import './App.css';

import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao"
import Cabecalho from './componentes/cabecalho/Cabecalho';
import Rodape from './componentes/rodape/Rodape';
import api from './api'
import Curriculo from "./componentes/curriculo/Curriculo";
import Portfolio from "./componentes/portfolio/Portfolio";
import Contato from "./componentes/contato/Contato";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {

  const [informacoes, setInformacoes] = React.useState({})
  const [curriculo, setCurriculo] = React.useState({})
  const [portfolio, setPortfolio] = React.useState([])

  const fetchDados = async () => {
    try {

      const informacao = await api.get(`/informacoes/1`)
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      });

      const experienciaAcademica = await api.get(`/experiencias?tipo=academico`);
      const experienciaProfissional = await api.get(`/experiencias?tipo=profissional`);

      setCurriculo({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });
      
      const portfolio = await api.get(`/portfolio`);
      setPortfolio(portfolio.data)

    } catch (error) {
      console.log('Erro ao buscar dados:', error);
    }
  };

    React.useEffect(() => {
      fetchDados();
    }, [])

  return (

    <>

      <Cabecalho informacoes={informacoes}></Cabecalho>

      <BrowserRouter> 

       <BarraNavegacao></BarraNavegacao>

        <Routes> 
          <Route index element = {<Curriculo curriculo={curriculo} />} />
          <Route path= "portfolio" element={<Portfolio portfolio={portfolio}/>} />
          <Route path= "contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>


      <Rodape></Rodape>

    </>
  )
}

export default App;
