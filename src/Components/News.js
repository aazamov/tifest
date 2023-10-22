import React from "react";
import style from "./News.module.css";
import person1 from "../assets/Rectangle168.png";
import person2 from "../assets/Rectangle177.png";
import person3 from "../assets/Rectangle173.png";
import person4 from "../assets/Rectangle175.png";

import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 350, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1120, itemsToShow: 4 },
];

const News = () => {
  return (
    <div className={style.news_box}>
      <div className={style.boxx}>
        <div className={style.text_single}>
          <h2>Новости</h2>
        </div>
        <div className={style.carou}>
          <Carousel pagination={false} breakPoints={breakPoints}>
            <Item>
              <div className={style.single_box}>
                <img src={person1} alt="hello" />
                <h4>
                  Алдияр Байракимов, режиссер нашумевшего казахского фильма
                  «Паралимпиец»:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person2} alt="hello" />
                <h4>
                  Аяз Салаев, известный киновед, кинорежиссер, сценарист,
                  педагог, телеведущий, актер, заслуженный деятель искусств
                  Республики Азербайджан:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person3} alt="hello" />
                <h4>
                  Алдияр Байракимов, режиссер нашумевшего казахского фильма
                  «Паралимпиец»:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person4} alt="hello" />
                <h4>
                  Алдияр Байракимов, режиссер нашумевшего казахского фильма
                  «Паралимпиец»:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person2} alt="hello" />
                <h4>
                  Аяз Салаев, известный киновед, кинорежиссер, сценарист,
                  педагог, телеведущий, актер, заслуженный деятель искусств
                  Республики Азербайджан:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person1} alt="hello" />
                <h4>
                  Алдияр Байракимов, режиссер нашумевшего казахского фильма
                  «Паралимпиец»:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person4} alt="hello" />
                <h4>
                  Алдияр Байракимов, режиссер нашумевшего казахского фильма
                  «Паралимпиец»:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person3} alt="hello" />
                <h4>
                  Аяз Салаев, известный киновед, кинорежиссер, сценарист,
                  педагог, телеведущий, актер, заслуженный деятель искусств
                  Республики Азербайджан:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person2} alt="hello" />
                <h4>
                  Алдияр Байракимов, режиссер нашумевшего казахского фильма
                  «Паралимпиец»:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
            <Item>
              <div className={style.single_box}>
                <img src={person1} alt="hello" />
                <h4>
                  Аяз Салаев, известный киновед, кинорежиссер, сценарист,
                  педагог, телеведущий, актер, заслуженный деятель искусств
                  Республики Азербайджан:
                </h4>
                <p>12.04.2023</p>

                <div className={style.box_btn}>
                  <a href="/">Перейти</a>
                </div>
              </div>
            </Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default News;
