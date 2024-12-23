import React from "react";
import styles from "../Info.module.css";
const ContentInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title2}>
        <h4>Content Marketing</h4>
      </div>
      <p>
        Content Marketing is a marketing strategy that involves creating and
        distributing valuable, relevant, and consistent content to attract and
        retain a target audience. The content can include blogs, videos,
        infographics, social media posts, emails, and more.
        <br />
        <br />
        The goal of content marketing is to build a loyal and engaged
        customer base by providing them with relevant and useful information,
        rather than simply promoting a product or service.
      </p>

      <ul>
        <h5>Our Online Content Production & Design Services Include:</h5>
        <li>Thought-leadership & business-related blogs & articles</li>
        <li>Business content (b2b and b2c content)</li>
        <li>Sales collaterals ( brochures, datasheets, position documents etc.)</li>
        <li>Presentations (Keynote/PPT/Prezi formats)</li>
        <li>Emails, whitepapers, guides, how-to’s</li>
        <li>Infographics and creative design (visual social posts, posters, magazines, flyers,<br /> print/online ads, event backdrops, standees/popups, etc.)</li>
        <li>Search Engine Marketing (SEM) </li>
      </ul>
      <div className={styles.subtitle2}>
        <h4>Our Workflow</h4>
      </div>

      <ul>
        <li>Research and Planning Stage</li>
        <li>Content Creation</li>
        <li>Scheduling and Publishing</li>
        <li>Distribution and Promotion</li>
        <li>Analyze and Optimize</li>
      </ul>
    </div>
  );
};

export default ContentInfo;
