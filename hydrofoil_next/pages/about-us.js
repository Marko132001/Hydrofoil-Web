import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function AboutUs( {aboutUs, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={aboutUs} />
        </>
    );
}

export default AboutUs;


export async function getStaticProps(){

    const aboutUsRes = await axios.get("http://localhost:1337/api/about-us?populate=deep");
    const navRes = await axios.get("http://localhost:1337/api/navigation-items/?populate=deep");

    return {
      props: {
        aboutUs: aboutUsRes.data,
        nav: navRes.data,        
      },       
    };
  }