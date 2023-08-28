import "./PagInicial.css";
import Secao from "../Secao";
import { conectaApi } from "../../conectaApi";
import { useState, useEffect } from "react";

const PagInicial = () => {

  const [secoes, setSecoes] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);

  //atualizando o state com os dados da api
  async function buscaData() {
    const secoesData = await conectaApi.secoes();
    const colaboradoresData = await conectaApi.colaboradores();
    setSecoes(secoesData);
    setColaboradores(colaboradoresData);
  }

  //usando o useEfect para controlar os efeitos colaterias do fetch da api
  useEffect(() => {
    buscaData(); // Chama a função para buscar os dados quando o componente montar
  }, []); // A dependência vazia garante que o efeito só é executado uma vez após a montagem

  //atualizando o componente seção após a deletar um colaborador.
  function deletandoColaborador() {
    buscaData();
  }

  return (
    <div className="PagInicial">
      {secoes.map(secao => <Secao 
                                key={secao.id} 
                                tituloSecao={secao.nome} 
                                corDeFundo={secao.cor} 
                                colaboradores={colaboradores.filter(colaborador => colaborador.secao === secao.nome)}
                                aoDeletar={deletandoColaborador}
                                />
                                )}
    </div>
  );
}

export default PagInicial;