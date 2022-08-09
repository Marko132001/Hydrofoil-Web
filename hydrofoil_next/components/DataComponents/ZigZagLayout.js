import React, {useState} from 'react';
import Image from 'next/image';
import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


function ZigZagLayout( {element} ){

    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

    const md = new MarkdownIt();
    const htmlContent = md.render(element.attributes.description);

    function renderVideo(){
        return element.attributes.images_and_video.data.map((video) => {
            return <ReactPlayer className="videoPlayer" video={video} key={video.id} controls url={ `${'http://localhost:1337'}${video.attributes.url}` } />
        });
    }

    function renderImageSlider(){

        const [current, setCurrent] = useState(0);
        const length = element.attributes.images_and_video.data.length;
        
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };


        return (
            <>

            <div className="slider">
                
                {element.attributes.images_and_video.data.map((image, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (  
                            <Image
                                    image={image}
                                    key={image.id}
                                    className="slider_image"
                                    src = { `${'http://localhost:1337'}${image.attributes.url}` }
                                    alt = "image"
                                    width="1000"
                                    height="600"
                            />
                        )}
                    </div> 
                    
                );
                })}
            </div>

            <nav className="slider-nav">
                <ul>
                    <li className="arrow">
                        <button className="previous">
                            <span>
                                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                            </span>
                        </button>
                    </li>
                    <li className="arrow">
                        <button className="next">
                            <span>
                                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
            </>
        );
    }
    
    
    
    if((element.attributes.title == null || element.attributes.title == "") && (element.attributes.description == null || element.attributes.description == "") && element.attributes.changeLayout){
        //render videos
        return(
            <>

                <div className="videoPlayerLayout">
                    {renderVideo()}
                </div>

            </>        
        );

    }
    else if((element.attributes.title == null || element.attributes.title == "") && (element.attributes.description == null || element.attributes.description == "") && !element.attributes.changeLayout){
        //render image slider
        return(
            <>
                <div className="slider-container">
                    {renderImageSlider()}
                </div>
            </>
        );
    }
    else if(element.attributes.description == null || element.attributes.description == ""){
        //render title and image
        return(
        <>
            <div className={element.attributes.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <Image
                    src = { `${'http://localhost:1337'}${element.attributes.image.data.attributes.url}` }
                    alt = "image"
                    layout="responsive"
                    width="400"
                    height="267"
                    />
                </div>
    
                <div className="layout_title">
                    <h3>{element.attributes.title}</h3>
                </div>
            </div>
        </> 
        );
    }
    else if((element.attributes.title == null || element.attributes.title == "") && element.attributes.images_and_video.data == null){
        //render text and image
        return(
            <div className={element.attributes.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <Image
                    src = { `${'http://localhost:1337'}${element.attributes.image.data.attributes.url}` }
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
    else if((element.attributes.title == null || element.attributes.title == "") && element.attributes.image.data == null){
        //render text and video
        return(
            <div className={element.attributes.changeLayout ? 'layout active' : 'layout'}>
                <div className="layout_image">
                    <div className="videoPlayerLayout">
                        {renderVideo()}
                    </div>
                </div>

                <div className="text_statistic" dangerouslySetInnerHTML={{__html: htmlContent}}>
        
                </div>
                
            </div>
        );
    }


    return(
        //render title and text
        <div className="layout_statistic">
            <div className="layout_title">
                <h3>{element.attributes.title}</h3>
            </div>
            <div className="text_statistic" dangerouslySetInnerHTML={{__html: htmlContent}}>

            </div>
        </div>
    );

    
}

export default ZigZagLayout;