import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function HydroContest( {hydroContest, nav, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={hydroContest} />
        </>
    );
}

export default HydroContest;


export async function getStaticProps({locale}){

    const hydroContestRes = await axios.get(`${process.env.STRAPI_URL}/api/hydro-contest/?locale=${locale}&populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        hydroContest: hydroContestRes.data,
        nav: navRes.data,   
        ...(await serverSideTranslations(locale, ["navbar"])),     
      },       
    };
  }