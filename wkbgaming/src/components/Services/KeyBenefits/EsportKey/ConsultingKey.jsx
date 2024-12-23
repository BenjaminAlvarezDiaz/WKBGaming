import React, { useState } from "react";
import {
  FastForward,
  HourglassMedium,
  Key,
  CaretDown,
} from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const ConsultingKey = () => {
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
              <FastForward className={styles.iconOptions2} />
              <span>Optimization operating and service costs</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  Doing an exhaustive analysis of the needs of a company,
                  business consulting services will be able to determine the
                  situations that the business goes through, in order to
                  optimize operating and service costs. In this way, you will be
                  able to avoid capital flight and unnecessary expenses.
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
              <HourglassMedium className={styles.iconOptions2} />
              <span>Time Savings </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  The experience means that we know best practices already. For
                  example, we can look at a client’s manufacturing process and
                  very quickly identify inefficiencies. With an esport
                  consulting, there is no need for business owners to reinvent
                  the wheel or lose valuable time.
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
              <Key className={styles.iconOptions2} />
              <span>Objectivity</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  Esport consulting provide a useful distance from business
                  challenges; they are not emotionally invested in operations in
                  the same way that business owners are and they can more easily
                  identify and address challenges.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingKey;
