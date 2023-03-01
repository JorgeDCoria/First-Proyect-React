import React from 'react';
import '../hojas-de-estilo/Tarea.css';
 import { AiFillDelete } from "react-icons/ai";
export default function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){

  return(
    <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
      <div onClick={()=>completarTarea(id)} className='tarea-texto'>
        {texto}
      </div>

      <div 
        className='tarea-contenedor-iconos'
        onClick={()=>eliminarTarea(id)}>
        <AiFillDelete className='tarea-icono' />
      </div>

    </div>
  );
}