//GET na API
var listaSecoes = [];
async function secoes (){
    const res = await fetch("http://localhost:3000/secoes");
    listaSecoes = await res.json();
    return listaSecoes;
}

var listaCargos = [];
async function cargos (){
    const res = await fetch("http://localhost:3000/cargos");
    listaCargos = await res.json();
    return listaCargos;
}

var listaColaboradores = [];
async function colaboradores (){
    const res = await fetch("http://localhost:3000/colaboradores");
    listaColaboradores = await res.json();
    return listaColaboradores;
}

//POST
async function adicionaColaborador (nome, imagem, cargo, secao){
    const res = await fetch("http://localhost:3000/colaboradores", {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        //convertendo para json string
        body: JSON.stringify({
            nome: nome,
            imagem: imagem,
            cargo: cargo,
            secao: secao
        })
    });
    if(!res.ok){
        throw new Error("Não  foi possível adicionar o colaborador.");
    }
    const resConvertido = await res.json();
    return resConvertido;
}

//DELETE
async function deletaColaborador (id){
    const res = await fetch(`http://localhost:3000/colaboradores/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "Application/json"
        }
    });
    if(!res.ok){
        throw new Error("Não foi possível deletar o colaborador.");
    }
    const resConvertido = await res.json();
    return resConvertido;
}

export const conectaApi = {
    secoes,
    cargos,
    colaboradores,
    adicionaColaborador,
    deletaColaborador
}