import React from "react";
import axios from "axios";
import TeredoNavalisElements from "../components/TeredoNavalisElements";

function TeredoNavalis( {teredoNavalis} ){

    return(
        <>
            <TeredoNavalisElements elements={teredoNavalis} />
        </>
    );
}

export default TeredoNavalis;


export async function getStaticProps(){

    const teredoNavalisRes = await axios.get("http://localhost:1337/api/teredo-navalises/?populate=*");
  
    return {
      props: {
        teredoNavalis: teredoNavalisRes.data,        
      },       
    };
  }