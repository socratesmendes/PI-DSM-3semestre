import React, { useState } from "react";
import './index.css';
import { Link } from 'react-router-dom';

function Cadastro() {

  const[formProduto, setFormProduto] = useState(false)
  const[formCliente, setFormCliente] = useState(true)
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
    <form onSubmit={(data) => console.log(data)}>

    <div>
      <label>
        Nome:
      </label>
        <input type="text" id="cliente" value={formCliente} />
    </div>

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
  );
}

export default Cadastro;