import React from "react";
import styles from "./About.module.css";
import Bear from "../../assets/bear 1.png";
import Bear2 from "../../assets/bear_1-removebg-preview.png";
import CardTeam from "./CardTeam";
import CanvasBackground from "../CanvasBackground";

const About = () => {
  return (
    <div className={styles.about}>
       <CanvasBackground className={styles.myCanvas} /> 
      <div className={styles.agency}>
        <div className={styles.text}>
          <title>
            <h1>Nosotros somos. . .</h1>
          </title>

          <p>
            <title className={styles.subTitle}><h2>Tus aliados tecnológicos</h2></title>
            Trabajamos con robots, pero pensamos como humanos. 
            Diseñamos soluciones personalizadas que se adaptan a tu industria, necesidades y metas.
            <br />
            <title className={styles.subTitle}><h2>Parte de tu equipo</h2></title>
            Nos sumamos a tu equipo como si fuéramos uno más. <br /> 
            Queremos conocer a fondo tus procesos para convertirnos en tu área de inteligencia artificial.
            <br />
            <title className={styles.subTitle}><h2>Innovación que funciona</h2></title>
            La IA no es solo una tendencia; es una herramienta para transformar lo rutinario. <br />
            Automatizamos tareas de siempre para que te enfoques en descubrir nuevas oportunidades. <br />
            ¡ Poné el piloto automático y despejá el camino hacia la innovación !
          </p>
        </div>
        <img src={Bear2} alt="bear" />
      </div>
      <div>
        <h1>¿ Estás listo para dar un salto a la innovación ?</h1>
        <div>
          <a  href="https://wkbmeet.com/" className={styles.btnMeeting}> <button>Programar reunión</button></a>
        </div>
      </div>
      
    </div>
  );
};

export default About;
