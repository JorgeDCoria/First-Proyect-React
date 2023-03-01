import React from 'react';
import Logo from '../Imagenes/AplicacionTareas/tarea-logo.jpg';
import '../hojas-de-estilo/AplicacionTareas.css';
import ListaDeTareas from './ListaDeTareas';

export default function AplicacionTarea(){
  

  return(
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={Logo}
          className='tareas-logo'
          alt="" />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
        
      </div>

    </div>
  );
};