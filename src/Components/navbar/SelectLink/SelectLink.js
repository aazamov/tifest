import React from "react";
import styles from "./SelectLink.module.css";
import { RiArrowDownSLine } from "react-icons/ri";

const SelectLink = ({ children }, link) => {
  return (
    <div className={styles.selectLink}>
      <div className={styles.dropDown}>
        <a className={styles.headLink} href={link}>{children}<RiArrowDownSLine /></a>
      </div>
      <div className={styles.background}>
        <div className={styles.links}>
          <ul>
            <li className={styles.link}>
              <a href="/">kinopokazi</a>
            </li>
            <li className={styles.link}>
              <a href="/">kinopokazi</a>
            </li>
            <li className={styles.link}>
              <a href="/">kinopokazi</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectLink;
