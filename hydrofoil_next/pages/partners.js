import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function Partners( {partners, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={partners} />
        </>
    );
}

export default Partners;


export async function getStaticProps(){

    const partnersRes = await axios.get("http://localhost:1337/api/partners/?populate=deep");
    const navRes = await axios.get("http://localhost:1337/api/navigation-items/?populate=deep");
  
    return {
      props: {
        partners: partnersRes.data,
        nav: navRes.data,        
      },       
    };
  }