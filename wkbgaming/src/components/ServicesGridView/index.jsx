import React from "react";
import styles from "./ServicesGridView.module.css";

import HeaderCanvasBackground from "../Services/BackgroudAnimate/AimatedHeader";

import iconosWeb01 from "../../assets/ServicesGridViewIcons/iconosWeb01.png";
import iconosWeb02 from "../../assets/ServicesGridViewIcons/iconosWeb02.png";
import iconosWeb03 from "../../assets/ServicesGridViewIcons/iconosWeb03.png";
import iconosWeb04 from "../../assets/ServicesGridViewIcons/iconosWeb04.png";
import iconosWeb05 from "../../assets/ServicesGridViewIcons/iconosWeb05.png";
import iconosWeb06 from "../../assets/ServicesGridViewIcons/iconosWeb06.png";
import iconosWeb07 from "../../assets/ServicesGridViewIcons/iconosWeb07.png";
import iconosWeb08 from "../../assets/ServicesGridViewIcons/iconosWeb08.png";
import iconosWeb09 from "../../assets/ServicesGridViewIcons/iconosWeb09.png";

function ServicesGridView (){

    const servicesArray = [
        { 
            src: iconosWeb01,
            title: "Servicio al cliente: eficiencia sin esfuerzo",
            description: 
            "La mayoría de las consultas de atención al cliente son repetitivas. \
            Con IA, podés automatizar respuestas comunes, \
            optimizar tiempos y liberar a tu equipo para tareas más estratégicas."
        },
        { 
            src: iconosWeb02,
            title: "Automatización de marketing",
            description: 
            "Desde la creación de contenido y embudos de ventas completos, \
            hasta la gestión de CRM, pagos y contratos. \
            La IA simplifica cada etapa del proceso para que no pierdas oportunidades."
        },
        { 
            src: iconosWeb03,
            title: "Reconocimiento y análisis de datos inteligentes",
            description: 
            "Analizá documentos, imágenes, voz y texto de forma precisa. \
            Identificá emociones, rostros, palabras clave y más, \
            para automatizar acciones o generar resúmenes útiles en segundos."
        },
        { 
            src: iconosWeb04,
            title: "Análisis predictivo: decisiones basadas en datos",
            description: 
            "Optimizá la planificación futura con predicciones de riesgos, \
            demanda o inventarios, permitiendo decisiones más informadas y estrategias eficientes."
        },
        { 
            src: iconosWeb05,
            title: "IA conversacional: comunicación ágil",
            description: 
            "Implementá chatbots avanzados, \
            respuestas automáticas y asistentes conversacionales para servicio al cliente, \
            ventas y marketing. Mejorá la experiencia del usuario 24/7."
        },
        { 
            src: iconosWeb06,
            title: "Procesos automáticos",
            description: 
            "Eliminá los pasos manuales en tareas como administración, contabilidad, \
            facturación o incorporación de personal. \
            Dejá que la IA conecte cada etapa para un proceso fluido."
        },
        { 
            src: iconosWeb07,
            title: "Agentes IA internos",
            description: 
            "Automatizá las tareas más tediosas de tu equipo, \
            ahorrando horas diarias y, en algunos casos, \
            reemplazando la necesidad de asistentes virtuales."
        },
        { 
            src: iconosWeb08,
            title: "Optimización de silos de datos",
            description: 
            "Recopilamos, limpiamos y consolidamos información de diferentes fuentes aisladas, \
            acelerando la generación de reportes y mejorando la precisión en la toma de decisiones."
        },
        { 
            src: iconosWeb09,
            title: "Integración de aplicaciones",
            description: 
            "Conectamos tus herramientas digitales para sincronizar datos en tiempo real y \
            consolidar la información en un solo lugar. La automatización, \
            llevada al siguiente nivel."
        }
    ];

    return (
        <div>
            <HeaderCanvasBackground />
            <div className={styles.container}>
                <div className={styles.services}>
                    <h1>Servicios</h1>
                </div>
                <p className={styles.servicesDescription}>
                    Los infinitos casos de uso de la IA y la automatización
                    Nuestros clientes hacen que sus empleados sean 10 veces más eficientes al 
                    eliminar tareas tediosas y repetitivas. Somos independientes de la industria.
                </p>
                <div className={styles.gridContainer}>
                {servicesArray.map((item, index) => (
                    <div key={index} className={styles.gridItem}>
                        <div className={styles.content}>
                            <img className={styles.img} src={item.src} alt={index}/>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesGridView;