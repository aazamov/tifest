import React from "react";
import style from "./Partner.module.css";
import partner from "../assets/partner.png";

const Partner = () => {
  return (
    <div className={style.partner}>
      <div className={style.partner_box}>
        <div className={style.program_desc}>
          <h2>Программа</h2>
        </div>
        <div className={style.partner_img}>
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
          <img src={partner} alt="partner" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
