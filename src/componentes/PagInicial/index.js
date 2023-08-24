import "./PagInicial.css";
import Secao from "../Secao";
import Data from "../../db";

const PagInicial = () => {
  const {secoes, colaboradores} = Data();
  return (
    <div className="PagInicial">
      {secoes.map(secao => <Secao 
                                key={secao.id} 
                                tituloSecao={secao.nome} 
                                corDeFundo={secao.cor} 
                                colaboradores={colaboradores.filter(colaborador => colaborador.secao === secao.nome)}/>)}
    </div>
  );
}

export default PagInicial;