import React from "react";
import s from "./Testimonio.module.css";
export default function Testimonio(props) {
  return (
    <div className={s.contenedortestimonio}>
      <img
        className={s.imagentestimonio}
        src={require(`../../../Imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto de portada"
      />

      <div className={s.contenedortextotestimonio}>
        <p className={s.nombretestimonio}>
          <strong className={s.resaltar}>{props.nombre} </strong> en
          {props.pais}
        </p>
        <p className={s.cargotestimonio}>
          {props.cargo} en{" "}
          <strong className={s.resaltar}>{props.empresa} </strong>
        </p>
        <p className={s.textotestimonio}>
          {props.testimonio === ""
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur animi quidem, magni culpa, accusamus autem vel provident eos aut accusantium eligendi tempora alias tenetur harum, eveniet pariatur fugit qui nesciunt."
            : s.testimonio}{" "}
        </p>
      </div>
    </div>
  );
}
