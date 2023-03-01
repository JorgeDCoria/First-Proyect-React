import React from "react";
import s from "./BotonClear.module.css";

const BotonClear = (props) => (
  <div className={s.botonclear} onClick={props.manejarClear}>
    {props.children}
  </div>
);
export default BotonClear;
