import React from "react";
import styles from "../Info.module.css";
const WebInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Web Development</h4>
      </div>
      <p>
        We design and build industry-leading web-based products that bring value
        to your customers, delivered with compelling UX. <br />
        <br />
        Web development encompasses a wide range of services, which include
        delivering websites or web apps, UX/UI design, eCommerce solutions, QA
        testing, maintenance, consulting, and even a custom CMS.
      </p>
      <div className={styles.subtitle}>
        <h4>Our Workflow</h4>
      </div>

      <ul>
        <li>Web site Planning</li>
        <li>Web Site Analysis</li>
        <li>Layouts</li>
        <li>Design and Development</li>
        <li>Site Implementation and Maintenance</li>
      </ul>
    </div>
  );
};

export default WebInfo;
