import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PagInicial from './componentes/PagInicial';
import PagCadastro from './componentes/PagCadastro';
import Banner from "./componentes/Banner";
import Menu from "./componentes/Menu";
import { useState } from "react";


function App() {

  return (
    <BrowserRouter>
      <Banner/>
      <Menu/>
      <Routes>
        {/* Como dados no app, que é pai dos outros arquivos, caso seja necessário usar os dados em um arquivo filho, do filho... é necessário 
        ir passando os parâmetros por toda hieraquia */}
        <Route path="/" element={<PagInicial/>} />
        <Route path="/cadastro" element={<PagCadastro/>} />
        <Route path="*" element={<h1>Página Não Encotrada.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
