import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";

function Contact( {contact} ){

    return(
        <>
            <LayoutElements elements={contact} />
        </>
    );
}

export default Contact;


export async function getStaticProps(){

    const contactRes = await axios.get("http://localhost:1337/api/contact/?populate=deep");
  
    return {
      props: {
        contact: contactRes.data,        
      },       
    };
  }