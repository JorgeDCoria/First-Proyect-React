import React from "react";
import s from "./Menu.module.css";
const Menu = () => {
  const apps = ["cards", "contador", "calculadora", "Admin Tareas"];
  return (
    <div className={s.container}>
      <div className={s.subcontainer}>
        <h1>My First Apps</h1>
        <ul className={s.lista}>
          {apps.map((t, i) => (
            <li key={i} className={s.item}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
