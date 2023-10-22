import React from "react";
import style from "./Delegat.module.css";
import Carousel from "react-elastic-carousel";
import Item2 from "./Item2";
import back_gost from "../assets/back-gost.png";
import gost1 from "../assets/gost1.png";
import gost2 from "../assets/gost2.png";

const Delegat = () => {
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
                <h2>Члены делегации</h2>
                <select>
                  <option>Алжирская Народная Демократическ...</option>
                </select>
              </div>
              <div className={style.kino_carousel}>
                <Carousel
                  showEmptySlots
                  pagination={false}
                  breakPoints={breakPoints}
                >
                  <Item2>
                    <div className={style.item2}>
                      <h2>helo wolrd</h2>

                      {/* <img className={style.img_black} src={back_gost} alt="black" /> */}
                      <img className={style.img} src={gost2} alt="helo" />
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

export default Delegat;
