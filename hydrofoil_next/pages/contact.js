import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";
import WebForm from "../components/DataComponents/WebForm";

function Contact( {/*contact,*/ locale} ){

    const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            {/*<LayoutElements elements={contact} />*/}
            <WebForm t={t} />
            <Footer t={t} />
        </>
    );
}

export default Contact;


export async function getStaticProps({locale}){

    //const contactRes = await axios.get(`${process.env.STRAPI_URL}/api/contact/?populate=deep`);
  
    return {
      props: {
        //contact: contactRes.data,
        ...(await serverSideTranslations(locale, ["contact", "navbar", "footer"])),       
      },       
    };
  }