import "./Colaborador.css"
import {AiFillCloseCircle} from 'react-icons/ai';
import { conectaApi } from "../../conectaApi";


const Colaborador = ({colaborador}) => {
        
    async function deletarColaborador() {
        await conectaApi.deletaColaborador(colaborador.id)
    }
    
    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => (deletarColaborador())}
                />
            <div className="cabecalho" style={{background:colaborador.corDeFundoColaborador}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;