import React from "react";
import styles from "../Info.module.css";
const MobileInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title2}>
        <h4>Mobile App Development</h4>
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
        <h4>Our Workflow</h4>
      </div>

      <ul>
        <li>Planning and Research</li>
        <li>Prototyping</li>
        <li>Design & User Experience</li>
        <li>Development</li>
        <li>Testing and launch</li>
      </ul>
    </div>
  );
};

export default MobileInfo;
