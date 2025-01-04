import React, { useEffect, useState } from "react";
import Dropdown from "../Home/Dropdown";
import styles from "./ServiceCard.module.css";

function ServiceCard (){
    return (
        <div className={styles.serviceCardContainer}>
            <div className={styles.serviceCard}>
                <div className={styles.dropdown}>
                    <div className={styles.serviceCardTitle}>
                        <div className={styles.serviceCardTitleLabel}>Marketing IA</div>
                    </div>
                    <div className={styles.serviceCardContent}>
                        <div className={styles.serviceCardLabel}>
                            El marketing y la publicidad, 
                            durante muchos años han dependido de tareas repetitivas, 
                            pensar una idea, escribir, diseñar, y publicar; 
                            esto implica un equipo de trabajo y mucho costo. Con nuestro servicio, 
                            tu marketing está las 24/7, contenido de calidad, 
                            publicaciones automáticas, respuestas automáticas, y sobre todo, 
                            más del 60% de ahorro en costos.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.serviceCard2}>
                <div className={styles.dropdown}>
                    <div className={styles.serviceCardTitle2}>
                        <div className={styles.serviceCardTitleLabel}>Agentes IA</div>
                    </div>
                    <div className={styles.serviceCardContent}>
                        <div className={styles.serviceCardLabel}>
                            Los agentes son asistentes digitales, 
                            que leen e interpretan la información y 
                            luego aceptan órdenes para generar textos, informes, 
                            o interactuar con la base de datos en lenguaje natural, es decir, 
                            podrás chatear y explorar cosas nuevas con tu información, 
                            sacandole el máximo provecho; cómo uso interno y para atención al cliente.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.serviceCard3}>
                <div className={styles.dropdown}>
                    <div className={styles.serviceCardTitle3}>
                        <div className={styles.serviceCardTitleLabel}>Automatización</div>
                    </div>
                    <div className={styles.serviceCardContent}>
                        <div className={styles.serviceCardLabel}>
                            Las tareas repetitivas, como la elaboración de tablas, 
                            el cálculo de resultados en excel o google shits, la generación de informes, 
                            el envío de emails, notificaciones a áreas internas, 
                            que tardaban horas ahora tardan segundos, ya que identificamos cada paso, 
                            y lo automatizamos; ahora una IA, podrá ejecutar esos pasos, 
                            sin errores y en tiempo record, 
                            tu podrás ocuparte de tareas más importantes.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;