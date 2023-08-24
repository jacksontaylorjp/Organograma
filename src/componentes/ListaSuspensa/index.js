import "./ListaSuspensa.css"

const ListaSuspensa = ({label, itens, valor, aoAlterado}) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select 
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                >
                <option />
                {(itens !== undefined ) ? itens.map(item => { return (<option key={item.nome}>{item.nome}</option>)}) : ""}
            </select>
        </div>
        );
}

export default ListaSuspensa;