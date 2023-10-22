import React from "react";
import style from "./Kinopokazi.module.css";
import Carousel from "react-elastic-carousel";
import hello from "../assets/five1.png";
import hello1 from "../assets/five2.png";
import hello2 from "../assets/five3.png";
import hello3 from "../assets/five4.png";
import Item2 from "./Item2";

const Kinopokazi = () => {
  const breakPoints = [
    { width: 350, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1120, itemsToShow: 4 },
  ];
  return (
    <div className={style.kino_main}>
      <div className={style.kino_box}>
        <div className={style.kino_desc}>
          <h2>Кинопоказы</h2>
          <select>
            <option>Алжирская Народная Демократическ...</option>
          </select>
        </div>
        <div className={style.kino_carousel}>
          <Carousel pagination={false} breakPoints={breakPoints}>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={hello} alt="helo" />
              </div>
            </Item2>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={hello1} alt="helo" />
              </div>
            </Item2>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={hello2} alt="helo" />
              </div>
            </Item2>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={hello3} alt="helo" />
              </div>
            </Item2>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={hello} alt="helo" />
              </div>
            </Item2>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={hello3} alt="helo" />
              </div>
            </Item2>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Kinopokazi;
