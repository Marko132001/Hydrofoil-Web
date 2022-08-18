import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function ProfessionalArticles( {articles} ){

    return(
        <>
            <LayoutElements elements={articles} />
        </>
    );
}

export default ProfessionalArticles;


export async function getStaticProps(){

    const articlesRes = await axios.get("http://localhost:1337/api/professional-articles/?populate=deep");
  
    return {
      props: {
        articles: articlesRes.data,        
      },       
    };
  }