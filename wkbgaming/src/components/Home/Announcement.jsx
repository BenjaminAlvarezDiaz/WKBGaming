import React, { useState } from "react";
import Gamejam from "../../assets/Announcement/Gamejam2.jpg";
import styles from "./Announcement.module.css";

const Announcement = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
     
      {isModalOpen && (
        <div className={`${styles.modal} ${styles.active}`}>
          <div className={styles.modalContent}>
            <button onClick={closeModal} className={styles.closeButton}>
              X
            </button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScbc8kcWCVsrKJgfj9HGIZSS3BDcoF-Y2sBmWtfLqea_lZVag/viewform" target="_blank" rel="noopener noreferrer">
              <img src={Gamejam} alt="Gamejam" className={styles.modalImage} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcement;
