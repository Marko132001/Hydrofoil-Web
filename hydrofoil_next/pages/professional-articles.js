import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function ProfessionalArticles( {articles, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={articles} />
        </>
    );
}

export default ProfessionalArticles;


export async function getStaticProps(){

    const articlesRes = await axios.get("http://localhost:1337/api/professional-articles/?populate=deep");
    const navRes = await axios.get("http://localhost:1337/api/navigation-items/?populate=deep");
  
    return {
      props: {
        articles: articlesRes.data,
        nav: navRes.data,        
      },       
    };
  }