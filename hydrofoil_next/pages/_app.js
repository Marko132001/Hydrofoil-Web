import "../styles/index.scss";
import Image from "next/image";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import Footer from "../components/Footer";
import React from "react";
import NavBar from "../components/NavBar";

const Vector1 = ({pictures}) => {
  return <Image
          className="vector" 
          src = {vector1}
          alt = "vector1"
          width="2000px"
          height="108px"
          />
}

const Vector2 = ({pictures}) => {
  return <Image
          className="vector"
          src = {vector2}
          alt = "vector2"
          width="2000px"
          height="150px"
          />
}


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Vector1 /><Vector2 />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
    );
}

export default MyApp

