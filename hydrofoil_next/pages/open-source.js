import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DownloadsSection from "../components/DataComponents/DownloadsSection";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function OpenSource( {/*openSource,*/ locale} ){

    const { t }  = useTranslation();


    return(
        <>
            <NavBar t={t} />
            {/*<LayoutElements elements={openSource} />*/}
            <DownloadsSection t={t}/>
            <Footer t={t} />
        </>
    );
}

export default OpenSource;


export async function getStaticProps({locale}){

    //const openSourceRes = await axios.get(`${process.env.STRAPI_URL}/api/open-source/?populate=deep`);
  
    return {
      props: {
        //openSource: openSourceRes.data,
        ...(await serverSideTranslations(locale, ["open-source", "navbar", "footer"])),        
      },       
    };
  }