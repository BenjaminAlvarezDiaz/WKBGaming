import React, { useState } from "react";
import { Trophy, ChartLineUp, Coins, CaretDown } from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const WebKey = () => {
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
              <Trophy className={styles.iconOptions1} />
              <span>Best First Impression </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  Web design is important because it impacts how your audience
                  perceives your brand. When your audience visits your website,
                  it gives them their first impresión of your business.
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
              <ChartLineUp className={styles.iconOptions1} />
              <span>Growth Opportunity</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  In addition to customers, your website can also attract
                  potential investors. To collaborate with you on your business
                  projects. This will help boost your Customer Relationships
                  Management in the long run.
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
              <Coins className={styles.iconOptions1} />
              <span>Reduced Cost</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  By cutting down the feature list to the essential core that is
                  needed to prove your product’s assumptions, you’re not only
                  reducing the risk but also reducing the cost.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebKey;
