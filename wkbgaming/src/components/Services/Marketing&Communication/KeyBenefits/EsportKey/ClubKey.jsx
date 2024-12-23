import React, { useState } from "react";
import {
  CursorClick,
  UsersFour,
  Watch,
  CaretDown,
} from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const ClubKey = () => {
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
              <CursorClick className={styles.iconOptions1} />
              <span>New public</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  With a club esport, we gain a new target, more people with
                  other characteristics that make your business a modern
                  project, and there is a market that can attack.
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
              <UsersFour className={styles.iconOptions1} />
              <span>Diversification </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  The traditional sport have a business model that is similar to
                  Esports, but it can créate a new model business, and generate
                  a new active.
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
              <Watch className={styles.iconOptions1} />
              <span>Time optimization </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  As an entrepreneur of a sports project, you can have peace of
                  mind, that we will take care of creating everything you need,
                  step by step, to have an Esport project, working in the best
                  way.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubKey;
