import React from "react";
import style from "./Main.module.css";
import stat from "../assets/Статуэтка 2.png";
import aniv from "../assets/ENG 1.png";

const Main = () => {
  return (
    <div className={style.main_box}>
      <div className={style.main_cont}>
        <div className={style.statu}>
          <img src={stat} alt="statuya" />
        </div>

        <div className={style.aniv}>
          <img src={aniv} alt="anivarsary" />
        </div>
      </div>
    </div>
  );
};

export default Main;
