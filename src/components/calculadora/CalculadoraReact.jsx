import React, { useState } from "react";
import Logo from "../../Imagenes/Calculadora/calculadora-logo.png";
import s from "./CalculadoraReact.module.css";
import BotonCalculadora from "./components/boton-calculadora/BotonCalculadora";
import Pantalla from "./components/pantalla/Pantalla";
import BotonClear from "./components/boton-clear/BotonClear";
import { evaluate } from "mathjs";

export default function CalculadoraReact() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput((input) => input + val);
  };
  const calcularResultado = () => {
    if (input) {
      setInput((input) => evaluate(input));
    } else {
      alert("Ingrese valores para hacer los calculos");
    }
  };

  return (
    <div className={s.calculadoracontenedorprincipal}>
      <div className={s.calculadoralogocontenedor}>
        <img
          src={Logo}
          alt="Logo de calculadora"
          className={s.calculadoralogo}
        />
      </div>
      <div className={s.calculadoracontenedor}>
        <Pantalla input={input} />
        <div className={s.fila}>
          <BotonCalculadora manejarClic={agregarInput}>1</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>2</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>3</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>+</BotonCalculadora>
        </div>
        <div className={s.fila}>
          <BotonCalculadora manejarClic={agregarInput}>4</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>5</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>6</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>-</BotonCalculadora>
        </div>
        <div className={s.fila}>
          <BotonCalculadora manejarClic={agregarInput}>7</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>8</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>9</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>*</BotonCalculadora>
        </div>
        <div className={s.fila}>
          <BotonCalculadora manejarClic={calcularResultado}>=</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>0</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>.</BotonCalculadora>
          <BotonCalculadora manejarClic={agregarInput}>/</BotonCalculadora>
        </div>
        <div className={s.fila}>
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}
