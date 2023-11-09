import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (

    <div className="Sidebar">

      <h2>Menu</h2>

      <ul>

        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/vendas">Vendas</Link></li>
        <li><Link to="/consulta">Consulta</Link></li>

      </ul>

    </div>

  );

};

export default Sidebar;