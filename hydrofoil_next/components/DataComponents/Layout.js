import React from 'react';
import ImageSlider from './ImageSlider';
import VideoPlayer from './VideoPlayer';
import CountingAnimation from './CountingAnimation';
import HeroSection from './HeroSection';
import TextAndImage from './TextAndImage';
import TitleAndText from './TitleAndText';
import ImageAndCaption from './ImageAndCaption';
import LogoSlider from './LogoSlider';
import SplitScreen from './SplitScreen';
import FeaturesSection from './FeaturesSection';
import VideoCard from './VideoCard';
import GridGallery from './GridGallery';


function Layout( {element} ){
    
    
    if(element.__component == "components.video-player"){

        return(
            <>
                <VideoPlayer element={element} />
            </>        
        );

    }
    else if(element.__component == "components.image-slider"){

        return(
            <>
                <ImageSlider element={element} />
            </>
        );
    }
    else if((element.__component == "components.zig-zag") || (element.__component == "components.text-and-video")){

       return(
            <>
                <TextAndImage element={element} />
            </>
       );
    }
    else if(element.__component == "components.title-and-text"){

        return(
            <>
                <TitleAndText element={element} />
            </>
        );
    }
    else if(element.__component == "components.counting-animation"){

        return(
            <>
                <CountingAnimation element={element} />
            </>
        );
    }
    else if(element.__component == "components.hero-section-video" || element.__component == "components.hero-section-image"){

        return(
            <>
                <HeroSection element={element} />
            </>
        );
    }
    else if(element.__component == "components.title-and-images"){

        return(
            <>
                <ImageAndCaption element={element} />
            </>
        );
    }
    else if(element.__component == "components.logo-slider"){

        return(
            <>
                <LogoSlider element={element} />
            </>
        );
    }
    else if(element.__component == "components.split-screen-element"){
        
        return(
            <>
                <SplitScreen element={element} />
            </>
        );
    }
    else if(element.__component == "components.features-section"){
        
        return(
            <>
                <FeaturesSection element={element} />
            </>
        );
    }
    else if(element.__component == "components.video-card"){
        
        return(
            <>
                <VideoCard element={element} />
            </>
        );
    }
    else if(element.__component == "components.grid-gallery"){

        return(
            <>
                <GridGallery element={element} />
            </>
        );
    }


    return(
        <>

        </>
    );

    
}

export default Layout;