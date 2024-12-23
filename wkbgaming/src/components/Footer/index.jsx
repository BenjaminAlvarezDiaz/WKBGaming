import React, { useEffect, useState } from "react";
import Bear from "../../assets/WKB LOGOS/Símbolo Walker Bear.svg";
import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={styles.wkb}>
        <img src={Bear} alt="logo" />
        <p>
          Copyright ©2023 <br /> WKB GROUP
        </p>
      </div>
      <div className={styles.socialMobile}>
        <div className={styles.options}>
          <a href="/">
          <img src={Bear} alt="logo" />
          </a>
          <a href={"https://www.instagram.com/wkbgaming/"} className={styles.iconSocial}>
            <InstagramLogo />
        
          </a>
          <a href={"https://www.linkedin.com/company/wkbgaming/" } className={styles.iconSocial}>
            <LinkedinLogo />
        
          </a>
          <a
            href={
              "https://api.whatsapp.com/send/?phone=543875336241&text&type=phone_number&app_absent=0"
            } className={styles.iconSocial}
          >
            <WhatsappLogo />
       
          </a>
        </div>
        <p>
          Copyright ©2023 WKB GAMING
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.services}>
          <a href={"/services"} className={styles.subtitle}>
            Services
          </a>
          <div className={styles.options}>
            <a href={"#marketing"}>Marketing & Communication</a>
            <a href={"/services#app"}>App & Games Development</a>
            <a href={"/services#esport"}>Esport Services</a>
          </div>
        </div>
        <div className={styles.about}>
          {" "}
          <a href={"/about"} className={styles.subtitle}>
            About Us
          </a>
          <div className={styles.options}>
            <a href={"/about#agency"}>The Agency</a>
            <a href={"/about#team"}>The Team</a>
          </div>
        </div>
        <div className={styles.experience}>
          <a href={"/experience"} className={styles.subtitle}>
            Experience
          </a>
          <div className={styles.options}>
            <a href={"/experience"}>Brochure</a>
          </div>
        </div>
        <div className={styles.social}>
          <span className={styles.subtitle}>Social</span>
          <div className={styles.options}>
            <a href={"https://www.instagram.com/wkbgaming/"}>Instagram</a>
            <a href={"https://www.linkedin.com/company/wkbgaming/"}>Linkedin</a>
            <a
              href={
                "https://api.whatsapp.com/send/?phone=543875336241&text&type=phone_number&app_absent=0"
              }
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
