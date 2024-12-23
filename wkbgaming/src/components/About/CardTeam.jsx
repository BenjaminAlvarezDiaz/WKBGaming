import React from "react";
import styles from "./CardTeam.module.css";
import Card from "./Card.jsx";

import nahuel from "../../assets/Photos/compressjpeg/Slice 1-min.jpg";
import lucho from "../../assets/Photos/compressjpeg/Slice 2-min.jpg";
import nazze from "../../assets/Photos/compressjpeg/Slice 3-min.jpg";

import talo from "../../assets/Photos/compressjpeg/Slice 6-min.jpg";
import alberto from "../../assets/Photos/compressjpeg/Alberto Valencia.jpg"

import nahuelB from "../../assets/Photos/bw compressjpeg/Slice 1-min.jpg";
import luchoB from "../../assets/Photos/bw compressjpeg/Slice 2-min.jpg";
import nazzeB from "../../assets/Photos/bw compressjpeg/Slice 3-min.jpg";

import taloB from "../../assets/Photos/bw compressjpeg/Slice 6-min.jpg";
import albertoB from "../../assets/Photos/bw compressjpeg/Alberto Valencia B.jpg"
import { NavLink } from "react-router-dom";

const CardTeam = () => {
  return (
    <div className={styles.cards}>
      <NavLink to={"https://www.linkedin.com/in/luciano-g%C3%A1lvez-a82b63b5/"}>
        <Card
          photoC={lucho}
          photoB={luchoB}
          name={"Lic. Luciano Gálvez"}
          position={"Founder"}
        />
      </NavLink>
      <NavLink to={"https://www.linkedin.com/in/albertovalencia/"}>
        <Card
          photoC={alberto}
          photoB={albertoB}
          name={"Alberto Valencia"}
          position={"Director Creativo"}
        />
      </NavLink>
      <NavLink to={"https://www.linkedin.com/in/talobv/"}>
        <Card
          photoC={talo}
          photoB={taloB}
          name={"Lic. Carlos Tejada"}
          position={"Project Area"}
        />
      </NavLink>
      <NavLink to={"https://www.linkedin.com/in/nfacundoromero/"}>
        <Card
          photoC={nahuel}
          photoB={nahuelB}
          name={"Facundo Romero"}
          position={"Production Area"}
        />
      </NavLink>
      <NavLink to={"https://www.linkedin.com/in/nahuel-dominguez-70171722a/"}>
        <Card
          photoC={nazze}
          photoB={nazzeB}
          name={"Nahuel Dominguez"}
          position={"Multimedia Area"}
        />
      </NavLink>
    </div>
  );
};
export default CardTeam;
