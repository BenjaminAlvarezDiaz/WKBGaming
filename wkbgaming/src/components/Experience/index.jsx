import React from "react";
import styles from "./Experience.module.css";
import { DownloadSimple } from "@phosphor-icons/react";
import CardCases from "./CardCases";
import pdf from "../../assets/Brochure.pdf"

import CanvasBackground from "../CanvasBackground";

import video from "../../assets/video.mp4";
const Experience = () => {
  const handleDownload = () => {
    // URL del archivo PDF a descargar
    const pdfUrl = pdf; // Cambia la ruta del archivo PDF

    // Crea un elemento <a> temporal
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "brochure.pdf"; // Nombre del archivo de descarga

    // Agrega el elemento <a> al DOM y haz clic en él para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Elimina el elemento <a> del DOM después de la descarga
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <CanvasBackground className={styles.myCanvas} />
      <div className={styles.containerSon}>
        <video
          src={video}
          className={styles.videoEx}
          autoPlay
          controls
          loop
        ></video>
        <div>
          <h5 className={styles.title}>Successful cases</h5>
          <div  className={styles.cases}>
            <CardCases />
          </div>
        </div>
      </div>
      <div className={styles.parallaxContainer}>
        <div className={styles.parallaxContent}>
          <button onClick={handleDownload}>
            Download Complete Brochure{" "}
            <DownloadSimple className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Experience;
