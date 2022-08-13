import React, {useState} from 'react';
import Image from 'next/image';
import MarkdownIt from "markdown-it";
import ImageSlider from './ImageSlider';
import VideoPlayer from './VideoPlayer';
import CountingAnimation from './CountingAnimation';
import HeroSection from './HeroSection';


function Layout( {element} ){
    
    
    if(element.__component == "components.video-player"){
        //render videos
        return(
            <>
                <VideoPlayer element={element} />
            </>        
        );

    }
    else if(element.__component == "components.image-slider"){
        //render image slider
        return(
            <>
                <ImageSlider element={element} />
            </>
        );
    }
    else if(element.__component == "components.zig-zag"){
        const md = new MarkdownIt();
        const htmlContent = md.render(element.description);
        //render text and image
        return(
            <div className={element.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <Image
                    src = { `${'http://localhost:1337'}${element.image.data.attributes.url}` }
                    alt = "image"
                    layout="responsive"
                    width="400"
                    height="267"
                    />
                </div>
    
                <div className="layout_text" dangerouslySetInnerHTML={{__html: htmlContent}}>
                    
                </div>
            </div>
        );
    }
    else if(element.__component == "components.text-and-video"){
        const md = new MarkdownIt();
        const htmlContent = md.render(element.description);
        //render text and video
        return(
            <div className={element.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <VideoPlayer element={element} />
                </div>

                <div className="text_statistic" dangerouslySetInnerHTML={{__html: htmlContent}}>
        
                </div>
                
            </div>
        );
    }
    else if(element.__component == "components.title-and-text"){
        const md = new MarkdownIt();
        const htmlContent = md.render(element.description);

        return(
            //render title and text
            <div className="layout_statistic">
                <div className="layout_title">
                    <h3>{element.title}</h3>
                </div>
                <div className="text_statistic" dangerouslySetInnerHTML={{__html: htmlContent}}>
    
                </div>
            </div>
        );
    }
    else if(element.__component == "components.counting-animation"){

        return(
            <>
                <CountingAnimation element={element} />
            </>
        );
    }
    else if(element.__component == "components.hero-section-video"){

        return(
            <>
                <HeroSection element={element} />
            </>
        );
    }


    return(
        <>

        </>
    );

    
}

export default Layout;