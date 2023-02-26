import React, { useEffect } from "react";
import Image from 'next/image';

function CountingAnimation( {element} ){

        useEffect(() => {

            const counters = document.querySelectorAll('#counter');

            counters.forEach((counter) => {

                counter.innerText = '0';
        
                const updateCounter = () => {
                    const target = counter.getAttribute('data-target');
                    const c = +counter.innerText;
        
                    const increment = target / 200;
        
                    if(c < target){
                        counter.innerText = `${Math.ceil(c + increment)}`;
                        setTimeout(updateCounter, 50);
                    }
                };
    
                updateCounter();
            });

          }, []);  


    return(
        <section className="mb-32 mt-32 text-gray-800 text-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-0 items-center">
            {element.CountElement.map((item, index) => {
                
                return(                   
                      <div key={index} className="mb-12 lg:mb-0 relative">

                        <Image
                            className="w-12 h-12 mx-auto mb-6"
                            src = {process.env.IMAGES_STRAPI_URL + item.logo.data.attributes.url}
                            alt = "image"
                            width="48px"
                            height="48px"
                            />
                        <h5 id="counter" data-target={ `${item.numbers}` } className="text-lg font-medium text-blue-600 font-bold mb-4"></h5>
                        <h6 className="font-medium text-gray-500">{item.description}</h6>
                        <hr className="absolute right-0 top-0 w-0.5 bg-gray-200 h-full hidden lg:block" />
                      </div>
                      
                );

            })}
            </div>
        </section>

    );


}

export default CountingAnimation;