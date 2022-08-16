import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function AboutUs( {aboutUs} ){

    return(
        <>
            <LayoutElements elements={aboutUs} />
        </>
    );
}

export default AboutUs;


export async function getStaticProps(){

    const aboutUsRes = await axios.get("http://localhost:1337/api/about-us?populate=deep");
  
    return {
      props: {
        aboutUs: aboutUsRes.data,        
      },       
    };
  }