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
      <button onClick={backHome} className={s.volver}>
        Volver
      </button>
      <Outlet />
    </div>
  );
};

export default Home;
