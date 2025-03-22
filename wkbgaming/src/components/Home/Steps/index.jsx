import React from "react";
import styles from "./Steps.module.css";
import step1 from "../../../assets/StepsGifts/list.gif";
import step2 from "../../../assets/StepsGifts/search.gif";
import step3 from "../../../assets/StepsGifts/tool.gif";
import step4 from "../../../assets/StepsGifts/check.gif";

function Steps (){
    const lineArray = Array.from({ length: 40 }, () => "horizontal_rule");
    return (
        <div className={styles.stepsContainer}>
            <h2>Cómo funciona nuestra agrencia de {" "} <span className={styles.highlight}>IA</span> {" "} y {" "} <span className={styles.highlight}>automatización</span>{" "}</h2>
            <div className={styles.steps}>
                <div className={styles.item}>
                    <div className={styles.step1}>
                        {/*<span className={`material-icons ${styles.icon}`}>format_list_bulleted</span>*/
                        <img 
                            className={styles.image}
                            src={step1} 
                            alt="animation"
                        />
                        }
                    </div>
                    <p>Paso 1</p>
                    <h3>Mapeamos tus procesos</h3>
                </div>
                <div className={styles.item}>
                    <div className={styles.step2}>
                        {/*<span className={`material-icons ${styles.icon}`}>search</span>*/
                        <img 
                            className={styles.image}
                            src={step2} 
                            alt="animation"
                        />
                        }
                    </div>
                    <p>Paso 2</p>
                    <h3>Estrategias de automatización</h3>
                </div>
                <div className={styles.item}>
                    <div className={styles.step3}>
                        {/*<span className={`material-icons ${styles.icon}`}>handyman</span>*/
                        <img 
                            className={styles.image}
                            src={step3} 
                            alt="animation"
                        />
                        }
                    </div>
                    <p>Paso 3</p>
                    <h3>Construimos y probamos</h3>
                </div>
                <div className={styles.item}>
                    <div className={styles.step4}>
                        {/*<span className={`material-icons ${styles.icon}`}>check</span>*/
                        <img 
                            className={styles.image}
                            src={step4} 
                            alt="animation"
                        />
                        }
                    </div>
                    <p>Paso 4</p>
                    <h3>Ejecutar el proceso</h3>
                </div>
                <div className={styles.lineArray}>
                    <div className={styles.array}>
                        {lineArray.map((item, index) => (
                            <div className={styles.lineIcon}><span className={`material-icons ${styles.arrayIcon}`}>{item}</span></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;