import React from "react";
import styles from "./Dropdown.module.css";

function Dropdown ({title, description}){
  return (
    <div className={styles.expandableDropdown}>
      <div className={styles.dropdown}>
        <div className={styles.dropdownTrigger}>{title}</div>
        <div className={styles.dropdownMenu}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;