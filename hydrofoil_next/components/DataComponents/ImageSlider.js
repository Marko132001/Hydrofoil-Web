import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


function ImageSlider( {element} ){
/*

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
*/


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? element.images.data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
    const isLastSlide = currentIndex === element.images.data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    };


    function renderImageSlider(){       

    
        return (
            <>
            <div className="text-center mt-12">
                <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">{element.caption}</h1>
            </div>
            <div className='max-w-[800px] h-[480px] w-full m-auto py-16 px-4 relative group'>
                <div
                    style={{ backgroundImage: `url(${process.env.IMAGES_STRAPI_URL + element.images.data[currentIndex].attributes.url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {element.images.data.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                    ))}
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