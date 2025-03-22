import React, { useRef, useState } from "react";
import styles from "./SwiperLogos.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import eramet from "../../../assets/AboutUsLogos/eramet.png";
import lilac from "../../../assets/AboutUsLogos/lilac.png";
import argentinamining from "../../../assets/AboutUsLogos/argentinamining.png";
import saltagobierno from "../../../assets/AboutUsLogos/saltagobierno.png";
import catamarcagobierno from "../../../assets/AboutUsLogos/catamarcagobierno.png";
import municipalidaddelarioja from "../../../assets/AboutUsLogos/municipalidaddelarioja.png";
import GobiernoAMLP from "../../../assets/AboutUsLogos/GAMLP.png";
import sony from "../../../assets/AboutUsLogos/sony.png";
import afa1 from "../../../assets/AboutUsLogos/afa1.png";
import nivelseguros from "../../../assets/AboutUsLogos/nivelseguros.png";
import enerby from "../../../assets/AboutUsLogos/enerby.png";
import volkswagen from "../../../assets/AboutUsLogos/volkswagen.png";

import "swiper/css";
import "swiper/css/pagination";

function SwiperLogos () {
    const branchs = [
        eramet, lilac,
        argentinamining, saltagobierno,
        catamarcagobierno, municipalidaddelarioja,
        GobiernoAMLP, sony,
        afa1, nivelseguros,
        enerby, volkswagen
    ];
    return (
        <div className={styles.rectangle}>
            <Swiper
                className="sample-slider"
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay:0, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 6
                    },
                    1000: {
                        slidesPerView: 6
                    }
                }}
                speed={3000}
            >
            {
                (branchs.map((item, index) => (
                    index<=branchs.length? index == 8? 
                    (
                        <SwiperSlide className={styles.swiperSlideAfa}>
                            <img src={item} alt=""/>
                        </SwiperSlide>
                    )
                    : 
                    (
                        <SwiperSlide className={styles.swiperSlide}>
                            <img src={item} alt=""/>
                        </SwiperSlide>
                    ): null
                )))
            }
            </Swiper>
        </div>
    );
}

export default SwiperLogos;