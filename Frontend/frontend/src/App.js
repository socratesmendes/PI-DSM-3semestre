import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Cadastro from './components/Cadastro';
import Vendas from './components/Vendas';
import Consulta from './components/Consulta';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/consulta" element={<Consulta />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
