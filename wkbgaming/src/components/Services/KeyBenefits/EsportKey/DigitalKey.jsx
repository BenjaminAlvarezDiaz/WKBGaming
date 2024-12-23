import React, { useState } from "react";
import {
  GlobeHemisphereWest,
  SketchLogo,
  Wallet,
  CaretDown,
} from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const DigitalKey = () => {
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
      <div className={styles.dropdown}>
        <h4>Key Benefits</h4>
        <div className={styles.dropdownOptions}>
          <div
            className={`${styles.dropdownOption} ${
              selectedIndex === 0 ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(0)}
          >
            <div className={styles.option}>
              <GlobeHemisphereWest className={styles.iconOptions2} />
              <span>Build Brand Awareness & New Clients</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  One of the first benefits of Esports marketing is creating
                  brand awareness, and drawing new and potential clients. As you
                  align your brand with local esports teams, you will realise
                  that you’ve positioned your brand to reach new audiences who
                  might not be familiar with your product/services.
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
              <SketchLogo className={styles.iconOptions2} />
              <span>Loyalty is Sky High </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  Loyalty is just as relevant in the esports industry as in any
                  business environment. Brand loyalty is the second top benefits
                  of esports marketing. Helping fans identify with their teams
                  and build a passion for them is key.
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
              <Wallet className={styles.iconOptions2} />
              <span>Getting a Good Return On Investment (ROI) </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  Increasing the brand’s ROI is the last but not the least
                  benefit of esports marketing. Research has shown that event
                  sponsorship brings a solid return on investment to companies
                  that operate effectively. One way to maximise the chances of
                  success is having a crystal clear plan of action, and a set
                  goal.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalKey;
