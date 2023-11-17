import React, { useState } from "react";
import './index.css';
import { Link } from 'react-router-dom';

function Venda() {

  const [selectedProduto, setSelectedProduto] = useState(null);

  const handleProdutoChange = (produto) => {

    const produtoData = {
      categoria: 'Categoria do Produto',
      tipo: 'Tipo do Produto',
      preco: 10,
    };

    setSelectedProduto({
      ...produto,
      ...produtoData,
    });

  };

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

      <div className='venda-content'>
        <h2>Venda</h2>

        <label>
          Categoria: 
                   
          <select>
            <option value="categoria1">Categoria 1</option>
          </select>

        </label>

        <label>
          Tipo:

          <select>
            <option value="tipo1">Tipo 1</option>
          </select>

        </label>

        <label>
          Produto:

          <select onChange={(e) => handleProdutoChange(e.target.value)}>
            <option value="produto1">Produto 1</option>
          </select>

        </label>

        {selectedProduto && (
          <div>

            <h3>Atributos do Produto:</h3>
            <p>Categoria: {selectedProduto.categoria}</p>
            <p>Tipo: {selectedProduto.tipo}</p>
            <p>Preço: R${selectedProduto.preco.toFixed(2)}</p>

            <label>
              Quantidade:
              <input type="number" min="1" defaultValue="1" />
            </label>

          </div>

        )}

      </div>

    </div>
    
  );
}

export default Venda;
