import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function TeredoNavalis( {teredoNavalis, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={teredoNavalis} />
        </>
    );
}

export default TeredoNavalis;


export async function getStaticProps(){

    const teredoNavalisRes = await axios.get("http://localhost:1337/api/teredo-navalis/?populate=deep");
    const navRes = await axios.get("http://localhost:1337/api/navigation-items/?populate=deep");
  
    return {
      props: {
        teredoNavalis: teredoNavalisRes.data,
        nav: navRes.data,        
      },       
    };
  }