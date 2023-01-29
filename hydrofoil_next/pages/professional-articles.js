import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function ProfessionalArticles( {articles, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={articles} />
            <Footer t={t} />
        </>
    );
}

export default ProfessionalArticles;


export async function getStaticProps({locale}){

    const articlesRes = await axios.get(`${process.env.STRAPI_URL}/api/professional-articles/?locale=${locale}&populate=deep`);
  
    return {
      props: {
        articles: articlesRes.data,       
        ...(await serverSideTranslations(locale, ["navbar", "footer"])), 
      },       
    };
  }