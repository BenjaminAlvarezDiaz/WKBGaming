import React, { useState } from "react";
import styles from "./Card.module.css"; // Archivo de estilos CSS Modules

const Card = ({ photoC, photoB, name, position }) => {

  return (
    <div
      className={styles.card}
  
    >
      <div className={styles.overlay}>
        <br />
        <br />
        <span className={styles.name}>{name}</span>
        <p>{position}</p>
      </div>
      <img
        className={`${styles.image} ${styles.imageFirst}`}
        src={photoB}
        alt="Foto de la persona"
      />
      <img
        className={`${styles.image} ${styles.imageSecond}`}
        src={photoC}
        alt="Foto de la persona"
      />
    </div>
  );
};

export default Card;
