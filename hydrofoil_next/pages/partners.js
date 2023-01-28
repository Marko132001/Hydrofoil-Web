import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation, UseTranslation } from "next-i18next";

function Partners( {partners, nav, locale} ){

  const { t }  = useTranslation();

    return(
        <>
            <NavBar t={t} />
            <LayoutElements elements={partners} />
            <div className="partners-page-diamond-sponors">
            <div className="partners-page-diamond-sponsors-title">
              <div class="partners-page-diamond-sponsors-title-bg"> DIAMOND </div>
              <div class="partners-page-diamond-sponsors-title-fg"> DIAMOND </div>
            </div>
            <div className="partners-page--diamond-sponsors-container">
              <div className="parners-page-diamond-sponsors-1"></div>
              <div className="parners-page-diamond-sponsors-2"></div>
              <div className="parners-page-diamond-sponsors-3"></div>
            </div>
          </div>

          <div className="partners-page-platinum-sponors">
            <div className="partners-page-platinum-sponsors-title">
              <div class="partners-page-platinum-sponsors-title-bg"> PLATINUM </div>
              <div class="partners-page-platinum-sponsors-title-fg"> PLATINUM </div>
            </div>
            <div className="partners-page--platinum-sponsors-container">
              <div className="parners-page-platinum-sponsors-1"></div>
              <div className="parners-page-platinum-sponsors-2"></div>
              <div className="parners-page-platinum-sponsors-3"></div>
              <div className="parners-page-platinum-sponsors-4"></div>
              <div className="parners-page-platinum-sponsors-5"></div>
              <div className="parners-page-platinum-sponsors-6"></div>
              <div className="parners-page-platinum-sponsors-7"></div>
            </div>
          </div>

          <div className="partners-page-gold-sponors">
            <div className="partners-page-gold-sponsors-title">
              <div class="partners-page-gold-sponsors-title-bg"> GOLD </div>
              <div class="partners-page-gold-sponsors-title-fg"> GOLD </div>
            </div>
            <div className="partners-page--gold-sponsors-container">
              <div className="parners-page-gold-sponsors-1"></div>
              <div className="parners-page-gold-sponsors-2"></div>
              <div className="parners-page-gold-sponsors-3"></div>
              <div className="parners-page-gold-sponsors-4"></div>
              <div className="parners-page-gold-sponsors-5"></div>
              <div className="parners-page-gold-sponsors-6"></div>
            </div>
          </div>

          <div className="partners-page-bronze-sponors">
            <div className="partners-page-bronze-sponsors-title">
              <div class="partners-page-bronze-sponsors-title-bg"> BRONZE </div>
              <div class="partners-page-bronze-sponsors-title-fg"> BRONZE </div>
            </div>
            <div className="partners-page--bronze-sponsors-container">
              <div className="parners-page-bronze-sponsors-1"></div>
              <div className="parners-page-bronze-sponsors-2"></div>
              <div className="parners-page-bronze-sponsors-3"></div>
              <div className="parners-page-bronze-sponsors-4"></div>
              <div className="parners-page-bronze-sponsors-5"></div>
              <div className="parners-page-bronze-sponsors-6"></div>
              <div className="parners-page-bronze-sponsors-7"></div>
              <div className="parners-page-bronze-sponsors-8"></div>
              <div className="parners-page-bronze-sponsors-9"></div>
              <div className="parners-page-bronze-sponsors-10"></div>
              <div className="parners-page-bronze-sponsors-11"></div>
              <div className="parners-page-bronze-sponsors-12"></div>
              <div className="parners-page-bronze-sponsors-13"></div>
              <div className="parners-page-bronze-sponsors-14"></div>
            </div>
          </div>
        </>
    );
}

export default Partners;


export async function getStaticProps({locale}){

    const partnersRes = await axios.get(`${process.env.STRAPI_URL}/api/partners/?locale=${locale}&populate=deep`);
    const navRes = await axios.get(`${process.env.STRAPI_URL}/api/navigation-items/?populate=deep`);
  
    return {
      props: {
        partners: partnersRes.data,
        nav: navRes.data,  
        ...(await serverSideTranslations(locale, ["navbar"])),      
      },       
    };
  }