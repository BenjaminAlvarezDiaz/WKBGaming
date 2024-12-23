import React from "react";
import mega from "./../../assets/mega.svg";
import game from "./../../assets/game.svg";
import rocket from "./../../assets/rocket.svg";
import styles from "./Card.module.css"; // Importa el archivo CSS Module para los estilos de las tarjetas
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const Card = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "20%",
    variableWidth: true,
  };
  return (
    <div className={styles.cardContainer}>
      <NavLink to={"/services#marketing"}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h5>Marketing & Communication</h5>
            
          </div>
          <div className={styles.bottomBorder}>
            <Slider {...settings} className={styles.slider}>
              <h3>Social Media Strategy</h3>
              <h3>-</h3>
              <h3>Content Marketing</h3>
              <h3>-</h3>
              <h3>Branding</h3>
              <h3>-</h3>
              <h3>Graphic Design & animation</h3>
              <h3>-</h3>
            </Slider>
            <p>Read All</p>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/services/#app"}>
        <div className={styles.card2}>
          <div className={styles.cardContent}>
            <h5>Esport Services</h5>
    
          </div>
          <div className={styles.bottomBorder2}>
          <Slider {...settings} className={styles.slider}>
              <h3>Esports Consulting</h3>
              <h3>-</h3>
              <h3>Club Esport Project</h3>
              <h3>-</h3>
              <h3>Esports Digital Marketing</h3>
              <h3>-</h3>
              <h3>Event Management</h3>
              <h3>-</h3>
            </Slider>
            <p>Read All</p>
          </div>
        </div>
      </NavLink>
      <NavLink to={"/services/#app"}>
        <div className={styles.card3}>
          <div className={styles.cardContent}>
            <h5>App & Games Development</h5>
        
          </div>
          <div className={styles.bottomBorder3}>
          <Slider {...settings} className={styles.slider}>
          <h3>Factory Development</h3>
              <h3>-</h3>
              <h3>Mobile App Development</h3>
              <h3>-</h3>
              <h3>Web Development</h3>
              <h3>-</h3>
              <h3>Game Development</h3>
              <h3>-</h3>
              <h3>UI/UX Design</h3>
              <h3>-</h3>
            </Slider>
            <p>Read All</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
