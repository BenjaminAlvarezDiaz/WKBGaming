import React, { useState } from "react";
import {
  Heart,
  PlusSquare,
  CurrencyCircleDollar,
  CaretDown,
} from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const UxuiKey = () => {
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
              <Heart className={styles.iconOptions1} />
              <span>Customer satisfaction</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  An outstanding UI/UX design should be interactive and
                  navigable engaging content that makes people stay longer on
                  your site.
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
              <PlusSquare className={styles.iconOptions1} />
              <span>Attracts New Customers on the Platform</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  By attending to the needs of consumers, you’ll be attracting
                  more prospects who’ll want to convert. With outstanding UI/UX,
                  the right approach will pique customer interest and eventually
                  lead to fruitful conversions.
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
              <CurrencyCircleDollar className={styles.iconOptions1} />
              <span>Reduces Costs </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  Integrating an optimized UI/UX design into the development
                  process will help you address usability issues beforehand and
                  avoid extra re-design costs. Good usability testing software
                  may help plan for a scalable, flexible design that grows as
                  your customer base increases.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UxuiKey;
