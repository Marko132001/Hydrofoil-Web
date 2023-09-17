import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function RiHack( {riHack, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={riHack} />
            <Footer t={t} />
        </>
    );
}

export default RiHack;


export async function getStaticProps({locale}){

    const riHackRes = await axios.get(`${process.env.STRAPI_URL}/api/ri-hack/?locale=${locale}&populate=deep`);
  
    return {
      props: {
        riHack: riHackRes.data,  
        ...(await serverSideTranslations(locale, ["navbar", "footer"])),      
      },       
    };
  }