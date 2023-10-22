import React from "react";
import style from "./ProItem.module.css";

const data = [
  { id: 1, date: "20 сениябир 2022 год", number: "17" },
  { id: 1, date: "20 сениябир 2022 год", number: "16" },
  { id: 1, date: "20 сениябир 2022 год", number: "14" },
  { id: 1, date: "20 сениябир 2022 год", number: "18" },
  { id: 1, date: "20 сениябир 2022 год", number: "12" },
];

const ProItem = () => {
  return (
    <div className={style.main_box}>
      {data.map((item) => (
        <div className={style.box} key={item.number}>
          <h2>{item.date}</h2>
          <div className={style.num}>
            <p>Количество событие:</p>
            <span>{item.number}</span>
          </div>
          <a href="/">Показать события</a>
        </div>
      ))}
    </div>
  );
};

export default ProItem;
