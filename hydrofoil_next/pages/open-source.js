import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function OpenSource( {openSource} ){

    return(
        <>
            <LayoutElements elements={openSource} />
        </>
    );
}

export default OpenSource;


export async function getStaticProps(){

    const openSourceRes = await axios.get("http://localhost:1337/api/open-source/?populate=deep");
  
    return {
      props: {
        openSource: openSourceRes.data,        
      },       
    };
  }