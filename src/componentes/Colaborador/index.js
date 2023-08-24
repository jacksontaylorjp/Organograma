import "./Colaborador.css"
// import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

const Colaborador = (colaborador) => {
    return (
        <div className="colaborador">
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