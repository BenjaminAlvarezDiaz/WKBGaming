import React from "react";
import styles from "./ServicesGridView.module.css";

import HeaderCanvasBackground from "../Services/BackgroudAnimate/AimatedHeader";

function ServicesGridView (){

    const servicesArray = [
        { 
            title: "Servicio al cliente: eficiencia sin esfuerzo",
            description: 
            "La mayoría de las consultas de atención al cliente son repetitivas. \
            Con IA, podés automatizar respuestas comunes, \
            optimizar tiempos y liberar a tu equipo para tareas más estratégicas."
        },
        { 
            title: "Automatización de ventas y marketing: cerrá más negocios, más rápido",
            description: 
            "Desde la creación de contenido y embudos de ventas completos, \
            hasta la gestión de CRM, pagos y contratos. \
            La IA simplifica cada etapa del proceso para que no pierdas oportunidades."
        },
        { 
            title: "Reconocimiento y análisis de datos inteligentes",
            description: 
            "Analizá documentos, imágenes, voz y texto de forma precisa. \
            Identificá emociones, rostros, palabras clave y más, \
            para automatizar acciones o generar resúmenes útiles en segundos."
        },
        { 
            title: "Análisis predictivo: decisiones basadas en datos",
            description: 
            "Optimizá la planificación futura con predicciones de riesgos, \
            demanda o inventarios, permitiendo decisiones más informadas y estrategias eficientes."
        },
        { 
            title: "IA conversacional: comunicación ágil",
            description: 
            "Implementá chatbots avanzados, \
            respuestas automáticas y asistentes conversacionales para servicio al cliente, \
            ventas y marketing. Mejorá la experiencia del usuario 24/7."
        },
        { 
            title: "Gestión de proyectos: conectá y automatizá flujos",
            description: 
            "Eliminá los pasos manuales en tareas como administración, contabilidad, \
            facturación o incorporación de personal. \
            Dejá que la IA conecte cada etapa para un proceso fluido."
        },
        { 
            title: "Aumento de personal: productividad en su máxima expresión",
            description: 
            "Automatizá las tareas más tediosas de tu equipo, \
            ahorrando horas diarias y, en algunos casos, \
            reemplazando la necesidad de asistentes virtuales."
        },
        { 
            title: "Optimización de silos de datos",
            description: 
            "Recopilamos, limpiamos y consolidamos información de diferentes fuentes aisladas, \
            acelerando la generación de reportes y mejorando la precisión en la toma de decisiones."
        },
        { 
            title: "Integración de aplicaciones: hacé que todo trabaje junto",
            description: 
            "Conectamos tus herramientas digitales para sincronizar datos en tiempo real y \
            consolidar la información en un solo lugar. La automatización, \
            llevada al siguiente nivel."
        }
    ];

    return (
        <div className={styles.container}>
            <HeaderCanvasBackground />
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
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ServicesGridView;