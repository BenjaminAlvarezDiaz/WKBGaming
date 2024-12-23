import React from "react";
import styles from "../Info.module.css";
const GameInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title2}>
        <h4>Game Development</h4>
      </div>
      <p>
        We help you to became an idea to real app using programming for your
        project. Mobile App Development is the process of creating software
        applications that run on mobile devices such as smartphones and tablets.
        This involves designing, building, testing, and deploying mobile apps
        for different platforms such as iOS and Android. <br />
        The development process typically includes ideation, wireframing, user
        interface design, coding, and testing.
      </p>
      <div className={styles.subtitle2}>
        <h4>How is our workflow</h4>
      </div>

      <ul>
        <li>Planning</li>
        <li>Pre-production</li>
        <li>Production</li>
        <li>Testing</li>
        <li>Pre-launch</li>
        <li>Launch</li>
        <li>Post-production</li>
      </ul>
    </div>
  );
};

export default GameInfo;
