import React from 'react';
import Image from 'next/image';

function LogoSlider( {element} ) {


const DURATION = 15000;
const ROWS = 2;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({image}) => (
  
		<div key={image.id} className="logo-slide">
		<Image
				  src = {process.env.IMAGES_STRAPI_URL + image.attributes.url}
				  alt = "image"
				  layout="responsive"
				  width="250"
				  height="100"
		/>
  		</div>
  
);


  return (

	<> 
	 <div className='app'>
    <header className='headerLogo'>
      <h1>{element.title}</h1>
      <p>{element.subtitle}</p>
    </header>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(element.images.data).slice(0, TAGS_PER_ROW).map((tag, index) => (
            <Tag key={index} image={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
  </div>
  </>
  );
}

export default LogoSlider