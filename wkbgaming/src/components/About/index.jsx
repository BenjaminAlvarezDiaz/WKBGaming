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
            <h1>The Agency</h1>
          </title>

          <p>
            Today, most businesses understand that social media is an essential
            part of any B2B and B2C marketing mix. Where they struggle, is
            finding the right approach. <br /> Level up your social media
            presence – without the guesswork! <br /> We help brands use social
            media to their advantage using our data-driven strategies and
            winning social media marketing and advertising campaigns. <br />{" "}
            Without a strategy, you might end up flooding your social media
            channels with fluffy content. It’s all too easy to focus on
            producing a lot of content, rather than quality content.
          </p>
        </div>
        <img src={Bear2} alt="bear" />
      </div>
      <div>
        <title className={styles.title2}><h1>The team</h1></title>
        <CardTeam />
      </div>
      
    </div>
  );
};

export default About;
