import { useState } from "react";

const Data = () => {

    const [secoes, setSecoes] = useState([
    {
    id: "1",
    nome: "Coordenação",
    cor: "#08807b"
    },
    {
      id: "4",
      nome: "Secretaria",
      cor: "#420b58"
    },
    {
      id: "2",
      nome: "Desenvolvimento",
      cor: "#fc913a"
    },
    {
      id: "3",
      nome: "Manutenção",
      cor: "#ff4e50"
    },  
  ])
    const [cargos, setCargos] = useState([
    {
    id: "1",
    nome: "Cargo 1",
    },
    {
    id: "2",
    nome: "Cargo 2",
    },
    {
    id: "3",
    nome: "Cargo 3",
    },
    {
    id: "4",
    nome: "Cargo 4",
    },
    
  ])

 
  const [colaboradores, setColaboradores] = useState([
    {
    id: "1",
    nome: "Pessoa 1 ",
    secao: "Coordenação",
    cargo: "Coordenador",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2a/PMPB175px_02.png",
    },
    {
    id: "2",
    nome: "Pessoa 2",
    secao: "Desenvolvimento",
    cargo: "Analista",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2a/PMPB175px_02.png",
    },
    {
    id: "3",
    nome: "Pessoa 3",
    secao: "Secretaria",
    cargo: "Secretário",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2a/PMPB175px_02.png",
    },
    {
    id: "4",
    nome: "Pessoa 4",
    secao: "Manutenção",
    cargo: "Analista",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2a/PMPB175px_02.png",
    },
    {
    id: "5",
    nome: "Pessoa 5",
    secao: "Coordenação",
    cargo: "Analista",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2a/PMPB175px_02.png",
    }
])
    return {secoes, cargos, colaboradores, setColaboradores};

}

export default Data;