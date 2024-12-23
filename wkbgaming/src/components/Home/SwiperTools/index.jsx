import React, { useRef, useState } from "react";
import styles from "./SwiperTools.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import dev1 from "../../../assets/Tools/Programación-1.png";
import dev2 from "../../../assets/Tools/Programación-2.png";
import dev3 from "../../../assets/Tools/Programación-3.png";
import dev4 from "../../../assets/Tools/Programación-4.png";

import desing1 from "../../../assets/Tools/Diseño Gráfico.png";
import desing2 from "../../../assets/Tools/Diseño Gráfico-1.png";

import agency1 from "../../../assets/Tools/Contenido y Agencia.png";
import agency2 from "../../../assets/Tools/Contenido y Agencia-1.png";

import video1 from "../../../assets/Tools/Video Animación.png";
import video2 from "../../../assets/Tools/Video Animación-1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwaiperTools = () => {
  return (
    <div className={styles.squares}>
      <div className={styles.square}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={false}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={dev1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dev2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dev3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dev4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.square}>
        <Swiper
          dir="rtl"
          slidesPerView={1}
          spaceBetween={30}
          pagination={false}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={desing1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={desing2} alt="" />
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className={styles.square}>
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          dir="rtl"
          pagination={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={agency1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={agency2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.square}>
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={false}
          autoplay={{
            delay: 2900,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={video1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={video2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default SwaiperTools;
