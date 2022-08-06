import "../styles/index.scss";
import Footer from "../components/Footer";
import React from "react";
import NavBar from "../components/NavBar";




function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
    );
}

export default MyApp

