import React from "react";
import style from "./Master.module.css";
import ProItem from "./Program/ProItem";

const Master = () => {
  return (
    <div className={style.program}>
      <div className={style.line_f}>
        <div className={style.line_s}>
          <div className={style.line_t}>
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
        </div>
      </div>
    </div>
  );
};

export default Master;
