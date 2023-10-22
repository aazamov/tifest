import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import LangSelect from "./LangSelect/LangSelect";
import SocialLink from "./SocialLink/SocialLink";
import HoverLink from "./HoverLink/HoverLink";
import SelectLink from "./SelectLink/SelectLink";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  const [modalActive, setModalActive] = useState(false);

  const [activeT, setActiveT] = useState("menuButton");
  const [scrolled, setScrolled] = useState(false);

  const navToggle = () => {
    // setModalActive(!modalActive)
    // if (modalActive) {
    //   document.body.style.overflow = "scrool";
    // } else document.body.style.overflow = "hidden";
    if (activeT === "menuButton") {
      setActiveT("menuButton toggle");
      setModalActive(true);
    } else {
      setActiveT("menuButton");
      setModalActive(false);
    }
  };

  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [modalActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${style.ashrafModal} ${
          modalActive ? style.ashrafModalActive : ""
        }`}
      >
        <div className={style.ashrafModalSecond}>
          <div className={style.ashrafModalLinks}>
            <a href="/">Новости</a>
            <a href="/">
              Кинопоказы <RiArrowDownSLine />
            </a>
            <a href="/">
              Лица <RiArrowDownSLine />
            </a>
            <a href="/">
              Программа <RiArrowDownSLine />
            </a>
            <a href="/">Медиа</a>
            <a href="/">История</a>
          </div>
          <div className={style.socialNetModal}>
            <SocialLink>
              <FaInstagram />
            </SocialLink>
            <SocialLink>
              <BiLogoFacebook />
            </SocialLink>
            <SocialLink>
              <BiLogoTelegram />
            </SocialLink>
            <SocialLink>
              <FaYoutube />
            </SocialLink>
          </div>
        </div>
      </div>
      <nav>
        <div
          className={`${style.background} ${scrolled ? style.scrolled : ""}`}
        >
          <div className={style.navBox}>
            <div>
              <a href="/">
                <img className={style.logo} src={Logo} alt="logo" />
              </a>
            </div>
            <div className={style.navLinks}>
              <ul>
                <li>
                  <HoverLink link="/">Новости</HoverLink>
                </li>
                <li>
                  <SelectLink link="/">Кинопоказы</SelectLink>
                </li>
                <li>
                  <SelectLink link="/">Лица</SelectLink>
                </li>
                <li>
                  <SelectLink link="/">Программа</SelectLink>
                </li>
                <li>
                  <HoverLink link="/">Медиа</HoverLink>
                </li>
                <li>
                  <HoverLink link="/">История</HoverLink>
                </li>
              </ul>
            </div>
            <div>
              <div className={style.socialNet}>
                <SocialLink>
                  <FaInstagram />
                </SocialLink>
                <SocialLink>
                  <BiLogoFacebook />
                </SocialLink>
                <SocialLink>
                  <BiLogoTelegram />
                </SocialLink>
                <SocialLink>
                  <FaYoutube />
                </SocialLink>
              </div>
            </div>
            <div className={style.langSelectDiv}>
              <LangSelect />
            </div>
            <div
              onClick={navToggle}
              className={
                activeT === "menuButton"
                  ? style.menuButton
                  : `${style.menuButton} ${style.toggle}`
              }
            >
              <div className={style.line1}></div>
              <div className={style.line2}></div>
              <div className={style.line3}></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
