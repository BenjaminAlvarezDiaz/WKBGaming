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
          Copyright ©2025 <br /> WKB GROUP
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
          Copyright ©2025 WKB GAMING
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.services}>
          <a href={"/services"} className={styles.subtitle}>
            Servicios
          </a>
          <div className={styles.options}>
            <a href={"/services"}>Servicio al cliente</a>
            <a href={"/services"}>Automatización de ventas y marketing</a>
            <a href={"/services"}>Reconocimiento y análisis de datos inteligentes</a>
            <a href={"/services"}>y mas . . .</a>
          </div>
        </div>
        <div className={styles.about}>
          {" "}
          <a href={"/about"} className={styles.subtitle}>
            Sobre nosotros
          </a>
          <div className={styles.options}>
            <a href={"/about"}>Tus aliados tecnológicos</a>
            <a href={"/about"}>Parte de tu equipo</a>
            <a href={"/about"}>Innovación que funciona</a>
          </div>
        </div>
        {/*<div className={styles.experience}>
          <a href={"/experience"} className={styles.subtitle}>
            Experience
          </a>
          <div className={styles.options}>
            <a href={"/experience"}>Brochure</a>
          </div>
        </div>*/}
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
