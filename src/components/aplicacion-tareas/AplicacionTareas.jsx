import React from "react";
import Logo from "../../Imagenes/AplicacionTareas/tarea-logo.jpg";
import s from "./AplicacionTareas.module.css";
import ListaDeTareas from "./components/lista-tareas/ListaDeTareas";

export default function AplicacionTarea() {
  return (
    <div className={s.aplicaciontareas}>
      <div className={s.logocontenedor}>
        <img src={Logo} className={s.logo} alt="" />
      </div>

      <div className={s.listaprincipal}>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}
