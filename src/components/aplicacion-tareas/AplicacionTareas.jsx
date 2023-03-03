import React from "react";
import { useState } from "react";
import Logo from "../../Imagenes/AplicacionTareas/tarea-logo.jpg";
import s from "./AplicacionTareas.module.css";
import ListaDeTareas from "./components/lista-tareas/ListaDeTareas";
import TareaFomulario from "./components/tarea-formulario/TareaFormulario";

export default function AplicacionTarea() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      setTareas([tarea, ...tareas]);
    }
  };
  const eliminarTarea = (id) => {
    setTareas((tareas) => tareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) tarea.completada = !tarea.completada;
      return tarea;
    });

    setTareas(tareasActualizadas);
  };
  return (
    <div className={s.aplicaciontareas}>
      <h1 className={s.titleApp}>Administra tus tareas de manera facil</h1>
      <div className={s.logocontenedor}>
        <img src={Logo} className={s.logo} alt="" />
        <TareaFomulario onSubmit={agregarTarea} />
      </div>

      <div className={s.listaprincipal}>
        <h1 className={s.title}>Mis tareas</h1>
        <ListaDeTareas
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}
        />
      </div>
    </div>
  );
}
