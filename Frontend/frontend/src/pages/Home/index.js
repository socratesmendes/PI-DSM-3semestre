import './index.css';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div>      

      <div className='sidemenu'>

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

      </div>

    </div>
    
  );
}

export default Home;
