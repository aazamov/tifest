import React from "react";
import { Link } from "react-router-dom";
import styles from "./HoverLink.module.css";

const HoverLink = ({ link, children }) => {
  return (
    <a href={link}>
      <div className={styles.container}>
        <span>{children}</span>
        <div className={styles.line}></div>
      </div>
    </a>
  );
};

export default HoverLink;
