import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function TeredoNavalis( {teredoNavalis, nav, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={teredoNavalis} />
        </>
    );
}

export default TeredoNavalis;


export async function getStaticProps({locale}){

    const teredoNavalisRes = await axios.get(`${process.env.STRAPI_URL}/api/teredo-navalis/?locale=${locale}&populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        teredoNavalis: teredoNavalisRes.data,
        nav: navRes.data,   
        ...(await serverSideTranslations(locale, ["navbar"])),      
      },       
    };
  }