import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import Abaccos from "../../assets/PARTNERS LOGOS/Black/ABACCOS.png";
import Afa from "../../assets/PARTNERS LOGOS/Black/AFA.png";
import Arvum from "../../assets/PARTNERS LOGOS/Black/ARVUM.png";
import Cannco from "../../assets/PARTNERS LOGOS/Black/CANNCO.png";
import Catamarca from "../../assets/PARTNERS LOGOS/Black/CATAMARCA GOBIERNO.png";
import CleanMadness from "../../assets/PARTNERS LOGOS/Black/CLEAN MADNESS.png";
import Coworking from "../../assets/PARTNERS LOGOS/Black/COWORKING.png";
import Dassa from "../../assets/PARTNERS LOGOS/Black/DASSA.png";
import DelTambo from "../../assets/PARTNERS LOGOS/Black/DEL TAMBO.png";
import Edojo from "../../assets/PARTNERS LOGOS/Black/EDOJO.png";
import Enerby from "../../assets/PARTNERS LOGOS/Black/ENERBY.png";
import Formosa from "../../assets/PARTNERS LOGOS/Black/FORMOSA TU CIUDAD.png";
import Inglot from "../../assets/PARTNERS LOGOS/Black/INGLOT.png";
import LaEstancia from "../../assets/PARTNERS LOGOS/Black/LA ESTANCIA.png";
import LaRioja from "../../assets/PARTNERS LOGOS/Black/LA RIOJA MUNI.png";
import LiftVan from "../../assets/PARTNERS LOGOS/Black/LIFT VAN.png";
import LigaProsur from "../../assets/PARTNERS LOGOS/Black/LIGA PROSUR.png";
import Lineage from "../../assets/PARTNERS LOGOS/Black/LINEAGE 6.png";
import Mebac from "../../assets/PARTNERS LOGOS/Black/MEBAC.png";
import Mercovan from "../../assets/PARTNERS LOGOS/Black/MERCOVAN.png";
import MorenoVenier from "../../assets/PARTNERS LOGOS/Black/MORENO VENIER.png";
import NaturalCBD from "../../assets/PARTNERS LOGOS/Black/NATURAL CBD.png";
import Nivel from "../../assets/PARTNERS LOGOS/Black/NIVEL.png";
import Oniria from "../../assets/PARTNERS LOGOS/Black/ONIRIA.png";
import PlantaCura from "../../assets/PARTNERS LOGOS/Black/PLANTA CURA.png";
import PocketGrid from "../../assets/PARTNERS LOGOS/Black/POCKET GRID.png";
import SaltaGaming from "../../assets/PARTNERS LOGOS/Black/SALTA GAMING.png";
import Salta from "../../assets/PARTNERS LOGOS/Black/SALTA.png";
import Santa from "../../assets/PARTNERS LOGOS/Black/SANTA.png";
import Sony from "../../assets/PARTNERS LOGOS/Black/SONY.png";
import Sponsor from "../../assets/PARTNERS LOGOS/Black/SPONSOR.png";
import Sst from "../../assets/PARTNERS LOGOS/Black/SST.png";
import Suyay from "../../assets/PARTNERS LOGOS/Black/SUYAY.png";
import TrinityViajes from "../../assets/PARTNERS LOGOS/Black/TRINITY VIAJES.png";
import Uthgra from "../../assets/PARTNERS LOGOS/Black/UTHGRA.png";
import ViniasEnFlor from "../../assets/PARTNERS LOGOS/Black/VIÑAS EN FLOR.png";
import styles from "./SliderBrands.module.css";

const SwiperBrands = () => {
  const swiperOptions = {
    slidesPerView: 7,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 2000,
    centeredSlides: true,
    centeredSlidesBounds: true,

    rtl: true,
    modules: [Autoplay],
  };
  return (
    <Swiper {...swiperOptions} className={styles.swiper}>
      <SwiperSlide>
        <img src={Abaccos} alt="Abaccos" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Afa} alt="Afa" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Arvum} alt="Arvum" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Cannco} alt="Cannco" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Catamarca} alt="Catamarca" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={CleanMadness} alt="CleanMadness" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Coworking} alt="Coworking" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Dassa} alt="Dassa" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={DelTambo} alt="DelTambo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Edojo} alt="Edojo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Enerby} alt="Enerby" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Formosa} alt="Formosa" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Inglot} alt="Inglot" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={LaEstancia} alt="LaEstancia" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={LaRioja} alt="LaRioja" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={LiftVan} alt="LiftVan" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={LigaProsur} alt="LigaProsur" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Lineage} alt="Lineage" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Mebac} alt="Mebac" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Mercovan} alt="Mercovan" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={MorenoVenier} alt="MorenoVenier" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={NaturalCBD} alt="NaturalCBD" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Nivel} alt="Nivel" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Oniria} alt="Oniria" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={PlantaCura} alt="PlantaCura" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={PocketGrid} alt="PocketGrid" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SaltaGaming} alt="SaltaGaming" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Salta} alt="Salta" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Santa} alt="Santa" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Sony} alt="Sony" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Sponsor} alt="Sponsor" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Sst} alt="Sst" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Suyay} alt="Suyay" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={TrinityViajes} alt="TrinityViajes" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Uthgra} alt="Uthgra" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ViniasEnFlor} alt="ViniasEnFlor" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperBrands;
