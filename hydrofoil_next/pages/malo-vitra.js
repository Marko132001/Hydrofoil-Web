import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function MaloVitra( {maloVitra, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={maloVitra} />
            <Footer t={t} />
        </>
    );
}

export default MaloVitra;


export async function getStaticProps({locale}){

    const maloVitraRes = await axios.get(`${process.env.STRAPI_URL}/api/malo-vitra/?locale=${locale}&populate=deep`);
  
    return {
      props: {
        maloVitra: maloVitraRes.data,  
        ...(await serverSideTranslations(locale, ["navbar", "footer"])),      
      },       
    };
  }