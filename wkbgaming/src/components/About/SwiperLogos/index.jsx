import React, { useRef, useState } from "react";
import styles from "./SwiperLogos.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function SwiperLogos () {
    const branchs = [
        "src/assets/AboutUsLogos/eramet.png", "src/assets/AboutUsLogos/lilac.png",
        "src/assets/AboutUsLogos/argentinamining.png", "src/assets/AboutUsLogos/saltagobierno.png",
        "src/assets/AboutUsLogos/catamarcagobierno.png", "src/assets/AboutUsLogos/municipalidaddelarioja.png",
        "src/assets/AboutUsLogos/GAMLP.png", "src/assets/AboutUsLogos/sony.png",
        "src/assets/AboutUsLogos/afa1.png", "src/assets/AboutUsLogos/nivelseguros.png",
        "src/assets/AboutUsLogos/enerby.png", "src/assets/AboutUsLogos/volkswagen.png"
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