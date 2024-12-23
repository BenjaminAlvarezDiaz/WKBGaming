import React, { useState } from "react";
import { SealCheck,GoogleLogo,ClockCountdown,CaretDown}  from "@phosphor-icons/react";

import styles from "../KeyBenefits.module.css";

const SocialKey = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}><h4>Key Benefits</h4>
        <div className={styles.dropdownOptions}>
          <div
            className={`${styles.dropdownOption} ${
              selectedIndex === 0 ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(0)}
          >
            <div className={styles.option}>
              <SealCheck className={styles.iconOptions2} />
              <span>Expertise and Experience</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                We have extensive experience and expertise in creating content that
            attracts and engages customers. You can save time and resources, as
            we have team of specialists who understand the nuances of content
            marketing and who know how to create effective content that
            resonates with customers.
                </p>
              </div>
            )}
          </div>
          <div
            className={`${styles.dropdownOption} ${
              selectedIndex === 1 ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(1)}
          >
            <div className={styles.option}>
              <GoogleLogo className={styles.iconOptions2} />
              <span>Google likes best content</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                Google is obsessed with providing its users with the search
            experiences that deliver what they’re looking for. High-quality
            content is often the best way to provide that experience.
                </p>
              </div>
            )}
          </div>
          <div
            className={`${styles.dropdownOption} ${
              selectedIndex === 2 ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(2)}
          >
            <div className={styles.option}>
              <ClockCountdown className={styles.iconOptions2} />
              <span>Time Efficiency</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                Businesses don’t have to spend time doing content and can focus on
            other important tasks. Working with a team that values time
            efficiency can be especially beneficial, as they can create content
            quickly and efficiently, helping businesses to achieve measurable
            results and reach their goals. Additionally, we can provide valuable
            insights into the efficacy of content and offer suggestions for
            improvement, helping businesses to get the most out of their
            marketing budget and maximize the effectiveness of their content
            marketing strategy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialKey;
