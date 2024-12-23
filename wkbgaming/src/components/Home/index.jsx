import React, { useEffect, useState } from "react";
import video from "../../assets/videoHome.mp4";
import background from "../../assets/teamwork.svg";
import styles from "./Home.module.css";
import Cards from "./Cards";
import SliderImg from "./SliderImg";
import SliderBrands from "./SliderBrands";
import Contact from "../Contact";
import CanvasBackground from "../CanvasBackground";
import SwaiperTools from "./SwiperTools";
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
      <article className={styles.article}>
        <div className={styles.textcontainer}>
          <p className={styles.text}>
            <h4>
              <span className={styles.highlight}>
                Servicios
              </span>
            </h4>
            <br />
            La Inteligencia Artificial suena innovadora, pero su éxito depende de un elemento clave: {" "}
            <span className={styles.highlight}>
              tus datos.
            </span>
            <br />
            La calidad, el orden y la estructura de la información en tu empresa son fundamentales, ya que los datos son el motor de la IA.
            <br /> 
            <br />
            Con IA, podés transformar información en texto, imágenes o incluso en acciones automatizadas,
            como si un agente actuara como un gerente o supervisor. 
            <br />
            Pero no se trata solo de tecnología de moda; se trata de {" "}
            <span className={styles.highlight2}> reemplazar procesos repetitivos </span>
            {" "} con precisión y eficiencia: informes, envíos de emails, verificación de datos, y más.
            <br />
            <br />
            El primer paso es identificar tus flujos de trabajo y analizar cómo gestionás la {" "} 
            <span className={styles.highlight3}> información actualmente, </span>
            {" "} ya sea en Excel, Google Sheets o un CRM.
            <br />
            Si ya usás estas herramientas, estás listo para conectar un motor de IA que lleve tu empresa al
            {" "} <span className={styles.highlight2}> siguiente nivel. </span> {" "}
            <br />
            <br />
            Las herramientas que usas, integradas, sincronizadas y automatizadas:
          </p>
        </div>
        <SwaiperTools />
      </article>

      <div className={styles.allServices}>
        <h2>Nuestros servicios</h2>
        <Cards />
      </div>

      <div className={styles.SliderImg}>
        <SliderImg />
      </div>
      <div>
       <a  href="https://wkbmeet.com/" className={styles.btnMeeting}> <button>Schedule Meeting</button></a>
      </div>
      <div className={styles.SliderBrands}>
        <SliderBrands />
      </div>
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
