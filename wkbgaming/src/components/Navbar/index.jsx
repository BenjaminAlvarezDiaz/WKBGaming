import React, { useState } from "react";
import logoWKB from "../../assets/WKB LOGOS/WKB GROUP-01.svg";
import Style from "./Navbar.module.css";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenutoggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={Style.navbar}>
      <nav>
        <a href="/">
          <img src={logoWKB} alt="logoWKB" />
        </a>
        <button className={Style.hamburger} onClick={handleMenutoggle}>
          <span className={menuOpen ? Style.active : ""}></span>
          <span className={menuOpen ? Style.active : ""}></span>
          <span className={menuOpen ? Style.active : ""}></span>
        </button>
        <ul className={menuOpen ? Style.open : ""}>
          <li>
            <a href="/services">Servicios</a>
          </li>
          <li>
            <a href="/about">Sobre Nosotros</a>
          </li>
          {/*<li>
            <a href="/experience">Experience</a>
          </li>*/}
          {/* <li>
            <a href="/blog">Blog</a>
          </li> */}
          {/*<li>
            <a href="/contact" className={Style.contact}>
              <HiOutlineMail  />
              <span>Contacto</span>
            </a>
          </li>*/}
          <li>
            <a href="https://calendly.com/wkbgroup/meeting" className={Style.meeting}>
              <span>Reunión</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar