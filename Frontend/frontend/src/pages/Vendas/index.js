import './index.css';
import { Link } from 'react-router-dom';

function Venda() {
  return (    
    <div>

      <nav>

        <h1>.Ease</h1>

        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>

          <li>
            <Link to="/consulta">Consulta</Link>
          </li>

          <li>
            <Link to="/vendas">Vendas</Link>
          </li>

        </ul>

      </nav>

    </div>
  );
}

export default Venda;