import React from 'react';
import Image from 'next/image';

function ImageAndCaption( {element} ) {
    
    if(element.imageComponent[0].name == null || element.imageComponent[0].name == ""){
    return (

        <>
            <h1 className="about-title">{element.title}</h1>
            <div className="allElements">
                
                {element.imageComponent.map((item, index) => {

                    return(
                        <a href={item.link} key={index}>
                            <div className="imageAndCaption">
                                <div className="image">
                                    <Image src={process.env.IMAGES_STRAPI_URL + item.image.data.attributes.url} 
                                    width={(item.image.data.attributes.width == null) ? "392" : item.image.data.attributes.width} 
                                    height={(item.image.data.attributes.height == null) ? "30" : item.image.data.attributes.height} 
                                    alt="image"  
                                    />
                                </div>
                                <h3 className="name">{item.name}</h3>    
                                <p className="description">{item.description}</p>
                            </div>
                        </a>
                    );

                })}

            </div>
        </>
);
        }
        else{
        return(
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">{element.title}</h1>
                
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {element.imageComponent.map((item, index) => {
                        
                        return(
                            <div key={index} className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                                
                                <Image
                                    className="object-cover w-32 h-32 rounded-full" 
                                    src={process.env.IMAGES_STRAPI_URL + item.image.data.attributes.url} 
                                    width="128" 
                                    height="128" 
                                    alt="image"  
                                />
                                <h1 className="mt-4 text-2xl text-center font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{item.name}</h1>
                                
                                <p className="mt-2 text-center text-gray-500 dark:text-gray-300 group-hover:text-gray-300">{item.description}</p>
                            </div>
                        ); 

                    })}
                </div>
            </div>
        </section>
    );
    }
}

export default ImageAndCaption