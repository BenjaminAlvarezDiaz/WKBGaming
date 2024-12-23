import React from "react";
import styles from "../Info.module.css";
const BrandingInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Branding</h4>
      </div>
      <p>
        We integrate strategy, design and technology to create beautiful,
        brilliant brands and experiences.The experience is the brand. A great
        brand experience is designed from everyday interactions to special
        events. <br />
        <br /> Every moment matters. We create big brand ideas that move people,
        experiences that inspire sharing and create lasting connections.
      </p>
      <ul>
        <li>Visual Audit</li>
        <li>Brand Design</li>
        <li>Social media branding</li>
        <li>Naming</li>
        <li>Visual System</li>
        <li>Brand Training</li>
        <li>Brand Video</li>
        <li>Environments</li>
        <li>Brand Campaigns</li>
      </ul>
      <div className={styles.subtitle}>
        <h4>Our Workflow</h4>
      </div>

      <ul>
        <li>Business goals and brand personality</li>
        <li>Market and user research</li>
        <li>Logo design</li>
        <li>Visual elements of brand</li>
        <li>Corporate brand style</li>
        <li>A style guide</li>
      </ul>
    </div>
  );
};

export default BrandingInfo;
