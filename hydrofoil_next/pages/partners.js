import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function Partners( {partners} ){

    return(
        <>
            <LayoutElements elements={partners} />
        </>
    );
}

export default Partners;


export async function getStaticProps(){

    const partnersRes = await axios.get("http://localhost:1337/api/partners/?populate=deep");
  
    return {
      props: {
        partners: partnersRes.data,        
      },       
    };
  }