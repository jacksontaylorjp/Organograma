import "./CampoTexto.css"

const CampoTexto = ({label, placeholder, valor, aoAlterado}) => {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                className="campo-texto"
                type="text" 
                placeholder={placeholder}
                value={valor}
                //monitorando as alterações do campo e 
                onChange={evento => aoAlterado(evento.target.value)}    
            />
        </div>
    );
}

export default CampoTexto;