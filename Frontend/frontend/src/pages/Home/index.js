import './index.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='sidemenu'>
        <div className='logo-container'>
          <img src="/images/l ogo.png" alt="Logo do Projeto" className='logo' />
        </div>
        <ul>
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
    </>
  );
}

export default Home;
