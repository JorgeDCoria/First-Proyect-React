import React from "react";
import s from "./BotonCalculadora.module.css";
export default function BotonCalculadora(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`${s.botoncontenedor} ${
        esOperador(props.children) ? s.operador : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}
