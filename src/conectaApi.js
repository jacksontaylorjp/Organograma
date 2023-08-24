//GET na API
var listaColaboradores = [];
async function colaboradores (){
    const res = await fetch("http://localhost:3000/colaboradores");
    listaColaboradores = await res.json();
    return listaColaboradores;
}