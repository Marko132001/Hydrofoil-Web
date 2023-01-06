import "../styles/index.scss";
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps, nav }) {


  return (
    <>
      <NavBar navItems={nav} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}



export default MyApp;