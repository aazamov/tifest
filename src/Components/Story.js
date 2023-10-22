import React from "react";
import Item2 from "./Item2";
import Carousel from "react-elastic-carousel";
import style from "./Story.module.css";
import storyImg from "../assets/stry.png";

const data = [
  { year: 2031 },
  { year: 2030 },
  { year: 2029 },
  { year: 2028 },
  { year: 2027 },
  { year: 2026 },
  { year: 2025 },
  { year: 2024 },
  { year: 2023 },
  { year: 2022 },
  { year: 2021 },
  { year: 2020 },
  { year: 2019 },
  { year: 2018 },
  { year: 2017 },
];

const Story = () => {
  const breakPoints = [
    { width: 350, itemsToShow: 1 },

    { width: 768, itemsToShow: 1 },
    { width: 1120, itemsToShow: 2 },
    { width: 1300, itemsToShow: 3 },
  ];
  return (
    <div className={style.story}>
      <div className={style.story_box}>
        <div className={style.story_desc}>
          <h2>История </h2>
          <select>
            <option>2023 г</option>
          </select>
        </div>
        <div className={style.story_car}>
          <Carousel
            itemsToScroll={1}
            breakPoints={breakPoints}
            pagination={false}
          >
            {data.map((item) => (
              <Item2 key={item.year}>
                <img className={style.cont} src={storyImg} alt="sto" />
                <p className={style.text}>{item.year}</p>
              </Item2>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Story;
