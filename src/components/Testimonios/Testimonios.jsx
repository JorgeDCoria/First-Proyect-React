import React from "react";
import Testimonio from "./Testimonio/Testimonio";
import s from "./Testimonios.module.css";

const Testimonios = () => {
  const data = [
    {
      nombre: "emma",
      image: "emma",
      empresa: "Spotify",
      pais: "Suecia",
      cargo: "Ingeniera",
      testimonio: "",
    },
    {
      nombre: "sarah",
      image: "sarah",
      empresa: "Windows",
      pais: "Colombia",
      cargo: "Developer",
      testimonio: "",
    },
    {
      nombre: "shawn",
      image: "shawn",
      empresa: "Holcim",
      pais: "Milan",
      cargo: "Arquitecto",
      testimonio: "",
    },
  ];
  return (
    <div className={s.contenedor}>
      <h1 className={s.title}>Renderizado de tarjetas</h1>
      {data.map((test) => (
        <Testimonio
          key={test.nombre}
          nombre={test.nombre}
          pais={test.pais}
          empresa={test.empresa}
          imagen={test.image}
          testimonio={test.testimonio}
        />
      ))}
    </div>
  );
};

export default Testimonios;
