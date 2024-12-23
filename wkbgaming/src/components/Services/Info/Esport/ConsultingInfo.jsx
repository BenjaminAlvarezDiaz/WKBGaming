import React from "react";
import styles from "../Info.module.css";
import consultingInfo from "../../../../assets/Services/img/EsportServices/EsportConsulting/BusinessProblem.svg"
const ConsultingInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title2}>
        <h4>Consulting</h4>
      </div>
      <p>
        Esports are poised to be one of the biggest growing industries in the
        21st century. We want to make sure that players and organizations will
        grow with it, helping organizations and individuals understand the more
        complex aspects of working within the esports industry. We want to help
        aspiring teams identify what it takes to build their brand. We want to
        help current organizations fill the holes that are slowing down their
        growth. Esports Consulting is here to help develop the esports scene
        through the organizations that drive it.
      </p>
      <h5>How may we help your business?</h5>

      <h5>Media and Broadcasters</h5>

      <ul>
        {" "}
        <h5>Organisers</h5>
        <li>
          Advice in relation to government regulations for tournament
          organisation
        </li>
        <h5>Government</h5>
        <li>Esport strategy formulation and implementation</li>
        <li>Supporting the development of esport regulation framework</li>
        <li>Urban masterplan design for e-sports infrastructure</li>
        <li>Infrastructure financing</li>
        <h5>Sponsors and Advertisers</h5>
        <li>
          Supporting the development of a custom made sponsorship portfolio
        </li>
        <li>
          Advising on advertising, sponsorship and merchandise arrangements,
          including endorsement and appearance agreements
        </li>{" "}
        <h5>Media and Broadcasters</h5>
        <li>Development of esport market entry strategy</li>
        <li>Advising on media and broadcasting matters</li>
      </ul>
      <div className={styles.subtitle2}>
        <h4>Our Workflow</h4>
      </div>
      <div className={styles.blur}>
  <img src={consultingInfo} alt="consultingInfo" className={styles.imgInfo} />
      </div>
    

    </div>
  );
};

export default ConsultingInfo;
