import React, { useState } from "react";
import './index.css';
import { Link } from 'react-router-dom';

function Cadastro() {

  const[formProduto, setFormProduto] = useState(false)
  const[formCliente, setFormCliente] = useState(false)
  const[formCategoria, setFormCategoria] = useState(false)
  const[formTipo, setFormTipo] = useState(false)

  const handleFormProduto = () => {
    setFormProduto(!formProduto);
    setFormCliente(false);
    setFormCategoria(false);
    setFormTipo(false);
  }

  const handleFormCliente = () => {
    setFormProduto(false);
    setFormCliente(!formCliente);
    setFormCategoria(false);
    setFormTipo(false);
  }

  const handleFormCategoria = () => {
    setFormProduto(false);
    setFormCliente(false);
    setFormCategoria(!formCategoria);
    setFormTipo(false);
  }

  const handleFormTipo = () => {
    setFormProduto(false);
    setFormCliente(false);
    setFormCategoria(false);
    setFormTipo(!formTipo);
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

            <button type="submit">Cadastrar</button>
            
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

          <button type="submit">Cadastrar</button>

        </form>
      )}

        <button onClick={handleFormCategoria}>Categoria</button>
        {formCategoria && (
          <form>

            <label>
              Nome:
              <input type="text" />
            </label>

            <button type="submit">Cadastrar</button>

          </form>
        )}

        <button onClick={handleFormTipo}>Tipo</button>
        {formTipo && (
          <form>

            <label>
              Nome:
              <input type="text" />
            </label>

            <button type="submit">Cadastrar</button>

          </form>
          )}

      </div>

    </div>
  );
}

export default Cadastro;