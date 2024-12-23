import React, { useState } from "react";
import { Graph, PiggyBank, Calendar, CaretDown } from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const GameKey = () => {
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
              <Graph className={styles.iconOptions2} />
              <span>Access to Advanced Technology </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  Game development outsourcing can give your business access to
                  expert developers with top-of-the-line equipment for a
                  fraction of the cost. You can get the benefits of cutting-edge
                  gaming technology without sacrificing a large percentage of
                  your operating Budget
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
              <PiggyBank className={styles.iconOptions2} />
              <span>Financial Savings </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  Hiring an offshore company to develop part or all of a game
                  can be significantly less expensive than hiring full-time
                  in-house developers. By using our services at WKB Gaming, you
                  can save 60% or more compared to the cost of in-house
                  development. Minimize your overhead costs and administrative
                  hassles.
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
              <Calendar className={styles.iconOptions2} />
              <span>More Time For Management </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  Outsourcing your game gives you much free time to look deeply
                  into the minor areas of your business. You can promote your
                  business on new channels, develop new ideas, and run all the
                  internal administrative tasks.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameKey;
