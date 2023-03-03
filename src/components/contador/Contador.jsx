import React, { useState } from "react";
import s from "./Contador.module.css";
import Cuenta from "./components/cuenta/Cuenta";
import Boton from "./components/boton/Boton";
export default function Contador() {
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics((numClics) => numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics((numClics) => (numClics = 0));
  };
  return (
    <div className={s.contenedor}>
      <div className={s.contenedorlog}>
        <h1 className={s.title}>Contador</h1>
      </div>
      <div className={s.contenedortwo}>
        <Cuenta numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto={"Reiniciar"}
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}
