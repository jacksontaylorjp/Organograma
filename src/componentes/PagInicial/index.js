import "./PagInicial.css";
import Secao from "../Secao";
import { conectaApi } from "../../conectaApi";
import { useState, useEffect } from "react";

const PagInicial = () => {

  const [secoes, setSecoes] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  //criando um state para atualizar o componente seção após a deletar um colaborador.
  const [update, setUpdate] = useState(false);
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
  }, [update]); // A dependência vazia garante que o efeito só é executado uma vez após a montagem
                //quando o update for alterado, o useEffect será executado novamente.

  //atualizando o componente seção após a deletar um colaborador.
  function updateTela() {
      // buscaData(); poderia também ser usado para atualizar a tela, mas com o state ocorre apenas uma busca na api.
      setUpdate(!update);//quando o colaborador for excluido será chamado a função updateTela, com isso o setUpdate irá receber o oposto do update.
                        //desse modo, o useEffect será executado novamente, pois esta monitorando o update.Portanto, executando a função buscaData.
  }

  return (
    <div className="PagInicial">
      {secoes.map(secao => <Secao 
                                key={secao.id} 
                                tituloSecao={secao.nome} 
                                corDeFundo={secao.cor} 
                                colaboradores={colaboradores.filter(colaborador => colaborador.secao === secao.nome)}
                                aoDeletar={updateTela}
                                />
                                )}
    </div>
  );
}

export default PagInicial;