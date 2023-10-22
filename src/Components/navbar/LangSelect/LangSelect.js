import React from "react";
import style from "./LangSelect.module.css";
import { BiChevronDown } from "react-icons/bi";

const LangSelect = () => {
  return (
    <div className={style.langSelect}>
      <div>
        <ul>
          <li>
            <a href="/">RU</a>
          </li>
          <li>
            <a href="/">En</a>
          </li>
          <li>
            <a href="/">Uz</a>
          </li>
        </ul>
      </div>
      <div>
        <BiChevronDown size={20} />
      </div>
    </div>
  );
};

export default LangSelect;
