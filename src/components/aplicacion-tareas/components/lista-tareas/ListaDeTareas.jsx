import React from "react";
import s from "./ListaDeTareas.module.css";
import Tarea from "../tarea/Tarea";

export default function ListaDeTareas(props) {
  return (
    <>
      <div className={s.contenedor}>
        {props.tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={props.completarTarea}
            eliminarTarea={props.eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}
