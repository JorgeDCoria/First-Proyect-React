import React from "react";
import '../hojas-de-estilo/BotonCalculadora.css';
export default function BotonCalculadora(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={()=>  props.manejarClic(props.children)}
        >
            {props.children}
        </div>
    );
}