import React from "react";
import style from "./Gosti.module.css";
import Carousel from "react-elastic-carousel";
import gost1 from "../assets/gost1.png";
import gost2 from "../assets/gost2.png";
import rec1 from "../assets/Rectangle205.png";
import rec2 from "../assets/Rectangle206.png";
import rec3 from "../assets/Rectangle207.png";
import back_gost from "../assets/back-gost.png";
import Item2 from "./Item2";

const Gosti = () => {
  const breakPoints = [
    { width: 350, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1120, itemsToShow: 4 },
  ];
  return (
    <div className={style.kino_main}>
      <div className={style.line_f}>
        <div className={style.line_s}>
          <div className={style.line_t}>
            <div className={style.kino_box}>
              <div className={style.kino_desc}>
                <h2>Гости</h2>
                <select>
                  <option>Все</option>
                </select>
              </div>
              <div className={style.kino_carousel}>
                <Carousel pagination={false} breakPoints={breakPoints}>
                  <Item2>
                    <div className={style.item2}>
                      <h2>helo wolrd</h2>
                      <img
                        className={style.img_black}
                        src={back_gost}
                        alt="black"
                      />

                      <img className={style.img} src={gost1} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <h2>Миррахимов Миршерзод</h2>
                      <img
                        className={style.img_black}
                        src={back_gost}
                        alt="black"
                      />
                      <img className={style.img} src={gost2} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <h2>Гульназар Эшонкулова</h2>
                      <img
                        className={style.img_black}
                        src={back_gost}
                        alt="black"
                      />
                      <img className={style.img} src={gost2} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <h2>helo wolrd</h2>
                      <img
                        className={style.img_black}
                        src={back_gost}
                        alt="black"
                      />
                      <img className={style.img} src={gost1} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <h2>helo wolrd</h2>
                      <img
                        className={style.img_black}
                        src={back_gost}
                        alt="black"
                      />
                      <img className={style.img} src={gost2} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <h2>helo wolrd</h2>
                      <img
                        className={style.img_black}
                        src={back_gost}
                        alt="black"
                      />
                      <img className={style.img} src={gost1} alt="helo" />
                    </div>
                  </Item2>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gosti;
