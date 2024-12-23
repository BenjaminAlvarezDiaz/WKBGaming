import React from "react";
import styles from "../Info.module.css";
const SocialInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Social Media Strategy</h4>
      </div>
      <p>
        Today, most businesses understand that social media is an essential part
        of any B2B and B2C marketing mix. Where they struggle, is finding the
        right approach.
        <br />
        <br />
        We help brands use social media to their advantage using our data-driven
        strategies and winning social media marketing and advertising campaigns.
        <br />
        <br /> Without a strategy, you might end up flooding your social media
        channels with filler content rather than the quality content that would
        intrigue your audience. It’s all too easy to focus on producing a lot of
        content, rather than quality content.
      </p>
      <div className={styles.subtitle}>
        <h4>Our Workflow</h4>
      </div>

      <ul>
        <li>
          WKB partners with your internal team to understand your business
        </li>
        <li>Develop an ongoing strategy based on your goals</li>
        <li>
          Regular reporting, growth re-evaluation, and campaign optimization
        </li>
      </ul>
    </div>
  );
};

export default SocialInfo;
