import React, { useEffect, useState } from "react";
import video from "../../assets/videoHome.mp4";
import background from "../../assets/teamwork.svg";
import styles from "./Home.module.css";
import Cards from "./Cards";
import ServiceCard from "../ServiceCard/ServiceCard";
import SliderImg from "./SliderImg";
import SliderBrands from "./SliderBrands";
import Contact from "../Contact";
import CanvasBackground from "../CanvasBackground";
import SwaiperTools from "./SwiperTools";
import SwiperIcons from "./SwiperIcons";
import Announcement from "./Announcement"
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        
        <CanvasBackground className={styles.myCanvas} />
        <div className={styles.videocontainer}>
          <video
            src={video}
            className={styles.video}
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className={styles.overlay}>
          <div className={styles.animationContainer}>
            <h1 className={styles.title1}>
              Poné tu negocio en piloto automático: <p> menos costos, más resultados. </p>
            </h1>
            <h1 className={styles.title2}>
              Tu empresa, a toda máquina: <p> la IA hace el trabajo pesado por vos. </p>
            </h1>
            <h1 className={styles.title3}>
              Dejá que la IA maneje el engranaje, vos <p> enfocáte en crecer. </p>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <a  href="https://wkbmeet.com/" className={styles.btnMeeting}> <button>Programar reunión</button></a>
      </div>
      <article className={styles.article}>
        <div className={styles.textcontainer}>
          <p className={styles.text}>
            <h4>
              <span className={styles.highlight}>
                Servicios
              </span>
            </h4>
            <br />
            La Inteligencia Artificial promete innovación, pero su verdadero valor depende de un recurso clave: {" "}
            <span className={styles.highlight}>
              tus datos.
            </span>
            <br />
            Si tus procesos son desordenados o manuales, tu empresa pierde tiempo y oportunidades.
            <br /> 
            <br />
            Con la IA, podés convertir datos en texto, 
            imágenes o acciones automatizadas que optimizan tareas repetitivas como reportes, 
            correos, o validación de información.
            <br />
            No es solo tecnología, es {" "}
            <span className={styles.highlight2}> eficiencia real. </span>
            {" "}
            <br />
          </p>
        </div>
      </article>
      <h2>
        Las herramientas que usas, {" "}
        <span className={styles.highlight}>integradas</span>
        , {" "} 
        <span className={styles.highlight3}> sincronizadas </span>
        {" "} y {" "}
        <span className={styles.highlight2}> automatizadas</span>
        :
      </h2>
      <br />
      <SwiperIcons />
      <div className={styles.allServices}>
        <h2>Nuestros servicios</h2>
        <ServiceCard />
      </div>

      {/*<div className={styles.SliderImg}>
        <SliderImg />
      </div>*/}
      {/*<div className={styles.SliderBrands}>
        <SliderBrands />
      </div>*/}
      {/* <div>
        <SwiperBrands />
      </div> */}
      <div className={styles.contact}>
        <Contact />
      </div>
    </div>
  );
};
export default Home;
