import React from 'react';
import dynamic from "next/dynamic";

function HeroSection( {element} ) {

  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <div className="hero-container">
        <video autoPlay loop muted src={ `${'http://localhost:1337'}${element.video.data.attributes.url}` } />
        <h1>{element.title}</h1>
    </div>
  )
}

export default HeroSection