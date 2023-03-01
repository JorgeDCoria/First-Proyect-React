import "./App.css";

import Contador from "./components/contador/Contador.jsx";
import CalculadoraReact from "./components/calculadora/CalculadoraReact";
import AplicacionTarea from "./components/AplicacionTareas";
import Menu from "./components/Menu/Menu";
import Testimonios from "./components/Testimonios/Testimonios";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="testimonios" element={<Testimonios />} />
        <Route path="calculadora" element={<CalculadoraReact />} />
        <Route path="contador" element={<Contador />} />
        <Route path="tareas" element={<AplicacionTarea />} />
      </Routes>
    </div>
  );
}

export default App;
