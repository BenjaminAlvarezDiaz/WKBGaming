import React, { useState } from "react";
import { TrendUp , IntersectThree ,FireSimple,CaretDown}  from "@phosphor-icons/react";
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
      <div className={styles.dropdown}><h4>Key Benefits</h4>
        <div className={styles.dropdownOptions}>
          <div
            className={`${styles.dropdownOption} ${
              selectedIndex === 0 ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(0)}
          >
            <div className={styles.option}>
              <TrendUp className={styles.iconOptions1} />
              <span>Increased Revenue</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 0 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 0 && (
              <div className={styles.dropdownText}>
                <p>
                  Businesses all have the common goal of drawing in as much
                  revenue as possible. If you haven’t included social media as
                  part of your marketing initiatives, you may be missing out on
                  an additional stream of income. This ties in with brand
                  awareness, and with more people finding out about your
                  business, the more potential you have at growing your customer
                  base.
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
              < IntersectThree className={styles.iconOptions1} />
              <span>Brand awareness</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 1 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 1 && (
              <div className={styles.dropdownText}>
                <p>
                  Having a presence on social media makes it easier for both
                  existing and potential customers to find and connect with your
                  brand. With the sheer volume of people using social media
                  today, your business has an opportunity to reach a significant
                  number of new eyes and audiences. Social platforms are also a
                  great place to tell your brand’s story and help people get a
                  better feel for what your business is all about.
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
              <FireSimple className={styles.iconOptions1} />
              <span>Current Trends</span>
              <CaretDown
                className={`${styles.icon} ${
                  selectedIndex === 2 ? styles.rotate : ""
                }`}
              />
            </div>

            {selectedIndex === 2 && (
              <div className={styles.dropdownText}>
                <p>
                  The one thing that is constant in both the real and digital
                  world is that it is always changing. New trends, products,
                  brands, and services are being introduced on a daily basis,
                  which can often be hard to keep up with. In such a rapidly
                  changing world, there needs to be an efficient way in which
                  customers can stay on top of this change. Content on social
                  media is a great way for consumers to access engaging and
                  relevant information that helps them stay up-to-date.
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
