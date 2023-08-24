import "./PagCadastro.css"
import Formulario from "../Formulario";
import Data from "../../db";

const PagCadastro = () => {
    const {colaboradores, setColaboradores} = Data();
    console.log(colaboradores);
    return (
        <div className="PagCadastro">
            <Formulario 
                aoCadastrar={colaborador => {setColaboradores([...colaboradores, colaborador])}}
            />
        </div>
    );
}

export default PagCadastro;