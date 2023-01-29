import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function DeltaOne( {deltaOne, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={deltaOne} />
            <Footer t={t} />
        </>
    );
}

export default DeltaOne;


export async function getStaticProps({locale}){

    const deltaOneRes = await axios.get(`${process.env.STRAPI_URL}/api/delta-one/?locale=${locale}&populate=deep`);
  
    return {
      props: {
        deltaOne: deltaOneRes.data,
        ...(await serverSideTranslations(locale, ["navbar", "footer"])),       
      },       
    };
  }