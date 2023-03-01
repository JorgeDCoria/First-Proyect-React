import React from "react";
import s from "./Boton.module.css";

export default function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={`${s.button} ${
        esBotonDeClic ? s.botonclic : s.botonreiniciar
      }`}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}
