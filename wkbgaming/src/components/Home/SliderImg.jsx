import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderImg.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import santa from "./../../assets/Carrousel/santa.jpg";
import afa from "./../../assets/Carrousel/afa.jpg";
import planta from "./../../assets/Carrousel/planta.jpg";
import sony from "./../../assets/Carrousel/sony.jpg";
import arvum from "./../../assets/Carrousel/arvum.jpg";
import cm from "./../../assets/Carrousel/cm.jpg"

const SliderImg = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const NextArrow = ({ onClick }) => (
    <button
      className={`${styles.slickArrow} ${styles.slickNext}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className={`${styles.slickArrow} ${styles.slickPrev}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </button>
  );
  const settings = {
    lazyLoad: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "19%",
    margin: "0 auto",
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "12%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
    
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.continerSlider}>
      <h5>Our Experience</h5>
      <a href="/experience"><div className={styles.sliderWrapper}>
        <Slider {...settings}>
          <div className={`${styles.slide} ${activeSlide === 0 && styles.active}`}>
            <img src= {santa} alt="Image 1" />
            <h5>Branding - SANTA</h5>
          </div>
          <div className={`${styles.slide} ${activeSlide === 1 && styles.active}`}>
            <img src={afa} alt="Image 2" />
            <h5>Marketing Strategy - AFA FTI</h5>
          </div>
          <div className={`${styles.slide} ${activeSlide === 2 && styles.active}`}>
            <img src={planta} alt="Image 3" />
            <h5>Product Packaging & Branding - PLANTA CURA</h5>
          </div>
          <div className={`${styles.slide} ${activeSlide === 3 && styles.active}`}>
            <img src={sony} alt="Image 4" />
            <h5>Influencer Marketing & Event - SONY INZONE</h5>
          </div>
          <div className={`${styles.slide} ${activeSlide === 4 && styles.active}`}>
            <img src={arvum} alt="Image 5" />
            <h5>ESPORT Marketing - ARVUM</h5>
          </div>
          <div className={`${styles.slide} ${activeSlide === 5 && styles.active}`}>
            <img src={cm} alt="Image 5" />
            <h5>Videogame Develop & Branding - CLEAN MADNESS</h5>
          </div>
        </Slider>
      </div></a>
      
    </div>
  );
};

export default SliderImg;
