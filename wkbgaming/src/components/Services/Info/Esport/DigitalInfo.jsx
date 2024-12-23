import React from "react";
import styles from "../Info.module.css";
import consultingInfo from "../../../../assets/Services/img/EsportServices/EsportDigital/Marketing.svg";
const DigitalInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title2}>
        <h4>Esports Digital Marketing</h4>
      </div>
      <p>
        We provide a full range of advertising solutions, extending from
        strategy development to real-time campaign execution. And at the heart
        of everything we do is cold, hard data. We use analytics to uncover
        opportunities and develop winning strategies that get results. Our goal
        is to put your business in the spotlight and get you seen by target
        audiences.
      </p>

      <div className={styles.subtitle2}>
        <h4>Our Workflow</h4>
      </div>
      <ul>
        <li>Marketing Audit</li>
        <li>Marketing analytics</li>
        <li>Marketing strategy</li>
        <li>Marketing operations</li>
      </ul>
      <div className={styles.blur}>
        <img
          src={consultingInfo}
          alt="consultingInfo"
          className={styles.imgInfo}
        />
      </div>
    </div>
  );
};

export default DigitalInfo;
