import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function DeltaOne( {deltaOne, nav, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={deltaOne} />
        </>
    );
}

export default DeltaOne;


export async function getStaticProps({locale}){

    const deltaOneRes = await axios.get(`${process.env.STRAPI_URL}/api/delta-one/?locale=${locale}&populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        deltaOne: deltaOneRes.data,
        nav: navRes.data, 
        ...(await serverSideTranslations(locale, ["navbar"])),       
      },       
    };
  }