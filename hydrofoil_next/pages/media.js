import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function Media( {media, nav, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={media} />
        </>
    );
}

export default Media;


export async function getStaticProps({locale}){

    const mediaRes = await axios.get(`${process.env.STRAPI_URL}/api/media/?locale=${locale}&populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        media: mediaRes.data,
        nav: navRes.data,    
        ...(await serverSideTranslations(locale, ["navbar"])),     
      },       
    };
  }