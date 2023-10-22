import React from "react";
import Item2 from "./Item2";
import style from "./Primyer.module.css";
import Carousel from "react-elastic-carousel";
import mov1 from "../assets/five1.png";
import mov2 from "../assets/five2.png";
import mov3 from "../assets/five3.png";
import mov4 from "../assets/five4.png";

const Primyer = () => {
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
          <h2>Премьеры</h2>
          <select>
            <option>Все</option>
          </select>
        </div>
        <div className={style.kino_carousel}>
          <Carousel breakPoints={breakPoints} showEmptySlots pagination={false}>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={mov1} alt="helo" />
              </div>
            </Item2>
            <Item2>
              <div className={style.item2}>
                <img className={style.img} src={mov2} alt="helo" />
              </div>
            </Item2>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Primyer;
