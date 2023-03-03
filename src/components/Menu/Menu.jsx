import React from "react";
import { Link } from "react-router-dom";
import s from "./Menu.module.css";
const Menu = () => {
  const URL = "/app";
  const apps = [
    { url: "/testimonios", title: "Testimonios" },
    { url: "/contador", title: "contador" },
    { url: "/calculadora", title: "calculadora" },
    { url: "/tareas", title: "Admin Tareas" },
  ];

  return (
    <div className={s.container}>
      <div className={s.subcontainer}>
        <h1 className={s.title}>
          My First Apps <br /> With React
        </h1>
        <ul className={s.lista}>
          {apps.map((t, i) => (
            <li key={i} className={s.item}>
              <Link to={`${URL}${t.url}`} className={s.link}>
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
