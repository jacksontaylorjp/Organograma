import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"
import { conectaApi } from "../../conectaApi"

//carrendo dados do json-server db.json
const secoes = await conectaApi.secoes();
const cargos = await conectaApi.cargos();


const Formulario = () => {

    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [cargo, setCargo] = useState("");
    const [secao, setSecao] = useState("");

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        adicionaColaborador();
        console.log()

    }

    async function adicionaColaborador() {
        try {
            await conectaApi.adicionaColaborador(nome, imagem, cargo, secao);
        } catch {
            alert("Não foi possível cadastrar o colaborador.")
        }
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
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}/>
            <Botao btNome="Cadastrar Colaborador"/>
        </form>
    );
}

export default Formulario;