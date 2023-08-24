import "./Secao.css"
import Colaborador from "../Colaborador";
const Secao = ({tituloSecao, corDeFundo, colaboradores}) => {
    
    return (
        <div className="container-secao" style={{background:corDeFundo}}>
            <h2>{tituloSecao}</h2>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador 
                                                        key={colaborador.id} 
                                                        nome={colaborador.nome} 
                                                        cargo={colaborador.cargo} 
                                                        imagem={colaborador.imagem}
                                                        corDeFundoColaborador={colaborador.cor}
                                                        />)}
            </div>
        </div>
    );
}

export default Secao;