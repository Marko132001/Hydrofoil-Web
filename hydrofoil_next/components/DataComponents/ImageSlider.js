import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


function ImageSlider( {element} ){


    useEffect(() => {

    
        let defaultTransform = 0;
        function goNext() {
            defaultTransform = defaultTransform - 500;
            var slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
                defaultTransform = 0;
            slider.style.transform = "translateX(" + defaultTransform + "px)";
        }
        var next = document.getElementById("next");
        next.addEventListener("click", goNext);
        function goPrev() {
            var slider = document.getElementById("slider");
            if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
            else defaultTransform = defaultTransform + 500;
            slider.style.transform = "translateX(" + defaultTransform + "px)";
        }
        var prev = document.getElementById("prev")
        prev.addEventListener("click", goPrev);
    });

    
    const [blur, setBlur] = useState(0);


    const [current, setCurrent] = useState(0);
    const length = element.images.data.length;

    function renderImageSlider(){       
        /*
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };
        */

        

        return (
            /* ######OPTION 1 ########
            <div className="imageSlider-container">
            
            <div className="slider">
                <h2 className="caption">{(element.caption != null || element.caption != "") ? element.caption : ""}</h2>
                {element.images.data.map((image, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (  
                            <Image
                                    image={image}
                                    key={image.id}
                                    className="slider_image"
                                    src = {process.env.IMAGES_STRAPI_URL + image.attributes.url}
                                    alt = "image"
                                    width={(image.attributes.width == 1920) ? "1920" : "1000"}
                                    height={(image.attributes.height == 852) ? "852" : "600"}
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
            <a href={(element.link == null) ? "" : element.link.url}>{(element.link == null) ? "" : element.link.caption}</a>
            </div>
            */
            
            /*#######OPTION 2#############
            <>
            <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                {element.images.data.map((image, index) => {
                return (
                        <div class="inline-block px-3">
                            <div class="w-72 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <Image
                                    image={image}
                                    key={image.id}
                                    src = {process.env.IMAGES_STRAPI_URL + image.attributes.url}
                                    alt = "image"
                                    layout="responsive"
                                    width="288px"
                                    height="256px"
                            />
                            </div>
                        </div>
                );
                })}
                </div>
                </div>
            </>
            */

            <>
                <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    <div class="w-full relative flex items-center justify-center">
                        <button aria-label="slide backward" class="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg class="text-white-600" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                        <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                            
                                {element.images.data.map((image, index) => {
                                    return (
                                            
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">  
                                                <Image
                                                        className="object-center w-full"
                                                        image={image}
                                                        key={image.id}
                                                        src = {process.env.IMAGES_STRAPI_URL + image.attributes.url}
                                                        alt = "image"
                                                        
                                                        width="500"
                                                        height="300"
                                                />
                                        </div>
                                            
                                    );
                                })}
                            
                            
                        </div>
                        </div>
                        <button aria-label="slide forward" class="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                    </div>
                </div>
            </>


        );
    }

    return(
        <>
            <div>
                {renderImageSlider()}
            </div>
        </>
    );

}

export default ImageSlider;