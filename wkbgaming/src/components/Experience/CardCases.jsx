import React, { useState } from "react";
import classNames from "classnames";
import styles from "./CardCases.module.css";

//ONIRIA
import oniria from "../../assets/Experience Images Low Size/ONIRIA P1-min.jpg";
import oniriaInfo from "../../assets/Experience Images Low Size/ONIRIA P2-min.jpg";
import oniria1 from "../../assets/Experience Images Low Size/ONIRIA C1-min.jpg";
import oniria2 from "../../assets/Experience Images Low Size/ONIRIA C2-min.jpg";
import oniria3 from "../../assets/Experience Images Low Size/ONIRIA C3-min.jpg";

//SANTA
import santa from "../../assets/Experience Images Low Size/SANTA P1-min.jpg";
import santaInfo from "../../assets/Experience Images Low Size/SANTA P2-min.jpg";
import santa1 from "../../assets/Experience Images Low Size/SANTA C1-min.jpg";
import santa2 from "../../assets/Experience Images Low Size/SANTA C2-min.jpg";
import santa3 from "../../assets/Experience Images Low Size/SANTA C3-min.jpg";

//PLANTA CURA
import cura from "../../assets/Experience Images Low Size/CURA P1-min.jpg";
import curaInfo from "../../assets/Experience Images Low Size/CURA P2-min.jpg";
import cura1 from "../../assets/Experience Images Low Size/CURA C1-min.jpg";
import cura2 from "../../assets/Experience Images Low Size/CURA C2-min.jpg";
import sponsor from "../../assets/Experience Images Low Size/SPONSOR P1-min.jpg";
import sponsorInfo from "../../assets/Experience Images Low Size/SPONSOR P2-min.jpg";

//CLEAN MADNESS
import cm from "../../assets/Experience Images Low Size/CM P1-min.jpg";
import cmInfo from "../../assets/Experience Images Low Size/CM P2-min.jpg";
import cm1 from "../../assets/Experience Images Low Size/CM C1-min.jpg";
import cm2 from "../../assets/Experience Images Low Size/CM C2-min.jpg";

//SONY
import sony from "../../assets/Experience Images Low Size/SONY P1-min.jpg";
import sonyInfo from "../../assets/Experience Images Low Size/SONY P2-min.jpg";
import sony1 from "../../assets/Experience Images Low Size/SONY C1-min.jpg";
import sony2 from "../../assets/Experience Images Low Size/SONY C2-min.jpg";
import sony3 from "../../assets/Experience Images Low Size/SONY C3-min.jpg";

//ARVUM
import arvum from "../../assets/Experience Images Low Size/ARVUM P1-min.jpg";
import arvumInfo from "../../assets/Experience Images Low Size/ARVUM P2-min.jpg";
import arvum1 from "../../assets/Experience Images Low Size/ARVUM C1-min.jpg";
import Modal from "react-modal";
import SliderExperience from "./SliderExperience";




const CardCases = () => {
  const oniriaImages = [oniria1,oniria2,oniria3]
  const santaImages = [santa1,santa2,santa3]
  const curaImages =[cura1,cura2]
  const sonyImages = [sony1,sony2,sony3]
  const cmImages = [cm1,cm2]
  const arvumImages = [arvum1]

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [currentImages, setCurrentImages] = useState(oniriaImages);

  const openModal = (images) => {
    setCurrentImages(images);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardModal}>
        <a >
          <div className={styles.card} onClick={() => openModal(oniriaImages)}>
            <div className={styles.imageContainer}>
              <img
                src={oniria}
                alt="oniria"
                className={classNames(styles.coworking, styles.visible)}
              />
              <img
                src={oniriaInfo}
                alt="oniriaInfo"
                className={styles.coworkingInfo}
              />
            </div>
          </div>
        </a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.ReactModal__Overlay}
        >
          <div className={styles.ReactModal__Content}>
            {" "}
            <button className={styles.ModalCloseButton} onClick={closeModal}>
              X
            </button>
            <SliderExperience images={currentImages} className={styles.slider} />
          </div>
        </Modal>
      </div>
      <div className={styles.cardModal}>
        <a onClick={() => openModal(santaImages)}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={santa}
                alt="santa"
                className={classNames(styles.coworking, styles.visible)}
              />
              <img
                src={santaInfo}
                alt="santaInfo"
                className={styles.coworkingInfo}
              />
            </div>
          </div>
        </a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.ReactModal__Overlay}
        >
          <div className={styles.ReactModal__Content}>
            {" "}
            <button className={styles.ModalCloseButton} onClick={closeModal}>
              X
            </button>
            <SliderExperience images={currentImages} className={styles.slider} />
          </div>
        </Modal>
      </div>
      <div className={styles.cardModal}>
        <a onClick={() => openModal(curaImages)}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={cura}
                alt="Plata Cura"
                className={classNames(styles.coworking, styles.visible)}
              />
              <img
                src={curaInfo}
                alt="Plata Cura"
                className={styles.coworkingInfo}
              />
            </div>
          </div>
        </a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.ReactModal__Overlay}
        >
          <div className={styles.ReactModal__Content}>
            {" "}
            <button className={styles.ModalCloseButton} onClick={closeModal}>
              X
            </button>
            <SliderExperience images={currentImages} className={styles.slider} />
          </div>
        </Modal>
      </div>
      <div className={styles.cardModal}>
        <a onClick={() => openModal(sonyImages)}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={sony}
                alt="Sony"
                className={classNames(styles.coworking, styles.visible)}
              />
              <img src={sonyInfo} alt="Sony" className={styles.coworkingInfo} />
            </div>
          </div>
        </a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.ReactModal__Overlay}
        >
          <div className={styles.ReactModal__Content}>
            {" "}
            <button className={styles.ModalCloseButton} onClick={closeModal}>
              X
            </button>
            <SliderExperience images={currentImages} className={styles.slider} />
          </div>
        </Modal>
      </div>
      <div className={styles.cardModal}>
        <a onClick={() => openModal(cmImages)}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={cm}
                alt="Clean Mandness"
                className={classNames(styles.coworking, styles.visible)}
              />
              <img
                src={cmInfo}
                alt="Clean Mandness"
                className={styles.coworkingInfo}
              />
            </div>
          </div>
        </a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.ReactModal__Overlay}
        >
          <div className={styles.ReactModal__Content}>
            {" "}
            <button className={styles.ModalCloseButton} onClick={closeModal}>
              X
            </button>
            <SliderExperience images={currentImages} className={styles.slider} />
          </div>
        </Modal>
      </div>
      <div className={styles.cardModal}>
        <a  onClick={() => openModal(arvumImages)}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={arvum}
                alt="arvum"
                className={classNames(styles.coworking, styles.visible)}
              />
              <img
                src={arvumInfo}
                alt="arvumInfo"
                className={styles.coworkingInfo}
              />
            </div>
          </div>
        </a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.ReactModal__Overlay}
        >
          <div className={styles.ReactModal__Content}>
            {" "}
            <button className={styles.ModalCloseButton} onClick={closeModal}>
              X
            </button>
            <SliderExperience images={currentImages} className={styles.slider} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CardCases;
