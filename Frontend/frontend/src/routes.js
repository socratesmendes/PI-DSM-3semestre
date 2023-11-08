import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vendas from "./pages/Vendas";
import Cadastro from "./pages/Cadastro";
import Consulta from "./pages/Consulta";

function RoutesApp (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/vendas" element={<Vendas />} />
                <Route path="/consulta" element={<Consulta />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;