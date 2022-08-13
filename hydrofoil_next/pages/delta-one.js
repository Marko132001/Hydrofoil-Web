import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function DeltaOne( {deltaOne} ){

    return(
        <>
            <LayoutElements elements={deltaOne} />
        </>
    );
}

export default DeltaOne;


export async function getStaticProps(){

    const deltaOneRes = await axios.get("http://localhost:1337/api/delta-one/?populate=deep");
  
    return {
      props: {
        deltaOne: deltaOneRes.data,        
      },       
    };
  }