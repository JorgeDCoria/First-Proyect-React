import React, { useState } from "react";
import s from "./TareaFormulario.module.css";
import { v4 as uuidv4 } from "uuid";
export default function TareaFomulario(props) {
  const [input, setInput] = useState("");
  const manejarCambio = (e) => {
    setInput(e.target.value);
  };
  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
    setInput("");
  };
  return (
    <form onSubmit={manejarEnvio} className={s.formulario} action="">
      <input
        type="text"
        className={s.input}
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className={s.boton}>Agregar Tarea</button>
    </form>
  );
}
