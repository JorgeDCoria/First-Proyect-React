import "./App.css";

import Contador from "./components/Contador.jsx";
import CalculadoraReact from "./components/CalculadoraReact";
import AplicacionTarea from "./components/AplicacionTareas";
import Menu from "./components/Menu/Menu";
import Testimonios from "./components/Testimonios/Testimonios";

function App() {
  return (
    <div className="App">
      <Testimonios />
      <Menu />
    </div>
  );
}

export default App;
