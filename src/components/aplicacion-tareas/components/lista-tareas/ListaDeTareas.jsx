import React, { useState } from "react";
import TareaFomulario from "../tarea-formulario/TareaFormulario";
import s from "./ListaDeTareas.module.css";
import Tarea from "../tarea/Tarea";

export default function ListaDeTareas() {
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
    // setTareas( tareas => tareas.map(
    //   tarea => {
    //     if(tarea.id === id)
    //       tarea.completada = !tarea.completada
    //       return tarea;
    //   }

    // ))
  };
  return (
    <>
      <TareaFomulario onSubmit={agregarTarea} />
      <div className={s.contenedor}>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}
