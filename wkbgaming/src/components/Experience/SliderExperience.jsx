import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./SliderExperience.module.css"; // Importa los estilos CSS Modules

// import required modules
import { Pagination, Navigation } from "swiper";

const SliderExperience = ({ images }) => {

  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper} // Aplica la clase CSS Module a "className"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

SliderExperience.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderExperience;
