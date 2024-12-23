import React, { useState } from "react";
import {
  UserCirclePlus,
  CurrencyCircleDollar,
  CaretDown,
} from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const MobileKey = () => {
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
              <UserCirclePlus className={styles.iconOptions2} />
              <span>Customer Acquisition & Retention </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  An attractive, functional and easy to use UX/UI will amaze
                  your users and solve their problems effectively. These
                  positive experiences will not only drive people to your
                  product, but it will also keep them using it.
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
              <CurrencyCircleDollar className={styles.iconOptions2} />
              <span>Reduce Costs</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  A well-designed product will require less training,
                  documentation and development, both now and in the future.
                  This will allow your team to focus on developing the business
                  instead of correcting false assumptions or confusing
                  navigation that gets the user stuck.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileKey;
