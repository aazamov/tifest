import React from "react";
import style from "./Media.module.css";
import imag from "../assets/images.png";
import imag1 from "../assets/image1.png";

const Media = () => {
  return (
    <div className={style.media}>
      <div className={style.line_f}>
        <div className={style.line_s}>
          <div className={style.line_t}>
            <div className={style.media_box}>
              <div className={style.media_desc}>
                <h2>Медиа</h2>
                <select>
                  <option>2023 г</option>
                </select>
              </div>
              <div className={style.images}>
                <p>Фотографии</p>
                <span>Смотереть</span>
              </div>
              <div className={style.all_img}>
                <div className={style.grid_img}>
                  <img src={imag} alt="hello" />
                  <img src={imag} alt="hello" />
                </div>
                <div className={style.single_img}>
                  <img src={imag1} alt="new" />
                </div>
                <div className={style.grid_img}>
                  <img src={imag} alt="hello" />
                  <img src={imag} alt="hello" />
                </div>
                <div className={style.single_img}>
                  <img src={imag1} alt="new" />
                </div>
                <div className={style.grid_img}>
                  <img src={imag} alt="hello" />
                  <img src={imag} alt="hello" />
                </div>
                <div className={style.single_img}>
                  <img src={imag1} alt="new" />
                </div>
              </div>
              <div className={style.images}>
                <p>Фотографии</p>
                <span>Смотереть</span>
              </div>
              <div className={style.all_img}>
                <div className={style.grid_img}>
                  <img src={imag} alt="hello" />
                  <img src={imag} alt="hello" />
                </div>
                <div className={style.single_img}>
                  <img src={imag1} alt="new" />
                </div>
                <div className={style.grid_img}>
                  <img src={imag} alt="hello" />
                  <img src={imag} alt="hello" />
                </div>
                <div className={style.single_img}>
                  <img src={imag1} alt="new" />
                </div>
                <div className={style.grid_img}>
                  <img src={imag} alt="hello" />
                  <img src={imag} alt="hello" />
                </div>
                <div className={style.single_img}>
                  <img src={imag1} alt="new" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
