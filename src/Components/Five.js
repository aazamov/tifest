import React from "react";
import rec1 from "../assets/Rectangle205.png";
import rec2 from "../assets/Rectangle206.png";
import rec3 from "../assets/Rectangle207.png";
import movie from "../assets/five1.png";
import movie1 from "../assets/five2.png";
import movie2 from "../assets/five3.png";
import movie3 from "../assets/five4.png";
import Carousel from "react-elastic-carousel";
import style from "./Five.module.css";
import Item2 from "./Item2";

const Five = () => {
  const breakPoints = [
    { width: 350, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1120, itemsToShow: 5 },
  ];
  return (
    <div className={style.rec}>
      <div className={style.line_f}>
        <div className={style.line_s}>
          <div className={style.line_t}>
            <div className={style.box}>
              <div className={style.header}>
                <h2>Кино за 5 дней</h2>
                <button>Оставить заявку</button>
              </div>
              <div className={style.desc_for}>
                <p>Кино за 5 дней</p>
                <div></div>
              </div>
              <div className={style.long_text}>
                <p>
                  ЭТО ОСНОВНАЯ ПРОГРАММА МОЛОДЁЖНОГО КИНОФЕСТИВАЛЯ, КОТОРАЯ
                  ПРОЙДЁТ В РАМКАХ ТАШКЕНТСКОГО МЕЖДУНАРОДНОГО КИНОФЕСТИВАЛЯ
                  «ЖЕМЧУЖИНА ШЕЛКОВОГО ПУТИ». <br />{" "}
                  <span>«КИНО НОВОГО ПОКОЛЕНИЯ» </span>
                  <br />
                  «КИНО ЗА 5 ДНЕЙ» - КОНКУРС МОЛОДЫХ КИНЕМАТОГРАФИСТОВ,
                  УЧАСТНИКАМ КОТОРОГО ПРЕДСТОИТ СНЯТЬ КОРОТКОМЕТРАЖНЫЕ ФИЛЬМЫ ОБ
                  УЗБЕКИСТАНЕ, НА ТЕМУ «ВЕЛИКИЙ ШЕЛКОВЫЙ ПУТЬ» Конкурс проводит
                  Агентство Кинематографии Узбекистана, ГУП «Ёшлик киностудияси»
                  при поддержке Министерства Туризма и Спорта Республики
                  Узбекистан, Министерства Иностранных Дел Республики
                  Узбекистан, Министерства Финансов Республики Узбекистан,
                  Всемирное Общество по изучению, сохранению и популяризации
                  культурного наследия Узбекистана.
                </p>
              </div>
              <div className={style.desc_for}>
                <p>Короткометражные фильмы</p>
                <div></div>
              </div>
              <div className={style.boxex}>
                <Carousel breakPoints={breakPoints} pagination={false}>
                  <Item2>
                    <div className={style.item2}>
                      <img className={style.img} src={movie} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <img className={style.img} src={movie1} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <img className={style.img} src={movie2} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <img className={style.img} src={movie3} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <img className={style.img} src={movie} alt="helo" />
                    </div>
                  </Item2>
                  <Item2>
                    <div className={style.item2}>
                      <img className={style.img} src={movie3} alt="helo" />
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

export default Five;
