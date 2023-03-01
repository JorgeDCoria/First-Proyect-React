import React from "react";
import s from "./Cuenta.module.css";

export default function Cuenta({ numClics }) {
  return <div className={s.contador}>{numClics}</div>;
}
