import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";
import WebForm from "../components/DataComponents/WebForm";

function Contact( {contact, nav, locale} ){

    const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            {/*<LayoutElements elements={contact} />*/}
            <WebForm t={t} />
        </>
    );
}

export default Contact;


export async function getStaticProps({locale}){

    const contactRes = await axios.get(`${process.env.STRAPI_URL}/api/contact/?populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        contact: contactRes.data,
        nav: navRes.data, 
        ...(await serverSideTranslations(locale, ["contact", "navbar"])),       
      },       
    };
  }