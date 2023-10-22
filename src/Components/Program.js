import React from "react";
import style from "./Program.module.css";
import ProItem from "./Program/ProItem";

const Program = () => {
  return (
    <div className={style.program}>
      <div className={style.program_box}>
        <div className={style.program_desc}>
          <h2>Программа</h2>
          <button>Скачать</button>
        </div>
        <div className={style.item}>
          <ProItem />
        </div>
      </div>
    </div>
  ); 
};

export default Program;
