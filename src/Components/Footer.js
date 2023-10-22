import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.line_f}>
        <div className={style.line_s}>
          <div className={style.line_t}>
            <div className={style.footer_box}>
              <div className={style.footer_desc}>
                <h2>Контакты</h2>
              </div>
              <div className={style.info}>
                <div>
                  <h3>Телефоны:</h3>
                  <p>+998 99 999 99 99</p>
                  <p>+998 99 999 99 99</p>
                </div>
                <div>
                  <h3>Эл.почта:</h3>
                  <p>@Tiffest123.@gmail.com</p>
                </div>
                <div>
                  <h3>Соц. сеть:</h3>
                  <p>Instagram</p>
                  <p>Instagram</p>
                  <p>Instagram</p>
                </div>
                <div>
                  <h3>Адрес:</h3>
                  <p>+г. Ташкент ул. Чиланзар 1А, 100027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
