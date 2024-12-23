import React, { useState } from "react";
import { Eye, Warning, Coins, Timer, CaretDown } from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const FactoryKey = () => {
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
              <Eye className={styles.iconOptions1} />
              <span>Immersive Focus</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  We spend two days together in an intensive session so that we
                  can reach a state of absolute focus and dig down to the core
                  of the product’s value proposition.
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
              <Warning className={styles.iconOptions1} />
              <span>Reduced Risk </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  We don’t want to help you build a full-featured product only
                  to discover the market doesn’t want it. We want you to
                  succeed. That’s why we focus on the vital features needed to
                  test your product’s main assumptions – leaving unnecessary
                  features behind, or saving them for later iterations.
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
                  reducing the risk but also reducing the cost. You will spend
                  less on product development and at the initial iteration phase
                  – fewer features equals less maintenance.
                </p>
              </div>
            )}
          </div>{" "}
          <div
            className={`${styles.dropdownOption} ${
              selectedIndex === 3 ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(3)}
          >
            <div className={styles.option}>
              <Timer className={styles.iconOptions1} />
              <span>Timing decision </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 3 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 3 && (
              <div className={styles.dropdownText}>
                <p>
                  Picking the right company is a key business decision and we
                  want to make sure we are the right choice for you. You get to
                  know us before committing to the full project.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryKey;
