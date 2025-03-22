import React, { useRef, useState } from "react";
import styles from "./SwiperIcons.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import activeCampaign from "../../../assets/Icons/activeCampaign.svg";
import adalo from "../../../assets/Icons/adalo.svg";
import airtable from "../../../assets/Icons/airtable.svg";
import awsLambda from "../../../assets/Icons/awsLambda.svg";
import cortex from "../../../assets/Icons/cortex.svg";
import crowdDev from "../../../assets/Icons/crowdDev.png";
import debugHelper from "../../../assets/Icons/debugHelper.svg";
import dropbox from "../../../assets/Icons/dropbox.svg";
import embeddingsAzureOpenAi from "../../../assets/Icons/embeddingsAzureOpenAi.svg";
import facebookGraphApi from "../../../assets/Icons/facebookGraphApi.svg";
import git from "../../../assets/Icons/git.svg";
import github from "../../../assets/Icons/github.png";
import gitlab from "../../../assets/Icons/gitlab.svg";
import linkedIn from "../../../assets/Icons/linkedIn.svg";
import googleFirebaseRealtimeDatabase from "../../../assets/Icons/googleFirebaseRealtimeDatabase.svg";
import html from "../../../assets/Icons/html.svg";
import ciscoWebex from "../../../assets/Icons/ciscoWebex.png";
import contentful from "../../../assets/Icons/contentful.png";
import mySql from "../../../assets/Icons/mySql.svg";
import googleFirebaseCloudFirestore from "../../../assets/Icons/googleFirebaseCloudFirestore.png";
import travisCi from "../../../assets/Icons/travisCi.png";
import zendesk from "../../../assets/Icons/zendesk.svg";
import mailchimp from "../../../assets/Icons/mailchimp.png";
import microsoftExcel from "../../../assets/Icons/microsoftExcel.svg";
import wekan from "../../../assets/Icons/wekan.svg";
import coinGecko from "../../../assets/Icons/coinGecko.svg";

import microsoftOutlook from "../../../assets/Icons/microsoftOutlook.svg";
import microsoftTeams from "../../../assets/Icons/microsoftTeams.svg";
import notion from "../../../assets/Icons/notion.png";
import npm from "../../../assets/Icons/npm.svg";
import openAi from "../../../assets/Icons/openAi.png";
import payPal from "../../../assets/Icons/payPal.svg";
import pipedrive from "../../../assets/Icons/pipedrive.svg";
import postgres from "../../../assets/Icons/postgres.svg";
import reddit from "../../../assets/Icons/reddit.svg";
import seaTable from "../../../assets/Icons/seaTable.svg";
import shopify from "../../../assets/Icons/shopify.svg";
import slack from "../../../assets/Icons/slack.svg";
import spotify from "../../../assets/Icons/spotify.svg";
import supabase from "../../../assets/Icons/supabase.svg";
import telegram from "../../../assets/Icons/telegram.svg";
import toolHttpRequest from "../../../assets/Icons/toolHttpRequest.svg";
import mailjet from "../../../assets/Icons/mailjet.svg";
import dhl from "../../../assets/Icons/dhl.svg";
import trello from "../../../assets/Icons/trello.svg";
import twitter from "../../../assets/Icons/twitter.png";
import whatsApp from "../../../assets/Icons/whatsApp.svg";
import wordpress from "../../../assets/Icons/wordpress.svg";
import youTube from "../../../assets/Icons/youTube.png";
import lmChatOpenAi from "../../../assets/Icons/lmChatOpenAi.svg";
import zoom from "../../../assets/Icons/zoom.svg";
import zulip from "../../../assets/Icons/zulip.svg";


import "swiper/css";
import "swiper/css/pagination";

function SwiperIcons () {
    const servicesArray = [
        activeCampaign, adalo,
        airtable, awsLambda,
        cortex, crowdDev,
        debugHelper, dropbox,
        embeddingsAzureOpenAi, facebookGraphApi,
        git, github,
        gitlab, linkedIn,
        googleFirebaseRealtimeDatabase, html,
        ciscoWebex, contentful,
        mySql, googleFirebaseCloudFirestore,
        travisCi, zendesk,
        mailchimp, microsoftExcel,
        wekan, coinGecko,
    
        microsoftOutlook, microsoftTeams,
        notion, npm,
        openAi, payPal,
        pipedrive, postgres,
        reddit, seaTable,
        shopify, slack,
        spotify, supabase,
        telegram, toolHttpRequest,
        mailjet, dhl,
        trello, twitter,
        whatsApp, wordpress,
        youTube, lmChatOpenAi,
        zoom, zulip,
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
                    breakpoints={{
                        320: {
                            slidesPerView: 6
                        },
                        768: {
                            slidesPerView: 6
                        },
                        1000: {
                            slidesPerView: servicesArray.length>=14? 9 : servicesArray.length/2
                        }
                    }}
                    speed={3000}
                >
                    {servicesArray? servicesArray.length>=14? 
                        (servicesArray.map((item, index) => (
                            index<=servicesArray.length/2? 
                            (
                                <SwiperSlide key={index}>
                                    <img src={item} alt=""/>
                                </SwiperSlide>
                            ) : null
                        )))
                    : 
                        (servicesArray.map((item, index) => (
                            index<=servicesArray.length? 
                            (
                                <SwiperSlide key={index}>
                                    <img src={item} alt=""/>
                                </SwiperSlide>
                            ) : null
                        )))
                    : null}
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
            {servicesArray.length >= 14?
                (<div className={styles.rectangle}>
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
                        breakpoints={{
                            320: {
                                slidesPerView: 6
                            },
                            768: {
                                slidesPerView: 6
                            },
                            1000: {
                                slidesPerView: servicesArray.length>=14? 9 : servicesArray.length/2
                            }
                        }}
                        speed={3000}
                    >
                        {servicesArray? servicesArray.map((item, index) => (
                            index>=servicesArray.length/2? 
                                <SwiperSlide key={index}>
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
                ) : null
            }
        </div>
    );
}

export default SwiperIcons;

