import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function HydroContest( {hydroContest} ){

    return(
        <>
            <LayoutElements elements={hydroContest} />
        </>
    );
}

export default HydroContest;


export async function getStaticProps(){

    const hydroContestRes = await axios.get("http://localhost:1337/api/hydro-contest/?populate=deep");
  
    return {
      props: {
        hydroContest: hydroContestRes.data,        
      },       
    };
  }