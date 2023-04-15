import "./App.css"
import TelaConta from "./pages/TelaConta";
import TelaDerivados from "./pages/TelaDerivados";
import TelaManteiga from "./pages/TelaManteiga";
import TelaPrincipal from "./pages/TelaPrincipal";
import TelaQueijos from './pages/TelaQueijos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaRegistros from "./pages/TelaRegistros";
import TelaEstoque from "./pages/TelaEstoque";
import TelaEntregas from "./pages/TelaEntregas";
import TelaCatalogo from "./pages/TelaCatalogo";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TelaPrincipal/>} />
          <Route path="/TelaQueijos" element={<TelaQueijos/>} />
          <Route path="/TelaDerivados" element={<TelaDerivados/>} />
          <Route path="/TelaManteiga" element={<TelaManteiga/>} />
          <Route path="/TelaConta" element={<TelaConta/>} />
          <Route path="/TelaRegistros" element={<TelaRegistros/>} />
          <Route path="/TelaEstoque" element={<TelaEstoque/>} />
          <Route path="/TelaEntregas" element={<TelaEntregas/>} />
          <Route path="/TelaCatalogo" element={<TelaCatalogo/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
