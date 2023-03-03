import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import s from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div className={s.container}>
      <div className={s.containerboton}>
        <div onClick={backHome} className={s.volver}>
          Volver
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
