import React, { useState } from "react";
import './index.css';
import { Link } from 'react-router-dom';

function Consulta() {

  const [formProduto, setFormProduto] = useState(false)
  const [formCliente, setFormCliente] = useState(false)
  const [formVenda, setFormVenda] = useState(false)

  const handleFormProduto = () => {
    setFormProduto(!formProduto);
    setFormCliente(false);
    setFormVenda(false);
  }

  const handleFormCliente = () => {
    setFormProduto(false);
    setFormCliente(!formCliente);
    setFormVenda(false);
  }

  const handleFormVenda = () => {
    setFormProduto(false);
    setFormCliente(false);
    setFormVenda(!formVenda);
  }

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

      <div className='buttons'>

        <button onClick={handleFormProduto}>Produto</button>

        {formProduto && (
          <form>

            <label>
              Nome:
              <input type="text" />
            </label>

            <label>
              Preço:
              <input type="text" />
            </label>

            <label>
              Tipo:
              <input type="text" />
            </label>

            <label>
              Categoria:
              <input type="text" />
            </label>

            <label>
              Cor:
              <input type="text" />
            </label>

            <button type="submit">Consultar</button>
            
          </form>
        )}

        <button onClick={handleFormCliente}>Cliente</button>

        {formCliente && (
          <form>

            <label>
              Nome:
              <input type="text" />
            </label>

            <label>
              CNPJ:
              <input type="text" />
            </label>

            <label>
              Telefone:
              <input type="text" />
            </label>

            <label>
              E-mail:
              <input type="text" />
            </label>

            <button type="submit">Consultar</button>

          </form>
        )}

        <button onClick={handleFormVenda}>Vendas</button>

        {formVenda && (
          <form>

            <label>
              Cliente:
              <input type="text" />
            </label>

            <label>
              Produto:
              <input type="text" />
            </label>

            <label>
              Data do Pedido:
              <input type="text" />
            </label>

            <label>
              Código da Venda:
              <input type="text" />
            </label>

            <label>
              Preço:
              <input type="text" />
            </label>

            <button type="submit">Consultar</button>

          </form>

        )}

      </div>

    </div>
    
  );

}

export default Consulta;
