import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function Media( {media, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={media} />
            <Footer t={t} />
        </>
    );
}

export default Media;


export async function getStaticProps({locale}){

    const mediaRes = await axios.get(`${process.env.STRAPI_URL}/api/media/?locale=${locale}&populate=deep`);
  
    return {
      props: {
        media: mediaRes.data,   
        ...(await serverSideTranslations(locale, ["navbar", "footer"])),     
      },       
    };
  }