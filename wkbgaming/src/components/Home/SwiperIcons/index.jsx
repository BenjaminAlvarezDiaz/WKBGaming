import React, { useRef, useState } from "react";
import styles from "./SwiperIcons.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function SwiperIcons () {
    const servicesArray = [
        "src/assets/Icons/activeCampaign.svg", "src/assets/Icons/adalo.svg",
        "src/assets/Icons/airtable.svg", "src/assets/Icons/awsLambda.svg",
        "src/assets/Icons/cortex.svg", "src/assets/Icons/crowdDev.svg",
        "src/assets/Icons/debugHelper.svg", "src/assets/Icons/dropbox.svg",
        "src/assets/Icons/embeddingsAzureOpenAi.svg", "src/assets/Icons/facebookGraphApi.svg",
        "src/assets/Icons/git.svg", "src/assets/Icons/github.svg",
        "src/assets/Icons/gitlab.svg", "src/assets/Icons/linkedIn.svg",
        "src/assets/Icons/googleFirebaseRealtimeDatabase.svg", "src/assets/Icons/html.svg",
        "src/assets/Icons/ciscoWebex.png", "src/assets/Icons/contentful.png",
        "src/assets/Icons/mySql.svg", "src/assets/Icons/googleFirebaseCloudFirestore.png",
        "src/assets/Icons/linkedIn.svg", "src/assets/Icons/zendesk.svg",
        "src/assets/Icons/mailchimp.png", "src/assets/Icons/microsoftExcel.svg",
        "src/assets/Icons/wekan.svg", "src/assets/Icons/coinGecko.svg",

        "src/assets/Icons/microsoftOutlook.svg", "src/assets/Icons/microsoftTeams.svg",
        "src/assets/Icons/notion.png", "src/assets/Icons/npm.svg",
        "src/assets/Icons/openAi.png", "src/assets/Icons/payPal.svg",
        "src/assets/Icons/pipedrive.svg", "src/assets/Icons/postgres.svg",
        "src/assets/Icons/reddit.svg", "src/assets/Icons/seaTable.svg",
        "src/assets/Icons/shopify.svg", "src/assets/Icons/slack.svg",
        "src/assets/Icons/spotify.svg", "src/assets/Icons/supabase.svg",
        "src/assets/Icons/telegram.svg", "src/assets/Icons/toolHttpRequest.svg",
        "src/assets/Icons/mailjet.svg", "src/assets/Icons/dhl.svg",
        "src/assets/Icons/trello.svg", "src/assets/Icons/twitter.png",
        "src/assets/Icons/whatsApp.svg", "src/assets/Icons/wordpress.svg",
        "src/assets/Icons/youTube.png", "src/assets/Icons/lmChatOpenAi.svg",
        "src/assets/Icons/zoom.svg", "src/assets/Icons/zulip.svg",
    ];
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
                    slidesPerView={9}
                    speed={3000}
                >
                    {servicesArray? servicesArray.map((item, index) => (
                        index<=26? 
                        (
                            <SwiperSlide>
                                <img src={item} alt=""/>
                            </SwiperSlide>
                        ) : null
                    )) : null}
                    {/*<SwiperSlide><img src={"src/assets/Icons/icon_1.png"} alt="" /></SwiperSlide>
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
                    <SwiperSlide><img src={"src/assets/Icons/icon_14.png"} alt="" /></SwiperSlide>*/}
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
                    slidesPerView={9}
                    speed={3000}
                >
                    {servicesArray? servicesArray.map((item, index) => (
                        index>=26? 
                            <SwiperSlide>
                                <img src={item} alt=""/>
                            </SwiperSlide>
                        : null
                    )) : null}
                    {/*<SwiperSlide><img src={"src/assets/Icons/icon_15.png"} alt="" /></SwiperSlide>
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
                    <SwiperSlide><img src={"src/assets/Icons/icon_28.png"} alt="" /></SwiperSlide>*/}
                    {/*<SwiperSlide><img src={icons3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={icons4} alt="" /></SwiperSlide>*/}
                </Swiper>
            </div>
        </div>
    );
}

export default SwiperIcons;

