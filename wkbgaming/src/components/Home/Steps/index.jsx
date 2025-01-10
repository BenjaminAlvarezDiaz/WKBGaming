import React from "react";
import styles from "./Steps.module.css";

function Steps (){
    const lineArray = Array.from({ length: 10 }, () => "horizontal_rule");
    return (
        <div className={styles.steps}>
            <div className={styles.item}>
                <div className={styles.step1}>
                    <span className="material-icons">format_list_bulleted</span>
                </div>
                <h3>Mapeamos tus procesos</h3>
            </div>
            <div className={styles.lineArray}>
                {lineArray.map((item, index) => (
                    <div className={styles.lineIcon}><span className="material-icons">{item}</span></div>
                ))}
            </div>
            <div className={styles.item}>
                <div className={styles.step2}>
                    <span className="material-icons">search</span>
                </div>
                <h3>Encontramos areas para agregar IA y automatizar</h3>
            </div>
            <div className={styles.lineArray}>
                {lineArray.map((item, index) => (
                    <div className={styles.lineIcon}><span className="material-icons">{item}</span></div>
                ))}
            </div>
            <div className={styles.item}>
                <div className={styles.step3}>
                    <span className="material-icons">handyman</span>
                </div>
                <h3>Construimos y probamos</h3>
            </div>
            <div className={styles.lineArray}>
                {lineArray.map((item, index) => (
                    <div className={styles.lineIcon}><span className="material-icons">{item}</span></div>
                ))}
            </div>
            <div className={styles.item}>
                <div className={styles.step4}>
                    <span className="material-icons">check</span>
                </div>
                <h3>Gestionamos e iteramos</h3>
            </div>
        </div>
    );
}

export default Steps;