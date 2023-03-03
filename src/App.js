import "./App.css";

import Contador from "./components/contador/Contador.jsx";
import CalculadoraReact from "./components/calculadora/CalculadoraReact";
import AplicacionTarea from "./components/aplicacion-tareas/AplicacionTareas";
import Menu from "./components/Menu/Menu";
import Testimonios from "./components/Testimonios/Testimonios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/app/" element={<Home />}>
          <Route path="testimonios" element={<Testimonios />} />
          <Route path="calculadora" element={<CalculadoraReact />} />
          <Route path="contador" element={<Contador />} />
          <Route path="tareas" element={<AplicacionTarea />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
