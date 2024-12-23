import React from "react";
import Style from "./MarketingCommunication.module.css";
import SocialKey from "./KeyBenefits/MarketingKey/SocialKey";
import SocialInfo from "./Info/Marketing/SocialInfo";
import ContentKey from "./KeyBenefits/MarketingKey/ContentKey";
import ContentInfo from "./Info/Marketing/ContentInfo";
import BrandingKey from "./KeyBenefits/MarketingKey/BrandingKey";
import BrandingInfo from "./Info/Marketing/BrandingInfo";
import GraphicInfo from "./Info/Marketing/GraphicInfo";
import FactoryKey from "./KeyBenefits/AppGamesKey/FactoryKey";
import FactoryInfo from "./Info/AppGames/FactoryInfo";
import MobileKey from "./KeyBenefits/AppGamesKey/MobileKey";
import MobileInfo from "./Info/AppGames/MobileInfo";
import Webkey from "./KeyBenefits/AppGamesKey/WebKey";
import WebInfo from "./Info/AppGames/WebInfo";
import GameKey from "./KeyBenefits/AppGamesKey/GameKey";
import GameInfo from "./Info/AppGames/GameInfo";
import UxuiKey from "./KeyBenefits/AppGamesKey/UxuiKey";
import UxuInfo from "./Info/AppGames/UxuInfo";
import ConsultingInfo from "./Info/Esport/ConsultingInfo";
import ConsultingKey from "./KeyBenefits/EsportKey/ConsultingKey";
import ClubInfo from "./Info/Esport/ClubInfo";
import ClubKey from "./KeyBenefits/EsportKey/ClubKey";
import DigitalInfo from "./Info/Esport/DigitalInfo";
import DigitalKey from "./KeyBenefits/EsportKey/DigitalKey";
import EventInfo from "./Info/Esport/EventInfo";
import EventKey from "./KeyBenefits/EsportKey/EventKey";

//import GraphicKey from "./KeyBenefits/MarketingKey/GraphicKey";

const MarketingCommunication = () => {
  return (
    <div className={Style.container}>
      <br />
      <br />
      <div className={Style.title}>
        <h1>Marketing & Communication</h1>
      </div>
      <div className={Style.cards}>
        <div className={Style.card}>
          <SocialInfo />
          <SocialKey />
        </div>
        <div className={Style.card}>
          <ContentInfo />
          <ContentKey />
        </div>
        <div id="branding" className={Style.card}>
          <BrandingInfo />
          <BrandingKey />
        </div>
        <div className={Style.card}>
          <GraphicInfo />
          <br />
        </div>{" "}
      </div>
      <br />
      <br />
      <div className={Style.title2}>
        <h1>Esport Services</h1>
      </div>
      <div className={Style.cards}>
        <div className={Style.card}>
          <FactoryInfo />
          <FactoryKey />
        </div>
        <div className={Style.card}>
          <MobileInfo />
          <MobileKey />
        </div>
        <div className={Style.card}>
          <WebInfo />
          <Webkey />
        </div>
        <div className={Style.card}>
          <GameInfo />
          <GameKey />
        </div>
        <div className={Style.card}>
          <UxuInfo />
          <UxuiKey />
        </div>
      </div>

      <br />
      <br />
      <div className={Style.title3}>
        <h1>E-sports Services</h1>
      </div>
      <div className={Style.cards}>
        <div className={Style.card}>
          <ConsultingInfo />
          <ConsultingKey />
        </div>
        <div className={Style.card}>
          <ClubInfo />
          <ClubKey />
        </div>
        <div className={Style.card}>
          <DigitalInfo />
          <DigitalKey />
        </div>
        <div className={Style.card}>
          <EventInfo />
          <EventKey />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
export default MarketingCommunication;
