import React from "react";
import Slider from "react-slick";
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

const SliderBrands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "35%",
    rtl: true,
  };
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "35%",
    pauseOnHover: false,
  };

  return (
    <div>
      <div className={styles.title}>
        <h1>They trusted</h1>
        <br />
      </div>
      <div className={styles.container}>
        <Slider {...settings} className={styles.sliderPurple}>
          {/* <img src={Mebac} alt="Mebac" /> */}
          <img src={Mercovan} alt="Mercovan" />
          {/* <img src={MorenoVenier} alt="MorenoVenier" /> */}
          <img src={NaturalCBD} alt="NaturalCBD" />
          <img src={Nivel} alt="Nivel" />

          <img src={PlantaCura} alt="PlantaCura" />
          <img src={PocketGrid} alt="PocketGrid" />
          {/* <img src={Salta} alt="Salta" /> */}
          <img src={SaltaGaming} alt="SaltaGaming" />
          {/* <img src={Santa} alt="Santa" /> */}
                 
          <img src={Abaccos} alt="abaccos" />
          <img src={Inglot} alt="Inglot" />
          {/* <img src={Sst} alt="Sst" /> */}
          {/* <img src={Suyay} alt="Suyay" /> */}
          {/* <img src={TrinityViajes} alt="TrinityViajes" /> */}
          {/* <img src={Uthgra} alt="Uthgra" /> */}
          {/* <img src={ViniasEnFlor} alt="ViniasEnFlor" /> */}
        </Slider>
        <Slider {...settings2} className={styles.sliderGreen}>
          <img src={Oniria} alt="Oniria" />
          {/* <img src={Afa} alt="Afa" /> */}
          <img src={Arvum} alt="Arvum" />
          <img src={Cannco} alt="Cannco" />
          {/* <img src={Catamarca} alt="Catamarca" /> */}
          {/* <img src={CleanMadness} alt="CleanMadness" /> */}
          {/* <img src={Coworking} alt="Coworking" /> */}
          {/* <img src={Dassa} alt="Dassa" /> */}
          {/* <img src={DelTambo} alt="DelTambo" /> */}
          <img src={Edojo} alt="Edojo" />
          <img src={Sponsor} alt="Sponsor" />
          {/* <img src={Enerby} alt="Enerby" /> */}
          {/* <img src={Formosa} alt="Formosa" /> */}
          <img src={Sony} alt="Sony" />
          {/* <img src={LaEstancia} alt="LaEstancia" /> */}
          {/* <img src={LaRioja} alt="LaRioja" /> */}
          {/* <img src={LiftVan} alt="LiftVan" /> */}
          <img src={LigaProsur} alt="LigaProsur" />
          <img src={Lineage} alt="Lineage" />
        </Slider>
      </div>
    </div>
  );
};

export default SliderBrands;
