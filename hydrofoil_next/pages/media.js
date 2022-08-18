import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function Media( {media} ){

    return(
        <>
            <LayoutElements elements={media} />
        </>
    );
}

export default Media;


export async function getStaticProps(){

    const mediaRes = await axios.get("http://localhost:1337/api/media/?populate=deep");
  
    return {
      props: {
        media: mediaRes.data,        
      },       
    };
  }