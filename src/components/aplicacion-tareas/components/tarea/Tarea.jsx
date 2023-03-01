import React from "react";
import s from "./Tarea.module.css";
import { AiFillDelete } from "react-icons/ai";
export default function Tarea({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) {
  return (
    <div
      className={completada ? `${s.contenedor} ${s.completada}` : s.contenedor}
    >
      <div onClick={() => completarTarea(id)} className={s.texto}>
        {texto}
      </div>

      <div className={s.contenedoriconos} onClick={() => eliminarTarea(id)}>
        <AiFillDelete className={s.icono} />
      </div>
    </div>
  );
}
