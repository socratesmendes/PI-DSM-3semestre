import './index.css';
import { Link } from 'react-router-dom';

function Venda() {
  return (    
    <div>

      <h1>.Ease</h1>

        <nav>

        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      </nav>
      
    </div>
  );
}

export default Venda;