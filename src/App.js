import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Home from './components/home/Home';
import CadastroJogador from './components/cadastroJogador/CadastroJogador';
import CadastroCarta from './components/cadastroCarta/CadastroCarta';
import MostrarJogador from './components/mostrarJogador/MostrarJogador';
import MostrarCartas from './components/mostrarCartas/MostrarCartas';
import MostrarCarta from './components/mostrarCarta/MostrarCarta';
import EditarJogador from './components/editarJogador/EditarJogador';
import EditarCarta from './components/editarCarta/EditarCarta';
import RemoverCarta from './components/removerCarta/RemoverCarta';
import DadosJogosJogador from './components/dadosJogosJogador/DadosJogosJogador';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastroJogador" element={<CadastroJogador />} />
          <Route path="/cadastroCarta" element={<CadastroCarta />} />
          <Route path="/mostrarJogador" element={<MostrarJogador />} />
          <Route path="/mostrarCartas" element={<MostrarCartas />} />
          <Route path="/mostrarCarta" element={<MostrarCarta />} />
          <Route path="/editarJogador" element={<EditarJogador />} />
          <Route path="/editarCarta" element={<EditarCarta />} />
          <Route path="/removerCarta" element={<RemoverCarta />} />
          <Route path="/dadosJogosJogador" element={<DadosJogosJogador />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// FALTAAAAAAAAAAAAAAAAAAAAAAA
// Editar carta
// Editar jogador
// Ver carta específica

// scss
// #1a4178
// #a19a31