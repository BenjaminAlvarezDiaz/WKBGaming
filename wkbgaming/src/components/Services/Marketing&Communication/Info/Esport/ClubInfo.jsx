import React from "react";
import styles from "../Info.module.css";

const ClubInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Club Esport Project</h4>
      </div>
      <p>
        We support and advise brands, investors and sports stakeholders in their
        esports strategies: market survey, analysis of needs & positioning,
        stakes & ecosystem overview, strategic recommendations (sponsorship,
        event, etc.), operational implementation & follow-up.
      </p>
      <div className={styles.subtitle}>
        <h4>Our Workflow</h4>
      </div>
      <ul>
        <li>Know Why Your Club Exists</li>
        <li>Structure Your Club & Governance</li>
        <li>How to Get New Members</li>
        <li>Outline the Financial Structure</li>
        <li>Hold Your First Club Meeting</li>
        <li>Attract & Engage Your Members</li>
      </ul>
    </div>
  );
};

export default ClubInfo;
