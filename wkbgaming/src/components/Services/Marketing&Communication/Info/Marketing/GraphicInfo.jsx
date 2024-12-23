import React from "react";
import styles from "../Info.module.css";
const GraphicInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title2}>
        <h4>Graphic Design & Animation</h4>
      </div>
      <p>
        Visual Effects, Broadcast, Print & more. We use the latest equipment and
        software to create powerful, memorable, images and messages.
        <br />
        <br />
        If you're looking to explain or promote a business product, service or
        reach an audience for most anything. Designs and animation are a highly
        effective way to connect and stand out.
      </p>

      <ul>
        <h5>List of Design Services:</h5>
        <li>Social Media Design</li>
        <li>Logo design and branding</li>
        <li>Print design</li>
        <li>Advertising</li>
        <li>Infographics</li>
        <li>Presentation design</li>
        <li>Website design</li>
      </ul>
      <div className={styles.subtitle2}>
        <h4>Our Workflow</h4>
      </div>

      <ul>
        <li>Research</li>
        <li>Planning</li>
        <li>Creativity</li>
        <li>Production</li>
      </ul>
    </div>
  );
};

export default GraphicInfo;
