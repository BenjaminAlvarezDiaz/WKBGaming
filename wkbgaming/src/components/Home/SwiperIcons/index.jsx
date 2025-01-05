import React, { useRef, useState } from "react";
import styles from "./SwiperIcons.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import icons1 from "../../../assets/Icons/icons_1.png";

import icons2 from "../../../assets/Icons/icons_2.png";

import icons3 from "../../../assets/Icons/icons_3.png";

import icons4 from "../../../assets/Icons/icons_4.png";

import "swiper/css";
import "swiper/css/pagination";

function SwiperIcons () {
    return (
        <div className={styles.rectangles}>
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
                    slidesPerView={7}
                    speed={3000}
                >
                    <SwiperSlide><img src={"src/assets/Icons/icon_1.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_2.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_3.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_4.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_5.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_6.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_7.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_8.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_9.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_10.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_11.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_12.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_13.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_14.png"} alt="" /></SwiperSlide>
                    {/*<SwiperSlide><img src={icons1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={icons2} alt="" /></SwiperSlide>*/}
                    {/*<SwiperSlide>
                        <div className={styles.images}>
                            <img src={"src/assets/Icons/icon_1.png"} alt="" />
                            <img src={"src/assets/Icons/icon_2.png"} alt="" />
                            <img src={"src/assets/Icons/icon_3.png"} alt="" />
                            <img src={"src/assets/Icons/icon_4.png"} alt="" />
                            <img src={"src/assets/Icons/icon_5.png"} alt="" />
                            <img src={"src/assets/Icons/icon_6.png"} alt="" />
                            <img src={"src/assets/Icons/icon_7.png"} alt="" />
                            <img src={"src/assets/Icons/icon_8.png"} alt="" />
                            <img src={"src/assets/Icons/icon_9.png"} alt="" />
                            <img src={"src/assets/Icons/icon_10.png"} alt="" />
                            <img src={"src/assets/Icons/icon_11.png"} alt="" />
                            <img src={"src/assets/Icons/icon_12.png"} alt="" />
                            <img src={"src/assets/Icons/icon_13.png"} alt="" />
                            <img src={"src/assets/Icons/icon_14.png"} alt="" />
                        </div>
                    </SwiperSlide>*/}
                </Swiper>
            </div>
            <div className={styles.rectangle}>
                <Swiper
                    className="sample-slider"
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay:0,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    slidesPerView={7}
                    speed={3000}
                >
                    <SwiperSlide><img src={"src/assets/Icons/icon_15.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_16.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_17.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_18.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_19.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_20.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_21.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_22.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_23.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_24.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_25.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_26.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_27.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={"src/assets/Icons/icon_28.png"} alt="" /></SwiperSlide>
                    {/*<SwiperSlide><img src={icons3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={icons4} alt="" /></SwiperSlide>*/}
                </Swiper>
            </div>
        </div>
    );
}

export default SwiperIcons;

