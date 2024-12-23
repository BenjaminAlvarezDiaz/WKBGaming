import React, { useState } from "react";
import styles from "./NavbarServices.module.css";


import { Megaphone, GameController, Rocket } from "@phosphor-icons/react";

const NavbarServices = () => {
  const [activeItem, setActiveItem] = useState("marketing");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li
          className={`${styles.list} ${activeItem === "marketing" ? styles.active : ""}`}
          onClick={() => handleItemClick("marketing")}
        >
          <a href="#marketing">
            <span className={styles.icon}>
              <Megaphone  />
            </span>
            <span className={styles.text}>Marketing</span>
          </a>
        </li>

        <li
          className={`${styles.list} ${activeItem === "App" ? styles.active : ""}`}
          onClick={() => handleItemClick("App")}
        >
          <a href="#app">
            <span className={styles.icon}>
              <Rocket />
            </span>
            <span className={styles.text}>Dev</span>
          </a>
        </li>

        <li
          className={`${styles.list} ${activeItem === "esport" ? styles.active : ""}`}
          onClick={() => handleItemClick("esport")}
        >
          <a href="#esport">
            <span className={styles.icon}>
            <GameController  />
            </span>
            <span className={styles.text}>Esport</span>
          </a>
        </li>

        <div className={styles.indicator}></div>
      </ul>
    </nav>
  );
};

export default NavbarServices;
