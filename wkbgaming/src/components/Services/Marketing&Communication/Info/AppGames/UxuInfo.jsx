import React from "react";
import styles from "../Info.module.css";
import gameInfo from "../../../../../assets/Services/img/ProductDesing/UI_UXDesing/UXUI.svg";
const UxuInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>UI/UX Design</h4>
      </div>
      <h5>UI/UX Design for Web</h5>
      <p>
        Our experts specialize in designing complex interfaces for disruptive
        web applications as well as user experience (UX) services. We will help
        you crystalize a myriad of user flows in a product that has a
        convenient, user-friendly and intuitive UX and UI, following proven best
        practices in usability, compatibility, and accessibility.
      </p>
      <h5>UI/UX Design for Mobile</h5>
      <p>
        The main challenge in creating favorable user experience in a mobile app
        is to balance between following the standard guidelines and tweaking
        them to make the application authentic and unique. The team apply
        experience to create spot-on design for iOS and Android applications
        that make smartphones smarter.
      </p>
      <div className={styles.subtitle}>
        <h4>Our workflow</h4>
          </div>
      <img src={gameInfo} alt="game" className={styles.imgInfo} />
    </div>
  );
};

export default UxuInfo;
