import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function HydroContest( {hydroContest, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={hydroContest} />
        </>
    );
}

export default HydroContest;


export async function getStaticProps(){

    const hydroContestRes = await axios.get("http://localhost:1337/api/hydro-contest/?populate=deep");
    const navRes = await axios.get("http://localhost:1337/api/navigation-items/?populate=deep");
  
    return {
      props: {
        hydroContest: hydroContestRes.data,
        nav: navRes.data,        
      },       
    };
  }