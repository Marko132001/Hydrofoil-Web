import React from 'react';
import ImageSlider from './ImageSlider';
import VideoPlayer from './VideoPlayer';
import CountingAnimation from './CountingAnimation';
import HeroSection from './HeroSection';
import ParallelParagraphs from './ParallelParagraphs';
import TextAndImage from './TextAndImage';
import TitleAndText from './TitleAndText';
import ImageAndCaption from './ImageAndCaption';
import PDFViewer from './PDFViewer';


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
    else if(element.__component == "components.parallel-paragraphs"){        

        return(
           <>
                <ParallelParagraphs element={element} />
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
    else if(element.__component == "components.pdf-viewer"){

        return(
            <>
                <PDFViewer element={element} />
            </>
        );
    }


    return(
        <>

        </>
    );

    
}

export default Layout;