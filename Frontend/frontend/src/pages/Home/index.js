import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'; // Importe o React Router se estiver usando roteamento
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Use Link para navegar entre as páginas */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <h1>.Ease</h1>
      
    </div>
  );
}

export default Home;