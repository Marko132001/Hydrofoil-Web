import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function AboutUs( {aboutUs, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={aboutUs} />
            <Footer t={t} />
        </>
    );
}

export default AboutUs;


export async function getStaticProps({locale}){

    const aboutUsRes = await axios.get(`${process.env.STRAPI_URL}/api/about-us/?locale=${locale}&populate=deep`);

    return {
      props: {
        aboutUs: aboutUsRes.data,
        ...(await serverSideTranslations(locale, ["navbar", "footer"])),      
      },       
    };
  }