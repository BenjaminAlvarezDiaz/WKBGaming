import React, { useState } from "react";
import { UserFocus,ShieldCheck,Sparkle,CaretDown}  from "@phosphor-icons/react";
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
              < UserFocus className={styles.iconOptions1} />
              <span>Customer Recognition</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  In the world of ads, when a customer recognizes a brand’s
                  color, theme, logo, etc., they are more likely to choose that
                  product over all others. This is because they are already
                  familiar with your brand and what it stands for. From
                  something simple and minimalistic to something wild and
                  eye-popping, a good brand will always be recognized in a sea
                  of others.
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
              <ShieldCheck className={styles.iconOptions1} />
              <span>Credibility</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  Every customer has their trust issues whenever it comes to
                  trying a new product or service, However, a strong brand can
                  help you set yourself apart as a well-established business
                  with strong values that customers can resonate with.
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
              <Sparkle className={styles.iconOptions1} />
              <span>Attracts Talent</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  When a business has effective branding, it is hard for people
                  to not notice. This attracts influencers, content creators,
                  social media marketers, and other concept builders. When a
                  business draws these kinds of people in, they increase their
                  creative powerhouse.
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
