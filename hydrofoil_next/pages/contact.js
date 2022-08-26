import React from "react";
import axios from "axios";
import LayoutElements from "../components/LayoutElements";
import NavBar from "../components/NavBar";

function Contact( {contact, nav} ){

    return(
        <>
            <NavBar navItems={nav} />
            <LayoutElements elements={contact} />
        </>
    );
}

export default Contact;


export async function getStaticProps(){

    const contactRes = await axios.get("http://localhost:1337/api/contact/?populate=deep");
    const navRes = await axios.get("http://localhost:1337/api/navigation-items/?populate=deep");
  
    return {
      props: {
        contact: contactRes.data,
        nav: navRes.data,        
      },       
    };
  }