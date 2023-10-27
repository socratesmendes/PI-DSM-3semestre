import React from 'react';
import { Link } from 'react-router-dom'; // Importe o React Router se estiver usando roteamento

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
        <li>
          <Link to="/vendas">Vendas</Link>
        </li>
        <li>
          <Link to="/consulta">Consulta</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;