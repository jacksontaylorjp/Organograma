import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import Data from "../../db"
import { useState } from "react"

const Formulario = ({aoCadastrar}) => {
    const {secoes, cargos} = Data();

    const [nome, setNome] = useState("");
    const [urlImagem, setUrlImagem] = useState("");
    const [cargo, setCargo] = useState("");
    const [secao, setSecao] = useState("");

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        aoCadastrar({nome, urlImagem, cargo, secao});
    }

    return (
        <form className="formulario" onSubmit={aoSubmeter}>
            <h1>Preencha os dados abaixo:</h1>
            <CampoTexto  
                label="Nome" 
                placeholder="Informe o nome"
                //iniciando valor nome com vazio, conforme useState
                valor={nome}
                //passando o valor alterado no componente CampoTexto
                aoAlterado={valor => setNome(valor)}
                />
            <ListaSuspensa  
                label={"Cargos"} 
                itens={cargos}
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>
            <ListaSuspensa  
                label={"Seção"} 
                itens={secoes}
                valor={secao}
                aoAlterado={valor => setSecao(valor)}/>
            <CampoTexto  
                label="Imagem" 
                placeholder="Informe o url da imagem"
                valor={urlImagem}
                aoAlterado={valor => setUrlImagem(valor)}/>
            <Botao btNome="Cadastrar Colaborador"/>
        </form>
    );
}

export default Formulario;