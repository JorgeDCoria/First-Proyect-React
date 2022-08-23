import React, {useState} from 'react';
import Logo from '../Imagenes/Calculadora/calculadora-logo.png';
import '../hojas-de-estilo/CalculadoraReact.css';
import BotonCalculadora from './BotonCalculadora';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import {evaluate} from 'mathjs';


export default function CalculadoraReact() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput((input) => input + val);
  };
  const calcularResultado = ()=>{
    if(input){
      setInput(input => evaluate(input));
    }else{
      alert("Ingrese valores para hacer los calculos");
    }
    
  };

  return (
    <div className='calculadora-contenedor-principal'>
      <div className='calculadora-logo-contenedor'>
        <img
          src={Logo}
          alt="Logo de calculadora"
          className='calculadora-logo'
        />
      </div>
      <div className='calculadora-contenedor'>
        <Pantalla input = {input} />
        <div className='fila'>
          <BotonCalculadora manejarClic={agregarInput}>1</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>2</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>3</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>+</BotonCalculadora>
        </div>
        <div className='fila'>
          <BotonCalculadora manejarClic={agregarInput}>4</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>5</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>6</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>-</BotonCalculadora>
        </div>
        <div className='fila'>
          <BotonCalculadora manejarClic={agregarInput}>7</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>8</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>9</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>*</BotonCalculadora>
        </div>
        <div className='fila'>
          <BotonCalculadora manejarClic={calcularResultado}>=</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>0</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>.</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>/</BotonCalculadora>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput('')}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}