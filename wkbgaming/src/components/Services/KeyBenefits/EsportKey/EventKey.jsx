import React, { useState } from "react";
import {
  HandEye,
  PlusCircle,
  BookOpenText,
  Lightning,
  CaretDown,
} from "@phosphor-icons/react";
import styles from "../KeyBenefits.module.css";

const EventKey = () => {
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
              <HandEye className={styles.iconOptions1} />
              <span>Increasing brand visibility</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  First off, you have a great chance to use it to improve brand
                  visibility to the next level. Namely, establishing sponsorship
                  deals enables your name and brand visuals to appear alongside
                  other reputable brands and in front of large audiences.
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
              <PlusCircle className={styles.iconOptions1} />
              <span>A positive image </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  Marketing affairs for esports and entertainment is a way to
                  build credibility and authority around your business.
                  Essentially, you attach your business to worthy causes and
                  high-profile affairs in order to nurture positive
                  associations.
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
              <BookOpenText className={styles.iconOptions1} />
              <span>Content & social media marketing </span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  What many entrepreneurs overlook is that esports event
                  marketing experience provides a lot of material for ramping up
                  a content marketing strategy. Indeed, social media promotion
                  for events is an integral part of the success formula along
                  with other sports digital marketing campaigns — and a high
                  number of brands already use it for highlighting their
                  involvement.
                </p>
              </div>
            )}
          </div>
          <div
            className={`${styles.dropdownOption} ${
              selectedIndex === 3 ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(3)}
          >
            <div className={styles.option}>
              <Lightning className={styles.iconOptions1} />
              <span>Boosting sales</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 3 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 3 && (
              <div className={styles.dropdownText}>
                <p>
                  Esport events and business summits open the doors to winning
                  more customers over and increasing your sales on the spot.
                  Take the example of food brands setting up booths and stands
                  at esports affairs and feeding hundreds of fans.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventKey;
