import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function TeredoNavalis( {teredoNavalis} ){

    return(
        <>
            <LayoutElements elements={teredoNavalis} />
        </>
    );
}

export default TeredoNavalis;


export async function getStaticProps(){

    const teredoNavalisRes = await axios.get("http://localhost:1337/api/teredo-navalis/?populate=deep");
  
    return {
      props: {
        teredoNavalis: teredoNavalisRes.data,        
      },       
    };
  }