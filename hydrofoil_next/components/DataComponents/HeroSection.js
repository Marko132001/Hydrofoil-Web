import React from 'react';

function HeroSection( {element} ) {
  return (
    <div className="hero-container">
        <video src={ `${'http://localhost:1337'}${element.attributes.images_and_video.data[0].attributes.url}` } autoPlay loop muted />
        <h1>{element.attributes.title}</h1>
    </div>
  )
}

export default HeroSection