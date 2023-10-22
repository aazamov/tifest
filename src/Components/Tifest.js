import React from "react";
import style from "./Tifest.module.css";
import tash from "../assets/Group180.png";

const Tifest = () => {
  return (
    <div className={style.rec}>
      <div className={style.line_f}>
        <div className={style.line_s}>
          <div className={style.line_t}>
            <div className={style.tif_box}>
              <div className={style.tif_desc}>
                <h2>Tiffest-2022</h2>
                <p>Tiffest-2022</p>
              </div>
              <div className={style.tif_img_text}>
                <div>
                  <p>
                    XIV Ташкентский международный кинофестиваль (далее -
                    Фестиваль) проводится в целях сохранения и развития вековых
                    традиций национального киноискусства, дальнейшего развития
                    культурно- просветительской деятельности в Республике
                    Узбекистан и развития культурных связей на международном
                    уровне, воспитания патриотизма, укрепления дружбы и братства
                    между народами, расширения масштабов творческого
                    сотрудничества различных стран, возрождения прославленного
                    Ташкентского международного кинофестиваля, а также
                    обеспечения исполнения Указа Президента Республики
                    Узбекистан от 7 апреля 2021 года № УП-6202 «О мерах по
                    поднятию киноискусства и киноиндустрии на качественно новый
                    уровень и дальнейшему совершенствованию системы
                    государственной поддержки отрасли».
                  </p>
                </div>
                <div className={style.tash_img}>
                  <img src={tash} alt="test" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tifest;
