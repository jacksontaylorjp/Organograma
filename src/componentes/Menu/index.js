import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <div className="menu">
            <Link className="link" to="/">Início</Link>
            <Link className="link" to="/cadastro">Cadastrar colaborador</Link>
        </div>
    );
}

export default Menu;
